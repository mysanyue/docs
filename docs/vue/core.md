## 你了解 Vue 的响应式原理吗?

**⾸先要了解 Vue 中的三个核⼼类：**

1. **Observer**：给对象的属性添加 `getter` 和 `setter`，⽤于依赖收集和派发更新
2. **Dep**：⽤于收集当前响应式对象的依赖关系,每个响应式对象包括⼦对象都拥有⼀个 `Dep` 实例，`dep.subs` 是 `watcher` 实例的数组. 当数据有变更时,会通过 `dep.notify()` 通知各个 `watcher`。
3. **Watcher**：观察者对象, 实例分为 `render watcher`(渲染), `computed watcher`(计算属性), `user watcher`(侦听器)三种

- 依赖收集

  1. `initState` 时,对 `computed` 属性初始化时,触发 `computed watcher` 依赖收集
  2. `initState` 时,对侦听属性初始化时,触发 `user watcher` 依赖收集
  3. `render()` 的过程,触发 `render watcher` 依赖收集
  4. `re-render` 时, `vm.render()` 再次执⾏,会移除所有 `subs` 中的 `watcher` 的订阅,重新赋值。

- 派发更新

  1. 组件中对响应的数据进⾏了修改,触发 `setter` 的逻辑
  2. 调⽤ `dep.notify()`
  3. 遍历所有的 `subs`（Watcher 实例）,调⽤每⼀个 `watcher` 的 `update` ⽅法。

:::tip 总结⼀下原理：
当创建 `Vue` 实例时, `vue` 会遍历 `data` 选项的属性，利⽤ `Object.defineProperty` 为属性添加 `getter` 和 `setter` 对数据的读取进⾏劫持（`getter` ⽤来依赖收集, `setter` ⽤来派发更新）,并且在内部追踪依赖，在属性被访问和修改时通知变化。

每个组件实例会有相应的 `watcher` 实例，会在组件渲染的过程中记录依赖的所有数据属性进⾏依赖收集，之后依赖项被改动时，`setter` ⽅法会通知依赖与此 `data` 的 `watcher` 实例重新计算（派发更新）,从⽽使它关联的组件重新渲染。
:::

## 计算属性的实现原理?

> 上⾯提到的 `watcher` 实例，就有⼀个叫做 `computed watcher` 的东⻄，这个就是计算属性的 `watcher`。<br> > `computed watcher` 持有⼀个 `dep` 实例，通过 `this.dirty` 属性标记计算属性是否需要重新求值。<br>
> 当 `computed` 的依赖值改变时，就会通知订阅的 `watcher` 进⾏更新，对于 `computed` 的 `watcher` 会 将 `dirty` 设置为 `true` 并且进⾏计算属性⽅法的调⽤。

1. computed 所谓的缓存是指什么?

   计算属性是基于它们的响应式依赖进⾏缓存的。只在相关响应式依赖发⽣改变时它们才会重新求值。

2. 那 computed 缓存存在的意义是什么?

   ⽐如 `computed` 内的操作⾮常耗时, 可能是遍历⼀个⼤数组. 计算⼀次可能要耗时 1s, 那么当后续再通过计算属性获取的时候, 如果依赖的值没有变化, 就⽆需重新计算⼀遍了。

   ```js
   const largeArray = [
     {....},
     {....},
     {....},
     {....},
     ....
   ];
   data: {
     id: 1,
   },
   computed: {
     currentItem: function () {
       return largeArray.find(item => item.id === this.id);
     }
   }
   ```

3. 以下情况，computed 可以监听到数据的变化吗？

   ```js
   computed: {
     storageMsg: function () {
       return sessionStorage.getItem('xx');
     },
     time: function() {
       return Date.now()
     }
   }
   ```

   计算属性是基于响应式数据进行的，而 `sessionStorage` 和 `Date` 对象不属于响应式数据，所以是检测不到数据变化的。

## Vue.nextTick 的原理?

> `Vue` 是异步执⾏ `DOM` 更新的，⼀旦观察到数据变化，`Vue` 就会开启⼀个异步队列，然后把在同⼀个事件循环 (`event loop`) 当中观察到数据变化的 `watcher` 推送进这个队列。如果这个 `watcher` 被触发多次，只会被推送到队列⼀次。<br>
> 这种缓冲⾏为可以有效的去掉重复数据造成的不必要的计算和 `DOM` 操作。⽽在下⼀个事件循环时，`Vue`会清空队列，并进⾏必要的 `DOM` 更新。

- Vue 内部这个异步队列是怎么开启的?

这⾥有⼀个优先级, `Promise.then` > `MutationObserver` > `setImmediate` > `setTimeout`

所以可以理解为，nextTick 会优先尝试使⽤微任务，如果浏览器不⽀持，就⽤宏任务。

当你设置 `vm.someData = 'new value'`，`DOM` 并不会⻢上更新，⽽是在异步队列被清除，也就是下⼀个事件循环开始时执⾏更新时才会进⾏必要的 `DOM` 更新.

所以 `nextTick` 的回调是在下⼀轮事件循环⾥执⾏的。

- ⼀般在什么时候⽤到 nextTick 呢?

1. 在数据变化后要执⾏的某个操作，⽽这个操作需要使⽤随数据改变⽽改变的 `DOM` 结构的时候，这个操作都应该放进 `Vue.nextTick()` 的回调函数中

   ```vue
   <template>
     <div v-if="loaded" ref="test"></div>
   </template>
   <script>
   export default {
     methods: {
       async showDiv() {
         this.loaded = true
         await Vue.nextTick()
         this.$refs.test.xxxxx
       },
     },
   }
   </script>
   ```

## 简述虚拟 dom 与 diff 算法

虚拟 DOM：也就是常说的虚拟节点，它是通过 `js` 的 `object` 对象模拟 `DOM` 中的节点，然后再通过特定的渲染方法将其渲染成真实的 `DOM` 节点。 频繁的操作 `DOM`，或大量造成页面的重绘和回流。<br>
Diff 算法：把树形结构按照层级分解，只比较同级元素，给列表结构的 每个单元添加唯一的 `key` 值，方便比较
