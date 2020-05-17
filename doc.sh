#!/bin/env bash

npm run doc

cd doc

git init
git add -A
git commit -m 'update doc'

git push -f git@github.com:sumucheng/ryoko-ui-react-doc.git master:gh-pages

cd -