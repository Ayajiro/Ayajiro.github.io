---
title: Vuepress component 改寫
date: 2020-12-15
tags:
 - Vue.js
---

自己搜尋Vue.js方法改寫成component的時候遇到一些問題，因爲對Vue.js概念還不是很清楚，做個筆記。

```html
<div id="counter">
  Counter: {{ counter }}
</div>
```

Vue.js

```js
const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}

Vue.createApp(Counter).mount('#counter')

```


Vuepress

```js
export default {
  data() {
    return {
      counter: 0
    }
  }
}
```
result:

<learn_vue-VueCounter/> 

reference:
<br>

[What is Vue.js?](https://v3.vuejs.org/guide/introduction.html#declarative-rendering)
<br>

[在 Markdown 中 使用 Vue](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6)

註：誒Markdown外掛要再另外安裝...[Markdown
#](https://v1.vuepress.vuejs.org/config/#markdown-toc)