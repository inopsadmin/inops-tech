# Creates a small looping animated tick GIF for Business impact bullets (System.Drawing, Windows).
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$outDir = Join-Path $PSScriptRoot "..\public"
$outPath = Join-Path $outDir "impact-bullet-tick.gif"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$w = 64
$h = 64
$frames = 10
$frameMs = 80

$list = New-Object System.Collections.Generic.List[System.Drawing.Bitmap]

for ($f = 0; $f -lt $frames; $f++) {
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.Clear([System.Drawing.Color]::Transparent)

  $ringPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(200, 15, 23, 42), 2.2)
  $g.DrawEllipse($ringPen, 10, 10, 44, 44)
  $ringPen.Dispose()

  $t = [double]$f / [Math]::Max(1, ($frames - 1))
  $pulse = 0.65 + 0.35 * [Math]::Sin($t * [Math]::PI)
  $alpha = [int](220 * $pulse)
  if ($alpha -lt 90) { $alpha = 90 }
  $tickPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb($alpha, 45, 212, 191)), 4.2
  $tickPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $tickPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

  $g.DrawLine($tickPen, 20, 34, 30, 44)
  $g.DrawLine($tickPen, 30, 44, 48, 24)
  $tickPen.Dispose()
  $g.Dispose()

  $list.Add($bmp)
}

# Save multi-frame GIF via GDI+ quantizer (first save picks GIF; we need animation extension)
# .NET Bitmap.Save to GIF only writes first frame; use encoder params for multi-frame.
$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/gif" }
if (-not $enc) { throw "GIF encoder not found" }

$ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::SaveFlag,
  [long][System.Drawing.Imaging.EncoderValue]::MultiFrame
)

$list[0].Save($outPath, $enc, $ep)

$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::SaveFlag,
  [long][System.Drawing.Imaging.EncoderValue]::FrameDimensionTime
)
for ($i = 1; $i -lt $list.Count; $i++) {
  $list[0].SaveAdd($list[$i], $ep)
}

$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::SaveFlag,
  [long][System.Drawing.Imaging.EncoderValue]::Flush
)
$list[0].SaveAdd($ep)

foreach ($b in $list) { $b.Dispose() }
$ep.Dispose()

Write-Host "Wrote $outPath"
