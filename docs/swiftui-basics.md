# 🧭 SwiftUI 入门指南

> 本文是 SwiftUI 系列教程的第一篇，帮助你快速了解 SwiftUI 的基础语法与开发方式。

## 💡 什么是 SwiftUI？

SwiftUI 是 Apple 在 2019 年 WWDC 推出的声明式 UI 框架，用于构建跨平台（iOS、macOS、watchOS、tvOS）用户界面。它使用 Swift 语言，并与 UIKit、Combine 等技术紧密集成。

## 🧱 SwiftUI 与 UIKit 的区别

| 特性             | UIKit                  | SwiftUI                   |
|------------------|-------------------------|----------------------------|
| 编程方式         | 命令式（Imperative）    | 声明式（Declarative）     |
| 预览支持         | 无内建预览              | 实时预览支持               |
| 状态管理         | 手动处理（如通知中心） | 使用 @State / @Binding 等 |
| 多平台支持       | 单独代码适配            | 一套代码，多平台复用       |


## 🛠️ 第一个 SwiftUI 页面

下面是一个最简单的 SwiftUI 示例：

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Hello, SwiftUI!")
            .font(.title)
            .padding()
    }
}
```

分析：
> Text("...") 是一个文本组件
>
> .font() 和 .padding() 是修饰符（modifier）
>
> 所有视图必须放在 View 协议的 body 中返回

## 🔄 状态与交互

使用 @State 实现简单的交互：

```swift
struct CounterView: View {
    @State private var count = 0

    var body: some View {
        VStack {
            Text("计数：\(count)")
            Button("加一") {
                count += 1
            }
        }
    }
}
```

## 📚 推荐阅读顺序
1. SwiftUI 入门指南
2. 视图与布局
3. 动画与过渡

## 📌 小结

SwiftUI 是构建现代 Apple 平台应用的强大工具。通过声明式编程方式，它让 UI 开发更加直观与高效。后续我们将深入讲解视图组合、导航、列表、动画等高级用法。