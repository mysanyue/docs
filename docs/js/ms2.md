---
title: 面试题
---

## a b 两个变量 不用第三个变量来切换两个变量的值

```javascript
// 方法一
var a = 5
var b = 6
a = a + b
b = a - b
a = a - b

// 方法二
var s1 = 'hello'
var s2 = 'hi'
s1 = [s1, s2]
s2 = s1[0]
s1 = s1[1]
```

## 有一个数 n=5，不用 for 循环，怎么返回[1,2,3,4,5]这样一个数组

```javascript
var n = 5

// 方法一
function show(n) {
  var arr = []
  return (function() {
    arr.unshift(n)
    n--
    if (n != 0) {
      arguments.callee()
    }
    return arr
  })()
}

// 方法二
function show(n) {
  var arr = []
  arr.length = n + 1
  var str = arr.join('a')
  var arr2 = []
  str.replace(/a/g, function() {
    arr2.unshift(n--)
  })

  return arr2
}
```

## 写一个字符串转成驼峰的方法

- 例如：`border-bottom-color` => `borderBottomColor`

```javascript
var str = 'border-bottom-color'
// 方法一
function test(str) {
  var arr = str.split('-')
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
  }
  return arr.join('')
}

// 方法二
function test2(str) {
  var re = /-(\w)/g
  return str.replace(re, function($0, $1) {
    return $1.toUpperCase()
  })
}
```

## 查找字符串中出现最多的字符和个数

- 例如：`sdjksfssscfssdd` => 字符最多的是 s，出现了 7 次

```javascript
var str = 'sdjksfssscfssdd'

// 方法一
function test(str) {
  var obj = {}
  var num = 0
  var value = ''
  for (var i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = []
    }
    obj[str[i]].push(str[i])
  }
  for (var attr in obj) {
    if (num < obj[attr].length) {
      num = obj[attr].length
      value = obj[attr][0]
    }
  }
  return '最多的字符是' + value + '，出现了' + num + '次'
}

// 方法二
function test2(str) {
  var arr = str.split('')
  arr.sort()
  str = arr.join('')

  var re = /(\w)\1+/g
  var num = 0
  var value = ''
  str.replace(re, function($0, $1) {
    if (num < $0.length) {
      num = $0.length
      value = $1
    }
  })

  return '最多的字符是' + value + '，出现了' + num + '次'
}
```

## 如何给字符串加千分符

- 例如：`3562123761` => `3,562,123,761`

```javascript
var str = '3562123761'

// 方法一
function test(str) {
  var iNum = str.length % 3
  var prev = ''
  var arr = []
  var iNow = 0
  var tmp = ''

  if (iNum != 0) {
    prev = str.substring(0, iNum)
    arr.push(prev)
  }
  str = str.substring(iNum)
  for (var i = 0; i < str.length; i++) {
    iNow++
    tmp += str[i]
    if (iNow == 3 && tmp) {
      arr.push(tmp)
      tmp = ''
      iNow = 0
    }
  }
  return arr.join(',')
}

// 方法二
function test2(str) {
  var re = /(?=(?!\b)(\d{3})+$)/g
  return str.replace(re, ',')
}
```

## 返回一个只包含数字类型的一个数组

- 例如：js123ldka78sdassdfd643
