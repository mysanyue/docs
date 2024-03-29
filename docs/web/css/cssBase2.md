---
title: css 基础 二
---


## 1、介绍一下标准的 CSS 的盒子模型？与低版本 IE 的盒子模型有什么不同的？

- 标准盒子模型：`宽度=内容的宽度（content）+ border + padding + margin`
- 低版本 IE 盒子模型：`宽度=内容宽度（content+border+padding）+ margin`

## 2、box-sizing 属性？

用来控制元素的盒子模型的解析模式，默认为 `content-box`
`context-box：W3C` 的标准盒子模型，设置元素的 `height/width` 属性指的是 `content` 部分的高/宽
`border-box：IE` 传统盒子模型。设置元素的 `height/width` 属性指的是 `border + padding + content` 部分的高/宽

## 3、CSS 选择器有哪些？哪些属性可以继承？

CSS 选择符：`id` 选择器(`#myid`)、类选择器(`.myclassname`)、标签选择器(`div, h1, p`)、相邻选择器(`h1 + p`)、子选择器（`ul > li`）、后代选择器（`li a`）、通配符选择器（`*`）、属性选择器（`a[rel=”external”]`）、伪类选择器（`a:hover, li:nth-child`）<br>
可继承的属性：`font-size, font-family, color`<br>
不可继承的样式：`border, padding, margin, width, height`<br>
优先级（就近原则）：`!important > [ id > class > tag ]`<br>
`!important` 比内联优先级高<br>

## 4、CSS 优先级算法如何计算？

元素选择符： 1<br>
class 选择符： 10<br>
id 选择符：100<br>
元素标签：1000<br>

1. `!important` 声明的样式优先级最高，如果冲突再进行计算。
2. 如果优先级相同，则选择最后出现的样式。
3. 继承得到的样式的优先级最低。

## CSS3 新增伪类有那些?

- `p:first-of-type` 选择属于其父元素的首个元素
- `p:last-of-type` 选择属于其父元素的最后元素
- `p:only-of-type` 选择属于其父元素唯一的元素
- `p:only-child` 选择属于其父元素的唯一子元素
- `p:nth-child(2)` 选择属于其父元素的第二个子元素
- `:enabled :disabled` 表单控件的禁用状态。
- `:checked` 单选框或复选框被选中。

## 6、如何居中 div？如何居中一个浮动元素？如何让绝对定位的 div 居中？

1. div：

```css
 {
  border: 1px solid red;
  margin: 0 auto;
  height: 50px;
  width: 80px;
}
```

2. 浮动元素的上下左右居中：

```css
 {
  border: 1px solid red;
  float: left;
  position: absolute;
  width: 200px;
  height: 100px;
  left: 50%;
  top: 50%;
  margin: -50px 0 0 -100px;
}
```

3. 绝对定位的左右居中：

```css
 {
  border: 1px solid black;
  position: absolute;
  width: 200px;
  height: 100px;
  margin: 0 auto;
  left: 0;
  right: 0;
}
```

## 7、display 有哪些值？说明他们的作用?

- `inline`（默认）–内联
- `none`–隐藏
- `block`–块显示
- `table`–表格显示
- `list-item`–项目列表
- `inline-block`

## 8、position 的值？

`static`（默认）：按照正常文档流进行排列；
`relative`（相对定位）：不脱离文档流，参考自身静态位置通过 `top, bottom, left, right` 定位；
`absolute`(绝对定位)：参考距其最近一个不为 `static` 的父级元素通过 `top, bottom, left, right` 定位；
`fixed`(固定定位)：所固定的参照对像是可视窗口

## 9、CSS3 有哪些新特性？

1. `RGBA`和透明度
2. `background-image background-origin(content-box/padding-box/border-box) background-size background-repeat`
3. `word-wrap`（对长的不可分割单词换行）`word-wrap：break-word`
4. 文字阴影：`text-shadow： 5px 5px 5px #FF0000;`（水平阴影，垂直阴影，模糊距离，阴影颜色）
5. `font-face`属性：定义自己的字体
6. 圆角（边框半径）：`border-radius` 属性用于创建圆角
7. 边框图片：`border-image: url(border.png) 30 30 round`
8. 盒阴影：`box-shadow: 10px 10px 5px #888888`
9. 媒体查询：定义两套`css`，当浏览器的尺寸变化时会采用不同的属性

## 10、请解释一下 CSS3 的 flexbox（弹性盒布局模型）,以及适用场景？

该布局模型的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。在传统的布局方式中，block 布局是把块在垂直方向从上到下依次排列的；而 inline 布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。<br>
试用场景：弹性布局适合于移动前端开发，在 Android 和 ios 上也完美支持。<br>

## 11、用纯 CSS 创建一个三角形的原理是什么？

首先，需要把元素的宽度、高度设为 0。然后设置边框样式。

```css
 {
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid #ff0000;
}
```

## 12、一个满屏品字布局如何设计?

第一种真正的品字：<br>

- 三块高宽是确定的；
- 上面那块用 `margin: 0 auto;` 居中；
- 下面两块用 `float` 或者 `inline-block` 不换行；
- 用 `margin` 调整位置使他们居中。
  第二种全屏的品字布局:<br>
  上面的 div 设置成 100%，下面的 div 分别宽 50%，然后使用 `float` 或者 `inline` 使其不换行。<br>

## 13、常见的兼容性问题？

1. 不同浏览器的标签默认的 `margin` 和 `padding` 不一样。`*{margin:0;padding:0;}`
2. `IE6` 双边距 `bug`：块属性标签 `float` 后，又有横行的 `margin` 情况下，在 `IE6` 显示 `margin` 比设置的大。`hack：display:inline;` 将其转化为行内属性。
3. 渐进识别的方式，从总体中逐渐排除局部。首先，巧妙的使用“9”这一标记，将 IE 浏览器从所有情况中分离出来。接着，再次使用“+”将 IE8 和 IE7、IE6 分离开来，这样 IE8 已经独立识别。
4. 设置较小高度标签（一般小于 10px），在 IE6，IE7 中高度超出自己设置高度。hack：给超出高度的标签设置 `overflow:hidden;` 或者设置行高 `line-height` 小于你设置的高度。
5. IE 下，可以使用获取常规属性的方法来获取自定义属性,也可以使用 `getAttribute()` 获取自定义属性；`Firefox` 下，只能使用 `getAttribute()` 获取自定义属性。解决方法:统一通过 `getAttribute()` 获取自定义属性。
6. `Chrome` 中文界面下默认会将小于 `12px` 的文本强制按照 `12px` 显示,可通过加入 `CSS` 属性 `-webkit-text-size-adjust: none;` 解决。
7. 超链接访问过后 `hover` 样式就不出现了，被点击访问过的超链接样式不再具有 `hover` 和 `active` 了。解决方法是改变 CSS 属性的排列顺序:`L-V-H-A ( love hate ): a:link {} a:visited {} a:hover {} a:active {}`

## 14、为什么要初始化 CSS 样式

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异。<br>

## 15、absolute 的 containing block 计算方式跟正常流有什么不同？

无论属于哪种，都要先找到其祖先元素中最近的 `position` 值不为 `static` 的元素，然后再判断：<br>

1. 若此元素为 `inline` 元素，则 `containing block` 为能够包含这个元素生成的第一个和最后一个 `inline box` 的 `padding box` (除 `margin, border` 外的区域) 的最小矩形；
2. 否则,则由这个祖先元素的 `padding box` 构成。

如果都找不到，则为 `initial containing block。`

补充：

1. `static(默认的)/relative`：简单说就是它的父元素的内容框（即去掉 `padding` 的部分）
2. `absolute`: 向上找最近的定位为 `absolute/relative` 的元素
3. `fixed`: 它的 `containing block` 一律为根元素(`html/body`)

## 16、CSS 里的 visibility 属性有个 collapse 属性值？在不同浏览器下以后什么区别？

当一个元素的 visibility 属性被设置成 collapse 值后，对于一般的元素，它的表现跟 hidden 是一样的。<br>

1. chrome 中，使用 collapse 值和使用 hidden 没有区别。
2. firefox，opera 和 IE，使用 collapse 值和使用 display：none 没有什么区别。

## 17、display:none 与 visibility：hidden 的区别？

display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）<br>
visibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）<br>

## 18、position 跟 display、overflow、float 这些特性相互叠加后会怎么样？

display 属性规定元素应该生成的框的类型；position 属性规定元素的定位类型；float 属性是一种布局方式，定义元素在哪个方向浮动。<br>
类似于优先级机制：position：absolute/fixed 优先级最高，有他们在时，float 不起作用，display 值需要调整。float 或者 absolute 定位的元素，只能是块元素或表格。<br>

## 19、对 BFC 规范(块级格式化上下文：block formatting context)的理解？

BFC 规定了内部的 Block Box 如何布局。<br>
定位方案：<br>

1. 内部的 Box 会在垂直方向上一个接一个放置。
2. Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
3. 每个元素的 margin box 的左边，与包含块 border box 的左边相接触。
4. BFC 的区域不会与 float box 重叠。
5. BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
6. 计算 BFC 的高度时，浮动元素也会参与计算。

满足下列条件之一就可触发 BFC<br>

1. 根元素，即 html
2. float 的值不为 none（默认）
3. overflow 的值不为 visible（默认）
4. display 的值为 inline-block、table-cell、table-caption
5. position 的值为 absolute 或 fixed

## 20、为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？

浮动元素碰到包含它的边框或者浮动元素的边框停留。由于浮动元素不在文档流中，所以文档流的块框表现得就像浮动框不存在一样。浮动元素会漂浮在文档流的块框上。
浮动带来的问题：<br>

1. 父元素的高度无法被撑开，影响与父元素同级的元素
2. 与浮动元素同级的非浮动元素（内联元素）会跟随其后
3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。

清除浮动的方式：<br>

1. 父级 div 定义 height
2. 最后一个浮动元素后加空 div 标签 并添加样式 clear:both。
3. 包含浮动元素的父标签添加样式 overflow 为 hidden 或 auto。
4. 父级 div 定义 zoom

## 上下 margin 重合的问题

在重合元素外包裹一层容器，并触发该容器生成一个 BFC。<br>
例子：<br>

```html
<div class="aside"></div>
<div class="text">
  <div class="main"></div>
</div>
```

```css
.aside {
  margin-bottom: 100px;
  width: 100px;
  height: 150px;
  background: #f66;
}
.main {
  margin-top: 100px;
  height: 200px;
  background: #fcc;
}
.text {
  /*盒子main的外面包一个div，通过改变此div的属性使两个盒子分属于两个不同的BFC，以此来阻止margin重叠*/
  overflow: hidden; //此时已经触发了BFC属性。
}
```

## 22、设置元素浮动后，该元素的 display 值是多少？

自动变成 display:block<br>

## 23、移动端的布局用过媒体查询吗？

通过媒体查询可以为不同大小和尺寸的媒体定义不同的 css，适应相应的设备的显示。<br>

1. `<head>里边<link rel=”stylesheet” type=”text/css” href=”xxx.css” media=”only screen and (max-device-width:480px)”>`
2. `CSS : @media only screen and (max-device-width:480px) {/css样式/}`

## 24、CSS 优化、提高性能的方法有哪些？

1. 避免过度约束
2. 避免后代选择符
3. 避免链式选择符
4. 使用紧凑的语法
5. 避免不必要的命名空间
6. 避免不必要的重复
7. 最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么
8. 避免！important，可以选择其他选择器
9. 尽可能的精简规则，你可以合并不同类里的重复规则

## 25、浏览器是怎样解析 CSS 选择器的？

CSS 选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。<br>
而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。在建立 Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。<br>

## 26、在网页中的应该使用奇数还是偶数的字体？为什么呢？

使用偶数字体。偶数字号相对更容易和 web 设计的其他部分构成比例关系。Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，而 13、15、17 px 时用的是小一号的点。（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏。<br>

## 27、margin 和 padding 分别适合什么场景使用？

何时使用 margin：<br>

1. 需要在 border 外侧添加空白
2. 空白处不需要背景色
3. 上下相连的两个盒子之间的空白，需要相互抵消时。

何时使用 padding：<br>

1. 需要在 border 内侧添加空白
2. 空白处需要背景颜色
3. 上下相连的两个盒子的空白，希望为两者之和。

兼容性的问题：在 IE5 IE6 中，为 float 的盒子指定 margin 时，左侧的 margin 可能会变成两倍的宽度。通过改变 padding 或者指定盒子的 display：inline 解决。<br>

## 28、元素竖向的百分比设定是相对于容器的高度吗？

当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如 padding-top , padding-bottom , margin-top , margin-bottom 等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。<br>

## 29、全屏滚动的原理是什么？用到了 CSS 的哪些属性？

1. 原理：有点类似于轮播，整体的元素一直排列下去，假设有 5 个需要展示的全屏页面，那么高度是 500%，只是展示 100%，剩下的可以通过 transform 进行 y 轴定位，也可以通过 margin-top 实现
2. overflow：hidden；transition：all 1000ms ease；

## 30、什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的 IE？

响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。<br>
基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。<br>
页面头部必须有 meta 声明的 viewport。<br>
`<meta name="’viewport’" content="”width=device-width," initial-scale="1." maximum-scale="1,user-scalable=no”"/>`<br>

## 31、视差滚动效果？

视差滚动（Parallax Scrolling）通过在网页向下滚动的时候，控制背景的移动速度比前景的移动速度慢来创建出令人惊叹的 3D 效果。<br>

1. CSS3 实现
   优点：开发时间短、性能和开发效率比较好，缺点是不能兼容到低版本的浏览器<br>

2. jQuery 实现
   通过控制不同层滚动速度，计算每一层的时间，控制滚动效果。<br>
   优点：能兼容到各个版本的，效果可控性好<br>
   缺点：开发起来对制作者要求高<br>

3. 插件实现方式
   例如：parallax-scrolling，兼容性十分好<br>

## 32、::before 和 :after 中双冒号和单冒号有什么区别？解释一下这 2 个伪元素的作用

1. 单冒号(:)用于 CSS3 伪类，双冒号(::)用于 CSS3 伪元素。
2. ::before 就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于 dom 之中，只存在在页面之中。
   :before 和 :after 这两个伪元素，是在 CSS2.1 里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着 Web 的进化，在 CSS3 的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after<br>

## 33、你对 line-height 是如何理解的？

行高是指一行文字的高度，具体说是两行文字间基线的距离。CSS 中起高度作用的是 height 和 line-height，没有定义 height 属性，最终其表现作用一定是 line-height。<br>
单行文本垂直居中：把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中，其实也可以把 height 删除。<br>
多行文本垂直居中：需要设置 display 属性为 inline-block。<br>

## 34、怎么让 Chrome 支持小于 12px 的文字？

`p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例`<br>

## 35、让页面里的字体变清晰，变细用 CSS 怎么做？

`-webkit-font-smoothing` 在 `window` 系统下没有起作用，但是在 `IOS` 设备上起作用 `-webkit-font-smoothing：antialiased` 是最佳的，灰度平滑。<br>

## 36、position:fixed;在 android 下无效怎么处理？

`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>`<br>

## 37、如果需要手动写动画，你认为最小时间间隔是多久，为什么？

多数显示器默认频率是 60Hz，即 1 秒刷新 60 次，所以理论上最小间隔为 1/60＊1000ms ＝ 16.7ms。<br>

## 38、li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为 0，就没有空格了。
解决方法：<br>

1. 可以将<li>代码全部写在一排
2. 浮动 li 中 float：left
3. 在 ul 中用 font-size：0（谷歌不支持）；可以使用 letter-space：-3px

## 39、display:inline-block 什么时候会显示间隙？

- 有空格时候会有间隙 解决：移除空格
- margin 正值的时候 解决：margin 使用负值
- 使用 font-size 时候 解决：font-size:0、letter-spacing、word-spacing

## 40、有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度

外层 div 使用 position：relative；高度要求自适应的 div 使用 position: absolute; top: 100px; bottom: 0; left: 0<br>

## 41、png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过 webp？

1. png 是便携式网络图片（Portable Network Graphics）是一种无损数据压缩位图文件格式.优点是：压缩比高，色彩好。 大多数地方都可以用。
2. jpg 是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，在色调及颜色平滑变化做的不错。在 www 上，被用来储存和传输照片的格式。
3. gif 是一种位图文件格式，以 8 位色重现真色彩的图像。可以实现动画效果.
4. webp 格式是谷歌在 2010 年推出的图片格式，压缩率只有 jpg 的 2/3，大小比 png 小了 45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和 opera 支持。

## 42、style 标签写在 body 后与 body 前有什么区别？

页面加载自上而下 当然是先加载样式。<br>
写在 body 标签后由于浏览器以逐行方式对 HTML 文档进行解析，当解析到写在尾部的样式表（外联或写在 style 标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在 windows 的 IE 下可能会出现 FOUC 现象（即样式失效导致的页面闪烁问题）<br>

## 43、CSS 属性 overflow 属性定义溢出元素内容区的内容会如何处理?

- 参数是 scroll 时候，必会出现滚动条。
- 参数是 auto 时候，子元素内容大于父元素时出现滚动条。
- 参数是 visible 时候，溢出的内容出现在父元素之外。
- 参数是 hidden 时候，溢出隐藏。

## 44、阐述一下 CSS Sprites

将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 CSS 的 background-image，background- repeat，background-position 的组合进行背景定位。利用 CSS Sprites 能很好地减少网页的 http 请求，从而大大的提高页面的性能；CSS Sprites 能减少图片的字节。<br>
