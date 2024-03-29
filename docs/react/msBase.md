---
title: React 基础一
---

## React 中的 key 是什么，有什么作用

key 是 react 在渲染一系列相同类型的兄弟元素时，给每个元素指定一个稳定、可预测、兄 弟间唯一的值，来帮助 React 识别哪些元素改变了，比如添加和删除，这样做可以避免在 某些场景下的错误渲染并且提升 React 的渲染性能<br>
key 的作用是用在使用 diff 算法对比 react 更新前后两棵树的比较时使用的，使得树的转 换效率得以提高，组件实例基于它们的 key 来决定是否更新以及复用

## 组件通信

组件间通信也就是两个或多个组件之间相互传递消息。从关系上来划分：

- 父级向子级传递信息
- 子级向父级传递信息
- 同级之间传递信息
- 跨组件传递信息

React 是一种单向数据流的设计，也就是说信息只能从父级向子级一层一层向下传递

1. 父级向子级进行通信：这种信息传递比较简单，父组件在调用子组件时，只需要把想传 递的数据加在子组件的属性上，然后在子组件内部通过 props 属性来接收就可以了。之后， 每次 props 属性发生变化，子组件都会重新进行渲染的
2. 子组件向父组件传递信息：React 是单向数据流，没有办法从子组件直接传递信息到父 组件，但是可以在父组件上定义好回调后，把回调函数通过 props 属性传递给子组件，利 用回调向父组件传递信息
3. 同级组件之间的信息传递：通过状态提升，将信息共同保存在父组件中，在通过回调函 数更改信息后在用 props 传递给子组件
4. 跨层级组件通信：利用高级 API-context 上下文的方式，这里直接转到我的另外一篇博 客里面有详细介绍 React 高级 API-Context
5. Redux、React-redux 等状态管理库结合异步请求处理 redux-thunk、redux-saga

## React 合成事件机制

React 中有自己的事件系统模式，通常被称为 React 合成事件。之所以采用这种自己定义 的合成事件，一方面是为了抹平事件在不同平台体现出来的差异性，这使得 React 开发者 不需要自己再去关注浏览器事件兼容性问题；另一方面是为了统一管理事件，提高性能， 这主要体现在 React 内部实现事件委托，并且记录当前事件发生的状态上<br>
事件委托，也就是我们通常提到的事件代理机制，这种机制不会把事件处理函数直接绑定 在真实的节点上，而是把所有的事件绑定到结构的最外层，使用一个统一的事件监听和处 理函数。当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象；当 事件放生时，首先被这个统一的事件监听器处理，然后在映射表里找到真正的事件处理函 数并调用。这样做简化了事件处理和回收机制。效率也有很大的提升<br>
记录当前事件发生的状态，即记录事件执行的上下文，这便于 React 来处理不同事件的优 先级，达到谁优先级高先处理谁的目的，这里也就实现了 React 的增量渲染思想，可以预 防掉帧，同时达到页面更加顺滑的目的，提升用户体验

## 细读 setState

> setState(updater, [callback])

其将对组件的 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲此组件 及其子组件。这是用于更新用户界面以及响应事件处理器和处理服务器数据的主要方式 React 会延迟调用 setState，然后通过一次传递更新多个组件，不会保证 state 的变更立即 生 效 ， 如 果 要 立 即 拿 到 this.state 的 值 ， 可 以 在 其 回 调 函 数 callback 或 者 componentDidUpdate 里取到最新的值

参数 updater 有两种形式：

第一种是函数形式 `this.setState((state, props) => stateChange)`
第二种是对象形式，会进行批量更新，如果要使用前一次的 state 值，请使用函数形式 `this.setState({value:2})`

setState 中的异步与同步：

异步是指批量更新，达到性能优化的目的，在合成事件和生命周期中都是异步的，不能立 马拿到 this.state 的值<br>
同步是指立马能拿到最新的 this.state 值，在定时器 setTimeout 和原生事件中是同步的， 另外在其第二个参数回调函数 callback 中和 componentDidUpdate 更新生命周期函数中 也能得到最新的 this.state 值

## 函数组件与 class 组件如何选择

1. hook 之前的函数组件是什么样子 无状态、无副作用，只能做单纯的展示组件
2. class 组件有什么弊端，为什么要引入 hook

   - 在组件之间复用状态逻辑很难
   - 复杂组件变得难以理解
   - 难以理解的 class

3. 引入了 hook 之后的函数组件发生了哪些变化
   函数组件可以存储和改变状态值(useState、useReducer)，可以执行副作用(useEffect、 useLayoutEffect)，还可以复用状态逻辑(自定义 hook)
4. 函数组件与 class 组件如何选择
   出现以上缺点的情况下都适合使用函数组件，函数组件与 class 组件无缝对接

## React 性能优化方案

1. 减少不必要渲染，如用 shouldComponentUpdate、PureComponent、React.memo 实现
2. 数据缓存

   - useMemo 缓存参数、useCallback 缓存函数
   - 函数、对象尽量不要使用内联形式(如 context 的 value object、refs function)
   - Route 中的内联函数渲染时候使用 render 或者 children，不要使用 component， 当你用 component 的时候，Router 会用指定的组件和 React.createElement 创建一个新 的[React elment]。这意味着当你提供的是一个内联函数的时候，每次创建 render 都会创建一个新的组件。这会导致不再更新已经现有组件，⽽是直接卸载然后再去挂载⼀个新的 组件。因此，当⽤到内联函数的内联渲染时，请使⽤ render 或者 children

- 不要滥用功能项，如 context、props 等
- 懒加载，对于长页表分页加载
- 减少 http 请求

## React-router 路由模式

hash 模式（HashRouter）：通过监听 hashchange 事件 ，在回调里拿到 window.location.hash 的值。 hash 就是指 url 尾巴后的 # 号以及后面的字符。<br>
hash 模式原理： 使用 window.location.hash 属性及窗口的 onhashchange 事件，可以实现监听浏览器地 址 hash 值变化，执行相应的 js 切换网页。 hash 指的是地址中#号以及后面的字符，也称 为散列值。

history 模式（BrowserRouter）： 利用 history API 实现 url 地址改变，网页内容改变。<br>
history 模式原理： window.history 属性指向 History 对象，它表示当前窗口的浏览历史。 History 对象保 存了当前窗口访问过的所有页面网址。
