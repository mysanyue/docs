# cname.sh

# 确保脚本抛出遇到的错误
set -e

# 如果是发布到自定义域名
echo 'www.pro.58taoweb.com' > docs/.vuepress/dist/CNAME
