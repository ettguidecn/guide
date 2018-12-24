# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git pull git@github.com:ettguidecn/docs.git gh-pages --allow-unrelated-histories
git push -u git@github.com:ettguidecn/docs.git master:gh-pages
