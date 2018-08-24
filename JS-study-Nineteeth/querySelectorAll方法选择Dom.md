### querySelectorAll方法
它是parentNode中的一个方法。在这个方法的括号中传入的是"css中的选择器"
#### 语法
```
elementList = baseElement.querySelectorAll(selectors);
```
其中

    elementList会是一个non-live的NodeList对象.
    baseElement是一个元素对象.
    selectors是一组CSS选择器.
下面是一些例子：
示例
-1.
下面的例子返回了HTML文档中的body元素的所有p后代元素:

	var matches = document.body.querySelectorAll('p');
-2.
下面的例子返回了id为'test'的元素的所有class属性为'highlighted'的所有div后代元素的p子元素:

	var el = document.querySelector('#test');
	var matches = el.querySelectorAll('div.highlighted > p');
-3.
下面的例子返回了el元素的后代元素中所有拥有data-src属性的iframe元素:

	var matches = el.querySelectorAll('iframe[data-src]');


## document.querySelector()
文档对象模型Document引用的querySelector()方法返回文档中与指定选择器
或选择器组匹配的第一个 html元素Element。 如果找不到匹配项，则返回null。

**提示:** 匹配是使用文档节点的深度优先预先遍历遍历从文档标记中的第一个元素开始，并按子节点数量的顺序迭代顺序节点。

###  语法

element = document.querySelector(selectors);

其中**selectors**
    包含一个或多个要匹配的选择器的 DOM字符串DOMString。 该字符串必须是有效的CSS选择器字符串；如果不是，则引发SYNTAX_ERR异常。
   **返回值**
	表示文档中与指定的一组CSS选择器匹配的第一个元素的 html元素Element对象。
	**SYNTAX_ERR**
    指定selectors的语法无效。 
 ### 注意

如果选择器是一个 ID，并且这个 ID 在文档中错误地使用了多次，那么返回第一个匹配该 ID 的元素。

CSS 伪类不会返回任何元素

### 转义特殊字符

如果要匹配的ID或选择器不符合 CSS 语法（比如不恰当地使用了冒号或者空格），
你必须用反斜杠将这些字符转义。由于 JavaScript 中，
反斜杠是转义字符，所以当你输入一个文本串时，你必须将它**转义两次**（一次是为 
JavaScript 字符串转义，另一次是为 querySelector 转义）：
```
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  console.log('#foo\bar')               // "#fooar"
  document.querySelector('#foo\bar')    // 不匹配任何元素

  console.log('#foo\\bar')              // "#foo\bar"
  console.log('#foo\\\\bar')            // "#foo\\bar"
  document.querySelector('#foo\\\\bar') // 匹配第一个div元素

  document.querySelector('#foo:bar')    // 不匹配任何元素
  document.querySelector('#foo\\:bar')  // 匹配第二个div
</script>
```
