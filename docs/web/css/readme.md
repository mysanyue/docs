---
title: css 基础
---

## 简述 css 盒子模型

![css 盒子模型](/assets/images/box.png)

一个 `css` 盒子从外到内可以分成四个部分: `margin`（外边距），`border` （边框），`padding`（内边距），`content`（内容）。默认情况下，盒子的 `width` 和 `height` 属性只是设置 `content`（内容）的宽和高。

盒子真正的宽应该是: 内容宽度 + 左右填充 + 左右边距 + 左右边框<br>
盒子真正的高应该是: 内容高度 + 上下填充 + 上下边距 + 上下边框<br>
IE盒模型和标准盒模型的区别: 两者的区别在于 `content` 的不同，`IE` 盒模型的 `content` 包括 `border`、`padding`<br>

- 使用 content-box 时: 页面将采用标准模式来解析计算，content-box 也是默认模式
- 使用 border-box 时，页面将采用怪异模式解析计算，怪异模式也称为 IE 模式
- 使用 inherit 时页面将从父元素继承 box-sizing 的值


## css3 新增的特性

**边框:**

  - border-radios 添加圆角边框
  - border-shadow: 给框添加阴影 （水平位移，垂直位移，模糊半径，阴 影尺寸，阴影颜色，insetr（内/外部阴影））
  - border-image: 设置边框图像
  - border-image-source 边框图片的路径
  - border-image-slice 图片边框向内偏移
  - border-image-width 图片边框的宽度
  - border-image-outset 边框图像区域超出边框的量
  - border-image-repeat 图像边框是否平铺（repeat 平铺 round 铺满 stretch 拉伸）

**背景:**

  - background-size 背景图片尺寸
  - background-origin 规定
  - background-position属性相对于什么位置定位
  - background-clip 规定背景的绘制区域（padding-box，border-box， content-box）

**渐变:**

  - linear-gradient（）线性渐变
  - radial-gradient（）径向渐变

**文本效果:**

  - word-break: 定义如何换行
  - word-wrap: 允许长的内容可以自动换行
  - text-overflow: 指定当文本溢出包含它的元素，应该干啥
  - text-shadow: 文字阴影（水平位移，垂直位移，模糊半径，阴影颜色）

**转换:**

  - transform 应用于 2D3D 转换，可以将元素旋转，缩放，移动，倾斜
  - transform-origin 可以更改元素转换的位置，（改变 xyz 轴）
  - transform-style 指定嵌套元素怎么样在三位空间中呈现
  
**2D 转换方法:**

  - rotate 旋转
  - translate（x，y）指定元素在二维空间的位移
  - scale（n） 定义缩放转换 

**3D 转换方法:**

  - perspective（n）为 3D 转换 translate rotate scale

**过渡:**

  - transition-proprety 过渡属性名
  - transition-duration 完成过渡效果需要花费的时间
  - transition-timing-function 指定切换效果的速度
  - transition-delay 指定什么时候开始切换效果
  
**动画: animation**

  - animation-name 为@keyframes 动画名称
  - animation-duration 动画需要花费的时间
  - animation-timing-function 动画如何完成一个周期
  - animation-delay 动画启动前的延迟间隔
  - animation-iteration-count 动画播放次数
  - animation-direction 是否轮流反向播放动画

## 清除浮动的方式有哪些

> 高度塌陷: 当所有的子元素浮动的时候，且父元素没有设置高度，这时 候父元素就会产生高度塌陷。

**清除浮动方式**

1. 给父元素单独定义高度

    优点: 快速简单，代码少<br>
    缺点: 无法进行响应式布局
   
2. 父级定义 overflow: hidden; zoom: 1（针对 ie6 的 兼容）

    优点: 简单快速、代码少，兼容性较高<br>
    缺点: 超出部分被隐藏，布局时 要注意

3. 在浮动元素后面加一个空标签，clear: both; height: 0; overflow: hidden 

    优点: 简单快速、代码少，兼容性较高<br>
    缺点: 增加空标签，不利于页面优化 清除浮动方式

4. 父级定义 overflow: auto

    优点: 简单，代码少，兼容性好<br>
    缺点: 内部宽高超过父级 div 时，会出现滚动条 清除浮动方式

5. 万能清除法:  给塌陷的元素添加伪对象 
    ```css
    .father:after{
      content: "";
      clear: both;
      display: block;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
    ```
    优点: 写法固定，兼容性高<br>
    缺点: 代码多

## 定位的属性值有何区别

> `position` 有四个属性值: `relative` `absolute` `fixed` `static`

- relative 相对定位 不脱离文档流，相对于自身定位 
- absolute 绝对定位，脱离文档流 相对于父级定位
- fixed 固定定位，脱离文档流，相对于浏览器窗口定位
- static 默认值，元素出现在正常的流中

## 子元素如何在父元素中居中

**水平居中**

1. 子父元素宽度固定，子元素设置 margin: auto，并且子元素不能设置 浮动，否则居中失效 
2. 子父元素宽度固定，父元素设置 text-align: center，子元素设置 display: inline-block，并且子元素不能设置浮动，否则居中失效

**水平垂直居中**

1. 子元素相对父元素绝对定位，子元素 top，left 设置 50%，子元素 margin-top 和 margin-left 减去各自宽高的一半
2. 子元素相对父元素绝对定位，子元素上下左右全为 0，然后设置子元素 margin: auto;
3. 子元素相对父元素绝对定位，子元素 top，left 值为 50%，transform:  translate(-50%，-50%)
4. 父元素设置表格属性，display: table-cell; vertical-align: middle，子元素设置 margin: auto;
5. 父元素设置弹性盒子，display: flex; justify-content: center; align-items: center;

## border-box 与 content-box 的区别

- content-box 标准盒模型 width 不包括 padding 和 border
- border-box 怪异盒模型(IE 盒模型) width 包括 padding 和 border

## 元素垂直居中

1. 设置子元素和父元素的行高一样
2. 子元素设置为行内块，再加 vertical-align: middle
3. 已知父元素高度，子元素相对定位，通过 transform: translateY（-50%）
4. 不知道父元素高度，子绝父相，子元素 top: 50%，transform: translateY（-50%）
5. 创建一个隐藏节点，让隐藏节点的 height 为剩余高度的一半
6. 给父元素 display: table，子元素 display: table-cell，vertical-align: middle
7. 给父元素添加伪元素 
8. 弹性盒，父元素 display: flex，子元素 align-self: center

## 如何让 chrome 浏览器显示小于 12px 的文字

本来添加谷歌私有属性 -webkit-text-size-adjust: none ，现在 -webkit-transform: scale()

## css 选择器有哪些，那些属性可以继承，优先级如何计算

**css3 新增的伪类有哪些**

css2 选择器： 元素选择器，id 选择器，群组选择器，类选择器，*通配符选择器，后代 选择器<br>
css2 伪类选择器：a:link/visited/hover/active<br>
css3 选择器：空格 > +相邻兄弟选择器 ~通用选择器（查找后面所有）<br>
结构伪类选择器：<br>

  - 查找第几个 nth-child(n)
  - 查找同一类型第几个 nth-of-type
  - 查找唯一类型 only-of-type

属性选择器：<br>

  - 根据标签属性查找 [attr=value]
  - :root 查找根元素 html 标签 
  - :empty 查赵空标签

目标伪类选择器：<br>

  - :enabled 查找可以使用的标签
  - :disabled 查找禁止使用的标签
  - :checked 查找被选中的标签

伪元素选择器 ：<br>
  - :selection 设置选中文本内容的高亮显示（只能用于背 景色和文本颜色）
  - 否定伪类选择器 not（）
  - 语言伪类选择器 lang（取值）

**优先级（权重）**

  - 元素选择器 1
  - 伪元素选择器 1
  - class 选择器 10 
  - 伪类选择器 10
  - 属性选择器 10
  - Id 选择器 100
  - 内联样式的权重 1000
  - 包含选择器权重为权重之和
  - 继承样式权重为 0

**那些属性可以继承**

> css 继承特性主要是文本方面

  - 所有元素可继承：visibility 和 cursor
  - 块级元素可继承：text-indent 和 text-align
  - 列表元素可继承：list-style，list-style-type，list-style-position， list-style-image
  - 内联元素可继承：letter-spacing，word-spacing，line-height，color， font，font-family，font-size Font-style ， font-variant ， font-weight ， text-decoration ， text-transform，direction 

## 网页中有大量图片加载很慢 你有什么办法进行优化

1. 图片懒加载，在图片未可视区域加一个滚动条事件，判断图片位置与浏 览器顶端和页面的距离，如果前者小鱼后者，优先加载
2. 使用图片预加载技术，将当前展示图片的前一张和后一张优先下载
3. 使用 csssprite 或者 svgsprite

## 行内元素/块级元素有哪些

- 行内元素：相邻的行内元素会排列在同一行，不会独占一行 设置宽高无 效 span<br>
    `a br I em img input select span sub sup u textarea`
- 块级元素：会独占一行 可以设置宽高等属性 div<br>
    `div h1-h6 hr p ul ol table address blockquote dir from menu`
- 可变元素：根据上下文预警决定该元素为块元素还是内联元素<br>
    `button del iframe ins`

## margin 和 padding 在什么场合下使用

margin 外边距 自身边框到另一个边框之间的距离<br>
padding 内边距 自身边距到自身内容之间的距离<br>
**当需要在 border 外侧添加空白时用 margin，当需要在 border 内侧添 加空白时用 padding**

## 弹性盒子布局属性有那些请简述

- flex-direction：弹性容器中子元素排列方式（主轴排列方式）
- flex-wrap：设置弹性盒子的子元素超出父容器时是否换行
- flex-flow：是 flex-direction 和 flex-wrap 简写形式
- align-item：设置弹性盒子元素在侧轴上的对齐方式
- align-content：设置行对齐
- justify-content：设置弹性盒子元素在主轴上的对齐方式

## flex 布局原理

就是通过给父盒子添加 `flex` 属性，来控制子盒子的位置和排列方式

## px，rem，em 的区别

- px，绝对长度单位，像素 px 是相对于显示器屏幕分辨率来说的
- em 相对长度单位，相对于当前对象内文本的字体尺寸
  - em 的值并不是固定的
  - em 会继承父级元素的字体大小（参考物是父元素的 font-size）
  - em 中所有的字体都是相对于父元素的大小决定的
- rem 相对于 html 根元素的 font-size 1em=1rem=16px 在 body 中加入 font-size：62.5% 这样直接就是原 来的 px 数值除以 10 加上 em 就可以

## 三栏布局方式两边固定中间自适应

1. margin 负值法：左右两栏均左浮动，左右两栏采用负的 margin 值。 中间栏被宽度为 100%的浮动元素包起来
2. 自身浮动法：左栏左浮动，右栏右浮动，中间栏放最后
3. 绝对定位法：左右两栏采用绝对定位，分别固定于页面的左右两侧， 中间的主体栏用左右 margin 值撑开距离。 
4. flex 左右固定宽 中间 flex：1 
5. 网格布局 
6. table 布局

## 画一条 0.5px 的线

- 采用 `meta viewport` 的方式
    ```html
    <meta name="viewport" content="initial-scale=1. 0, maximum-scale=1.0, user-scalable=no" />
    ```
- 采用 border-image 的方式
- 采用 transform: scale() 的方式


## 双边距重叠问题（外边距折叠）

多个相邻（兄弟或者父子关系）普通流的块元素垂直方向 marigin 会重 叠折叠的结果为：<br>
两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。两 个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。 两个外 边距一正一负时，折叠结果是两者的相加的和。

## css 动画如何实现

创建动画序列，需要使用 animation 属性或其子属性，该属性允许配置 动画时间、时长以及其他动画细节，但该属性不能配置动画的实际表现， 动画的实际表现是由 @keyframes 规则实现，具体情况参见使用 keyframes 定义动画序列小节部分。 transition 也可实现动画。 transition 强调过渡，是元素的一个或多个属性发生变化时产生的过渡 效果，同一个元素通过两个不同的途径获取样式，而第二个途径当某种 改变发生（例如 hover）时才能获取样式，这样就会产生过渡动画。

## 如何实现元素的垂直居中

1. 父元素 display: flex; align-items: center;
2. 元素绝对定位，top: 50%; margin-top: -(高度/2);
3. 高度不确定用 transform: translateY(-50%);
4. 父元素 table 布局，子元素设置 vertical-align: center;

## 对 CSS 的新属性有了解过的吗

CSS3 的新特性中，在布局方面新增了 flex 布局，在选择器方面新增了<br>
例如<br>
first-of-type, nth-child 等选择器，在盒模型方面添加了 box-sizing 来改变盒模型，在动画方面增加了 animation，2d 变换，3d 变换 等，在颜色方面添加透明，rbga 等，在字体方面允许嵌入字体和设 置字体阴影，最后还有媒体查讯等

## overflow 的原理

要讲清楚这个解决方案的原理，首先需要了解块格式化上下文，块格式化上下文是 CSS 可视化渲染的一部分，它是一块区域，规 定了内部块盒 的渲染方式，以及浮动相互之间的影响关系<br>
当元素设置了 overflow 样式且值部位 visible 时，该元素就构建了 一个 BFC，BFC 在计算高度时，内部浮动元素的高度也要计算在内， 也就是说技术 BFC 区域内只有一个浮动元素，BFC 的高度也不会发 生塌缩，所以达到了清除浮动的目的。

## 重绘和回流是什么

回流：当 render tree 中的一部分或者全部因为元素的规模尺寸，布局， 隐藏等改变而需要重新构建，这就叫回流，每个页面至少需要一次回流， 就是在页面第一次加载的时候，这时候一定会发生回流，因为要构建 render tree

在回流的时候，浏览器会使渲染树中收到影响的部分失效，并重新构造 这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中， 这就是重绘

当 render tree 中的一些元素需要更新属性，而这些属性只是影响元素的 外观，不会影响布局，就叫重绘
