---
title: dayjs is not a function
date: 2021-1-4
tags:
  - vuepress
  - GitHub Action
summary: 已經好幾天沒辦法透過 GitHub Action 佈署網頁，想看一下是什麼問題沒想到最後只能土法解決。
---

因爲已經好幾天沒辦法透過 GitHub Action 佈署網頁，今天剛好有空來仔細看一下 Action Log。

Action 跳錯主要問題是 dayjs，我原本以爲是格式問題，不過後來慢慢排除自己可能犯的錯誤之後，大概是 Vuepress 的 Plugin-blog 用到的 dayjs 函式庫有問題。

看了一下[dayjs](https://github.com/iamkun/dayjs/blob/dev/CHANGELOG.md)的 CHANGELOG 跟我自己 Action 有成功的時間對照，應該是 12/27 那支更新有動到什麼所以連帶 Vuepress 也壞了。

看了一下[這支PR](https://github.com/vuepress/vuepress-plugin-blog/pull/93)，自己試了一下沒有什麼感覺，但是本機端沒問題，有可能是 Action 上跑的版本有問題。

最後是拆掉 Action 直接推建好的靜態版本上去。不過本機沒有開 branch，要 rebase 花了一點時間，手動 build 然後推是有點麻煩，但在 Action 修好之前只能先這樣了，之後再建一個環境來看看有沒有辦法幫忙改。