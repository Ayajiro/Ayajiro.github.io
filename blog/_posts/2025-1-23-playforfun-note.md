---
title: NextJS + NestJS Monorepo Note
date: 2025-1-23
summary: 一些學習過程的參考資料。
---
一些教學中有用到的工具及遇到教學中沒出現的問題解法。

### Monorepo Tool

Nx 優於 Turborepo  [[Nx vs Turborepo，怎麼在大型 Monorepo 優化開發體驗？ | by C.T. Lin | Dcard Tech Blog | Medium](https://medium.com/dcardlab/nx-vs-turborepo-%E6%80%8E%E9%BA%BC%E5%9C%A8%E5%A4%A7%E5%9E%8B-monorepo-%E5%84%AA%E5%8C%96%E9%96%8B%E7%99%BC%E9%AB%94%E9%A9%97-3354ff78a0cf)]

先練習Turborepo 之後再換掉也行

### Port被佔用的情況
```
%% 列出所有監聽中的port %%
netstat -aon | find /i "listening"

%% 指定搜尋被佔用的port %%
netstat -ano | findstr :3000

%% 依剛才搜尋port取得PID 清除指定PID %%
taskkill /F /PID [PID]
```

也可以安裝 kill-port工具刪除指定port
```
npx kill-port 3000 3001 8000
```


## Prisma

Prisma是一套資料庫工具，提供好上手的資料庫串接功能，目前可銜接PostgreSQL，MySQL，SQLite。

參考
[iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/m/articles/10250424)
[iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/m/articles/10249920)

### Class-Validator

[【Day44】ChatGPT請教教我：NestJS！（三）- Controller & 資料驗證 ！class-validator & class-transformer！ - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10340470)

### TailWind CSS
[Install Tailwind CSS with Next.js - Tailwind CSS](https://v3.tailwindcss.com/docs/guides/nextjs)

### Shad-cn
[Shadcn-ui : 美觀、無障礙、又能 100 % 客製化的「元件合集」 | by Kelly CHI | Medium](https://medium.com/@Kelly_CHI/shadcn-ui-tailwind-components-6fd4f1959147)