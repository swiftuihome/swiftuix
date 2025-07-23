
# 🎞️ SwiftUI 动画指南

> 本文是 SwiftUI 系列教程的第三篇，带你了解如何使用 SwiftUI 构建流畅而自然的动画效果。

## ✨ 什么是 SwiftUI 动画？

SwiftUI 提供了非常强大的动画系统，它将动画与状态变化自动关联，只需少量代码就能实现丰富的动画效果。你只需要告诉系统“当状态变化时需要动画”，其余由 SwiftUI 负责完成。

## ⚙️ 常用动画类型

| 动画类型     | 用法示例                 | 特点说明               |
| ------------ | ------------------------ | ---------------------- |
| 默认动画     | `.animation(.default)`   | 系统默认动画曲线       |
| 缓入动画     | `.animation(.easeIn)`    | 慢慢开始，快速结束     |
| 缓出动画     | `.animation(.easeOut)`   | 快速开始，慢慢结束     |
| 缓入缓出动画 | `.animation(.easeInOut)` | 平滑过渡               |
| 弹性动画     | `.animation(.spring())`  | 类似弹簧反弹的自然效果 |

## 🎬 基础动画示例

以下是一个按钮点击后大小发生变化的动画示例：

```swift
struct ScaleAnimationView: View {
    @State private var scale: CGFloat = 1.0

    var body: some View {
        VStack {
            Button("点击放大") {
                scale += 0.2
            }
            .padding()
            .background(Color.blue)
            .foregroundColor(.white)
            .clipShape(Capsule())

            Rectangle()
                .fill(Color.green)
                .frame(width: 100 * scale, height: 100 * scale)
                .animation(.easeInOut, value: scale)
        }
    }
}
```

## 💥 过渡动画（Transitions）

SwiftUI 的过渡动画可以在视图的插入与移除时添加动画效果：

```swift
struct TransitionView: View {
    @State private var showBox = false

    var body: some View {
        VStack {
            Button("切换视图") {
                withAnimation {
                    showBox.toggle()
                }
            }

            if showBox {
                Rectangle()
                    .fill(Color.red)
                    .frame(width: 100, height: 100)
                    .transition(.slide)
            }
        }
    }
}
```

> 常见的过渡效果有 `.slide`、`.opacity`、`.scale`、自定义组合：`.asymmetric(insertion:removal:)`

## 🧠 自定义动画曲线

你可以使用 `Animation.timingCurve()` 或 `Animation.interpolatingSpring()` 实现自定义动画：

```swift
.animation(.interpolatingSpring(stiffness: 50, damping: 5), value: value)
```

## 🧪 动画调试技巧

- 使用 `.animation(_, value:)` 明确指定监听的状态值
- 使用 `.transaction {}` 自定义动画行为
- 结合 `onAppear` 和 `withAnimation {}` 创建启动动画

## 📚 推荐阅读顺序
1. SwiftUI 入门指南
2. 视图与布局
3. 动画与过渡（本文）
4. 导航与状态管理

## 📌 小结

动画是提升用户体验的重要元素。SwiftUI 将动画与状态变化自然结合，让开发者专注于设计而不是技术细节。掌握 SwiftUI 动画，你就能构建更具生命力的界面。
