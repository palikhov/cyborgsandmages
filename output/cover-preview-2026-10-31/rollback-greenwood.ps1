$ErrorActionPreference = 'Stop'
$repo = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
$names = @(
    'ed-greenwood-a-new-road-to-lichdom.png',
    'ed-greenwood-forgotten-mage-of-the-forgotten-realms.png',
    'ed-greenwood-how-to-tell-a-beholder-where-to-go.png',
    'ed-greenwood-the-floating-mask-of-doom.png',
    'ed-greenwood-when-the-mask-smiles.png',
    'ed-greenwood-the-ladies-three.png',
    'ed-greenwood-lost-lore-of-the-realms-72.png',
    'ed-greenwood-lost-lore-of-the-realms-75.png',
    'ed-greenwood-lost-lore-of-the-realms-76.png'
)
foreach ($name in $names) {
    if (!(Test-Path -LiteralPath (Join-Path $PSScriptRoot ('backups/' + $name)))) { throw "Missing backup: $name" }
}
foreach ($name in $names) {
    Copy-Item -LiteralPath (Join-Path $PSScriptRoot ('backups/' + $name)) -Destination (Join-Path $repo ('src/assets/covers/' + $name))
    Write-Output "Restored: $name"
}
