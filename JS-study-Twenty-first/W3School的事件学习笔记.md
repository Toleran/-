通过操作DOM来进行对页面进行操作，这就是DOM的作用。
同时对DOM赋予事件，那么我们就可以实现交互。
### onclick事件
一个点击事件

### onload 和 onunload 事件

onload 和 onunload 事件会在用户进入或离开页面时被触发。

onload 事件可用于检测访问者的浏览器类型和浏览器版本，
并基于这些信息来加载网页的正确版本。

onload 和 onunload 事件可用于处理 cookie。

### onchange 事件

onchange 事件常结合对输入字段的验证来使用。

下面是一个如何使用 onchange 的例子。
当用户改变输入字段的内容时，会调用 upperCase() 函数。
实例
```
<input type="text" id="fname" onchange="upperCase()">
```


### onmouseover 和 onmouseout 事件

onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 
元素上方或移出元素时触发函数。

### onmousedown、onmouseup 以及 onclick 事件

onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。
首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，
会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件。
### onfocus事件
当在进行输入字段时，输入框获得焦点，那么就触发这个事件。


## onsubmit事件
在表单提交时进行触发。