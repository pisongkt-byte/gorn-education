#!/bin/bash
# Deploy the kids' learning site to GitHub Pages.
#   index.html  = profile picker (Gorn / Gwang) — maintained in this folder
#   gorn.html   <- ~/GKTos/learning/gorn/quiz/asmo-english.html  (+ quiz-bank.js)
#   gwang.html  <- ~/GKTos/learning/gwang/quiz/gwang-app.html
# Copies the latest app files, bumps the service-worker cache version, commits, pushes.
# Run whenever any app changes or teacher adds a new question set.
set -e
GORN="$HOME/GKTos/learning/gorn/quiz"
GWANG="$HOME/GKTos/learning/gwang/quiz"
SITE="$HOME/sites/gorn-education"
cd "$SITE"

cp "$GORN/asmo-english.html" gorn.html
cp "$GORN/quiz-bank.js" quiz-bank.js
cp "$GWANG/gwang-app.html" gwang.html

# bump SW cache version -> forces clients to refetch
STAMP=$(date +%Y%m%d%H%M%S)
sed -i '' -E "s/const CACHE = \"gorn-english-[^\"]*\"/const CACHE = \"gorn-english-$STAMP\"/" sw.js

git add -A
git commit -m "deploy: update apps + bump cache ($STAMP)" || { echo "nothing to deploy"; exit 0; }
git push
echo "✅ deployed. Live in ~1 min at the Pages URL."
