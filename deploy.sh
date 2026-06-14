#!/bin/bash
# Deploy the Gorn English app to GitHub Pages.
# Copies the latest app files from the GKTos workspace, bumps the service-worker
# cache version (so tablets pick up the update), commits, and pushes.
#
# Run this whenever teacher adds a new set to quiz-bank.js, or the app changes.
set -e
SRC="$HOME/GKTos/learning/gorn/quiz"
SITE="$HOME/sites/gorn-education"
cd "$SITE"

cp "$SRC/asmo-english.html" index.html
cp "$SRC/quiz-bank.js" quiz-bank.js

# bump SW cache version -> forces clients to refetch
STAMP=$(date +%Y%m%d%H%M%S)
sed -i '' -E "s/const CACHE = \"gorn-english-[^\"]*\"/const CACHE = \"gorn-english-$STAMP\"/" sw.js

git add -A
git commit -m "deploy: update app + bump cache ($STAMP)" || { echo "nothing to deploy"; exit 0; }
git push
echo "✅ deployed. Live in ~1 min at the Pages URL."
