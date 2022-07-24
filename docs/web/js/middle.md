---
title: js 中级一
---

## 谈谈你对闭包的理解

- **闭包就是能够读取其他函数内部的变量**
- 其**优点是可以避免全局变量的污染**
- 其**缺点是闭包的变量不会被回收**

## 谈谈你对作用域的理解

作用域分为**函数作用域**，**块级作用域**，**词法作用域**，函数作用域指在函数内声明的所有变量在函数体内始终是可见的，可以在整个函数的范围内使用及复用；块级作用域指在变量声明的代码段之外是不可见的，如 ES6 的 `let` 以及 `const` ；词法作用域指函数在定义它们的作用域里运行，而不是在执行它们的作用域里运行，而 JavaScript 采用的就是词法作用域，也称为静态作用域。

## 了解原型链吗

```js
function Foo(){
  getName = function(){
      console.log(1);
  };
  return this;
} 
Foo.getName = function(){
  console.log(2);
}
Foo.prototype.getName = function(){
  console.log(3);
}
var getName = function(){
  console.log(4);
}
function getName(){
  console.log(5);
}
//输出以下的输出结果
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

> 2，4，1，1，2，3，3

:::tip 解析
第一个，`Foo.getName()` 其实就是函数 `Foo` 的静态方法，所以是 `2`<br>
第二个，`function` 有声明提升，声明后被 `var getName=` 覆盖，则 `getName` 为 `4`<br>
第三个，`Foo()` 的 `return this` 为 `window`，`window.getName` 在 `Foo` 里面被覆盖，则输出 `1`<br>
第四个，同上，因调用了 `Foo()` `window` 的 `getName` 被覆盖，所以还是 `1`<br>
第五个，相当于调用了 `Foo` 对象上的 `getName`，又因为 `Foo.getNname`，所以是 `2`<br>
第六个，相当于 `(new Foo()).getName()`，先执行了 `new Foo()`，返回一个实例对象，这个对象的 `getName` 为 `prototype` 上的 `getName`，所以是 `3`<br>
第七个，差不多。
:::

## 数组去重或数组扁平化，你实现一下

- 数组去重可以用 `Array.from(new Set(arr))`，`[...new Set(arr)]`，`splice()`，`indexOf()`，`includes()`，`Map()`，`Sort()`
- 数组扁平化可以用普通递归，`toString`，`reduce`，`some + 展开运算符`，`Array.prototype.flat`，`some + [].concat.apply`

```js
// 那我就随便写一个了
function flatten(arr){
  return arr.reduce(function(prev, cur){
    return prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
```

## HTML5 readonly 和 display 有什么区别

> readonly 和 display 的作用是使用户不能够修改表单域中的内容

但是二者还是有却别的：

1. readonly 只针对 input(text/password) 和 textarea 有效，而 display 对于所有表单元素有效，包括 select、radio、checkbox、button 等...
2. 在表单元素使用 display 后，我们将表单以 post 或者 get 方式提交的话，这个元素的值不会被传递出去，而 readonly 会将该值传递出去。

## var、let、const 三者区别，以及 const 和 let 声明的变量不在 window 上，那到底在哪里

#### 1. let、const 以及 var 的区别是什么?

  - 其是否会挂载到 window 上

    var 声明的变量会挂载在 window 上，而 let 和 const 声明的变量不会挂载到 window 上，它形成了一个块作用域
  
  - 是否存在变量提升

    var 声明变量存在变量提升，let 和 const 不存在变量提升

  - 暂时性死区

    let 和 const 定义的变量在定义之前调用，会抛出错误(形成了暂时性死区)，而 var 不会

  - 是否一旦声明，必须立即初始化赋值

    var 和 let 声明的时候可以不初始化赋值，const 声明时必须赋值

  - 是否形成块作用域

    let 和 const 声明形成块作用域，var 变量提升不会形成作用域

  - 同一作用域下是否可以重复声明

    同一作用域下 let 和 const 不允许重复声明，否则会报错，而 var 可以

  - 是否可以修改

    var 和 let 可以可以修改声明的变量，const 不可以<br>
    const 声明的是一个只读的常量。一旦声明，**常量的值就不能改变**( 如果声明的常量是一个对象的话，那么**不能改变的是对象的引用地址**)

#### 全局作用域中，用 const 和 let 声明的变量去哪了

**在 ES5 中，全局变量直接挂载到全局对象 window 的属性上**，所以能在 window 上看到 var 和 function 声明的全局变量

```js
var a = 10
function f() {}

console.log(window.a) // 10
console.log(window.f) // f(){}
```

**在 ES6 中，全局变量从全局对象 window 中脱离**，但是为了保持兼容性，**旧的不变**，所以 var、function 声明的全局变量依然可以在 window 对象上看到，**而 let、const 声明的全局变量在 window 对象上看不到，在 script 中形成了一个块级作用域，这样在全局就可以访问到**

```js
let a = 1;
const B = 2;

console.log(window.a); // undefined
console.log(window.B); // undefined
console.log(a);     // 1,  通过块作用域访问到的
console.log(B);   // 2， 通过块作用域访问到的
```

通过设置断点，看看浏览器是怎么处理的

![var let const](/assets/images/js/scope.png)

通过上图也可以看到，**在全局作用域中，用 let 和 const 声明的全局变量并没有在全局对象中，只是一个块级作用域（Script）中**。<br>
那要怎么获取呢？在定义变量的块级作用域中就能获取啊。<br>
可以发现 let 和 const 声明的变量不属于顶层对象 Window，所以 window.aa 为 undefined。若要访问，直接访问即可。

#### const 声明的值的不可改变性说明

**const 声明的值：**

- 如果是基本类型（string,number,boolean,null,undefined），不可修改声明的基本类型的值。
- 如果是引用类型（Function,Array,Object ），不可修改引用类型的指针(地址)，但是具体的值是可以修改的。

**本质**

**const 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动**。对于**基本类型的数据**（数值、字符串、布尔值），**值就保存在变量指向的那个内存地址**，因此等同于常量。

对于**引用类型的数据**（主要是对象和数组），**变量指向的内存地址，保存的只是一个指向实际数据的指针**，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。

**具体分析**

```js
const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错
```

上面代码中，常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错。

如果真的想将对象冻结，应该使用 Object.freeze 方法。

```js
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```

上面代码中，常量 foo 指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错。

除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数

```js
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
```
