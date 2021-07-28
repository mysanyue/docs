## 网络中使用最多的图片格式有哪些

`JPEG`，`GIF`，`PNG`，最流行的是 `jpeg` 格式，可以把文件压缩到最小在 `ps` 以 `jpeg` 格式存储时，提供 `11` 级压缩级别。

## 视频/音频标签的使用

视频：`<video src=""></video>`

视频标签属性：
 - src 需要播放的视频地址
 - width/height 设置播放视频的宽高 和 img 标签的宽高属性一样
 - autoplay 是否自动播放
 - controls 是否显示控制条
 - poster 没有播放之前显示的展位图片
 - loop 是否循环播放
 - perload 预加载视频（缓存）与 autoplay 相冲突， 设置了 autoplay 属 性，perload 属性会失效。
 - muted 静音模式
 - 音频: 音频属性和视频属性差不多，不过宽高和 poster 属性不能用 

  ```html 
  <audio><source src="" type=""></audio>
  ```

## HTML5 新增的内容有哪些

- 新增语义化标签
- 新增表单类型
- 表单元素
- 表单属性
- 表单事件
- 多媒体标签

**新增的语义化标签有哪些**

  - Header 页面头部
  - main 页面主要内容
  - footer 页面底部
  - Nav 导航栏
  - aside 侧边栏
  - article 加载页面一块独立内容
  - Section 相 当 于 div figure 加 载 独 立 内 容 （ 上 图 下 字 ）
  - figcaption figure 的标题
  - Hgroup 标题组合标签
  - mark 高亮显示
  - dialog 加载对话框标签（必须 配合 open 属性）
  - Embed 加载插件的标签
  - video 加载视频
  - audio 加载音频（支持格式 ogg，mp3，wav）

语义化标签优点：

  1. 提升可访问性
  2. seo 
  3. 结构清晰，利于维护

## 说一下 HTML5 drag api

- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。
- darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
- dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
- dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发

## 对 HTML 语义化标签的理解

HTML5 语义化标签是指正确的标签包含了正确的内容，结构良好，便于阅读，比如 nav 表示导航条，类似的还有 article、header、footer 等等标签。

## web 性能优化

降低请求量：合并资源，减少 HTTP 请求数，minify / gzip 压缩， webP，lazyLoad。加快请求速度：预解析 DNS，减少域名数，并 行加载，CDN 分发。 <br>
缓存：HTTP 协议缓存请求，离线缓存 manifest，离线数据缓存 localStorage。渲染：JS/CSS 优化，加载顺序，服务端渲染，pipeline。

## 浏览器缓存机制

缓存分为两种：强缓存和协商缓存，根据响应的 header 内容来决强缓存相关字段有 expires，cache-control。如果 cache-control 与 expires 同时存在的话， cache-control 的优先级高于 expires。<br>
协商缓存相关字段有 `Last-Modified/If-Modified-Since` ， `Etag/If-None-Match`

## 浏览器输入网址到页面渲染全过程

DNS 解析 TCP <br>
连接发送 HTTP<br>
请求服务器处理请求并返回 HTTP 报文<br>
浏览器解析渲染页面<br>
连接结束<br>

## 关于 JS 动画和 css3 动画的差异性

渲染线程分为 main thread 和 compositor thread，如果 css 动画 只 改 变 transform 和 opacity ， 这 时 整 个 CSS 动 画 得 以 在 compositor trhead 完成（而 JS 动画则会在 main thread 执行， 然后出发 compositor thread 进行下一步操作），特别注意的是如果 改变 transform 和 opacity 是不会 layout 或者 paint 的。

**区别**

- 功能涵盖面，JS 比 CSS 大
- 实现/重构难度不一，CSS3 比 JS 更加简单，性能调优方向固定对帧速表现不好的低版本浏览 器，css3 可以做到自然降级
- css 动画有天然事件支持 css3 有兼容性问题

