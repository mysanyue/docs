#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m 'travis ci'

git push -f git@github.com:mysanyue/docs.git master:gh-pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist
