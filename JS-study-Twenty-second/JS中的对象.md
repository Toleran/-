### js中的对象
JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...

此外，JavaScript 允许自定义对象。
JavaScript 对象

JavaScript 提供多个内建对象，比如 String、Date、Array 等等。

对象只是带有属性和方法的特殊数据类型。
## 访问对象的属性

属性是与对象相关的值。

访问对象属性的语法是：

	objectName.propertyName

这个例子使用了 String 对象的 length 属性来获得字符串的长度：

	var message="Hello World!";
	var x=message.length;
