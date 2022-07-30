---
title: 面经记录 2022-7
---

## ESModule、CMD、AMD 区别

- AMD 依赖前置 (require.js)

  引入模块 require([ ],callback)<br>
  定义模块 define([],callback)<br>
  不论定义模块，还是引入模块时，都会先行引入依赖，再定义/引入模块<br>

- CMD 依赖就近引入原则(seaJs)
  引入模块 (遵循就近原则)<br>
  定义模块 define([],callback)<br>
- CommonJS Node.js 模块引入

  引入模块 require('模块路径')<br>
  定义模块 exports.模块名= function(){ //some code ... }<br>

- ES6
  引入模块 import<br>
  定义模块 export、export default<br>

**CommonJs 规范介绍**

- NodeJs 默认模块化规范，每个文件是一个模块，有自己的作用域
- CommonJs 规范采用同步加载方式
- 通过 require 加载模块，module.exports 和 exports 输出模块

**CommonJs 规范特点**

- 所有代码都运行在模块作用域，不会污染全局作用域
- 模块可以加载多次，第一次加载时会运行模块，模块输出结果会被缓存，再次加载时，会从缓存结果中直接读取模块输出结果
- 模块按出现顺序加载

---

**AMD 规范介绍**

- AMD 规范采用异步加载模块，允许指定回调函数
- Node 模块加载速度快，所以适用于同步加载
- 浏览器环境下，模块需要请求获取，所以适用于异步加载
- requireJs 是 AMD 的一个具体实现库

**CMD 规范介绍**

- CMD 整合了 CommonJs 和 AMD 的优点，模块加载是异步的
- CMD 专门用于浏览器端，seaJS 是 CMD 规范的一个实现
- AMD 和 CMD 最大的问题是没有通过语法升级解决模块化

---

**ESModule 规范介绍**

- ESModule 设计理念是希望在编译时就确定模块依赖关系及输入输出
- CommonJs 和 AMD 必须在运行时才能确定依赖和输入输出
- ESM 通过 import 加载模块，通过 export 输出模块

---

**CommonJs 和 ESModule 规范对比**

1. CommonJs 输出的是值的拷贝，ESM 输出的是值的引用
2. CJs 模块是运行时加载，ESM 是编译时输出接口
3. CJs 是单个值导出，ESM 可以导出多个
4. CJS 模块是同步加载，ESM 支持异步加载
5. CJS 的 this 指向当前模块的 module.exports，ESM 的 this 指向 undefined
6. 语法不同

| 名称     | AMD       | CMD           | CommonJS | ESM                                        |
| -------- | --------- | ------------- | -------- | ------------------------------------------ |
| 加载方式 | 异步      | 异步          | 异步同步 | 同步/异步均支持，取决于采用什么 loader API |
| 实现实例 | RequireJs | SeaJs（淘宝） | nodeJs   | JavaScript                                 |
| 运行环境 | 浏览器    | 浏览器        | 服务端   | 前后端                                     |

## Set 和 Map 区别

Set 对象允许你存储任何类型的值，无论是原始值或者是对象引用。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set 本身是一个构造函数，用来生成 Set 数据结构。Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

- add(value)：添加某个值，返回 Set 结构本身(可以链式调用)。
- delete(value)：删除某个值，删除成功返回 true，否则返回 false。
- has(value)：返回一个布尔值，表示该值是否为 Set 的成员。
- clear()：清除所有成员，没有返回值。
- size：返回 Set 实例的成员总数。

Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。构造函数 Map 可以接受一个数组作为参数。

- set(key, val): 向 Map 中添加新元素
- get(key): 通过键值查找特定的数值并返回
- has(key): 判断 Map 对象中是否有 Key 所对应的值，有返回 true,否则返回 false
- delete(key): 通过键值从 Map 中移除对应的数据
- clear(): 将这个 Map 中的所有元素删除
- size：返回 Map 对象中所包含的键值对个数

Map 和 Object 的区别:

- 一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值。
- Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
- Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
- Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。

**总结**

1. Map 是键值对，Set 是值的集合，当然键和值可以是任何的值；
2. Map 可以通过 get 方法获取值，而 set 不能因为它只有值；
3. 都能通过迭代器进行 for…of 遍历；
4. Set 的值是唯一的可以做数组去重，Map 由于没有格式限制，可以做数据存储
5. map 和 set 都是 stl 中的关联容器，map 以键值对的形式存储，key=value 组成 pair，是一组映射关系。set 只有值，可以认为只有一个数据，并且 set 中元素不可以重复且自动排序。

## Promise 实现

## Promise.all() 实现

## Vue 观察者模式和发布订阅模式，以及异同
