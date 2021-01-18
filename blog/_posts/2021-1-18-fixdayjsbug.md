---
title: fix dayjs bug
date: 2021-1-18
tags:
  - vuepress
  - GitHub Action
summary: 問題終於被解決了。看來是連 webpack 那邊也出了問題。
---

Action 出問題的狀況可以看[上篇](2021-1-4-dayjsisnotafuntion.md)。

今天上去看[這支 PR ](https://github.com/vuepress/vuepress-plugin-blog/pull/93)，昨天關起來了。

看起來是 dayjs 和 webpack 兩邊都出了點問題，不過都被解決了。

vuepress-plugin-blog 這邊主要的處理方式是[更新使用的 dyajs 版本](https://github.com/vuepress/vuepress-plugin-blog/pull/94/files)。

處理之後 Action 就沒問題了。