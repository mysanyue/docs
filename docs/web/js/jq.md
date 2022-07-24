---
title: jQuery
---

## Jquery 选择器有哪些

#### 一. 基本选择器 基本选择器是 jQuery 中最常用也是最简单的选择器，它通过元素的 id.  class 和标签名等来查找 DOM 元素。

1. ID 选择器 #id<br>
描述：根据给定的 id 匹配一个元素， 返回单个元素（注：在网页中，id 名称不能重复）<br>
示例：`$("#test")` 选取 id 为 test 的元素

2. 类选择器 .class<br>
描述：根据给定的类名匹配元素，返回元素集合<br>
示例：`$(".test")` 选取所有 class 为 test 的元素

3. 元素选择器 element<br>
描述：根据给定的元素名匹配元素，返回元素集合<br>
示例：`$("p")` 选取所有的 p 元素

4. \*<br>
描述：匹配所有元素，返回元素集合<br>
示例：`$("*")` 选取所有的元素

5. selector1，selector2,...,selectorN<br>
描述：将每个选择器匹配到的元素合并后一起返回，返回合并后的元素集合<br>
示例：`$("p,span,p.myClass")`选取所有 p,span 和 class 为 myClass 的 p 标签的元素集合

#### 二. 层次选择器

层次选择器根据层次关系获取特定元素。

1. 后代选择器<br>
示例：`$("p span")` 选取 p 元素里的所有的 span 元素（注：后代选 择器选择父元素所有指定选择的元素，不管是儿子级，还是孙子级）

2. 子选择器 $("parent>child")<br>
示例：`$("p>span")` 选择 p 元素下的所有 span 元素 （注：子选择 器只选择直属于父元素的子元素）

3. 同辈选择器 $("prev+next")<br> 
描述：选取紧接在 prev 元素后的 next 元素，返回元素集合<br>
示例：`$(".one+p")` 选取 class 为 one 的下一个 p 同辈元素集合

4. 同辈选择器 $("prev~siblings")<br> 
描述：选取 prev 元素后的所有 siblings 元素，返回元素集合<br>
示例：`$("#two~p")` 选取 id 为 two 的元素后所有 p 同辈元素集合

#### 三. 过滤选择器

**基本过滤选择器**

1. :first<br> 
描述：选取第一个元素，返回单个元素<br>
示例：`$("p:first")` 选取所有 p 元素中第一个 p 元素

2. :last<br> 
描述：选取最后一个元素，返回单个元素<br>
示例：`$("p:last")` 选取所有 p 元素中最后一个 p 元素

3. :not(selector)<br> 
描述：去除所有与给定选择器匹配的元素，返回元素集合<br>
示例：`$("input:not(.myClass)")` 选取 class 不是 myClass 的 input 元素

4. :even<br> 
描述：选取索引是偶数的所有元素，索引从 0 开始，返回元素集合

5. :odd<br> 
描述：选取索引是奇数的所有元素，索引从 0 开始，返回元素集合

6. :eq(index)<br> 
描述：选取索引等于 index 的元素，索引从 0 开始，返回单个元素

7. :gt(index)<br> 
描述：选取索引大于 index 的元素，索引从 0 开始，返回元素集合

8. :lt(index)<br> 
描述：选取索引小于于 index 的元素，索引从 0 开始，返回元素集合

9. :focus 描述：选取当前获取焦点的元素

**内容过滤选择器**

1. :contains(text)<br> 
描述：选取含有文本内容为 text 的元素，返回元素集合<br>
示例：`$("p:contains('我')")` 选取含有文本“我”的元素

2. :empty<br> 
描述：选取不包含子元素或者文本元素的空元素，返回元素集合
示例：`$("p:empty")` 选取不包含子元素或者文本元素的空 p 元素

3. :has(selector)<br> 
描述：选取含有选择器所匹配的元素的元素，返回元素集合<br>
示例：`$("p:has(p)")` 选取含有 p 元素的 p 元素

4. :parent<br> 
描述：选取含有子元素或者文本的元素，返回元素集合<br> 
示例：`$("p:parent")` 选取含有子元素或者文本元素的 p 元素

**可见性过滤选择器**

1. :hidden<br>
描述：选取所有不可见的元素，返回元素集合

2. :visible<br>
描述：选取所有可见的元素，返回元素集合

**属性过滤选择器（返回元素集合）**

1. [attribute]<br>
示例：`$("p[id]")` 选取拥有 id 属性的 p 元素

2. [attribute=value]<br>
示例：`$("input[name=text]")` 选取拥有 name 属性等于 text 的 input 元素

3. [attribute!=value]<br>
示例：`$("input[name!=text]")` 选取拥有 name 属性不等于 text 的 input 元素

4. [attribute^=value]<br>
示例：`$("input[name^=text]")` 选取拥有 name 属性以 text 开始的 input 元素

5. [attribute$=value]<br>
示例：`$("input[name$=text]")` 选取拥有 name 属性以 text 结束的 input 元素

6. [attribute*=value]<br>
示例：`$("input[name*=text]")` 选取拥有 name 属性含有 text 的 input 元素

7. [attribute~=value]<br>
示例：`$("input[class~=text]")` 选取拥有 class 属性以空格分割的值中 含有 text 的 input 元素

8. [attribute1][attribute2][attributeN]<br>
描述：合并多个属性过滤选择器

**表单对象属性过滤选择器（返回元素集合）**

1. :enabled<br>
描述：选取所有可用元素

2. :disabled<br>
描述：选取所有不可用元素

3. :checked<br>
描述：选取所有被选中的元素（单选框，复选框）<br>
示例：`$("input:checked")` 选取所有被选中的 input 元素

4. :selected<br>
描述：选取所有被选中的选项元素（下拉列表）<br>
示例：`$("select option:selected")` 选取所有被选中的选项元素
