---
title: 常用算法
---

## 冒泡排序算法

```javascript
let arr1 = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8]
let n = 0
for (let j = 0; j < arr1.length - 1; j++) {
  let isOk = true
  for (let i = 0; i < arr1.length - 1 - j; i++) {
    let a = arr1[i]
    let b = arr1[i + 1]
    if (a > b) {
      arr1[i] = b
      arr1[i + 1] = a
      isOk = false
    }

    n++
  }

  if (isOk) {
    break
  }
}
```
