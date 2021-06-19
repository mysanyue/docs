
> ⼿写⼀个简单的 `Vue`, 实现响应式更新

#### 1. ⾸先新建⼀个⽬录, 分别建好咱们需要的核⼼⽂件

- index.html 主⻚⾯
- vue.js Vue主⽂件
- compiler.js 编译模板, 解析指令,
- dep.js 收集依赖关系, 存储观察者. 发布订阅
- observer.js 数据劫持
- watcher.js 观察者对象


#### 2. index.html 内容

  ⾸先要有⼀个根元素, 咱们就让它的 `id` 为 `app`
 
  ```html
  <!DOCTYPE html>
    <html lang="cn">
    <head>
      <title>My Vue</title>
    </head> 
    <body>
      <div id="app"></div>
    </body>
  </html>
  ```
  
#### 3. 初始化 Vue class

  `Vue` 的类就在 `vue.js` ⽂件⾥实现, 包含构造函数、接收配置等等<br>
  先来实现⼀下 `constructor`, 接收传⼊的数据并存储下来. 这⾥咱们内部的变量都⽤ `$` 命名, 便于区分

  ```js
  export default class Vue {
    constructor(options = {}) {
    // 存储options, data, methods
    this.$options = options;
    this.$data = options.data;
    this.$methods = options.methods;
    } 
  }
  ```

#### 4. 然后需要获取根元素, 咱们单独写⼀个⽅法来处理这件事, 同时简单检查⼀下传⼊的 `options.el` 是否合法

  ```js
  export default class Vue {
    constructor(options = {}) {
    // 存储options, data, methods
    this.$options = options;
    this.$data = options.data;
    this.$methods = options.methods;
    this.initRootElement(options);
  }

  /** 
  * 获取根元素, 并存储到Vue实例. 这⾥简单兼容⼀下, 检查⼀下传⼊的el是否合规. 
  */
  initRootElement(options) {
    if (typeof options.el === 'string') {
      // 传⼊的是元素id或者class
      this.$el = document.querySelector(options.el);
    } else if (options.el instanceof HTMLElement) {
      this.$el = options.el;
    }
    if (!this.$el) {
      throw new Error('传⼊的el不合法, 请传⼊css selector或者HTMLElement')
      }
    }
  }
  ```

#### 5. 到这⾥咱们先运⾏⼀下代码看看能不能如我们所愿, 检查 el 是否合法并且正常存储各种属性

  新建 `index.js` ⽂件, 初始化 `Vue`

  ```js
  import Vue from './myvue/vue.js';
    const vm = new Vue({
      el: '#app',
      data: {
        msg: 'Hello Vue',
      },
      methods: {
        handler() {
          console.log(333)
        }
      }
    })
    console.log(vm);
  ```
  
  `index.html` ⽂件引⼊ `index.js` ⽂件, 运⾏⼀下看看

  ```html
  <!DOCTYPE html>
    <html lang="cn">
  <head>
  <title>My Vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./index.js"></script>
  </body>
  </html>
  ```

  发现报错了, `Uncaught SyntaxError: Cannot use import statement outside a module`, 是因为 `import` 需要在 `esmodule` ⾥使⽤。在 `script` 标签上加上 `module` 即可
  
  ```html
  <script src="./index.js" type="module"></script>
  ```
  
  再运⾏⼀下, 发现可以正常输出 `vue` 实例了, `$el` 也正常获取到了<br>
  输⼊⼀个错误的   试试呢？⽐如出传⼊ `#app1`，⼀个不存在的元素<br>
  直接输⼊⼀个 `Html` 元素呢?
  
#### 6. 回想⼀下, 咱们在 vue 组件⾥是不是可以通过 this 来获取 data ⾥的属性? 所以, 下⾯我们要把 data ⾥的属性都挂载到 vue 实例上

  ```js
  export default class Vue {
    constructor(options = {}) {
      // 存储options, data, methods
      this.$options = options;
      this.$data = options.data;
      this.$methods = options.methods;
      this.initRootElement(options);
      // 利⽤Object.defineProperty将data⾥的属性注⼊到vue实例中
      this._proxyData(this.$data)
    }
    /** 
    * 获取根元素, 并存储到Vue实例. 这⾥简单兼容⼀下, 检查⼀下传⼊的el是否合规. 
    */
    initRootElement(options) {
      if (typeof options.el === 'string') {
        // 传⼊的是元素id或者class
        this.$el = document.querySelector(options.el);
      } else if (options.el instanceof HTMLElement) {
        this.$el = options.el;
      }
      if (!this.$el) {
        throw new Error('传⼊的el不合法, 请传⼊css selector或者HTMLElement')
      }
    }
    _proxyData(data) {
      // 遍历所有data
      Object.keys(data).forEach(key => {
        // 将data属性注⼊到vue中
        Object.defineProperty(this, key, {
          enumerable: true,
          configurable: true,
          get() {
            return data[key];
          },
          set(newValue) {
            if (data[key] === newValue) {
              return
            }
            data[key] = newValue
          }
        })
      })
    } 
  }
  ```

  再来运⾏⼀下代码试试, 看看咱们的 `data` 是否都绑定到 `vue` 实例上了?

#### 7. 接下来, 咱们先把⼏个核⼼类都声明好

  具体的实现先不管, 先声明好每个类⾥的⽅法, 明确每个⽅法的作⽤. 后期再⼀⼀实现. 这也是构建⼤型系统时的⼀种⽅式, 先明确整体架构, 具体实现在最后实施。记住, ⼀定要写好注释. ⽽对于这种外界可以使⽤的⽅法, 注释要⽤ `jsDoc` 的形式, 这样的话外界在使⽤的时候就可以直接看到你⽅法的注释.

  - dep.js

    ```js
    export default class Dep {
      constructor() {
        // 存储所有的观察者
        this.subs = []
      }
      /** 添加观察者 */
      addSub(watcher) {

      }
      /** 发送通知 */
      notify() {
        
      } 
    }
    ```
  
  - observer.js

    ```js
    export default class Observer {
      constructor(data) {
      this.traverse(data)
    }
    
    /** 递归遍历data⾥的所有属性 */
    traverse(data) {
    }
    /** 给传⼊的数据设置getter/setter */
    defineReactive(obj, key, val) {}
    }
    ```

  - watcher.js

    ```js
    // 获取更改前的值存储起来，并创建⼀个 update 实例⽅法，在值被更改时去执⾏实例的 callback 以达到视图的更新。
    export default class Watcher {
      /** 
      * vm: vue实例
      * key: data中的属性名
      * cb: 负责更新视图的回调函数
      */
      constructor(vm, key, cb) {
      }
      /** 当数据发⽣变化的时候更新视图 */
      update() {
      } 
    }
    ```

  - compiler.js

    ```js
    export default class Compiler {
      constructor(vm) {
        this.compile(vm.$el)
      }
      /** 编译模版 */
      compile(el) {
      } 
    }
    ```

#### 8. 想⼀下应该怎么调⽤这些⽅法? 在vue初始化的时候都应该做些什么?

  ```js
  import Observer from './observer.js';
  import Compiler from './compiler.js';
  constructor(options = {}) {
    // 存储options, data, methods
    this.$options = options;
    this.$data = options.data;
    this.$methods = options.methods;
    this.initRootElement(options);
    // 利⽤Object.defineProperty将data⾥的属性注⼊到vue实例中
    this._proxyData(this.$data);
    // 实例化observe对象，监听数据变化
    new Observer(this.$data);
    // 实例化compiler对象，解析指令和差值表达式
    new Compiler(this) 
  }
  ```

#### 9. 完善 dep.js

  发布订阅模式<br>
  记住, `dep` 是⽤来存储所有观察者的, 也就是 `watcher`<br>      
  ⽽我们 `watcher` 的定义, 每个 `watcher` 都会有⼀个 `update` ⽅法对吧, ⽤来更新视图的?

  - addSub, 我们如果发现 watcher 没有 update ⽅法, 也就没必要添加到 subs ⾥了
  - notify, 是提供给外界调⽤的, 当数据有变更的时候, 外界会调⽤ notify 去通知各个 watcher, 也就是执⾏ watcher.update()

  ```js
  export default class Dep {
    constructor() {
      // 存储所有的观察者
      this.subs = []
    }
    /** 添加观察者 */
    addSub(watcher) {
      if (watcher && watcher.update) {
        this.subs.push(watcher)
      }
    }
    /** 发送通知 */
    notify() {
      this.subs.forEach(watcher => {
        watcher.update()
      })
    } 
  }
  ```

  **考虑⼏个问题：**

  - Dep 在哪⾥实例化? 在哪⾥addSub?
  - Dep 的 notify ⽅法应该在哪⾥调⽤?
    
#### 10. 完善 watcher

  **观察者类**

  ```js
  import Dep from './dep.js';
    export default class Watcher {
    /** 
    * vm: vue实例
    * key: data中的属性名
    * cb: 负责更新视图的回调函数
    */
    constructor(vm, key, cb) {
      this.vm = vm
      // data中的属性名称
      this.key = key
      // 回调函数负责更新视图
      this.cb = cb
      // 把watcher对象记录到Dep类的静态属性target
      Dep.target = this
      // 触发get⽅法，在get⽅法中会调⽤addSub
      this.oldValue = vm[key]
      Dep.target = null
    }
    /** 当数据发⽣变化的时候更新视图 */
    update() {
      let newValue = this.vm[this.key]
      if (this.oldValue === newValue) {
        return
      }
      this.cb(newValue)
    } 
  }
  ```

  **考虑两个问题：**

  - 通过 `vm[key]` 获取 `oldValue` 前, 为什么要将当前的实例挂在 `Dep` 上，为什么获取之后⼜要置为 `null`？
  - `update` ⽅法内部执⾏了 `callback` 函数，但是 `update` 在什么时候执⾏？
    
#### 11. 完善 compiler.js

  ```js
  import Watcher from './watcher.js';
  export default class Compiler {
    constructor(vm) {
      this.el = vm.$el
      this.vm = vm
      this.methods = vm.$methods
      this.compile(vm.$el)
    }
    // 编译模版
    compile(el) {
      let childNodes = el.childNodes
      Array.from(childNodes).forEach(node => {
        if (this.isTextNode(node)) { // 处理⽂本节点
          this.compileText(node)
        } else if (this.isElementNode(node)) { // 处理元素节点
          this.compileElement(node)
        }
        // 如果还有⼦节点，递归调⽤
        if (node.childNodes && node.childNodes.length > 0) {
          this.compile(node)
        }
      })
    }
    // 编译元素节点，处理指令
    compileElement(node) {
      // console.log(node.attributes)
      if (node.attributes.length) {
        Array.from(node.attributes).forEach(attr => { // 遍历所有元素节点
          let attrName = attr.name
          if (this.isDirective(attrName)) { // 判断是否是指令
            attrName = attrName.indexOf(':') > -1 ?
            attrName.substr(5) : attrName.substr(2) // 获取 v- 后⾯的值
            let key = attr.value // 获取data名称
            this.update(node, key, attrName)
          }
        })
      }
    }
    // 更新
    update(node, key, attrName) {
      const updateFn = this[attrName + 'Updater']
      updateFn && updateFn.call(this, node, this.vm[key], key, attrName)
    }
    // 解析 v-text
    textUpdater(node, value, key) {
      node.textContent = value
      new Watcher(this.vm, key, (newValue) => { // 创建watcher对象，当数据改变更新视图
        node.textContent = newValue
      })
    }
    // 解析 v-model
    modelUpdater(node, value, key) {
      node.value = value
      new Watcher(this.vm, key, (newValue) => { // 创建watcher对象，当数据改变更新视图
        node.value = newValue
      })
      // 双向绑定
      node.addEventListener('input', () => {
        this.vm[key] = node.value
      })
    }
    // 解析 v-html
    htmlUpdater(node, value, key) {
      node.innerHTML = value
      new Watcher(this.vm, key, newValue => {
        node.textContent = newValue
      })
    }
    // 解析 v-on:click
    clickUpdater(node, value, key, attrName) {
      node.addEventListener(attrName, this.methods[key])
    }
    // 编译⽂本节点，处理差值表达式, {{ }}
    compileText(node) {
      // 获取 {{ }} 中的值
      let reg = /\{\{(.+?)\}\}/
      let value = node.textContent
      if (reg.test(value)) {
        let key = RegExp.$1.trim() // 返回匹配到的第⼀个字符串，去掉空格
        node.textContent = value.replace(reg, this.vm[key])
        new Watcher(this.vm, key, (newValue) => { // 创建watcher对象，当数据改变更新视图
          node.textContent = newValue
        })
      }
    }
    // 判断元素属性是否是指令
    isDirective(attrName) {
      return attrName.startsWith('v-')
    }
    // 判断是否是⽂本节点
    isTextNode(node) {
      return node.nodeType === 3
    }
    // 判断是否是元素节点
    isElementNode(node) {
      return node.nodeType === 1
    } 
  }
  ```

#### 12. 完善 observer.js

  ```js
  import Dep from './dep.js'
  export default class Observer {
    constructor(data) {
      this.traverse(data)
    }
    /** 递归遍历data⾥的所有属性 */
    traverse(data) {
      if (!data || typeof data !== 'object') {
        return
      }
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key])
      })
    }
    /** 给传⼊的数据设置getter/setter */
    defineReactive(obj, key, val) {
      const that = this
      this.traverse(val); // 递归设置
      const dep = new Dep() // 负责收集依赖，并发送通知
      
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        get() {
          Dep.target && dep.addSub(Dep.target) // 收集依赖
          return val;
        },
        set(newValue) {
          if (newValue === val) {
          return
        }
        val = newValue
        that.traverse(newValue) // newValue可能是个对象
        dep.notify() // 通知watcher数据更新了
        }
      })
    }
  }
  ```
  
  在模板编译的过程中，遇到模板中绑定的变量，就会解析，并创建 `watcher`，会在 `Watcher` 类的内部获取旧值，即当前的值。<br>
  这样就触发了 `get`，在 `get` 中就可以将这个 `watcher` 添加到 `Dep` 的 `subs` 数组中进⾏统⼀管理。<br>
  因为在代码中获取 `data` 中的值操作⽐较多，会经常触发 `get`，我们⼜要保证 `watcher` 不会被重复添加，所以在 `Watcher` 类中，获取旧值并保存后，⽴即将 `Dep.target` 赋值为 `null`，并且在触发 `get` 时对 `Dep.target` 进⾏了判空，存在才调⽤ `Dep` 的 `addSub` 进⾏添加。

#### 13. 验证⼀下

index.html

  ```html
  <div id="app">
    <h1>template表达式</h1>
    <h3>{{ msg }}</h3>
    <h3>{{ count }}</h3>
    <br />
    <h1>v-text</h1>
    <div v-text="msg"></div>
    <br />
    <h1>v-model</h1>
    <div v-html="myHtml"></div>
    <br />
    <h1>v-model</h1>
    <input type="text" v-model="msg">
    <input type="text" v-model="count">
    <button v-on:click="handler">按钮</button>
  </div>
  ```

index.js

  ```js
  const vm = new Vue({
    el: '#app',
    data: {
      msg: 'Hello Vue',
      count: 100,
      myHtml: '<ul><li>这是v-html编译的</li></ul>',
    },
    methods: {
      handler() {
        alert('handler')
      }
    }
  })
  ```
