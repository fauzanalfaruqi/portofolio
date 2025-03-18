#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# initialize a new Git repository inside `dist`
git init
git add -A
git commit -m 'deploy'

# create or switch to the `dist` branch and push forcefully
git branch -M dist
git push -f https://github.com/fauzanalfaruqi/fauzanalfaruqi.github.io.git dist

cd ..