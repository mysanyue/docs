---
title: CSS3 面试题
---

## CSS3 有哪些新特性？

- RGBA 和 透明度
- background-image
- background-origin(content-box/padding-box/border-box)
- background-size
- background-repeat
- word-wrap（对长的不可分割单词换行）word-wrap：break-word
- 文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离， 阴影颜色）
- font-face 属性：定义自己的字体
- 圆角（边框半径）：border-radius 属性用于创建圆角
- 边框图片：border-image: url(border.png) 30 30 round
- 盒阴影：box-shadow: 10px 10px 5px #888888
- 媒体查询：定义两套 css，当浏览器的尺寸变化时会采用不同的属性

## 解释一下 Flexbox (弹性盒布局模型)？及适用场景？

flex 布局是 CSS3 新增的一种布局方式，我们可以通过将一个元素的 display: flex 使他 成为一个 flex 容器。任何一个容器都可以指定为 flex 布局。行内元素也可使用 flex 布局。

一个容器默认有两条轴，一个是水平的主轴，一个是与主轴垂直的交叉轴。

**属性**

- flex-direction 定义主轴的方向；
- flex-wrap 定义是否换行；
- flex-flow 上述 2 个属性的简写；
- justify-content 定义项目在主轴上的对齐方式；
- align-items 定义项目在交叉轴上如何对齐；
- align-content 定义多根轴线的对齐方式

## CSS3 新增伪类有那些?

- p:first-of-type 选择属于其父元素的首个元素
- p:last-of-type 选择属于其父元素的最后元素
- p:only-of-type 选择属于其父元素唯一的元素
- p:only-child 选择属于其父元素的唯一子元素
- p:nth-child(2) 选择属于其父元素的第二个子元素
- :enabled :disabled 表单控件的禁用状态
- :checked 单选框或复选框被选中

## 使用 base64 编码的优缺点？

> base64 编码是一种图片处理格式，通过特定的算法将图片编码成一长串字符串，在页面上显示时可用该字符串来代替图片的 url 属性

**使用 base64 的优点：**

可以减少该图片的 HTTP 请求

**使用 base64 的缺点：**

1. 根据 base64 的编码原理，编码后的大小会比源文件大小大 1/3，如果把大图片编码到 html/css 中，不仅会造成文件体积增加，影响文件的加载速度，还会增加浏览器对 html 或 css 文件 解析渲染的时间。
2. 使用 base64 无法直接缓存，要缓存只能缓存包含 base64 的文件，比如 HTML 或 CSS，这相比于直接缓存图片的效果要差很多。
3. IE8 以前的浏览器不支持，一般一些网站的小图标可以使用 base64 图片引入。

## 为什么要清除浮动？清除浮动的方式？

清除浮动是为了清除使用浮动元素产生的影响：浮动的元素，高度会塌陷，而高度的塌 陷使我们页面后面的布局不能正常显示。

**清除浮动的方式：**

1. 设置父元素高度结合 `overflow: hidden` 达到浮动不影响布局（不建议使用）
2. 设置一个 div 元素在浮动结尾 `<div style="clear:both"></div>` 这样会浪费一个元素，并且语义化不是很好（不建议使用）
3. 通过伪类清除浮动

   ```css
   .clearfix:after {
     content: '';
     display: table;
     clear: both;
   }
   ```

## CSS 优化，提高性能的方法有哪些？

**加载性能：**

- CSS 压缩：将写好的 CSS 进行打包压缩，可以减少很多的体积。
- CSS 单一样式：当需要下边距和左边距的时候，很多时候选择：margin: 0 0; 比 margin-top: 0; margin-bottom: 0; 执行的效率更高。

**选择器性能：**

- 关键选择器。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。

## 如何实现一个 div 的上下垂直居中？

1. 利用 margin 设置负值为高度的一半

   ```css
   .div {
     width: 200px;
     height: 200px;
     position: absolute;
     top: 50%;
     left: 50%;
     margin-top: -100px;
     margin-left: -100px;
   }
   ```

2. 利用 transform 平移属性

   ```css
   .div {
     width: 200px;
     height: 200px;
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translateX(-50%) translateY(-50%);
   }
   ```

3. 利用 flex 布局

   ```css
   .div {
     width: 200px;
     height: 200px;
     display: flex;
     align-items: center; // 水平方向
     justify-content: center; // 垂直方向
   }
   ```

4. 利用表格布局，给父元素 display: table，子元素 display: table-cell、vertical-align: center

   ```css
   .div {
     display: table;
   }
   ```

## display:none 与 visibility：hidden 的区别？

- display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）
- visibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）

## position 跟 display、overflow、float 这些特性相互叠加后会怎 么样？

- display 属性规定元素应该生成的框的类型；
- position 属性规定元素的定位类型；
- float 属性是一种布局方式，定义元素在哪个方向浮动。
- 类似于优先级机制：position：absolute/fixed 优先级最高，有他们在时，float 不起作 用，display 值需要调整。float 或者 absolute 定位的元素，只能是块元素或表格。

## 上下 margin 重合的问题?

- 在重合元素外包裹一层容器，通过改变此 div 的属性使两个盒子分属于两个不同的 BFC， 以此来阻止 margin 重叠。

1. 外层 padding
2. 透明边框 border: 1px solid transparent;
3. 绝对定位 postion: absolute;
4. 外层 div overflow: hidden;
5. 内层 div 加 float: left; display: inline;
6. 外层 div 有时会用到 zoom:1;（试用与 IE6-7）

## 移动端的布局用过媒体查询吗？

通过媒体查询可以为不同大小和尺寸的媒体定义不同的 css，适应相应的设备的显示。head 里边引入： `<link rel=”stylesheet” type=”text/css” href=”xxx.css” media=”only screen and (max-device-width:480px)”>` CSS 中定义：`@media only screen and (max-device-width:480px) { /_ css 样式 _/ }`

## CSS 优化、提高性能的方法有哪些？

- 避免过度约束
- 避免后代选择符
- 避免链式选择符
- 使用紧凑的语法
- 避免不必要的命名空间
- 避免不必要的重复
- 最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么
- 避免 !important，可以选择其他选择器
- 尽可能的精简规则，你可以合并不同类里的重复规则

## 浏览器是怎样解析 CSS 选择器的？

- CSS 选择器的解析是从右向左解析的。
- 若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。
- 若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找 到根元素或满足条件的匹配规则，则结束这个分支的遍历。
- 两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符 合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找 上面。
- 而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一 棵 Render Tree，最终用来进行绘图。在建立 Render Tree 时（WebKit 中的 Attachment 过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果 （Style Rules）来确定生成怎样的 Render Tree。

## 在网页中的应该使用奇数还是偶数的字体？为什么呢？

尽量使用偶数字体。偶数字号相对更容易和 web 设计的其他部分构成比例关系。 Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个 大小的点阵，而 13、15、17 px 时用的是小一号的点。（即每个字占的空间大了 1 px， 但点阵没变），于是略显稀疏。
