#!/usr/bin/env sh

# 確保腳本拋出遇到的錯誤
set -e

# 生成靜態文件
npm run blog:build

# 進入生成的資料夾
cd blog/.vuepress/dist

git init
git add -a
git commit -m 'deploy'

git push -f git@github.com:Ayajiro/Ayajiro.github.io.git master
cd -