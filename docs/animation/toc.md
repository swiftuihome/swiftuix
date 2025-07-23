# 《SwiftUI动画核心技术与实践》

## 第1章 隐式动画
1.1_使用 .animation() 修饰符
1.2_配置动画曲线- .easeInOut, .linear, .spring
1.3_设置动画时长- duration参数
1.4_应用 .animation() 到容器视图
1.5_使用 .animation(nil) 禁用动画

## 第2章 显式动画
2.1_使用 withAnimation 代码块
2.2_在 withAnimation 中改变状态
2.3_为 withAnimation 指定动画曲线和时长
2.4_嵌套 withAnimation 代码块
2.5_显式动画与隐式动画的交互

## 第3章 动画与状态绑定
3.1_使用 $binding.animation()
3.2_为 Toggle、Slider 等控件添加动画
3.3_绑定动画的特定参数配置
3.4_理解绑定动画的执行时机

## 第4章 转场（Transitions）
4.1_使用 .transition() 修饰符
4.2_内置转场效果- .opacity, .slide, .scale
4.3_组合多个转场效果
4.4_使用 .asymmetric 创建非对称转场
4.5_根据状态切换视图并触发转场

## 第5章 Animatable 协议与 VectorArithmetic
5.1_理解 Animatable 协议
5.2_实现 animatableData 计算属性
5.3_使用 VectorArithmetic 协议
5.4_为自定义数据类型添加动画能力
5.5_动画化非数值属性 (例如颜色)

## 第6章 GeometryEffect
6.1_GeometryEffect 协议基础
6.2_实现 effectValue(size-) 方法
6.3_创建自定义视图变换动画
6.4_SkewEffect- 实现倾斜效果
6.5_FollowPathEffect- 实现路径跟随动画

## 第7章 内置动画曲线
7.1_线性动画 .linear
7.2_缓入缓出 .easeInOut
7.3_缓入 .easeIn 与 缓出 .easeOut
7.4_自定义缓动曲线 timingCurve

## 第8章 弹簧动画（Spring）
8.1_基础弹簧动画 .spring()
8.2_交互式弹簧 .interactiveSpring()
8.3_配置弹簧参数- response, dampingFraction
8.4_配置弹簧参数- blendDuration
8.5_创建果冻效果

## 第9章 相位动画师（Phase Animator）
9.1_PhaseAnimator 视图基础
9.2_定义动画阶段（Phases）
9.3_在 content 闭包中应用视图修饰符
9.4_在 animation 闭包中配置动画
9.5_通过 trigger 触发相位动画

## 第10章 关键帧动画（Keyframe Animator）
10.1_KeyframeAnimator 视图基础
10.2_定义关键帧轨道 KeyframeTrack
10.3_使用 LinearKeyframe
10.4_使用 SpringKeyframe
10.5_使用 CubicKeyframe

## 第11章 形状（Shape）动画
11.1_动画化路径 Path
11.2_使用 animatableData 动画化自定义形状
11.3_Trim 修剪动画- strokeStart, strokeEnd
11.4_实现路径绘制动画效果
11.5_形状变形动画

## 第12章 MatchedGeometryEffect
12.1_MatchedGeometryEffect 概念与应用
12.2_定义命名空间 @Namespace
12.3_在不同视图间同步几何属性
12.4_实现“魔法移动”效果
12.5_处理源视图和目标视图的切换
13.1_使用 TimelineView 创建定时更新

## 第13章 Canvas 与 TimelineView
13.2_TimelineView 的 schedule 参数
13.3_在 Canvas 中绘制动态图形
13.4_结合 TimelineView 和 Canvas 实现复杂动画
13.5_动画化 Canvas 中的符号 (Symbols)

## 第14章 常见动画案例
14.1_实现加载指示器动画
14.2_创建卡片翻转效果
14.3_构建视差滚动效果
14.4_制作可交互的拖拽动画
14.5_实现心跳动画效果

## 第15章 性能考量与调试
15.1_识别导致性能问题的动画
15.2_使用 Instruments 分析动画性能
15.3_最小化视图重绘范围
15.4_将动画计算移出主线程
15.5_利用 .drawingGroup() 优化渲染

## 第16章 与UIKit/AppKit动画集成
16.1_在 UIViewRepresentable 中使用 UIView 动画
16.2_在 NSViewRepresentable 中使用 Core Animation
16.3_通过 Coordinator 同步状态
16.4_从 SwiftUI 触发 UIKit 动画