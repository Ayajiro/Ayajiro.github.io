---
title: GitHub token 設定
date: 2021-2-2
tags:
  - GitHub
  - Git
summary: 收到一封信，Basic authentication using a password to Git is deprecated and will soon no longer work.
---

收到 GitHub 寄來的信，說到很快的 GitHub 將不再支援密碼驗證，並付上[去年十二月十五號的公告](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)，提醒 2021 年 8 月 12 號之後必須要透過 token 的方式進行驗證。受影響範圍包含：

* 終端機 Git 授權
* 使用 Git 的桌面應用程式（GitHub桌面版不受影響）
* 任何透過密碼提取 GitHub 上 Git 倉庫的應用程式或服務

對企業來說會是蠻大的影響，不過個人用戶的變動還算簡單，只要[申請一隻 token ](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)並且設定在本地端就好了。

本機端設定指令
```sh
$ git config --global github.user USERNAME
$ git config --global github.token TOKEN
```