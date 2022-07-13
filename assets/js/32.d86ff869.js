(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{396:function(t,s,a){"use strict";a.r(s);var e=a(49),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"你了解-vue-的响应式原理吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你了解-vue-的响应式原理吗"}},[t._v("#")]),t._v(" 你了解 Vue 的响应式原理吗?")]),t._v(" "),a("p",[a("strong",[t._v("⾸先要了解 Vue 中的三个核⼼类：")])]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Observer")]),t._v("：给对象的属性添加 "),a("code",[t._v("getter")]),t._v(" 和 "),a("code",[t._v("setter")]),t._v("，⽤于依赖收集和派发更新")]),t._v(" "),a("li",[a("strong",[t._v("Dep")]),t._v("：⽤于收集当前响应式对象的依赖关系,每个响应式对象包括⼦对象都拥有⼀个 "),a("code",[t._v("Dep")]),t._v(" 实例，"),a("code",[t._v("dep.subs")]),t._v(" 是 "),a("code",[t._v("watcher")]),t._v(" 实例的数组. 当数据有变更时,会通过 "),a("code",[t._v("dep.notify()")]),t._v(" 通知各个 "),a("code",[t._v("watcher")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("Watcher")]),t._v("：观察者对象, 实例分为 "),a("code",[t._v("render watcher")]),t._v("(渲染), "),a("code",[t._v("computed watcher")]),t._v("(计算属性), "),a("code",[t._v("user watcher")]),t._v("(侦听器)三种")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("依赖收集")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("initState")]),t._v(" 时,对 "),a("code",[t._v("computed")]),t._v(" 属性初始化时,触发 "),a("code",[t._v("computed watcher")]),t._v(" 依赖收集")]),t._v(" "),a("li",[a("code",[t._v("initState")]),t._v(" 时,对侦听属性初始化时,触发 "),a("code",[t._v("user watcher")]),t._v(" 依赖收集")]),t._v(" "),a("li",[a("code",[t._v("render()")]),t._v(" 的过程,触发 "),a("code",[t._v("render watcher")]),t._v(" 依赖收集")]),t._v(" "),a("li",[a("code",[t._v("re-render")]),t._v(" 时, "),a("code",[t._v("vm.render()")]),t._v(" 再次执⾏,会移除所有 "),a("code",[t._v("subs")]),t._v(" 中的 "),a("code",[t._v("watcher")]),t._v(" 的订阅,重新赋值。")])])]),t._v(" "),a("li",[a("p",[t._v("派发更新")]),t._v(" "),a("ol",[a("li",[t._v("组件中对响应的数据进⾏了修改,触发 "),a("code",[t._v("setter")]),t._v(" 的逻辑")]),t._v(" "),a("li",[t._v("调⽤ "),a("code",[t._v("dep.notify()")])]),t._v(" "),a("li",[t._v("遍历所有的 "),a("code",[t._v("subs")]),t._v("（Watcher 实例）,调⽤每⼀个 "),a("code",[t._v("watcher")]),t._v(" 的 "),a("code",[t._v("update")]),t._v(" ⽅法。")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("总结⼀下原理：")]),t._v(" "),a("p",[t._v("当创建 "),a("code",[t._v("Vue")]),t._v(" 实例时, "),a("code",[t._v("vue")]),t._v(" 会遍历 "),a("code",[t._v("data")]),t._v(" 选项的属性，利⽤ "),a("code",[t._v("Object.defineProperty")]),t._v(" 为属性添加 "),a("code",[t._v("getter")]),t._v(" 和 "),a("code",[t._v("setter")]),t._v(" 对数据的读取进⾏劫持（"),a("code",[t._v("getter")]),t._v(" ⽤来依赖收集, "),a("code",[t._v("setter")]),t._v(" ⽤来派发更新）,并且在内部追踪依赖，在属性被访问和修改时通知变化。")]),t._v(" "),a("p",[t._v("每个组件实例会有相应的 "),a("code",[t._v("watcher")]),t._v(" 实例，会在组件渲染的过程中记录依赖的所有数据属性进⾏依赖收集，之后依赖项被改动时，"),a("code",[t._v("setter")]),t._v(" ⽅法会通知依赖与此 "),a("code",[t._v("data")]),t._v(" 的 "),a("code",[t._v("watcher")]),t._v(" 实例重新计算（派发更新）,从⽽使它关联的组件重新渲染。")])]),t._v(" "),a("h2",{attrs:{id:"计算属性的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算属性的实现原理"}},[t._v("#")]),t._v(" 计算属性的实现原理?")]),t._v(" "),a("blockquote",[a("p",[t._v("上⾯提到的 "),a("code",[t._v("watcher")]),t._v(" 实例，就有⼀个叫做 "),a("code",[t._v("computed watcher")]),t._v(" 的东⻄，这个就是计算属性的 "),a("code",[t._v("watcher")]),t._v("。"),a("br"),t._v(" > "),a("code",[t._v("computed watcher")]),t._v(" 持有⼀个 "),a("code",[t._v("dep")]),t._v(" 实例，通过 "),a("code",[t._v("this.dirty")]),t._v(" 属性标记计算属性是否需要重新求值。"),a("br"),t._v("\n当 "),a("code",[t._v("computed")]),t._v(" 的依赖值改变时，就会通知订阅的 "),a("code",[t._v("watcher")]),t._v(" 进⾏更新，对于 "),a("code",[t._v("computed")]),t._v(" 的 "),a("code",[t._v("watcher")]),t._v(" 会 将 "),a("code",[t._v("dirty")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v(" 并且进⾏计算属性⽅法的调⽤。")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("computed 所谓的缓存是指什么?")]),t._v(" "),a("p",[t._v("计算属性是基于它们的响应式依赖进⾏缓存的。只在相关响应式依赖发⽣改变时它们才会重新求值。")])]),t._v(" "),a("li",[a("p",[t._v("那 computed 缓存存在的意义是什么?")]),t._v(" "),a("p",[t._v("⽐如 "),a("code",[t._v("computed")]),t._v(" 内的操作⾮常耗时, 可能是遍历⼀个⼤数组. 计算⼀次可能要耗时 1s, 那么当后续再通过计算属性获取的时候, 如果依赖的值没有变化, 就⽆需重新计算⼀遍了。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" largeArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndata"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\ncomputed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("currentItem")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" largeArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("以下情况，computed 可以监听到数据的变化吗？")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("computed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("storageMsg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("计算属性是基于响应式数据进行的，而 "),a("code",[t._v("sessionStorage")]),t._v(" 和 "),a("code",[t._v("Date")]),t._v(" 对象不属于响应式数据，所以是检测不到数据变化的。")])])]),t._v(" "),a("h2",{attrs:{id:"vue-nexttick-的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-nexttick-的原理"}},[t._v("#")]),t._v(" Vue.nextTick 的原理?")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Vue")]),t._v(" 是异步执⾏ "),a("code",[t._v("DOM")]),t._v(" 更新的，⼀旦观察到数据变化，"),a("code",[t._v("Vue")]),t._v(" 就会开启⼀个异步队列，然后把在同⼀个事件循环 ("),a("code",[t._v("event loop")]),t._v(") 当中观察到数据变化的 "),a("code",[t._v("watcher")]),t._v(" 推送进这个队列。如果这个 "),a("code",[t._v("watcher")]),t._v(" 被触发多次，只会被推送到队列⼀次。"),a("br"),t._v("\n这种缓冲⾏为可以有效的去掉重复数据造成的不必要的计算和 "),a("code",[t._v("DOM")]),t._v(" 操作。⽽在下⼀个事件循环时，"),a("code",[t._v("Vue")]),t._v("会清空队列，并进⾏必要的 "),a("code",[t._v("DOM")]),t._v(" 更新。")])]),t._v(" "),a("ul",[a("li",[t._v("Vue 内部这个异步队列是怎么开启的?")])]),t._v(" "),a("p",[t._v("这⾥有⼀个优先级, "),a("code",[t._v("Promise.then")]),t._v(" > "),a("code",[t._v("MutationObserver")]),t._v(" > "),a("code",[t._v("setImmediate")]),t._v(" > "),a("code",[t._v("setTimeout")])]),t._v(" "),a("p",[t._v("所以可以理解为，nextTick 会优先尝试使⽤微任务，如果浏览器不⽀持，就⽤宏任务。")]),t._v(" "),a("p",[t._v("当你设置 "),a("code",[t._v("vm.someData = 'new value'")]),t._v("，"),a("code",[t._v("DOM")]),t._v(" 并不会⻢上更新，⽽是在异步队列被清除，也就是下⼀个事件循环开始时执⾏更新时才会进⾏必要的 "),a("code",[t._v("DOM")]),t._v(" 更新.")]),t._v(" "),a("p",[t._v("所以 "),a("code",[t._v("nextTick")]),t._v(" 的回调是在下⼀轮事件循环⾥执⾏的。")]),t._v(" "),a("ul",[a("li",[t._v("⼀般在什么时候⽤到 nextTick 呢?")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在数据变化后要执⾏的某个操作，⽽这个操作需要使⽤随数据改变⽽改变的 "),a("code",[t._v("DOM")]),t._v(" 结构的时候，这个操作都应该放进 "),a("code",[t._v("Vue.nextTick()")]),t._v(" 的回调函数中")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("loaded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showDiv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loaded "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxxxx\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"简述虚拟-dom-与-diff-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述虚拟-dom-与-diff-算法"}},[t._v("#")]),t._v(" 简述虚拟 dom 与 diff 算法")]),t._v(" "),a("p",[t._v("虚拟 DOM：也就是常说的虚拟节点，它是通过 "),a("code",[t._v("js")]),t._v(" 的 "),a("code",[t._v("object")]),t._v(" 对象模拟 "),a("code",[t._v("DOM")]),t._v(" 中的节点，然后再通过特定的渲染方法将其渲染成真实的 "),a("code",[t._v("DOM")]),t._v(" 节点。 频繁的操作 "),a("code",[t._v("DOM")]),t._v("，或大量造成页面的重绘和回流。"),a("br"),t._v("\nDiff 算法：把树形结构按照层级分解，只比较同级元素，给列表结构的 每个单元添加唯一的 "),a("code",[t._v("key")]),t._v(" 值，方便比较")])])}),[],!1,null,null,null);s.default=n.exports}}]);