#!/usr/bin/env bash
# Génère les images webp filigranées du site à partir des sources.
#
#   ./scripts/watermark.sh photo  <source> <destination.webp>
#   ./scripts/watermark.sh illus  <source> <destination.webp>
#
# photo : « Louise Leroux » blanc à 10 %, centré (galeries Lowesight et argentique)
# illus : « Louise Leroux » noir à 10 %, répété en diagonale (galeries d'illustrations)
#
# Dépendances : imagemagick, webp (brew install imagemagick webp)

set -euo pipefail

MODE="${1:?mode attendu : photo | illus}"
SRC="${2:?fichier source attendu}"
DST="${3:?fichier de destination attendu}"

FONT="/System/Library/Fonts/Supplemental/Arial.ttf"
TEXT="Louise Leroux"
MAX_SIZE=1200
QUALITY=80

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

case "$MODE" in
  photo)
    magick "$SRC" -auto-orient -resize "${MAX_SIZE}x${MAX_SIZE}>" \
      -font "$FONT" -pointsize 32 -fill "rgba(255,255,255,0.10)" \
      -gravity center -annotate +0+0 "$TEXT" \
      -alpha off "$TMP/out.png"
    ;;
  illus)
    magick "$SRC" -auto-orient -resize "${MAX_SIZE}x${MAX_SIZE}>" "$TMP/base.png"
    read -r WIDTH HEIGHT < <(magick identify -format "%w %h\n" "$TMP/base.png")
    magick -background none -fill "rgba(0,0,0,0.10)" -font "$FONT" -pointsize 21 \
      label:"$TEXT" -rotate 22 -trim +repage "$TMP/text.png"
    magick -size 800x400 xc:none -draw "image Over 334,168 0,0 '$TMP/text.png'" "$TMP/tile.png"
    magick -size "${WIDTH}x${HEIGHT}" "tile:$TMP/tile.png" "$TMP/layer.png"
    magick "$TMP/base.png" "$TMP/layer.png" -composite -alpha off "$TMP/out.png"
    ;;
  *)
    echo "mode inconnu : $MODE (attendu : photo | illus)" >&2
    exit 1
    ;;
esac

cwebp -quiet -q "$QUALITY" -m 6 "$TMP/out.png" -o "$DST"
