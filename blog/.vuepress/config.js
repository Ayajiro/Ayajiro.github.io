// setting
module.exports = {
    title: "Ayajiro",
    description: "Web development, Frontend, Javascript",
    theme: "@vuepress/blog",
    plugins: [
      [
        "./plugins/plugin-blog"
      ]
    ],
    themeConfig: {
        nav: [
            {
              text: "日文文法指南",
              link: "https://ayajiro.github.io/jpgramma_zhtw/"
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
              text: "遊記",
              link: "https://ayajiro.github.io/oldblog/"
            }
            
          ],
        directories: [
            {
                id:"index",
                title:"首頁",
                dirname:"/",
                path:"",
            },
            {
                id:"post",
                dirname:"_posts",
                title:"文章",
                path:"/post/",
                itemPermalink: "/:year/:month/:day/:slug"
            }
        ],
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