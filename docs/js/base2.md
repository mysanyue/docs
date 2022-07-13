---
title: js 基础
---

## js 获取非行间样式

```javascript
function getStyle(obj, attr) {
  // return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
  if (obj.currentStyle) {
    return obj.currentStyle[attr]
  } else {
    return getComputedStyle(obj, false)[attr]
  }
}
```

## var let const 区别

1、不存在变量提升<br>
2、同一个作用域下不能重复定义同一个名称<br>
3、有着严格的作用域<br>
4、const 声明一个常量，一旦声明，常量的值就不能改变。且必须初始化<br>

## js 运动

#### 缓冲运动

- 速度 = (目标值 - 当前值) / 系数
- 速度取整

* 逐渐变慢，最后停止
* 距离越远速度越大
  - 速度有距离决定
  - 速度 = (目标值 - 当前值) / 缩放系数
* 栗子：缓冲菜单
  - BUG：速度取整
  - 跟随页面滚动的缓冲侧边栏
    - 潜在问题：目标值不是整数时

#### 弹性运动

- 速度 += (目标点 - 当前值) / 系数
- 速度 \*= 摩擦系数

* 加速运动
  - 速度不断增加或减少
  - 速度减少到负值，会向反方向运动
* 弹性运动
  - 在目标点左边，加速；在目标店右边减速；
  - 根据距离，计算加速度
* 摩擦力
  - 速度不断减小
* 带摩擦力的弹性运动
  - 弹性运动 + 摩擦力
* 弹性公式
  - 速度 += (目标值 - oDiv.offsetLeft) / 5;
  - 速度 \*= 0.7;

#### 碰撞运动

- 撞到目标点，速度反转
- 反转速度的同时，减小速度
- 纵向碰撞，横向速度也减小
- 横向速度小数问题（负数）

#### 运动终止条件

- 匀速运动：距离足够近
- 缓冲运动：两点重合

#### 多物体运动框架

- 定时器作运动对象的属性
- 参数的传递：运动对象，目标值
- 所有变量都不能公用
- 属性与运动对象绑定：速度、其他属性值

#### 布局转换

1. 首先使用 `float` 进行布局
2. 使用 js 做转换

```javascript
var aLi = document.querySelecterAll('li')
for (var i = 0; i < aLi.length; i++) {
  aLi[i].style.position = 'absolute'
  aLi[i].style.left = aLi[i].offsetLeft + 'px'
  aLi[i].style.top = aLi[i].offsetTop + 'px'
}
```

#### 按照比列计算滚动距离

```javascript
var scaleX = L / (oDiv.offsetWidth - oSpan.offsetWidth)
var scaleY = T / (oDiv.offsetHeight - oSpan.offsetHeight)

oImg.style.left = -scaleX * (oImg.offsetWidth - oDiv2.offsetWidth) + 'px'
oImg.style.top = -scaleY * (oImg.offsetHeight - oDiv2.offsetHeight) + 'px'
```

#### H5 特性

- 内容编辑 `contenteditable="true"`
- 语言输入 `<input type="text" x-webkit-speech />`
- 桌面提醒

```javascript
window.webkitNotifications.requestPermission()
statue = window.webkitNotifications.checkPermission()
var notification = window.webkitNotifications.createNotification('[imgurl]', 'Title', 'Body')
notification.show()
```

## ES6 模块化

- 普通 js 加载
  - type = "application/javascript"
    - 默认省略
    - 默认同步加载
  - 同步加载问题
- 使用异步加载
  - defer(延迟)
    - 在外链 js 标签上使用
    - 等待 DOM 结构加载完整，其他脚本执行完成，再执行
    - 多个 defer 之间可以确保加载顺序
- es6 模块化使用
  - 使用 type="module"
  - 服务器环境下使用
  - 默认是异步加载(默认 defer)
- 注意事项
  - 代码运行在模块作用域
    - 模块作用域和全局作用域
  - 默认开启严格模式 'use strict'
  - 顶层的 this 指向 undefined
  - 一个模块被加载多次则只执行一次
- 语法
  - export (导出)
  - import (导入)
- 模块导出的是原来值得引用
  - 不可以直接在 导入模块后，修改值
  - 可以通过 被导入模块提供的方法来修改 被导入模块内部的值
  - 所有导入的内容都是 引用关系
