# String 对象

String 对象用于处理文本（字符串）。
创建 String 对象的语法：

	new String(s);
	String(s);

参数 s 是要存储在 String 对象中或转换成原始字符串的值。
返回值

当 String() 和运算符 new 一起作为构造函数使用时，它返回一个新创建的 String 对象，存放的是字符串 s 或 s 的字符串表示。

当不用 new 运算符调用 String() 时，它只把 s 转换成原始的字符串，并返回转换后的值。
##  两个重要的常用方法
slice() 	提取字符串的片断，并在新的字符串中返回被提取的部分。
		slice()的第二个参数是可选的 ： 如果你没有传入参数，这个分片结束位置会在原始字符串的末尾。
split() 	把字符串分割为字符串数组。

## 字符串属性length
	var txt="Hello World!"
	document.write(txt.length);

## 为字符串添加样式
	var txt="Hello World!"
	字符串变大或者变小
	document.write("<p>Big: " + txt.big() + "</p>")
	document.write("<p>Small: " + txt.small() + "</p>")
	加粗或者斜体
	document.write("<p>Bold: " + txt.bold() + "</p>")
	document.write("<p>Italic: " + txt.italics() + "</p>")
	
	blink()用于显示闪光字符串
	fixed() 方法用于把字符串显示为打字机字体
	strike() 方法用于显示加删除线的字符串。
	document.write("<p>Blink: " + txt.blink() + " (does not work in IE)</p>")
	document.write("<p>Fixed: " + txt.fixed() + "</p>")
	document.write("<p>Strike: " + txt.strike() + "</p>")


	给字符串加css颜色
	设置字符串的字号
	document.write("<p>Fontcolor: " + txt.fontcolor("Red") + "</p>")
	document.write("<p>Fontsize: " + txt.fontsize(16) + "</p>")
	
	转换为大小写
	document.write("<p>Lowercase: " + txt.toLowerCase() + "</p>")
	document.write("<p>Uppercase: " + txt.toUpperCase() + "</p>")
	
	脚注或者上标
	document.write("<p>Subscript: " + txt.sub() + "</p>")
	document.write("<p>Superscript: " + txt.sup() + "</p>")
	
	字符串显示为链接
	document.write("<p>Link: " + txt.link("http://www.w3school.com.cn") + "</p>")

## indexOf()方法

	var str="Hello world!"
	document.write(str.indexOf("Hello") + "<br />")    0
	document.write(str.indexOf("World") + "<br />")    -1
	document.write(str.indexOf("world"))     6
用于查找字符串的索引值，并返回索引值

## match() 方法
 match() 来查找字符串中特定的字符，并且如果找到的话，则返回这个字符。
	var str="Hello world!"
	document.write(str.match("world") + "<br />")  world
	document.write(str.match("World") + "<br />")  null
	document.write(str.match("worlld") + "<br />")  null
	document.write(str.match("world!"))  world!


## 替换字符串replace()

	var str="Visit Microsoft!"
	document.write(str.replace(/Microsoft/,"W3School"))

	替换我们想要更换的字符串


