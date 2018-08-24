## Element.querySelector()
**语法**
```
element = baseElement.querySelector(selectors);
```
    element 和 baseElement 是 element 对象.
    selectors 是一个CSS选择器字符串( selectors )
### 例子

我们来看几个例子。
-1.在第一个例子中，会返回HTML文档里第一个没有type属性或者有值
为“text/css”的type属性的<style>元素:
```
	let el = document.body.querySelector("style[type='text/css'], style:not([type])");
```