(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{382:function(t,s,a){"use strict";a.r(s);var n=a(49),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"js-获取非行间样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-获取非行间样式"}},[t._v("#")]),t._v(" js 获取非行间样式")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("attr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("attr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"var-let-const-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-let-const-区别"}},[t._v("#")]),t._v(" var let const 区别")]),t._v(" "),a("p",[t._v("1、不存在变量提升"),a("br"),t._v("\n2、同一个作用域下不能重复定义同一个名称"),a("br"),t._v("\n3、有着严格的作用域"),a("br"),t._v("\n4、const 声明一个常量，一旦声明，常量的值就不能改变。且必须初始化"),a("br")]),t._v(" "),a("h2",{attrs:{id:"js-运动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-运动"}},[t._v("#")]),t._v(" js 运动")]),t._v(" "),a("h4",{attrs:{id:"缓冲运动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓冲运动"}},[t._v("#")]),t._v(" 缓冲运动")]),t._v(" "),a("ul",[a("li",[t._v("速度 = (目标值 - 当前值) / 系数")]),t._v(" "),a("li",[t._v("速度取整")])]),t._v(" "),a("ul",[a("li",[t._v("逐渐变慢，最后停止")]),t._v(" "),a("li",[t._v("距离越远速度越大\n"),a("ul",[a("li",[t._v("速度有距离决定")]),t._v(" "),a("li",[t._v("速度 = (目标值 - 当前值) / 缩放系数")])])]),t._v(" "),a("li",[t._v("栗子：缓冲菜单\n"),a("ul",[a("li",[t._v("BUG：速度取整")]),t._v(" "),a("li",[t._v("跟随页面滚动的缓冲侧边栏\n"),a("ul",[a("li",[t._v("潜在问题：目标值不是整数时")])])])])])]),t._v(" "),a("h4",{attrs:{id:"弹性运动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹性运动"}},[t._v("#")]),t._v(" 弹性运动")]),t._v(" "),a("ul",[a("li",[t._v("速度 += (目标点 - 当前值) / 系数")]),t._v(" "),a("li",[t._v("速度 *= 摩擦系数")])]),t._v(" "),a("ul",[a("li",[t._v("加速运动\n"),a("ul",[a("li",[t._v("速度不断增加或减少")]),t._v(" "),a("li",[t._v("速度减少到负值，会向反方向运动")])])]),t._v(" "),a("li",[t._v("弹性运动\n"),a("ul",[a("li",[t._v("在目标点左边，加速；在目标店右边减速；")]),t._v(" "),a("li",[t._v("根据距离，计算加速度")])])]),t._v(" "),a("li",[t._v("摩擦力\n"),a("ul",[a("li",[t._v("速度不断减小")])])]),t._v(" "),a("li",[t._v("带摩擦力的弹性运动\n"),a("ul",[a("li",[t._v("弹性运动 + 摩擦力")])])]),t._v(" "),a("li",[t._v("弹性公式\n"),a("ul",[a("li",[t._v("速度 += (目标值 - oDiv.offsetLeft) / 5;")]),t._v(" "),a("li",[t._v("速度 *= 0.7;")])])])]),t._v(" "),a("h4",{attrs:{id:"碰撞运动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#碰撞运动"}},[t._v("#")]),t._v(" 碰撞运动")]),t._v(" "),a("ul",[a("li",[t._v("撞到目标点，速度反转")]),t._v(" "),a("li",[t._v("反转速度的同时，减小速度")]),t._v(" "),a("li",[t._v("纵向碰撞，横向速度也减小")]),t._v(" "),a("li",[t._v("横向速度小数问题（负数）")])]),t._v(" "),a("h4",{attrs:{id:"运动终止条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运动终止条件"}},[t._v("#")]),t._v(" 运动终止条件")]),t._v(" "),a("ul",[a("li",[t._v("匀速运动：距离足够近")]),t._v(" "),a("li",[t._v("缓冲运动：两点重合")])]),t._v(" "),a("h4",{attrs:{id:"多物体运动框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多物体运动框架"}},[t._v("#")]),t._v(" 多物体运动框架")]),t._v(" "),a("ul",[a("li",[t._v("定时器作运动对象的属性")]),t._v(" "),a("li",[t._v("参数的传递：运动对象，目标值")]),t._v(" "),a("li",[t._v("所有变量都不能公用")]),t._v(" "),a("li",[t._v("属性与运动对象绑定：速度、其他属性值")])]),t._v(" "),a("h4",{attrs:{id:"布局转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局转换"}},[t._v("#")]),t._v(" 布局转换")]),t._v(" "),a("ol",[a("li",[t._v("首先使用 "),a("code",[t._v("float")]),t._v(" 进行布局")]),t._v(" "),a("li",[t._v("使用 js 做转换")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" aLi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelecterAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" aLi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  aLi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'absolute'")]),t._v("\n  aLi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aLi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v("\n  aLi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aLi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"按照比列计算滚动距离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按照比列计算滚动距离"}},[t._v("#")]),t._v(" 按照比列计算滚动距离")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scaleX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("L")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oDiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" oSpan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scaleY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oDiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" oSpan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\noImg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("scaleX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oImg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" oDiv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v("\noImg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("scaleY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oImg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" oDiv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v("\n")])])]),a("h4",{attrs:{id:"h5-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5-特性"}},[t._v("#")]),t._v(" H5 特性")]),t._v(" "),a("ul",[a("li",[t._v("内容编辑 "),a("code",[t._v('contenteditable="true"')])]),t._v(" "),a("li",[t._v("语言输入 "),a("code",[t._v('<input type="text" x-webkit-speech />')])]),t._v(" "),a("li",[t._v("桌面提醒")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitNotifications"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestPermission")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstatue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitNotifications"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkPermission")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" notification "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitNotifications"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createNotification")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[imgurl]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Body'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnotification"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"es6-模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块化"}},[t._v("#")]),t._v(" ES6 模块化")]),t._v(" "),a("ul",[a("li",[t._v("普通 js 加载\n"),a("ul",[a("li",[t._v('type = "application/javascript"\n'),a("ul",[a("li",[t._v("默认省略")]),t._v(" "),a("li",[t._v("默认同步加载")])])]),t._v(" "),a("li",[t._v("同步加载问题")])])]),t._v(" "),a("li",[t._v("使用异步加载\n"),a("ul",[a("li",[t._v("defer(延迟)\n"),a("ul",[a("li",[t._v("在外链 js 标签上使用")]),t._v(" "),a("li",[t._v("等待 DOM 结构加载完整，其他脚本执行完成，再执行")]),t._v(" "),a("li",[t._v("多个 defer 之间可以确保加载顺序")])])])])]),t._v(" "),a("li",[t._v("es6 模块化使用\n"),a("ul",[a("li",[t._v('使用 type="module"')]),t._v(" "),a("li",[t._v("服务器环境下使用")]),t._v(" "),a("li",[t._v("默认是异步加载(默认 defer)")])])]),t._v(" "),a("li",[t._v("注意事项\n"),a("ul",[a("li",[t._v("代码运行在模块作用域\n"),a("ul",[a("li",[t._v("模块作用域和全局作用域")])])]),t._v(" "),a("li",[t._v("默认开启严格模式 'use strict'")]),t._v(" "),a("li",[t._v("顶层的 this 指向 undefined")]),t._v(" "),a("li",[t._v("一个模块被加载多次则只执行一次")])])]),t._v(" "),a("li",[t._v("语法\n"),a("ul",[a("li",[t._v("export (导出)")]),t._v(" "),a("li",[t._v("import (导入)")])])]),t._v(" "),a("li",[t._v("模块导出的是原来值得引用\n"),a("ul",[a("li",[t._v("不可以直接在 导入模块后，修改值")]),t._v(" "),a("li",[t._v("可以通过 被导入模块提供的方法来修改 被导入模块内部的值")]),t._v(" "),a("li",[t._v("所有导入的内容都是 引用关系")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);