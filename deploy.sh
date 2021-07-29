#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run docs:build


# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.ms.58taoweb.com' > CNAME

git add -A
git commit -m 'travis ci'

git push -f git@github.com:mysanyue/docs.git master:gh-pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist
