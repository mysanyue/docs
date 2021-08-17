---
title: 网络相关
---

## 一个页面从输入 URL 到页面加载显示完成，这个过程中都 发生了什么

**分为 4 个步骤**

1. 当发送一个 URL 请求时，不管这个 URL 是 Web 页面的 URL 还 是 Web 页面上每个资源的 URL，浏览器都会开启一个线程来处理这个 请求，同时在远程 DNS 服务器上启动一个 DNS 查询。这能使浏览器 获得请求对应的 IP 地址。
2. 浏览器与远程 Web 服务器通过 TCP 三次握手协商来建立一个TCP/IP 连接。该握手包括一个同步报文，一个同步-应答报文和一个应 答报文，这三个报文在 浏览器和服务器之间传递。该握手首先由客户端 尝试建立起通信，然后服务器响应并接受客户端的请求，最后由客户端 发出该请求已经被接受的报文。
3. 一旦 TCP/IP 连接建立，浏览器会通过该连接向远程服务器发送 HTTP 的 GET 请求。远程服务器找到资源并使用 HTTP 响应返回该资源。
4. 此时，Web 服务器提供资源服务，客户端开始下载资源。

## get 请求传参长度的误区

**误区**：我们经常说 get 请求参数的大小存在限制，而 post 请求的 参数大小是无限制的。实际上 HTTP 协议从未规定 GET/POST 的请 求长度限制是多少。对 get 请求参数的限制是来源与浏览器或 web 服务器，浏览器或 web 服务器限制了 url 的长度。为了明确这个概 念，我们必须再次强调下面几点:

- HTTP 协议 未规定 GET 和 POST 的长度限制
- GET 的最大长度显示是因为 浏览器和 web 服务器限制了 URI 的 长度不同的浏览器和 WEB 服务器，限制的最大长度不一样要支持 IE，则最大长度为 2083byte，若只支持 Chrome，则最大长度 8182byte

## 补充 get 和 post 请求在缓存方面的区别

- get 和 post 在缓存方面的区别：get 请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。
- post 不同，post 做的一般是修改和删除的工作，所以必须与数据 库交互，所以不能使用缓存。因此 get 请求适合于请求缓存。