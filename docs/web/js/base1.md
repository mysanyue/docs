---
title: js 基础一
---

## js 基本数据类型有哪些

- 字符串 String
- 数值 Number
- 布尔 boolean
- 对象 Object
- 数组 Array
- null
- undefined

## Ajax 如何使用

1. 创建 XMLHTTPRequest 对象
2. 使用 open 方法创建 http 请求，并设置请求地址
3. xhr.open(get/post，url，async：true(异步)/false(同步))经常 使用前三个参数
4. 设置发送的数据，用 send 发送请求
5. 注册事件（给 ajax 设置事件）
6. 获取响应并更新页面

## 如何判断一个数据是 NaN

> NaN 非数字 但是用 typeof 检测是 number 类型

1. 利用 NaN 的定义 用 typeof 判断是否为 number 类型并且判断是否满足 isNan
2. 利用 NaN 是唯一一个不等于任何自身的特点 n !== n
3. 利用 ES6 中提供的 Object.is()方法（判断两个值是否相等）

## Js 中 null 与 undefined 区别

相同点：用 if 判断时，两者都会被转换成 false
不同点：number 转换的值不同 number（null）为 0 number（undefined） 为 NaN Null 表示一个值被定义了，但是这个值是空值 Undefined 变量声明但未赋值

## 闭包是什么？有什么特性？对页面会有什么影响

> 闭包可以简单理解成：定义在一个函数内部的函数。其中一个内部函数 在包含它们的外部函数之外被调用时，就会形成闭包。
> 一句话可以概括：闭包就是能够读取其他函数内部变量的函数，或者子函数在外调用，子函数所在的父函数的作用域不会被释放。

**特点：**

1. 函数嵌套函数。
2. 函数内部可以引用外部的参数和变量。
3. 参数和变量不会被垃圾回收机制回收。

**使用：**

1. 读取函数内部的变量。
2. 这些变量的值始终保持在内存中，不会在外层函数调用后被自动清除。

**优点：** 

1. 变量长期驻扎在内存中
2. 避免全局变量的污染
3. 私有成员的存在 

**缺点：会造成内存泄露**

## Js 中常见的内存泄漏

1. 意外的全局变量
2. 被遗忘的计时器或回调函数
3. 脱离 DOM 的引用
4. 闭包

## 事件委托是什么

> 事件委托指的是，不在事件的发生地（直接 dom）上设置监 听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可 以监听到子元素上事件的触发，通过判断事件发生元素 DOM 的类 型，来做出不同的响应。

JS 高程上讲：事件委托就是利用事件冒泡，只制定一个时间处理程序， 就可以管理某一类型的所有事件。

事件委托，称事件代理，是 js 中很常用的绑定事件的技巧，事件委托就 是把原本需要绑定在子元素的响应事件委托给父元素，让父元素担当事 件监听的职务，事件委托的原理是 DOM 元素的事件冒泡

好处：比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。

## 什么是事件冒泡

一个事件触发后，会在子元素和父元素之间传播，这种传播分为三个阶段

1. 捕获阶段（从 window 对象传导到目标节点（从外到里），这个阶段不会 响应任何事件）
2. 目标阶段（在目标节点上触发）
3. 冒泡阶段（从目标节 点传导回 window 对象（从里到外））

**事件委托/事件代理就是利用事件冒泡的机制把里层需要响应的事件绑定到外层**

## 本地存储与 cookie 的区别

**Cookie**

Cookie 是小甜饼的意思。顾名思义，cookie 确实非常小，它的大小限 制为 4KB 左右。它的主要用途有保存登录信息，比如你登录某个网站市 场可以看到“记住密码”，这通常就是通过在 Cookie 中存入一段辨别用 户身份的数据来实现的

**localStorage**

localStorage 是 HTML5 标准中新加入的技术，它并不是什么划时代的 新东西。早在 IE 6 时代，就有一个叫 userData 的东西用于本地存储， 而当时考虑到浏览器兼容性，更通用的方案是使用 Flash。而如今， localStorage 被大多数浏览器所支持，如果你的网站需要支持 IE6+， 那以 userData 作为你方案是种不错的选择。

**sessionStorage**

sessionStorage 与 localStorage 的接口类似，但保存数据的生命周期 与 localStorage 不同。做过后端开发的同学应该知道 Session 这个词 的意思，直译过来是“会话”。而 sessionStorage 是一个前端的概念， 它只是可以将一部分数据在当前会话中保存下来，刷新页面数据依旧存 在。但当页面关闭后，sessionStorage 中的数据就会被清空。

**三者的异同**

| 特性 | 数据的生命期 | 存放数据大小 | 与服务器端通信 | 易用性 |
| --- | --- | --- | --- | --- |
| Cookie | 一般由服务器生成，可设置失效时间。如果在浏览器端生成 Cookie，默 认是关闭浏览器后失效 | 4K 左右 | 每次都会携带在 HTTP 头中，如果使用 cookie 保存过多数据会带来性能 问题 | 需要程序员自己封装，源生的 Cookie 接口不友好 |
| localStorage | 除非被清除，否则永久保存 | 一般为 5MB | 仅在客户端（即浏览器）中保存，不参与和服务器的通信 | 源生接口可以接受，亦可再次封装来对 Object 和 Array 有更好的支持 |
| sessionStorage | 仅在当前会话下有效，关闭页面或浏览器后被清除 | 一般为 5MB | 仅在客户端（即浏览器）中保存，不参与和服务器的通信 | 源生接口可以接受，亦可再次封装来对 Object 和 Array 有更好的支持 |

## ES6 新特性

const 和 let、模板字符串、箭头函数、函数的参数默认值、对象和数组 解构、for...of 和 for...in、ES6 中的类

## let 与 var 与 const 的区别

- var 声明的变量会挂载在 window 上，而 let 和 const 声明的变量不会
- var 声明的变量存在变量提升，let 和 const 不存在变量提升
- 同一作用域下 var 可以声明同名变量，let 和 const、不可以 
- let 和 const 声明会形成块级作用域
- let 暂存死区
- const 一旦声明必须赋值，不能用 null 占位，声明后不能再修改，如果 声明的是复合类型数据，可以修改属性

## 数组方法有哪些请简述

- `arr.push()` 从后面添加元素，返回值为添加完后的数组的长度
- `arr.pop()` 从后面删除元素，只能是一个，返回值是删除的元素
- `arr.shift()` 从前面删除元素，只能删除一个 返回值是删除的元素
- `arr.unshift()` 从前面添加元素, 返回值是添加完后的数组的长度
- `arr.splice(i,n)` 删除从 i(索引值)开始之后的那个元素。返回值是删除的元素
- `arr.concat()` 连接两个数组 返回值为连接后的新数组
- `str.split()` 将字符串转化为数组
- `arr.sort()` 将数组进行排序,返回值是排好的数组，默认是按照最左边的数 字进行排序，不是按照数字大小排序的
- `arr.reverse()` 将数组反转,返回值是反转后的数组
- `arr.slice(start,end)` 切去索引值 start 到索引值 end 的数组，不包含 end 索引的值，返回值是切出来的数组
- `arr.forEach(callback)` 遍历数组,无 return 即使有 return，也不会返回 任何值，并且会影响原来的数组 
- `arr.map(callback)` 映射数组(遍历数组),有 return 返回一个新数组
- `arr.filter(callback)` 过滤数组，返回一个满足要求的数组

## 什么是面向对象请简述

面向对象是一种思想，是基于面向过程而言的，就是说面向对象是将功 能等通过对象来实现，将功能封装进对象之中，让对象去实现具体的细 节；这种思想是将数据作为第一位，这是对数据一种优化，操作起来更 加的方便，简化了过程。

Js 本身是没有 class 类型的，但是每个函数都有一个 prototype 属性， prototype 指向一个对象，当函数作为构造函数时，prototype 就起到 类似于 class 的作用。

面向对象有三个特点：
  - **封装** 隐藏对象的属性和实现细节，对外提供公 共访问方式
  - **继承** 提高代码复用性，继承是多态的前提
  - **多态** 是父类或接口定义的引用变量可以指向子类或具体实现类的实例对象

## 普通函数和构造函数的区别

1. 构造函数也是一个普通函数，创建方式和普通函数一样，但是构造函数习惯上首字母大写
2. 调用方式不一样，普通函数直接调用，构造函数要用关键字 new 来调用
3. 调用时，构造函数内部会创建一个新对象，就是实例，普通函数不会创 建新对象
4. 构造函数内部的 this 指向实例，普通函数内部的 this 指向调用函数的 对象（如果没有对象调用，默认为 window）
5. 构造函数默认的返回值是创建的对象（也就是实例），普通函数的返回 值由 return 语句决定
6. 构造函数的函数名与类名相同

## 请简述原型/原型链/（原型）继承

**什么是原型：**

任何对象实例都有一个原型，也叫原型对象，这个原型对象由对象的 内置属性_proto_指向它的构造函数的 prototype 指向的对象，即任何对 象都是由一个构造函数创建的，但是不是每一个对象都有 prototype， 只有方法才有 prototype。

**什么是原型链**

原型链基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。我们知道，每个构造函数都有一个原型对象，每个原型对象都 有一个指向构造函数的指针，而实例又包涵一个指向原型对象的内部指针。<br>
原型链的核心就是依赖对象的 _proto_ 的指向，当自身不存在的属性 时，就一层层的扒出创建对象的构造函数，直至到 Object 时，就没有 _proto_ 指向了。<br>
因为 _proto_ 实质找的是 prototype，所以我们只要找这个链条上的构造 函数的 prototype。其中 Object.prototype 是没有 _proto_ 属性的，它 == null。<br>
每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的 指针，而实例都包含指向原型对象内部的指针。我们让原型对象（1）等 于另一个原型对象的实例（2）, 此时原型对象（2）将包含一个指向原型对象（1）的指针， 再让原型对象（2）的实例等于原型对象（3），如此层层递进就构成了实 例和原型的链条，这就是原型链的概念<br>

每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数想 指针(constructor)，而实例对象都包含一个指向原型对象的内部指针 (__proto__)。如果让原型对象等于另一个原型对象的实例，此时的原型 对象将包含一个指向另一个原型的指针(__proto__)，另一个原型也包含 着一个指向另一个构造函数的指针(constructor)。假如另一个原型又是 另一个类型的实例……这就构成了实例与原型的链条。也叫原型链 原型继承是 js 的一种继承方式，原型链作为实现继承的主要方法,其基本 思路是利用原型让一个引用类型继承另一个引用类型的属性和方法, 原型继承：利用原型中的成员可以被和其相关的对象共享这一特性，可 以实现继承，这种实现继承的方式，就叫做原型继承。

## Promise 的理解

**什么是 Promise**

我们都知道，Promise 是承诺的意思，承诺它过一段时间会给你一个结果。<br>
Promise 是一种解决异步编程的方案，相比回调函数和事件更合理和更 强大。<br>
从语法上讲，promise 是一个对象，从它可以获取异步操作的消息。

**Promise 有三种状态**

1. pending 初始状态也叫等待状态
2. fulfiled 成功状态
3. rejected 失败状态；状态一旦改变，就不会再变。

创造 promise 实例后，它会立即执行。

**Promise 的两个特点**
1. Promise 对象的状态不受外界影响
2. Promise 的状态一旦改变，就不会再变，任何时候都可以得到这个结 果，状态不可以逆

**Promise 的三个缺点**

1. 无法取消 Promise,一旦新建它就会立即执行，无法中途取消
2. 如果不设置回调函数，Promise 内部抛出的错误，不会反映到外部
3. 当处于 pending（等待）状态时，无法得知目前进展到哪一个阶段，是刚刚开始还是即将完成

## 我们用 Promise 来解决什么问题

> promise 是用来解决两个问题的 
1. 回调地狱，代码难以维护， 常常第一个的函数的输出是第二个函数的 输入这种现象
2. promise 可以支持多并发的请求，获取并发请求中的数据这个 promise 可以解决异步的问题，本身不能说 promise 是异步的

## 请简述 async 的用法

Async 就是 generation 和 promise 的语法糖，async 就是将 generator 的*换成 async，将 yiled 换成 await

函数前必须加一个 async，异步操作方法前加一个 await 关键字，意思就 是等一下，执行完了再继续走，注意：await 只能在 async 函数中运行， 否则会报错

Promise 如果返回的是一个错误的结果，如果没有做异常处理，就会报 错，所以用 try..catch 捕获一下异常就可以了

## 说说前端中的事件流

HTML 中与 javascript 交互是通过事件驱动来实现的，例如鼠标点 击事件 onclick、页面的滚动事件 onscroll 等等，可以向文档或者 文档中的元素添加事件侦听器来预订事件。想要知道这些事件是在什 么时候进行调用的，就需要了解一下“事件流”的概念。

**什么是事件流**：事件流描述的是从页面中接收事件的顺序,DOM2 级 事件流包括下面几个阶段。

  - 事件捕获阶段
  - 处于目标阶段
  - 事件冒泡阶段

addEventListener：addEventListener 是 DOM2 级事件新增的指 定事件处理程序的操作，这个方法接收 3 个参数：要处理的事件名、 作为事件处理程序的函数和一个布尔值。最后这个布尔值参数如果是 true，表示在捕获阶段调用事件处理程序；如果是 false，表示 在冒 泡阶段调用事件处理程序。<br>
IE 只支持事件冒泡

## JS 的 new 操作符做了哪些事情

new 操作符新建了一个空对象，这个对象原型指向构造函数的 prototype，执行构造函数后返回这个对象。

## 改变函数内部 this 指针的指向函数（bind，apply，call 的区别）

- 通过 apply 和 call 改变函数的 this 指向，他们两个函数的第一个参数都是一样的表示要改变指向的那个对象，第二个参数，apply 是 数组，而 call 则是 arg1,arg2...这种形式。
- 通过 bind 改变 this 作 用域会返回一个新的函数，这个函数不会马上执行。

## JS 的各种位置，比 clientHeight,scrollHeight,offsetHeight ,以及 scrollTop, offsetTop,clientTop 的区别

- `clientHeight`：表示的是可视区域的高度，不包含 border 和滚动条
- `offsetHeight`：表示可视区域的高度，包含了 border 和滚动条
- `scrollHeight`：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
- `clientTop`：表示边框 border 的厚度，在未指定的情况下一般为 0
- `scrollTop`：滚动后被隐藏的高度，获取对象相对于由 offsetParent 属 性指定的父坐标(css 定位的元素或 body 元素)距离顶端的高度。

## JS 拖拽功能的实现

首先是三个事件，分别是 `mousedown`，`mousemove`，`mouseup` 当鼠 标点击按下的时候，需要一个 tag 标识此时已经按下，可以执行 mousemove 里面的具体方法。clientX，clientY 标识的是鼠标的坐标， 分别标识横坐标和纵坐标，并且我们用 offsetX 和 offsetY 来表示元素的 元素的初始坐标，移动的举例应该是：鼠标移动时候的坐标-鼠标按下去 时候的坐标。也就是说定位信息为：鼠标移动时候的坐标-鼠标按下去时 候的坐标+元素初始情况下的 offetLeft.还有一点也是原理性的东西，也就 是拖拽的同时是绝对定位，我们改变的是绝对定位条件下的 left 以及 top 等等值。

补充：也可以通过 html5 的拖放（Drag 和 drop）来实现

## JS 中的垃圾回收机制

必要性：由于字符串、对象和数组没有固定大小，所有当他们的大小已知 时，才能对他们进行动态的存储分配。JavaScript 程序每次创建字符串、 数组或对象时，解释器都必 须分配内存来存储那个实体。只要像这样动态地分配了内存，最终都要释放这些内存以便他们能够被再用，否则， JavaScript 的解释器将会消耗完系统中所有可用的内存，造成系统崩溃。 这段话解释了为什么需要系统需要垃圾回收，JS 不像 C/C++，他有自己 的一套垃圾回收机制（Garbage Collection）。JavaScript 的解释器可以 检测到何时程序不再使用一个对象了，当他确定了一个对象是无用的时 候，他就知道不再需要这个对象，可以把它所占用的内存释放掉了。例如：

  ```js
  var a = "hello world"
  var b = "world"
  var a = b
  ``` 

这时，会释放掉"hello world"，释放内存以便再引用垃圾回收的方法： 标记清除、计数引用。 

**标记清除**

这是最常见的垃圾回收方式，当变量进入环境时，就标记这个变量为”进 入环境“,从逻辑上讲，永远不能释放进入环境的变量所占的内存，永远不 能释放进入环境变量所占用的内存，只要执行流程进入相应的环境，就可 能用到他们。当离开环境时，就标记为离开环境。

垃圾回收器在运行的时候会给存储在内存中的变量都加上标记（所有都 加），然后去掉环境变量中的变量，以及被环境变量中的变量所引用的变 量（条件性去除标记），删除所有被标记的变量，删除的变量无法在环境 变量中被访问所以会被删除，最后垃圾回收器，完成了内存的清除工作， 并回收他们所占用的内存。

**引用计数法** 

另一种不太常见的方法就是引用计数法，引用计数法的意思就是每个值没 引用的次数， 当声明了一个变量，并用一个引用类型的值赋值给改变量， 则这个值的引用次数为 1,；相反的，如果包含了对这个值引用的变量又 取得了另外一个值，则原先的引用值引用次数就减 1，当这个值的引用次数为 0 的时候，说明没有办法再访问这个值了，因此就把所占的内存给 回收进来，这样垃圾收集器再次运行的时候，就会释放引用次数为 0 的 这些值。

用引用计数法会存在内存泄露，下面来看原因：

  ```js
  function problem() {
    var objA = new Object()
    var objB = new Object()

    objA.someOtherObject = objB
    objB.anotherObject = objA
  }
  ```

在这个例子里面，objA 和 objB 通过各自的属性相互引用，这样的话， 两个对象的引用次数都为 2，在采用引用计数的策略中，由于函数执行之 后，这两个对象都离开了作用域，函数执行完成之后，因为计数不为 0， 这样的相互引用如果大量存在就会导致内存泄露。

特别是在 DOM 对象中，也容易存在这种问题：
  
  ```js
  var element = document.getElementById('')
  var myObj = new Object()
  myObj.element = element
  element.someObject = myObj
  ```
这样就不会有垃圾回收的过程。

## 监听对象属性的改变

我们假设这里有一个 user 对象, 在 ES5 中可以通过 `Object.defineProperty` 来实现已有属性的监听 

  ```js
  Object.defineProperty(user,'name',{
    set：function(key,value){

    }
  })
  ```
  
**缺点**：如果 id 不在 user 对象中，则不能监听 id 的变化

在 ES6 中可 以通过 Proxy 来实现

  ```js
  var user = new Proxy({}，{
    set：function(target, key, value, receiver){

    }
  })
  ```

这样即使有属性在 user 中不存在，通过 user.id 来定义也同样可以这样 监听这个属性的变化哦。

## 自己实现一个 bind 函数

原理：通过 apply 或者 call 方法 来实现。

1. 初始版本

```js
Function.prototype.bind = function(obj, arg) {
  var arg = Array.prototype.slice.call(arguments, 1)
  var context = this
  return function (newArg) { 
    arg = arg.concat(Array.prototype.slice.call(newArg))
    return context.apply(obj,arg)
  }
}
```

2. 考虑到原型链
  
  为什么要考虑？因为在 new 一个 bind 过生成的新函数的时候，必须的条件是要继承原函数的原型

```js
Function.prototype.bind = function(obj, arg) {
  var arg = Array.prototype.slice.call(arguments, 1)
  var context = this
  var bound = function (newArg) {
    arg = arg.concat(Array.prototype.slice.call(newArg))
    return context.apply(obj, arg)
  }

  var F = function() {} //这里需要一个寄生组 合继承
  F.prototype = context.prototype;
  bound.prototype = new F();
  return bound;
}
```
## 怎么控制一次加载一张图片，加载完后再加载下一张

**方法一**

```html
<script type="text/javascript ">
  var obj = new Image();
  obj.src = "http://www.phpernote.com/uploadfiles/editor/201107240502201179.jpg";
  obj.onload = function() {
    alert('图片的宽度为： ' + obj.width + '；图片的 高度为：' + obj.height);
    document.getElementById("mypic").innnerHTML = "<img src='" + this.src + "' />";
  }
</script>
<div id="mypic">onloadi ng……</div>
```

**方法二**

```html
<script type="text/javascript">
var obj = new Image();
obj.src = "http://www.phpernote.com/uploadfiles/editor/201107240502201179.jpg";
obj.onreadystatechange = function() {
  if (this.readyState == " complete") {
    alert('图片的宽度为： ' + obj.width + '；图片的 高度为：' + obj.height);
    document.getElementById("mypic").innnerHTML = "<img src='" + this.src + "' />";
  }
}
</script>
<div id="mypic">onloadi ng……</div>
```

## 实现 JS 中所有对象的深度克隆（包装对象，Date 对象，正 则对象）

通过递归可以简单实现对象的深度克隆，但是这种方法不管是 ES6 还是 ES5 实现，都有同样的缺陷，就是只能实现特定的 object 的 深度复制（比如数组和函数），不能实现包装对象 Number，String ， Boolean，以及 Date 对象，RegExp 对象的复制。

1. 前文的方法

```js
function deepClone(obj) {
  var newObj = obj instanceof Array ? [] : {};
  for (var i in obj) {
    newObj[i] = typeof obj[i] == 'object' ? deepClone(obj[i]) : obj[i];
  }
  return newObj;
}
```

这种方法可以实现一般对象和数组对象的克隆，比如：

```js
var arr = [1, 2, 3];
var newArr = deepClone(arr); // newArr->[1,2, 3]

var obj = { x: 1, y: 2 }
var newObj = deepClone(obj); // newObj={x:1,y:2}
```

但是不能实现例如包装对象 Number,String,Boolean,以及正则对 象 RegExp 和 Date 对象的克隆，比如：

```js
//Number 包装对象
var num = new Number(1);
typeof num // "object"
var newNum = deepClone(num); //newNum -> {} 空对象 

//String 包装对象 
var str = new String("hello");
typeof str //"object"
var newStr = deepClone(str); //newStr-> {0:'h',1:'e',2:'l',3:'l',4:'o'};

//Boolean 包装对象 
var bol = new Boolean(true);
typeof bol //"object"
var newBol = deepClone(bol); // newBol ->{} 空对象
```

2. valueof()函数

所有对象都有 valueOf 方法，valueOf 方法对于：如果存在任意原 始值，它就默认将对象转换为表示它的原始值。对象是复合值，而且 大多数对象无法真正表示为一个原始值， 因此默认的 valueOf()方法 简单地返回对象本身，而不是返回一个原始值。数组、函数和正则表 达式简单地继承了这个默认方法，调用这些类型的实例的 valueOf() 方法只是简单返回这个对象本身。


对于原始值或者包装类：

```js
function baseClone(base) {
  return base.valueOf();
}

//Number 
var num = new Number(1);
var newNum = baseClone(num); //newNum->1 

//String
var str = new String('hello');
var newStr = baseClone(str); // newStr->"hello" 
//Boolean 
var bol = new Boolean(true);
var newBol = baseClone(bol); //newBol-> true
```

其实对于包装类，完全可以用=号来进行克隆，其实没有 深度克隆一说， 这里用 valueOf 实现，语法上比较符合 规范。

## 来讲讲 JS 的闭包

闭包是指有权访问另外一个函数作用域中的变量的函数。 闭包就是函数的局部变量集合，只是这些局部变量在函数返回后会继 续存在。闭包就是就是函数的“堆栈”在函数返回后并不释放，我们 也可以理解为这些函数堆栈并不在栈上分配而是在堆上分配。当在一 个函数内定义另外一个函数就会产生闭包。

为什么要用： 匿名自执行函数：我们知道所有的变量，如果不加上 var 关键字，则 默认的会添加到全局对象的属性上去，这样的临时变量加入全局对象 有很多坏处，比如：别的函数可能误用这些变量；造成全局对象过于 庞大，影响访问速度(因为变量的取值是需要从原型链上遍历的)。除 了每次使用变量都是用 var 关键字外，我们在实际情况下经常遇到 这样一种情况，即有的函数只需要执行一次，其内部变量无需维护， 可以用闭包。

结果缓存：我们开发中会碰到很多情况，设想我们有一个处理过程很耗时的函数对象， 每次调用都会花费很长时间，那么我们就需要将 计算出来的值存储起来，当调用这个函数的时候，首先在缓存中查找， 如果找不到，则进行计算，然后更新缓存并返回值，如果找到了，直 接返回查找到的值即可。闭包正是可以做到这一点，因为它不会释放 外部的引用，从而函数内部的值可以得以保留。

## Js 中.call()与.apply()区别

apply：调用一个对象的一个方法，用另一个对象替换当前对象。<br>
call：调用一个对象的一个方法，用另一个对象替换当前对象。

从定义中可以看出，call 和 apply 都是调用一个对象的一个方法，用另一 个对象替换当前对象。而不同之处在于传递的参数，apply 最多只能有两 个参数——新 this 对象和一个数组 argArray，如果 arg 不是数组则会报错

相同点: 两个方法产生的作用是完全一样的。call, apply 作用就是借用别 人的方法来调用,就像调用自己的一样<br>
不同点: 方法传递的参数不同

## 为什么会造成跨域/请简述同源策略

出现跨域问题的原因: 在前后端分离的模式下，前后端的域名是不一致的，此时就会发生跨域 访问问题。在请求的过程中我们要想回去数据一般都是 post/get 请求， 所以..跨域问题出现

跨域问题来源于 JavaScript 的同源策略，即只有 协议+主机名+端口号 (如存在)相同，则允许相互访问。也就是说 JavaScript 只能访问和操作自 己域下的资源，不能访问和操作其他域下的资源。

同源策略 是由 NetScape 提出的一个著名的安全策略。所谓的同源，指 的是协议，域名，端口相同。浏览器处于安全方面的考虑，只允许本域 名下的接口交互，不同源的客户端脚本，在没有明确授权的情况下，不 能读写对方的资源。

## 请输出三种减少页面加载时间的方式

1. 优化图片 
2. 图像格式的选择（GIF：提供的颜色较少，可用在一些对颜色要求不高 的地方） 
3. 优化 CSS（压缩合并 css，如 margin-top, margin-left...) 
4. 网址后加斜杠（如 www.campr.com/目录，会判断这个目录是什么文 件类型，或者是目录。） cdn 托管 
5. 标明高度和宽度（如果浏览器没有找到这两个参数，它需要一边下载图片一边计算大小，如果图片很多，浏览器需要不断地调整页面。这不 但影响速度，也影响浏览体验。当浏览器知道了高度和宽度参数后，即使图片暂时无法显示，页面上也 会腾出图片的空位，然后继续加载后面的内容。从而加载时间快了，浏 览体验也更好了）
6. 减少 http 请求（合并文件，合并图片）

## This 指向

在 JavaScript 中，this 通常指向的是我们正在执行的函数本身，或者是， 指向该函数所属的对象。

- 全局的 this → 指向的是 Window
- 对象中的 this → 指向其本身
- 事件中 this → 指向事件对象

## 什么是 jsonp 工作原理是什么？他为什么不 是真正的 ajax

Jsonp 其实就是一个跨域解决方案。<br>
Js 跨域请求数据是不可以的，但是 js 跨域请求 js 脚本是可以的。 所以可以把要请求的数据封装成一个 js 语句，做一个方法的调用。 跨域请求 js 脚本可以得到此脚本。得到 js 脚本之后会立即执行。 可以把数据做为参数传递到方法中。就可以获得数据。从而解决跨域问题。<br>
jsonp 原理：(动态创建 script 标签，回调函数) 浏览器在 js 请求中，是允许通过 script 标签的 src 跨域请求，可以在请 求的结果中添加回调方法名，在请求页面中定义方法，就可获取到跨域 请求的数据。

为什么不是真正的 ajax?

1. ajax 和 jsonp 这两种技术在调用方式上"看起来"很像，目的也一样， 都是请求一个 url，然后把服务器返回的数据进行处理，因此 jquery 和 ext 等框架都把 jsonp 作为 ajax 的一种形式进行了封装；
2. 但 ajax 和 jsonp 其实本质上是不同的东西。ajax 的核心是通过 XmlHttpRequest获取本页内容，而jsonp的核心则是动态添加`<script>` 标签来调用服务器提供的 js 脚本。
3. 所以说，其实 ajax 与 jsonp 的区别不在于是否跨域，ajax 通过服务 端代理一样可以实现跨域，jsonp 本身也不排斥同域的数据的获取。
4. 还有就是，jsonp 是一种方式或者说非强制协议，如同 ajax 一样，它也不一定非要 json 格式来传递数据，如果你愿意，字符换也行，只不过 这样不利于 jsonp 提供公开服务。

## 请掌握 2 种以上数组去重的方式

- 使用 indexof（）方法
- 使用 lastindexof（）方法 和 indexof 方法一样 indexof 从头部开始匹 配 lastindexof 从尾部匹配
- ES6 的 set 结构 set 不接受重复数据
- 使用 sort 方法先将原数组排序，然后与相邻的比较，如果不同则存入新
- 数组使用 filiter 和 indexof 方法
- 使用 ES6 的 set 和扩展运算符
- 使用 set 和 Array.from（）方法 array.from 可以将 set 结构转 成数组 
- 使用 splice 和双层循环 
- 使用 includes 方法

## 深浅拷贝是什么如何实现

深拷贝：指针赋值，并且内容拷贝
浅拷贝：只是简单的指针赋值 数组 
浅拷贝: 如果是数组，可以使用数组的一些方法实现：slice()，concat() 返回一个新数组的特性实现拷贝。用扩展运算符 spread 实现数组深拷贝: JSON.parse(JSON.stringify()) 不仅适用于数组还适用于对象。不能拷贝 函数，undefined，symbol。

## 为什么 js 是弱类型语言

弱类型语言实现相对于强类型语言来说的，在强类型语言中，变量类型 有多种，比如 int char float Boolean 不同类型相互转换有时需要强制 转换，而 jacascript 只有一种类型 var，为变量赋值时会自动判断类型并 转换，所以是弱类型语言。

## For 循环与 map 循环有什么区别

- For 遍历对象自身的和继承可枚举的属性，也就是说会包括哪些原型链上 的属性
- Map 方法不会对空数组进行检测，map 会返回一个新数组，不会对原数 组产生影响

## 请写出一个简单的类与继承

创建类有三种： 

1. 使用 function 和 this 关键字
2. 原型方法 用 prototype 和 this 关键字
3. 使用 object.create()方法构造 

继承有六种： 

1. 原型继承
2. 借用构造函数继承
3. 组合继承
4. 原型式继承
5. 寄生式继承
6. 寄生组合式继承

## 箭头函数与普通函数的区别

- 箭头函数是匿名函数，不能作为构造函数，不能使用 new
- 箭头函数不能绑定 arguments，要用 rest 参数解决
- 箭头函数没有原型属性
- 箭头函数的 this 永远指向其上下文的 this
- 箭头函数不能绑定 this，会捕获其所在的上下文的 this 值，作为自己的 this 值

## 什么是 js 内存泄露

内存泄漏是指一块被分配的内存既不能使用又不能回收，直到浏览器进 程结束

释放内存的方法：赋值为 null
