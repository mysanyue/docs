---
title: 微信小程序一
---

## 简单描述下微信小程序的相关文件类型

微信小程序项目结构主要有四个文件类型： wxml、wxss、js、json

1. wxml 模板文件，是框架设计的一套标签语言，结合基础组件、事件系统、可以构建出 页面的结构
2. wxss 样式文件，是一套样式语言，用于描述 WXML 的组件样式
3. js 脚本逻辑文件，逻辑处理网络请求
4. json 配置文件，小程序设置，如页面注册，页面标题及 tabBar
5. app.json 整个小程序的全局配置，包括：pages（所有页面路径）、网络设置（网络超时时间）、界面表现（页面注册）、window {背景色、导航样式、默认标题}、底部 tab 等
6. app.js 监听并处理小程序的生命周期函数、声明全局变量
7. app.wxss 全局配置的样式文件

## 请谈谈 wxml 与标准的 html 的异同

- 都是用来描述页面的结构
- 都由标签、属性等构成
- 标签名字不一样，且小程序标签更少，单一标签更多
- 多了一些 wx:if 这样的属性以及 {{ }} 这样的表达式
- WXML 仅能在微信小程序开发者工具中预览，而 HTML 可以在浏览器内预览
- 组件封装不同， WXML 对组件进行了重新封装
- 小程序运行在 JS Core 内，没有 DOM 树和 window 对象，小程序中无法使用 window 对象和 document 对象

## 请谈谈 WXSS 和 CSS 的异同

- 都是用来描述页面的样式
- WXSS 具有 CSS 大部分的特性，但是也做了一些扩充和修改
- WXSS 新增了尺寸单位，WXSS 在底层支持新的尺寸单位 rpx
- WXSS 仅支持部分 CSS 选择器
- WXSS 提供全局样式与局部样式
- WXSS 不支持 window 和 dom 文档流

## 怎么封装微信小程序的数据请求

- 方案一：将所有的接口放在统一的 js 文件中并导出，在 app.js 中创建封装请求数据的方法，在子页面中调用封装的请求数据。
- 方案二： 在根目录下创建 utils 目录及 api.js 文件和 apiConfig.js 文件；在 appConfig.js 封装基础的请求方法，设置请求体，带上 token 和异常处理等；在 api.js 中引入 apiConfig.js 封装好的请求方法，根据页面数据请求的 urls，设置对应 的方法并导出；在具体页面导入。

## 小程序页面间有哪些传递数据的方法

1. 在 app.js 中使用全局变量实现数据传递。
2. 给元素添加 data-\*属性来传递值，然后通过 e.currentTarget.dataset 或 onload 的 param 参数获取。注：data-名称不能有大写字母、不可以存放对象。
3. 通过设置 id 的方法标识来传值，通过 e.currentTarget.id 获取设置的 id 的值，然后通 过设置全局对象的方式来传递数值。
4. 页面跳转或重定向时，在 navigator 中使用 url 带参数传递数据。
5. 使用组件模板 template 传递参数。
6. 使用缓存传递参数。
7. 使用数据库传递参数。

## 请谈谈小程序的双向绑定和 vue 的异同

- 两者大体相同，但小程序直接使用 this.data 属性是不可以同步到视图的，必须调用 this.setData()方法。
- 双向绑定：vue 默认支持双向绑定；微信小程序需要借助 data 来实现。
- 取值：vue 中，通过 this.xxx 取值；小程序中，通过 this.data.xxx 取值。
- 定义方法：小程序定义方法在 page.js 中直接定义即可，vue 的方法通过写在 method 中进行定义。
- 取变量：小程序通过 `wx:for = \{\{ list \}\}`；Vue 是 `v-for = item in list`
- 调用 data 模型（赋值）
- 小程序：this.data.item 需要调用 this.setData({item:1}) 进行赋值
- vue: this.item 调用 this.item = 1 赋值
- 小程序的双向绑定原则上来说并不是真正的双向绑定。如果在小程序 .js 文件中改变了 某个变量的值，那么页面上的值并不会跟着改变；如果想要页面上的值也跟着改变的话， 需要通过 this.setData 来操作。而 Vue 默认就是双向绑定，只改变了某个变量的值， 页面上也会跟着改变。

## 请谈谈小程序的生命周期函数

**全局生命周期 app.js：**

- onLaunch() 小程序初始化，只会调用一次，可获取当前页面路径中的参数；
- onShow() 页面显示或切入前台时触发，一般用来发送数据请求；
- onHide() 页面隐藏或切入后台时触发；
- onError() 页面发生错误时触发；
- onPageNotFound() 小程序要打开的页面不存在时触发，可以在此函数进行重定向操作；

**小程序页面的生命周期：**

- onLoad() 页面加载时触发，只会调用一次，可获取当前页面路径中的参数；
- onShow() 页面显示或切入前台时触发，一般用来发送数据请求；
- onReady() 页面初次渲染完成时触发, 只会调用一次，代表页面已可和视图层进行交互；
- onHide() 页面隐藏或切入后台时触发, 如底部 tab 切换到其他页面或小程序切入后台 等；
- onUnload() 页面卸载时触发，如 redirectTo 或 navigateBack 到其他页面时；
- onPullDownRefresh() 下拉刷新的钩子函数，用户下拉刷新时会自动走到这个函数中；
- onReachBottom() 上拉触底的钩子函数； onShareAppMessage() 用户点击右上角分享；

**小程序组件中的生命周期：**

- lifetimes 组件生命周期
- created() 在组件实例刚刚被创建时执行；
- attached() 在组件实例进入页面节点树时执行；
- ready() 在组件在视图层布局完成后执行；
- moved() 在组件实例被移动到节点树另一个位置时执行；
- detached() 在组件实例被从页面节点树移除时执行；
- error() 每当组件方法抛出错误时执行；
- pageLifetimes 组件所在页面的生命周期；
- show() 页面被展示时执行；
- hide() 页面被隐藏时执行；
- resize() 页面尺寸变化时执行；

## 简述微信小程序原理

- 小程序本质就是一个单页面应用，所有的页面渲染和事件处理，都在一个页面内进行， 但又可以通过微信客户端调用原生的各种接口；
- 它的架构，是数据驱动的架构模式，它的 UI 和数据是分离的，所有的页面更新，都需要 通过对数据的更改来实现；
- 它从技术上讲和现有的前端开发差不多，采用 JavaScript、WXML、WXSS 三种技术进 行开发；
- 功能可分为 webview 和 appService 两个部分：webview 用来展现 UI，appService 用来处理业务逻辑、数据及接口调用，两个部分在两个进程中运行，通过系统层 JSBridge 实现通信，实现 UI 的渲染、事件的处理等。

## 请谈谈原生开发小程序、wepy、mpvue 的对比

|              | 微信小程序     | mpVue               | wepy              |
| ------------ | -------------- | ------------------- | ----------------- |
| 语法规范     | 小程序开发规范 | VueJs 开发规范      | 类 Vue 开发规范   |
| 标签集合     | 小程序标签     | html + 小程序标签   | 小程序标签        |
| 样式规范     | WXSS           | sass、less、postcss | sass、less、styus |
| 组件化       | 无组件化机制   | VueJs 组件规范      | 自定义组件规范    |
| 多端复用     | 不可服用       | 支持转换为 H5       | 支持转换为 H5     |
| 自动构建     | 本身无自动构建 | webpack 构建        | 框架内置自动构建  |
| 上手成本     | 全新学习       | 熟悉 VueJs 即可     | VueJs 和 wepy     |
| 集中数据管理 | 不支持         | 使用 Vuex           | 不支持            |
| 开发公司     | 腾讯           | 美团点评            | 腾讯              |

:::tip 总结

- 个人认为，如果是新项目，且没有旧的 h5 项目迁移，则考虑用小程序原生开发，好处是 相比于第三方框架，坑少。
- 如果有老的 h5 项目且是 vue 开发 或者 也有 h5 项目也需要小程序开发，则比较适合 wepy 或者 mpvue 来做迁移或者开发。
  :::

## 哪些方法来提高微信小程序的应用速度

- 提高页面的加载速度
- 用户行为预测 # 什么叫行为预测
- 减少默认 data 的大小
- 组件化方案 # 使用

## 怎么解决微信小程序的异步请求问题

小程序支持 ES6 语法，使用 Promise 来解决异步请求

```js
function asyncFn1() {
  return new Promise(function(resolve, reject) {
    //...
  })
}
// 调用
asyncFn1()
  .then(asyncFn2)
  .then(asyncFn3)
```

## 小程序关联微信公众号如何确定用户的唯一性

使用 wx.getUserInfo 方法 withCredentials 为 true 时，可获取 encryptedData，里 面有 union_id，后端需要进行对称解密。

## 微信小程序如何实现下拉刷新

在 json 配置中开启 enablePullDownRefresh 下拉刷新的动作，在.js 文件中通过 onPullDownRefresh 函数来实现相关的操作。

## 微信小程序使用 webview 直接加载要注意哪些事项

- 必须要在小程序后台使用管理员添加业务域名；
- h5 页面跳转至小程序的版本必须是 1.3.1 以上；
- 微信分享只可以是小程序的主名称，如要自定义分享内容，需小程序版本在 1.7.1 以上；
- h5 的支付不可以是微信公众号的 appid，必须是小程序的 appid，而且用户的 openid 也 必须是用户和小程序的；

## webview 中的页面怎么跳转回小程序

```js
// 跳转回小程序
wx.miniProgram.navigateTo({ url: 'pages/login/login' + $params })

// 跳转到小程序导航页面
wx.miniProgram.switchTab({ url: '/pages/index/index' })
```

## bindtap 和 catchtap 的区别

- 相同点：首先他们都是作为点击事件函数，就是点击时触发。在这个作用上他们是一样的，可以不做区分。
- 不同点：他们的不同点主要是 bindtap 是不会阻止冒泡事件的，catchtap 是阻止事件冒泡的。

## 简述五个路由的区别

- wx.navigateTo() 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面；
- wx.redirectTo() 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面；
- wx.switchTab() 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面；
- wx.navigateBack() 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层；
- wx.reLaunch() 关闭所有页面，打开到应用内的某个页面；
- 可以按照在 wxml、js 和跳转失败进行区分；
- 在 wxml 页面中：可分为 “跳转新页面”、“在当前页打开”、“切换到首页 Tab”；
- 在 js 页面中：分为 “应用内的页面” 和 “tabBar 页面” ；
- 如果上述跳转遇到跳转失败或者无效的问题，请访问：wx.navigateTo/wx.redirectTo 无效

## 微信小程序与 H5 的区别

- 运行环境不同：小程序在微信运行，h5 在浏览器运行；
- 开发成本不同：h5 需要兼容不同的浏览器；
- 获取系统权限不同：系统级权限可以和小程序无缝衔接；
- 应用在生产环境的运行流畅度：h5 需不断对项目优化来提高用户体验；

## 小程序如何更新页面中的值

可以通过 this.setData 来进行改变。

## 如何实现登录数据的持久化

可以通过 wx.setStorageSync('键名', 对应的值) 来进行数据持久化存储。

## 微信小程序和 app 有什么不同之处

- 微信小程序属于轻量级的 app 但是限制在微信中，开发周期短，功能较少，占用空间少；
- app 就相反 需要占用额外内存 开发周期长

## 微信小程序如何进行双向绑定

- 通过 bind-tap 点击事件 向 app.js 定义的方法中获取回执；
- 设置 data 的值 实现双向绑定。

## 如何自定义 tabbar

- 取消当前的 tabbar
- 插入自定义 tabbar 组件
- app.json 调用组件
- 页面显示 tabbar 组件

## 小程序怎样使用自定义组件

- 新建自定义组件目录，生成目录结构；
- 写好组件内容；
- 在要使用的目标页面的 json 文件中配置下 usingComponents，引入组件；
- 以标签的形式在页面中使用该组件即可；
- 传递数据和 vue 一样，通过自定义属性，然后在组件里通过 properties 接收就可以使用了；

## 小程序本地存储（数据缓存）有哪些常用 api

- 数据的存储，将数据存储在本地缓存中指定的 key 中
- wx.setStorage(Object object) 异步
- wx.setStorageSync(string key, any data) 同步
- 数据的获取，从本地缓存中异步获取指定 key 的内容
- wx.getStorage(Object object) 异步
- wx.getStorageSync(string key) 同步
- 存储信息的获取，异步获取当前 storage 的相关信息
- wx.getStorageInfo(Object object) 异步
- wx.getStorageInfoSync() 同步
- 数据的删除，从本地缓存中移除指定 key
- wx.removeStorage(Object object) 异步
- wx.removeStorageSync(string key) 同步
- 数据的清空，清理本地数据缓存
- wx.clearStorage(Object object) 异步
- wx.clearStorageSync() 同步

## 微信支付的流程简单说一下

![wechat-play](/assets/images/wechat-play.png)
