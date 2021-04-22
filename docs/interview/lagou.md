---
navbar: true
title: 拉钩题集
---

## 输出打印1 

> 阅读下面代码，我们只考虑浏览器环境下的输出结果，写出它们结果打印的先后顺序

```js
console.log("AAAA");
setTimeout(() => console.log("BBBB"), 1000);
const start = new Date();
while (new Date() - start < 3000) {}
console.log("CCCC");
setTimeout(() => console.log("DDDD"), 0);
new Promise((resolve, reject) => {
    console.log("EEEE");
    foo.bar(100);
  })
  .then(() => console.log("FFFF"))
  .then(() => console.log("GGGG"))
  .catch(() => console.log("HHHH"));
console.log("IIII");
```

**答案： **

浏览器下 输出结果的先后顺序是

```js
AAAA
CCCC
EEEE
IIII
HHHH
BBBB
DDDD
```

:::tip 这道题考察重点是  js异步执行 宏任务 微任务

一开始代码执行，输出 `AAAA`

第二行代码开启一个计时器 `t1` (一个称呼)，这是一个异步任务且是宏任务，需要等到 `1` 秒后提交。

第四行是个 `while` 语句，需要等待 `3` 秒后才能执行下面的代码,这里有个问题，就是 `3` 秒后上一个计时器 `t1` 的提交时间已经过了，但是线程上的任务还没有执行结束，所以暂时不能打印结果，所以它排在宏任务的最前面了。

第五行又输出 `CCCC`

第六行又开启一个计时器 `t2` （称呼），它提交的时间是 `0` 秒（其实每个浏览器器有默认最小时间的，暂时忽略），但是之前的t1任务还没有执行，还在等待，所以 `t2` 就排在 `t1` 的后面。（t2排在t1后面的原因是 `while` 造成的）都还需要等待，因为线程上的任务还没执行完毕。

第七行 `new Promise` 将执行 `promise` 函数，它参数是一个回调函数，这个回调函数内的代码是同步的，它的异步核心在于 `resolve` 和 `reject` ，同时这个异步任务在任务队列中属于微任务，是优先于宏任务执行的，(不管宏任务有多急，反正我是VIP)。所以先直接打印输出同步代码 `EEEE` 。第九行中的代码是个不存在的对象，这个错误要抛给 `reject` 这个状态，也就是 `catch` 去处理，但是它是异步的且是微任务，只有等到线程上的任务执行完毕，立马执行它，不管宏任务（计时器，`ajax` 等）等待多久了。

第十四行，这是线程上的最后一个任务，打印输出 `IIII`

我们先找出线程上的同步代码，将结果依次排列出来：`AAAA  CCCC  EEEE IIII`

然后我们再找出所有异步任务中的微任务 把结果打印出来 `HHHH`

最后我们再找出异步中的所有宏任务，这里 `t1` 排在前面 `t2` 排在后面（这个原因是 `while` 造成的），输出结果顺序是 `BBBB DDDD`
:::

所以综上 结果是  `AAAA  CCCC  EEEE  IIII  HHHH BBBB DDDD`


## 输出打印2

> 阅读下面代码，我们只考虑浏览器环境下的输出结果，写出它们结果打印的先后顺序，并分析出原因。

```js
new Promise((resolve, reject) => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
  }, 0);
  console.log("C");
  resolve();
  console.log("D");
}).then(() => {
  console.log("E");
  new Promise((resolve, reject) => {
    console.log("F");
    resolve();
    console.log("G");
  }).then(() => {
    setTimeout(() => {
      console.log("H");
    }, 0);
    console.log("I");
  }).then(() => {
    console.log("J");
  });
}).then(() => {
  console.log("K");
});

setTimeout(() => {
  console.log("L");
}, 0);

new Promise((resolve, reject) => {
  console.log("M");
  resolve();
}).then(() => {
  setTimeout(() => {
    new Promise((resolve, reject) => {
      console.log("N");
      resolve();
    }).then(() => {
      setTimeout(() => {
        console.log("O");
      }, 0);
    }).then(() => {
      console.log("P");
    });
  }, 0);
});

console.log("Q");
```

:::tip 解析：首先，我们要知道微任务会先于宏任务执行。知道了这一点，我们来看下面的代码。

还是先看最外层的结构， `Promise` 类-定时器 `Promise` 类 `console.log`。先执行同步代码，打印出第一个 `Promise` 类里面的 `A、C、D`，第一个 `Promise` 里面的定时器进去宏任务列表，排在第一位。这个 `Promise` 产生的微任务进入第一轮微任务列表，排在第一位。最外层定时器进入宏任务列表，排在第二位。打印第二个 `Promise` 类里面的M，第二个 `Promise` 产生的微任务进入第一轮微任务列表，排在第二位。最后执行 `console.log("Q")`，打印出 `Q`。

微任务会先于宏任务执行，所以先执行第一个 `Promise` 的第一个 `then` ，打印 `E、F、G`。这个 `then` 里面又生成了一个新的 `Promise` 类，同理，新的 `Promise` 产生的微任务进入第二轮微任务列表，排在第一位。`then` 会返回一个 `Promise` 类，也就是说这个 `then` 也会产生一个微任务，进入到第二轮微任务列表，排在第二位。接下来执行第二个 `Promise` 的第一个 `then`，这个 `then` 里面是一个定时器，进入到宏任务列表，排在第三位。本轮微任务结束。

第二轮微任务，先执行第一个 `Promise` 的第一个 `then` 里面的 `Promise` 类的第一个 `then`，`then` 里面的定时器进入宏任务列表，排在第四位，执行 `console.log("I")`，打印I。这个 `then` 返回的 `Promise` 类生成的微任务进入到第三轮的微任务列表中，排在第一位。继续执行第一个 `Promise` 的第二个 `then`，打印 `K` 。本轮微任务结束。

第三轮微任务，执行第一个 `Promise` 的第一个then里面的 `Promise` 类的第二个 `then`，打印 `J` 。执行到这里，微任务已经全部执行完毕，开始执行宏任务。

执行第一个 `Promise` 里面的定时器，打印 `B` 。执行最外层的定时器，打印 `L` 。执行第二个 `Promise` 的第一个 `then` 里面的定时器，生成一个新的 `Promise` 类，打印这个 `Promise` 类里面的N，生成一个微任务，加入到微任务列表中。执行到这里，宏任务列表里面还有一个任务未执行，由于微任务会先于宏任务执行，所以宏任务会暂停执行，先执行微任务。

执行的是第二个 `Promise` 的then里面的 `Promise` 的第一个 `then`，这个 `then` 里面是定时器，加入到宏任务列表里面，排在第二位。这个 `then` 返回的 `Promise` 生成一个微任务，进入下一轮的微任务列表。

执行第二个 `Promise` 的then里面的 `Promise` 的第二个 `then`，打印 `P`。执行到这里，微任务已经全部执行完毕，开始执行宏任务。

执行第一个 `Promise` 的第一个then里面的 `Promise` 类的第一个 `then` 里面的定时器，打印 `H`。

最后执行第二个 `Promise` 的then里面的 `Promise` 类的第一个 `then` 里面的定时器，打印 `O`。
:::

最后的打印顺序为：

```
A
C
D
M
Q
E
F
G
I
K
J
B
L
N
P
H
O
```

## promise编程

```js
var urls = [
  'http://jsonplaceholder.typicode.com/posts/1',
  'http://jsonplaceholder.typicode.com/posts/2', 
  'http://jsonplaceholder.typicode.com/posts/3', 
  'http://jsonplaceholder.typicode.com/posts/4',
  'http://jsonplaceholder.typicode.com/posts/5', 
  'http://jsonplaceholder.typicode.com/posts/6', 
  'http://jsonplaceholder.typicode.com/posts/7', 
  'http://jsonplaceholder.typicode.com/posts/8',
  'http://jsonplaceholder.typicode.com/posts/9', 
  'http://jsonplaceholder.typicode.com/posts/10'
]

function loadDate (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      resolve(xhr.responseText)
    }
    xhr.open('GET', url)
    xhr.send()
  })
}
```

> 在 `urls` 数组中存放了 10 个接口地址。同时还定义了一个 `loadDate` 函数，这个函数接受一个 `url` 参数，返回一个 `Promise` 对象，该 `Promise` 在接口调用成功时返回 `resolve`，失败时返回 `reject`。

要求：任意时刻，同时下载的链接数量不可以超过 3 个。试写出一段代码实现这个需求，要求尽可能快速地将所有接口中的数据得到。

（今天早上看到群里有大佬在说这样的题，那咱们就来一道，头条、阿里都有出过，比较考验编程功底）

:::tip 解题思路

按照题意我们可以这样做，首先并发请求 3 个 `url` 中的数据，当其中一条 `url` 请求得到数据后，立即发起对一条新 `url` 上数据的请求，我们要始终让并发数保持在 3 个，直到所有需要加载数据的 `url` 全部都完成请求并得到数据。

用 Promise 实现的思路就是，首先并发请求3个  `url` ，得到 3 个 `Promise` ，然后组成一个叫  `promises` 的数组。再不断的调用 `Promise.race` 来返回最快改变状态的 `Promise` ，然后从数组`promises`中删掉这个 `Promise` 对象，再加入一个新的 `Promise`，直到所有的 `url` 被取完，最后再使用 `Promise.all` 来处理一遍数组`promises`中没有改变状态的 `Promise`。
:::

:::tip 参考答案
```jsx
var urls = [
  'http://jsonplaceholder.typicode.com/posts/1',
  'http://jsonplaceholder.typicode.com/posts/2',
  'http://jsonplaceholder.typicode.com/posts/3',
  'http://jsonplaceholder.typicode.com/posts/4',
  'http://jsonplaceholder.typicode.com/posts/5',
  'http://jsonplaceholder.typicode.com/posts/6',
  'http://jsonplaceholder.typicode.com/posts/7',
  'http://jsonplaceholder.typicode.com/posts/8',
  'http://jsonplaceholder.typicode.com/posts/9',
  'http://jsonplaceholder.typicode.com/posts/10'
]

function loadDate(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function() {
      resolve(xhr.responseText)
    }
    xhr.open('GET', url)
    xhr.send()
  })
}

function limitLoad(urls, handler, limit) {
  // 对数组进行一个拷贝
  const sequence = [].concat(urls)
  let promises = [];

  //实现并发请求达到最大值
  promises = sequence.splice(0, limit).map((url, index) => {
    // 这里返回的 index 是任务在数组 promises 的脚标
    //用于在 Promise.race 后找到完成的任务脚标
    return handler(url).then(() => {
      return index
    });
  });

  // 利用数组的 reduce 方法来以队列的形式执行
  return sequence.reduce((last, url, currentIndex) => {
    return last.then(() => {
      // 返回最快改变状态的 Promise
      return Promise.race(promises)
    }).catch(err => {
      // 这里的 catch 不仅用来捕获前面 then 方法抛出的错误
      // 更重要的是防止中断整个链式调用
      console.error(err)
    }).then((res) => {
      // 用新的 Promise 替换掉最快改变状态的 Promise
      promises[res] = handler(sequence[currentIndex]).then(
        () => { return res });
    })
  }, Promise.resolve()).then(() => {
    return Promise.all(promises)
  })

}
limitLoad(urls, loadDate, 3)

/*
因为 loadDate 函数也返回一个 Promise
所以当 所有图片加载完成后可以继续链式调用

limitLoad(urls, loadDate, 3).then(() => {
    console.log('所有url数据请求成功');
}).catch(err => {
    console.error(err);
})
*/
```
:::
