param(
  [Parameter(Mandatory = $true)][string]$InputPath,
  [Parameter(Mandatory = $true)][string]$OutputPath
)

$html = Get-Content -LiteralPath $InputPath -Raw
$startMarker = '<div class="storycontent">'
$start = $html.IndexOf($startMarker, [StringComparison]::OrdinalIgnoreCase)
$end = $html.IndexOf('<small class="metadata">', $start, [StringComparison]::OrdinalIgnoreCase)
if ($start -lt 0 -or $end -lt 0) { throw 'Article body was not found.' }

$text = $html.Substring($start + $startMarker.Length, $end - $start - $startMarker.Length)
$text = [regex]::Replace($text, '(?is)<p\b[^>]*>\s*(?:<em>)?\s*<a\b[^>]*>\s*(?:Campaign Journal|Running the Campaign).*?</p>\s*</div>\s*$', '')
$text = [regex]::Replace($text, '(?is)<iframe\b[^>]*\bsrc=["'']([^"'']+)["''][^>]*>.*?</iframe>', { param($m) "`n`n[Видео]($($m.Groups[1].Value))`n`n" })
$text = [regex]::Replace($text, '(?is)<h2\b[^>]*>(.*?)</h2>', { param($m) "`n`n## $($m.Groups[1].Value)`n`n" })
$text = [regex]::Replace($text, '(?is)<h3\b[^>]*>(.*?)</h3>', { param($m) "`n`n### $($m.Groups[1].Value)`n`n" })
$text = [regex]::Replace($text, '(?is)<blockquote\b[^>]*>(.*?)</blockquote>', {
  param($m)
  $inner = [regex]::Replace($m.Groups[1].Value, '(?is)</?p\b[^>]*>', "`n")
  $inner = [regex]::Replace($inner, "`r?`n+", "`n")
  $quoted = (($inner.Trim() -split "`n") | ForEach-Object { "> $($_.Trim())" }) -join "`n> `n"
  return "`n`n$quoted`n`n"
})
$text = [regex]::Replace($text, '(?is)<li\b[^>]*>(.*?)</li>', { param($m) "`n- $($m.Groups[1].Value)" })
$text = [regex]::Replace($text, '(?is)</?(?:ul|ol)\b[^>]*>', "`n")
$text = [regex]::Replace($text, '(?is)<hr\b[^>]*>', "`n`n---`n`n")
$text = [regex]::Replace($text, '(?is)<a\b[^>]*\bhref=["'']([^"'']+)["''][^>]*>\s*(<img\b[^>]*>)\s*</a>', { param($m) $m.Groups[2].Value })
$text = [regex]::Replace($text, '(?is)<img\b[^>]*\bsrc=["'']([^"'']+)["''][^>]*>', {
  param($m)
  $tag = $m.Value
  $url = $m.Groups[1].Value
  if ($url -match 'spacer|button|logo|avatar|gravatar|patreon|paypal|amazon') { return '' }
  $altMatch = [regex]::Match($tag, '(?is)\balt=["'']([^"'']*)["'']')
  $alt = if ($altMatch.Success -and $altMatch.Groups[1].Value.Trim()) { $altMatch.Groups[1].Value.Trim() } else { 'Иллюстрация' }
  return "`n`n![$alt]($url)`n`n"
})
$text = [regex]::Replace($text, '(?is)<a\b[^>]*\bhref=["'']([^"'']+)["''][^>]*>(.*?)</a>', { param($m) "[$($m.Groups[2].Value)]($($m.Groups[1].Value))" })
$text = [regex]::Replace($text, '(?is)<(?:strong|b)\b[^>]*>(.*?)</(?:strong|b)>', {
  param($m)
  $inner = [regex]::Replace($m.Groups[1].Value, '(?is)<br\s*/?>', '')
  return "**$inner**"
})
$text = [regex]::Replace($text, '(?is)<(?:em|i)\b[^>]*>(.*?)</(?:em|i)>', { param($m) "*$($m.Groups[1].Value)*" })
$text = [regex]::Replace($text, '(?is)<del\b[^>]*>(.*?)</del>', { param($m) "~~$($m.Groups[1].Value)~~" })
$text = [regex]::Replace($text, '(?is)<p\b[^>]*>', "`n`n")
$text = [regex]::Replace($text, '(?is)</p>', "`n`n")
$text = [regex]::Replace($text, '(?is)<br\s*/?>', "`n")
$text = [regex]::Replace($text, '(?is)<[^>]+>', '')
$text = [Net.WebUtility]::HtmlDecode($text)
$text = $text -replace "`r", ''
$text = [regex]::Replace($text, '[ \t]+\n', "`n")
$text = [regex]::Replace($text, "`n{3,}", "`n`n")
$text = $text.Trim()
$text = [regex]::Replace($text, "`n---$", '')
$text = $text.Trim() + "`n"

[IO.File]::WriteAllText($OutputPath, $text, [Text.UTF8Encoding]::new($false))
