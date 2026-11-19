# Build the static site and upload it to Hostinger over SSH.
# Uses the deploy key ~/.ssh/hostinger_portfolio when present; otherwise SSH asks for the password.
#
#   powershell -ExecutionPolicy Bypass -File scripts/deploy-hostinger.ps1

param(
  [string]$Domain = 'windy-lime-marten-09.hostingersite.com',
  [string]$User = 'u268537024',
  [string]$HostName = '145.223.37.156',
  [int]$Port = 65002
)

$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host "Building for https://$Domain ..."
$env:ASTRO_SITE = "https://$Domain"
npm run build
if ($LASTEXITCODE -ne 0) { throw 'Build failed' }

$remoteDir = "domains/$Domain/public_html"
# Replace the site files in public_html (keeps .htaccess and other dotfiles), then unpack the new build.
$remote = "set -e; mkdir -p $remoteDir; cd $remoteDir; find . -mindepth 1 -maxdepth 1 ! -name '.*' -exec rm -rf {} +; tar -xzf -; echo 'Deployed to https://$Domain'"

Write-Host "Uploading dist/ to $User@${HostName}:$remoteDir ..."
# Pipe through cmd so the binary tar stream is not mangled by PowerShell 5.1.
$key = Join-Path $HOME '.ssh\hostinger_portfolio'
$keyArgs = if (Test-Path $key) { "-i `"$key`" -o IdentitiesOnly=yes" } else { '' }
cmd /c "tar -C dist -czf - . | ssh $keyArgs -p $Port $User@$HostName `"$remote`""
if ($LASTEXITCODE -ne 0) { throw 'Upload failed' }
