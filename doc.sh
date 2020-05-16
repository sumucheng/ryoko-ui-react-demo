#!/bin/env bash
npm run doc
git branch gh-pages
git push origin gh-pages:gh-pages
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m "update doc"
git push --set-upstream origin gh-pages