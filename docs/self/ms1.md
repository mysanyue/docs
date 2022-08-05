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

## WeakSet 与 WeakMap 区别

**WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 区别如下：**

- WeakSet 的成员只能是对象，而不能是其他类型的值
- WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用
  也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。WeakSet 结构有助于防止内存泄漏。
- WeakSet 没有 size 属性和 forEach 方法
  WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。
- 不支持 clear 方法

**WeakSet 有以下三个方法：**

- add(value)：向 WeakSet 实例添加一个新成员。
- delete(value)：清除 WeakSet 实例的指定成员。
- has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

**WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。WeakMap 与 Map 的区别有以下几点：**

- WeakMap 只接受对象作为键名（null 除外），不接受其他类型的值作为键名
- WeakMap 的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内
  也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。总之，WeakMap 的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap 结构有助于防止内存泄漏。
- 同 WeakSet 一样，WeakMap 也没有遍历操作，即 (keys()、values()和 entries()方法)
  因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定不能取到键名。
- 不支持 clear 方法

**WeakMap 有以下四个个方法：**

- get()：通过键名取值
- set()：设置键值对
- has()：判断是否存在
- delete()：删除一项记录

## Promise 实现

:::warning 注意事项

1. Promise 就是一个类 在执行这个类的时候，需要传递一个执行器进去，执行器会立即执行
2. Promise 中有三种状态，分别为：

   成功 - fulfilled <br>
   失败 - rejected <br>
   等待 - pending <br>

   pending -> fulfilled <br>
   pending -> rejected <br>
   一旦状态确定就不可更改 <br>

3. resolve 和 reject 函数是用来更改状态的

   resolve: fulfilled <br>
   reject: rejected <br>

4. then 方法内部做的事情就是判断状态，如果状态是成功，调用成功的回调函数，如果状态是失败，调用失败回调函数，then 方法是被定义在原型对象中的方法
5. then 成功回调有一个参数，表示成功之后的值，then 失败回调有一个参数，表示失败后的原因
   :::

```js
const PENDING = 'pending' // 等待
const FULFILLED = 'fulfilled' // 成功
const REJECTED = 'rejected' // 失败

/**
 * 1. 判断 x 的值是普通值还是 promise对象
 * 2. 如果是普通值 直接调用 resolve
 * 3. 如果是 promise 对象，查看 promise 对象返回的结果
 * 4. 再根据 promise 对象返回的结果，决定调用 resolve 还是 reject
 */
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (x instanceof MyPromise) {
    // promise 对象
    // x.then(() => resolve(value), reason => reject(reason))
    x.then(resolve, reject)
  } else {
    // 普通值
    resolve(x)
  }
}

// 错误捕获处理
function setTimeoutFn(callback, promise2, val, resolve, reject) {
  try {
    let x = callback(val)
    x && resolvePromise(promise2, x, resolve, reject)
  } catch (e) {
    reject(e)
  }
}

class MyPromise {
  status = PENDING
  value = undefined
  reason = undefined
  successCallback = []
  failCallBack = []

  constructor(executor) {
    executor(this.resolve, this.reject)
  }

  resolve = (value) => {
    // 如果状态不是等待，阻止程序向下执行
    if (this.status !== PENDING) return
    // 将状态更改为成功
    this.status = FULFILLED
    // 保存成功之后的值
    this.value = value
    // 判断成功回调是否存在，如果存在，调用
    while (this.successCallback.length) this.successCallback.shift()()
  }

  reject = (reason) => {
    // 将状态更改为失败
    if (this.status !== PENDING) return
    // 将状态更改为失败
    this.status = REJECTED
    // 保存失败后的原因
    this.reason = reason
    // 判断失败函数是否存在，如果存在，调用
    while (this.failCallBack.length) this.failCallBack.shift()()
  }

  then(successCallback, failCallback) {
    // 处理 promise.then().then().then(res => {}, err => {}) 的情况
    successCallback = successCallback ? successCallback : (value) => value
    failCallback = failCallback
      ? failCallback
      : (reason) => {
          throw reason
        }

    let promise2 = new MyPromise((resolve, reject) => {
      // 这里使用 setTimeout 主要是 promise2 还没初始化好
      setTimeout(() => {
        // 状态判断
        if (this.status === FULFILLED) {
          setTimeoutFn(successCallback, promise2, this.value, resolve, reject)
        } else if (this.status === REJECTED) {
          setTimeoutFn(failCallback, promise2, this.reason, resolve, reject)
        } else {
          // 等待 - 处理异步调用情况
          // 将成功回调和失败回调存储起来
          this.successCallback.push(() => setTimeoutFn(successCallback, promise2, this.value, resolve, reject))
          this.failCallBack.push(() => setTimeoutFn(failCallback, promise2, this.reason, resolve, reject))
        }
      })
    })

    return promise2
  }

  finally(callback) {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value)
      },
      (reason) => {
        return MyPromise.resolve(callback()).then(() => {
          throw reason
        })
      },
    )
  }

  catch(failCallback) {
    return this.then(undefined, failCallback)
  }

  static all(array) {
    let result = []
    let index = 0

    return new MyPromise((resolve, reject) => {
      function addData(key, value) {
        result[key] = value
        // 解决异步调用问题
        index++
        if (index === array.length) {
          resolve(result)
        }
      }

      for (let i = 0; i < array.length; i++) {
        let current = array[i]
        if (current instanceof MyPromise) {
          // promise 对象
          current.then(
            (value) => addData(i, value),
            (reason) => reject(reason),
          )
        } else {
          // 普通对象
          addData(i, array[i])
        }
      }
    })
  }

  static resolve(value) {
    if (value instanceof MyPromise) return value
    return new MyPromise((resolve) => resolve(value))
  }
}

export default MyPromise
```

:::tip 注意

1. 这里为什么要定义成箭头函数？<br>
   因为 MyPromise 里面调用 resovle 或者 reject 是直接调用的，如果不用箭头函数里面的 this 就指向了 window，用箭头函数的话里面的 this 指向 MyPromise 这个类

```js
resolve = (value) => {
  // ....
}

reject = (reason) => {
  // ...
}
```

2. 为什么 then 里面要用 setTimeout？<br>
   因为使用 promise2 的时候 new MyPromise 还没有初始化完成，所以需要添加一个计时器（宏任务）让，同步任务先执行完然后 promise2 就初始化好了，就可以正常使用。

```js
let promise2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    if (this.status === FULFILLED) {
      setTimeoutFn(successCallback, promise2, this.value, resolve, reject)
    } else if (this.status === REJECTED) {
      setTimeoutFn(failCallback, promise2, this.reason, resolve, reject)
    } else {
      this.successCallback.push(() => setTimeoutFn(successCallback, promise2, this.value, resolve, reject))
      this.failCallBack.push(() => setTimeoutFn(failCallback, promise2, this.reason, resolve, reject))
    }
  })
})
```

:::

## Vue 观察者模式和发布订阅模式，以及异同

**相同点**

1. 这两种模式都使用了事件池机制（观察者模式中叫观察者列表）
2. 两种模式都可以往事件池 / 观察者列表中添加或删除方法/对象
3. 在发布通知的时候，其事件池 / 观察者列表中存储的方法/对象都能依次进行相关的操作

**不同点**

1. 观察者模式的事件池机制使用的是数组，而发布订阅使用的是对象
2. 观察者模式需要创建两个类：目标对象类和观察者类；而发布订阅只需要创建一个类：事件池类
3. 观察者模式中添加的是观察者 Watch 类的实例，而发布订阅中添加的是内置类 Function 的实例
4. 在添加的时候，观察者模式是只添加对象，而发布订阅在添加的时候还指定了添加方法的类型
5. 观察者模式在通知的时候不需要指定类型，而发布订阅需要指定类型
6. 观察者模式中，目标对象（观察者列表）发布时，所有观察对象都会进行相应的操作，而发布订阅只会操作指定类型的方法

## Promise.all 和 Promise.race 区别

**Pomise.all**

Promise.all 可以将多个 Promise 实例包装成一个新的 Promise 实例。用于将多个 Promise 实例，包装成一个新的 Promise 实例。

1. 它接受一个数组作为参数。
2. 数组可以是 Promise 对象，也可以是其它值，只有 Promise 会等待状态改变。
3. 当所有的子 Promise 都完成，该 Promise 完成，返回值是全部值的数组。
4. 如果有任何一个失败，该 Promise 失败，返回值是第一个失败的子 Promise 的结果。

常见使用场景：多个异步结果合并到一起

**Pomise.race**

Promse.race 就是赛跑的意思，意思就是说，Promise.race()里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。<br>
Promise.race 在第一个 promise 对象变为 Fulfilled 之后，并不会取消其他 promise 对象的执行。只有先完成的 Promise 才会被 Promise.race 后面的 then 处理。其它的 Promise 还是在执行的，只不过是不会进入到 promise.race 后面的 then 内。

常见使用场景：把异步操作和定时器放到一起，如果定时器先触发，认为超时，告知用户

**Promise.all 和 Promise.race 都是有使用场景的**

有些时候我们做一个操作可能得同时需要不同的接口返回的数据，这时我们就可以使用 Promise.all。<br>
有时我们比如说有好几个服务器的好几个接口都提供同样的服务，我们不知道哪个接口更快，就可以使用 Promise.race，哪个接口的数据先回来我们就用哪个接口的数据。

## Webpack plugin 和 loader 区别

loader: 从字面的意思理解，是加载的意思。由于 webpack 本身只能打包 js 文件，所以，针对 css，图片等格式的文件没法打包，就需要引入第三方的模块进行打包。loader 虽然是扩展了 webpack ，但是它只专注于转化文件（transform）这一个领域，完成压缩，打包，语言翻译。loader 是运行在 NodeJS 中。仅仅只是为了打包，仅仅只是为了打包，仅仅只是为了打包，重要的话说三遍！

plugin：也是为了扩展 webpack 的功能，但是 plugin 是作用于 webpack 本身上的。而且 plugin 不仅只局限在打包，资源的加载上，它的功能要更加丰富。从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。webpack 提供了很多开箱即用的插件：CommonChunkPlugin 主要用于提取第三方库和公共模块，避免首屏加载的 bundle 文件，或者按需加载的 bundle 文件体积过大，导致加载时间过长，是一把优化的利器。而在多页面应用中，更是能够为每个页面间的应用程序共享代码创建 bundle。

- loader 是文件加载器，能加载资源文件，并对这些文件进行一些处理，如：编译，压缩等。最终打包到指定文件中。
- plugin 是在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，在合适的时机中通过 webpack 提供的 api 改变输出结果。
- plugin 赋予了 webpack 各种灵活的功能，如打包优化，资源管理，环境变量，注入等，目的是为了解决 loader 无法实现的功能。

**区别**

- loader 是文件转换器，将 A 文件进行编译形成 B 文件，这里操作的是文件，A.less->A.css
- loader 运行在打包文件之前（loader 为在模块加载时的预处理文件）
- plugin 是扩展器，针对的是 loader 结束后 webpack 打包的整个过程，并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点，执行广泛的任务。
- plugins 在整个编译周期都起作用。

## 原型、原型链

**原型**

在 JavaScript 中，每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个 prototype 属性，这个属性指向函数的原型对象，并且这个属性是一个对象数据类型的值。

![prototype](/assets/images/js/prototype.png)

原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。

**原型链**

在 JavaScript 中万物都是对象，对象和对象之间也有关系，并不是孤立存在的。对象之间的继承关系，在 JavaScript 中是通过 prototype 对象指向父类对象，直到指向 Object 对象为止，这样就形成了一个原型指向的链条，专业术语称之为原型链。

当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用。如果没有则去原型的原型中寻找,直到找到 Object 对象的原型，Object 对象的原型没有原型，如果在 Object 原型中依然没有找到，则返回 undefined。

![__proto__](/assets/images/js/__proto__.png)

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层 Object 为止。Object 是 JS 中所有对象数据类型的基类(最顶层的类)在 Object.prototype 上没有**proto**这个属性。

![__proto__chain](/assets/images/js/__proto__chain.png)
