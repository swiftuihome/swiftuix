import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SwiftUIX",
  description: "专注于分享 SwiftUI 实战技巧与开发经验",
  head: [['link', { rel: 'icon', href: './logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    // ✅ 页面右侧目录（锚点导航）
    outline: {
      label: '本页内容' // 原为 'On this page'
    },

    // ✅ 页面底部上下页导航
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // ✅ 返回顶部按钮（如果启用）
    returnToTopLabel: '返回顶部',
    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/swiftui-basics' }
    ],

    sidebar: [
      {
        text: '基础教程',
        items: [
          { text: 'SwiftUI 基础入门', link: '/swiftui-basics' },
          { text: 'SwiftUI 动画指南', link: '/swiftui-animation' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/swiftuihome' }
    ]
  }
})
