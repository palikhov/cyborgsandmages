# Download public published posts and pages; never writes to src/content.
param(
    [ValidatePattern('^[a-z0-9-]+\.wordpress\.com$')]
    [string]$Site = 'adventurersleague.wordpress.com',
    [string]$ReportDirectory = 'reports/wordpress-archive',
    [switch]$Resume
)
$ErrorActionPreference = 'Stop'
$archiveRoot = Join-Path (Join-Path $PSScriptRoot "../$ReportDirectory") 'raw'
New-Item -ItemType Directory -Force -Path $archiveRoot | Out-Null
$archiveManifest = @()
$archiveJobs = @()
foreach ($archiveType in @('post', 'page')) {
    $archiveMetadata = Invoke-RestMethod -Uri "https://public-api.wordpress.com/rest/v1.1/sites/$Site/posts/?number=1&type=$archiveType&status=publish&fields=ID" -TimeoutSec 90 -MaximumRetryCount 2 -RetryIntervalSec 3
    $archiveExpected = $archiveMetadata.found
    $archivePages = [Math]::Max(1, [Math]::Ceiling($archiveExpected / 100))
    for ($archivePage = 1; $archivePage -le $archivePages; $archivePage++) {
        $archivePageFile = Join-Path $archiveRoot "$archiveType-$archivePage.json"
        if ($Resume -and (Test-Path -LiteralPath $archivePageFile)) { continue }
        $archiveJobs += @{ type = $archiveType; page = $archivePage; file = $archivePageFile; found = $archiveExpected }
    }
    $archiveManifest += @{ type = $archiveType; found = $archiveExpected; downloaded = $archiveExpected; pages = $archivePages }
}
# Read independent API pages with bounded concurrency. Full content is retained.
$archiveJobs | ForEach-Object -Parallel {
    $ErrorActionPreference = 'Stop'
    $job = $_
    $uri = "https://public-api.wordpress.com/rest/v1.1/sites/$using:Site/posts/?number=100&type=$($job.type)&status=publish&order=ASC&order_by=ID&page=$($job.page)&fields=ID,title,URL,date,modified,slug,content,type"
    $response = Invoke-RestMethod -Uri $uri -TimeoutSec 90 -MaximumRetryCount 2 -RetryIntervalSec 3
    if ($response.found -ne $job.found) { throw 'Archive changed during download; retry.' }
    $response | ConvertTo-Json -Depth 100 | Set-Content -LiteralPath $job.file -Encoding utf8
    Write-Output "$($job.type) page $($job.page): $(@($response.posts).Count) records"
} -ThrottleLimit 4
# Only publish a manifest when every page and every unique ID has been verified.
foreach ($archiveCollection in $archiveManifest) {
    $archiveIds = [System.Collections.Generic.HashSet[long]]::new()
    for ($archivePage = 1; $archivePage -le $archiveCollection.pages; $archivePage++) {
        $archivePageFile = Join-Path $archiveRoot "$($archiveCollection.type)-$archivePage.json"
        $archiveResponse = Get-Content -LiteralPath $archivePageFile -Raw | ConvertFrom-Json
        if ($archiveResponse.found -ne $archiveCollection.found) { throw 'Archive count mismatch.' }
        foreach ($archivePost in $archiveResponse.posts) {
            if (-not $archiveIds.Add($archivePost.ID)) { throw "Duplicate API ID: $($archivePost.ID)" }
        }
    }
    if ($archiveIds.Count -ne $archiveCollection.found) { throw 'Incomplete archive download.' }
    Write-Output "Verified $($archiveCollection.type): $($archiveIds.Count) records"
}
@{ site = $Site; fetchedAt = [DateTime]::UtcNow.ToString('o'); collections = $archiveManifest } |
    ConvertTo-Json -Depth 10 | Set-Content -LiteralPath (Join-Path $archiveRoot 'manifest.json') -Encoding utf8
