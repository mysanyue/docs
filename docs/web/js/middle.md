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
