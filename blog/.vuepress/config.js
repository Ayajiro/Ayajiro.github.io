module.exports = {
  title: "Ayajiro",
  description: "Web development, Frontend, Javascript, Cat",
  theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: "日文文法指南",
        link: "/jpgramma_zhtw/"
      },
      {
        text: "日常筆記",
        link: "/post/"
      },
      {
        text: "GitHub",
        link: "https://github.com/Ayajiro"
      },
      {
          text: "About",
          link: "/"
      },
      {
          // text: "OldBlog",
          // link: "/oldblog/"
      }
    ],
    directories: [
      {
          id:"index",
          title:"首頁",
          dirname:"/",
          path:"MyIndexPost",
      },
      {
          id:"post",
          dirname:"_posts",
          title:"文章",
          path:"/post/",
          itemPermalink: "/:year/:month/:day/:slug"
      }
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/Ayajiro"
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/oscrx78',
        },
        {
          type: "mail",
          link: "mailto:nakamura.ayajiro@gmail.com"
        },
        {
          type: "youtube",
          link: "https://www.youtube.com/channel/UCt_FBDYnWZJHE2IDgPPW2LQ"
        }
      ],
      copyright: [
        {
          text: "Ayajiro © 2020",
          link: ""
        }
      ]
    },
    smoothScroll: true 
    },
  
  head: [
    ["link", { rel: "icon", href: "/logo.png" }]
  ],
  locales:{
    "/":{
        lang:"zh-TW",
    }
  }
}
