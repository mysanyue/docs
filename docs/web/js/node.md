---
title: nodejs
---

## 创建一个简单的服务

```js
var http = require('http')
var server = http.createServer()

server.on('request', function (req, res) {
  res.end('hello word')
})

server.listen(3000, function () {
  console.log('server is running...')
})
```

## 实现 Apache 功能

```js
var http = require('http')
var fs = require('fs')
var server = http.createServer()
var wwwDir = 'E:/work github/study-note'

server.on('request', function (req, res) {
  var url = req.url
  var filePath = '/index.html'

  if (url !== '/') {
    filePath = url
  }

  fs.readFile(wwwDir + filePath, function (err, data) {
    if (err) {
      return res.end('404 Not Found')
    }
    res.end(data)
  })
})

server.listen(3000, function () {
  console.log('server is running...')
})
```

## Node 中的模块系统

> 使用 `Node` 编写应用程序主要就是在使用

- `EcmaScript` 语言
  - 和浏览器不一样，在 `Node` 中没有 `BOM、DOM`
- 核心模块
  - 文件操作系统
  - `http` 服务的 `http`
  - `url` 路径处理模块
  - `path` 路径处理模块
  - `os` 操作系统信息
- 第三方模块
  - `art-template`
- 自己写的模块

## jQuery 的 each 和原生的 Javascript 方法 forEach

- `EcmaScript 5` 提供的 不兼容 IE 8
- `jQuery` 的 `each` 由 `jQuery` 这个第三方库提供
  - `jQuery 2` 以下的版本是兼容 IE 8 的
  - 它的 `each` 方法主要是用来遍历 `jQuery` 实例对象（伪数组）
  - 同时它也可以作为低版本浏览器中 `forEach` 替代品
  - `jQuery` 的实例对象不能使用 `forEach` 方法，如果想要使用必须转为数组才可以使用
  - `[].slice.call(jQuery实例对象)`

## 301 和 302 状态码区别

- 301 永久重定向，浏览器会记住 - 直接访问重定向页面
- 302 临时重定向 - 先访问首页再跳转到重定向页面

## exports 和 module.exports 的区别

- 每个模块中都有一个 `module` 对象
- `module` 对象中有一个 `exports` 对象
- 我们可以把需要导出的成员都挂载到 `module.exports` 接口对象中
- 也就是： `module.exports.xxx = xxx` 的方式
- 但是每次都 `module.exports.xxx = xxx` 很麻烦
- 所以 `Node` 为了方便，同时在每个模块中都提供了一个成员叫 `exports`
- `exports === module.exports` 结果为 `true`
- 所以对于 `module.exports.xxx = xxx` 的方式 完全可以 `exports.xxx = xxx`
- 当一个模块需要导出单个成员的时候，这个时候必须使用 `module.exports = xxx` 的方式
- 不要使用 `exports = xxx` 不管用
- 因为每个模块最终向外 `retrun` 的是 `module.exports`
- 而 `exports` 只是 `module.exports` 的一个引用
- 所以即使你为 `exports = xx` 重新赋值，也不会影响 `module.exports`
- 但是有一中赋值方式比较特殊 `exports = module.exports` 这个用来重新建立引用关系

## 模块查找机制

1. 优先从缓存加载
2. 核心模块
3. 路径形式的文件模块
4. 第三方模块

- node_modules/art-template/
- node_modules/art-template/package.json
- node_modules/art-template/package.json main
- index.js 备选项
- 进入上一级目录找 node_modules
- 按照这个规则依次往上找，直到磁盘根目录还是找不到，最后报错 `Can not find module xxx`

* 一个项目有且仅有一个 `node_modules` 而且还是存放到项目的根目录

## 基于 express 的 crud

- `nodemon` 热更新
  - `npm i nodemon -S`
  - 输入命令: `nodemon` 文件名
- `express`
  - `art-template` 模板引擎的配置
  - `body-parser` 解析表单 `POST` 请求体

> app.js

```JS
var express = require('express');
var app = express();
var router = require('./router');
var bodyParser = require('body-parser');

app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public', express.static('./public/'));
app.engine('html', require('express-art-template'));

// 配置模板引擎和 body-parser 一定要在 app.use(router)挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
// 把路由容器挂载到 app 服务中
app.use(router);

app.listen(3000, function() {
  console.log('server running...');
});
```

> router.js

```JS
var fs = require('fs');
var express = require('express');
// Express 提供了一种更好的方式
// 专门用来包装路由的 把路由都挂载到 router 路由容器中
// 创建一个路由容器
var router = express.Router();
// 挂载到容器中
router.get('/xxx', function() {});
router.post('/xxx/xxx', function() {});

module.exports = router;
```

## package.json 和 package-lock.json

> npm5 以前是不会有 `package-lock.json` 这个文件。
> npm5 以后才加入了这个文件

当你安装包的时候，npm 都会生成或者更新 `package-lock.json` 这个文件

- npm 5 以后的版本安装包不需要加 `--save` 参数，它自动保存依赖信息
- 当你安装包的时候，会自动创建或者更新 `package-lock.json` 这个文件
- `package-lock.json` 这个文件保存 `node_modules` 中所有包的信息（版本、下载地址）
  - 这样的话重新 `npm install` 的时候速度就可以提升
- 从文件来看，有一个 `lock` 称之为锁

* 这个 `lock` 是用来锁定版本的
* 如果项目依赖了 `1.1.1` 版本
* 如果你重新 `install` 其实会下载最新版本，而不是 `1.1.1`
* 我们的目的就是希望可以锁住 `1.1.1` 这个版本
* 所以这个 `package-lock.json` 这个文件的另一个作用就是锁定版本号，防止自动升级新版本

## 关系型数据库和非关系型数据库

> 表就是关系

或者说表与表之间存在关系

- 所有的关系型数据库都要通过 `sql` 语言来操作
- 所有的关系型数据库在操作之前都需要设计表结构
- 而且数据表还支持约束
  - 唯一的
  - 主键
  - 默认值
  - 非空
- 非关系型数据库非常灵活
- 有的非关系型数据库就是 `key - value` 键值对
- 但是 `MongoDB` 是长的最像关系型数据库的非关系型数据库

* 数据库 => 数据库
* 数据表 => 集合（数组）
* 表记录 => 文档对象

- `MongoDB` 不需要设计表结构
- 也就是说你可以任意的往里面存数据，没有结构这么一说

## mongoose

安装 `npmi mongoose` <br/>
hello world

```js
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {
  userMongoclinet: true,
})
mongoose.Promise = global.Promise

var Cat = mongoose.model('Cat', {
  name: String,
})
var kitty = new Cat({
  name: 'zildjian',
})

kitty.save(function (arr) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }
})
```

## 设计 Scheme 发布 Model

```js
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// 1.连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会被创建出来
mongoose.connect('mongodb://localhost:/itcast')

// 2.设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

// 3. 将文档结构发布为模型
// mongoose.model 方法就是用来将一个架构发布为 model
// 第一个参数： 传入一个大写名词的字符串生成 小写复数 的集合名称
// 例如这里的 User 最终会生成 users 集合名称
// 第二个参数：架构 Schema
// 返回值： 模型构造函数
var User = mongoose.model('User', userSchema)

// 4. 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所欲为了（增删查改）
// 添加数据
var admin = new User({
  username: 'admin',
  password: '123456',
  email: 'admin@qq.com',
})

admin.save(function (err, ret) {
  if (err) {
    console.log('保存失败')
  } else {
    console.log('保存成功')
  }
})

// 查询
User.find(
  {
    username: 'zs',
  },
  function (err, ret) {
    if (err) {
      console.log('查询失败')
    } else {
      console.log(ret)
    }
  }
)

// 删除
User.remove(
  {
    username: 'zs',
  },
  function (err, ret) {
    if (err) {
      console.log('删除失败')
    } else {
      console.log('删除成功')
    }
  }
)

// 更新数据
User.findByIdAndUpdate(
  id,
  {
    password: '123',
  },
  function (err, ret) {
    if (err) {
      console.log('更新失败')
    } else {
      console.log('更新成功')
    }
  }
)
```
