---
title: NextJS + NestJS Monorepo 01
date: 2025-1-23
summary: 跟著教學走的筆記。
---
跟著
[All in One NextJS And NestJS Full Authentication Monorepo Project](https://youtu.be/Y9KNU2MnO-o?si=QjLI37bHBjRjoyhC) 進行。

本節目標：

1. 建立Monorepo專案
2. 建立登入頁面
3. 建立後端API
4. 後端串接資料庫
5. 簡單的資料格式驗證
6. 由登入頁面送出資料給後端寫入資料庫


參考資料補充於[NextJS + NestJS Monorepo Note](2025-1-23-playforfun-note)

## 建立 Turborepo

```
npm i turbo -g
```

```
npx create-turbo@latest

where would yoy like to create youre Turborepo?
>> .
```
## 在apps下安裝nestjs工具
```
cd apps

npm i -g @nestjs/cli

nest new api

```
這時執行 `npm run dev` 跑起來的不是nestjs服務
修改package.json指令
```
"start:dev": "nest start --watch"
"dev": "nest start --watch",
```

再次執行 `npm run dev` 發現port已被使用
調整nestjs監聽port
api\src\main.ts
如果port被佔用 需要清除該port


### 安裝Prisma

這一段因為突然來了一個Neon DB，研究了一陣子，有些地方會跟教學不同。

在apps\api下安裝
```
npm i prisma -D

npx prisma init
```

連結Neon postgre資料庫
在Neon申請帳號後，建立資料庫
在apps\api\ .env檔案中，將DATABASE_URL改為Neon dashBoard connect產生的路徑

### 拉取資料庫結構
```
npx prisma db pull
```

因為新建資料庫需要花比較多時間研究，這邊跟教學不同的地方是，使用教學Github上的檔案反向生成資料庫結構，但依然會需要先在Neon資料庫中建立一個Table，之後會蓋掉。

```
npx prisma db push
```

這樣就可以確保資料庫格式和教學相同，減少需要除錯的地方。反過來也可以進入NeonTable看欄位的開法。所以其實可以先寫好schema再Push生成Table。實作上這樣開欄位應該比較合適。

接下來解析schema建立prisma-client

```
npx prisma generate
```

nest 啟用 Prisma 服務
```
nest g s prisma
```
現在可以在src資料夾下看到prisma服務檔案

從這裡取得prisma.service.ts的範例，覆蓋檔案
[Prisma | NestJS - A progressive Node.js framework](https://docs.nestjs.com/recipes/prisma)

### 建立後端API

```
nest g res auth --no-spec
選REST API，不需要CRUD進入點
```

這時會建立auth資料夾，以及controller、module、service等檔案。

在controller檔案中，建立Post指令signup，並呼叫registerUser函式。這時會需要建立dto(資料傳輸對象 data transfer object)。

在auth下手動建立dto資料夾，及creater-user.dto.ts檔案。
安裝class資料驗證相關套件。
```
npm i -D class-validator class-transformer
```

[【Day44】ChatGPT請教教我：NestJS！（三）- Controller & 資料驗證 ！class-validator & class-transformer！ - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10340470)

接著在main.ts中設定驗證流程。
```
 app.useGlobalPipes(
    new ValidationPipe({
        transform:true,
        whitelist:true,
    })
  );
```

然後在authController及authService中建立註冊使用者方法registerUser()

```
 %% controller %%
 registerUser(@Body() CreateUserDto: CreateUserDto) {
    return this.authService.registerUser(CreateUserDto);
  }
  
  %% service %%
  registerUser(createUserDto: CreateUserDto) {

        return 'This action adds a new user';

    }
```
接著再次使用nest res api，建立新的User class
```
nest g res user --no-spec
REST API
generate CRUD
```
刪除User下的dto檔案，並將原本建立的create-user-dto移動過去。
因為使用Prisma，entities資料夾也可刪除。
將userService和userController中的createUserDto換成自己寫的，並且刪除其他方法。
在userService中建立與Prisma的連結（引入prisma），建立函式透過prisma查詢User是否存在（prisma用來查詢的唯一欄位需要設定為@unique）。

需要hash使用者密碼，所以安裝hash工具 `npm i argon2` 。照教學的說法這個套件速度比crypto快。

建立User的步驟：查詢是否存在>不存在建立User>Hash密碼之後給prisma處理

這一段的教學在async await部分很混亂，可以參考github檔案。


### 前端部分

在web資料夾中建立app/auth/layout.tsx及auth/signup/page.tsx
裡面的內容都是貼上的，這時在monorepo中執行npm run dev的話，建立起來的前端頁面會吃不到CSS，因為目前尚未安裝TailwindCss。

因為tailwind 4 才剛出不久，這邊安裝跟教學相同的3.4.17版本。
[Install Tailwind CSS with Next.js - Tailwind CSS](https://v3.tailwindcss.com/docs/guides/nextjs)

```
安裝
npm install -D tailwindcss@3 postcss autoprefixer
產生設定檔案
npx tailwindcss init -p
```
將這段貼到tailwind.config檔案的content中
```
"./app/**/*.{js,ts,jsx,tsx,mdx}",
"./pages/**/*.{js,ts,jsx,tsx,mdx}",
"./components/**/*.{js,ts,jsx,tsx,mdx}",
```
然後依官網教學覆蓋globals.css檔案

接下來要做登入表格，這邊要安裝 shad-cn [Shadcn-ui : 美觀、無障礙、又能 100 % 客製化的「元件合集」 | by Kelly CHI | Medium](https://medium.com/@Kelly_CHI/shadcn-ui-tailwind-components-6fd4f1959147)，

```
在根目錄執行
npx shadcn@canary init -c ./apps/web
```
這時會跳錯表示tsconfig檔案沒有設定import alias
```
"baseUrl": ".",
"paths": {
  "@/*": ["./*"]
}
```

設定後存檔重跑
![[Pasted image 20250202173108.png]]
安裝成功

進到web資料夾安裝按鈕元件，元件檔案會出現在Component目錄之下。
```
npx shadcn@latest add button
npx shadcn@latest add label
npx shadcn@latest add input

```

建立SignupForm元件。需要使用的表格元件都從Compnent中引用。

建立註冊按鈕，在Component下建立新的元件檔案。

接下來在web/lib 建立auth.ts和type.ts 做登入的資料驗證。
安裝zod套件，這邊主要做幾件事：
1. 每個資料格式的限制與提示訊息設定，使用Zod
2. 串接後端註冊API
3. 設定.env檔案（NextJS需要帶有NEXT前綴）
成功打API後就會跳轉到404頁面，並且可以透過 npx prisma studio指令叫出資料庫後臺，檢查是否成功寫入資料庫。

到這個階段，已經有註冊頁面可送出資料給後端寫入資料庫，並且包含簡易的資料驗證。
