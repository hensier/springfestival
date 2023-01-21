## 新春烟火发射器 v2.0

最新版网页链接：<https://hensier.github.io/springfestival/>

### 更新日志

<details><summary>v2.0 2023.1.21 <a href="https://hensier.github.io/releases/springfestival/v2.0/">网页</a> | <a href="https://github.com/hensier/springfestival/releases/tag/v2.0">归档</a></summary>

1. 新增/优化的内容

    - 添加了 copyright 信息。
    - 优化了【设置】界面：
        - 增加了提示按钮。
        - 略微修改了每个设置选项的提示信息。
    - 优化了处于暂停状态下的文字渲染：
        - 打开【设置】界面时，更改文字的不透明度并停止渲染；
        - 按下暂停键后，文字停止渲染；
        - 增加了空格作为暂停的快捷键。
        - 暂停状态下倒计时不再持续工作。
    - 修改了祝福语。
    - 默认关闭“同时放更多的烟花”的功能，但在新年前30秒会开启，随后自动关闭。

2. 修复的 bug

    - 第一页的烟花引入部分的点击面积过大。
    - 文字渲染过程中会出现“<”字符。
    - 倒计时显示“0天”。
    - 文字渲染开头会出现光标。
    - 手机端字体大小不适应于屏幕。
    - 烟花会提前显示。

</details>

<details><summary>v1.1.1 2023.1.4 <a href="https://hensier.github.io/releases/springfestival/v1.1.1/">网页</a> | <a href="https://github.com/hensier/springfestival/releases/tag/v1.1.1">归档</a></summary>

- 优化了日期和倒计时的显示：
    - 腊月时，将显示当日对应的农历。例如 2023 年 1 月 4 日将在括号中附加“壬寅年腊月十三”。
    - 倒计时中的“时”改为“小时”、“分”改为“分钟”。
    - 当倒计时某一项的值为 0 时，这一项将不再输出。例如“还剩 0 时 0 分 1 秒”将变为“还剩 1 秒”。

</details>

<details><summary>v1.1 2023.1.2 <a href="https://hensier.github.io/releases/springfestival/v1.1/">网页</a> | <a href="https://github.com/hensier/springfestival/releases/tag/v1.1">归档</a></summary>

- 引入了 [NianBroken/Firework_Simulator](https://github.com/NianBroken/Firework_Simulator/tree/ac5644aef4aecccbe1ece8d9f5373f63dc6e6978) 的烟火调节功能。
- 删去了之前引自 [corestudi0/newyear](https://github.com/corestudi0/corestudi0.github.io/tree/d51966ce536e14c6c422f8e6587125911c7e52fc/newyear) 的祝福文案，文案处暂时留白。
- 添加了网页图标。

</details>

v1.0 2023.1.1 <a href="https://hensier.github.io/releases/springfestival/v1.0/">网页</a> | <a href="https://github.com/hensier/springfestival/releases/tag/v1.0">归档</a></summary>

### 致谢

本作品的逐字渲染功能和爆竹图片引入部分参考了 [corestudi0/newyear](https://github.com/corestudi0/corestudi0.github.io/tree/d51966ce536e14c6c422f8e6587125911c7e52fc/newyear) 的代码片段。

烟火部分引入了 [NianBroken/Firework_Simulator](https://github.com/NianBroken/Firework_Simulator/tree/ac5644aef4aecccbe1ece8d9f5373f63dc6e6978) 的实现。