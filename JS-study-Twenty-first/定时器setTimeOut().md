### HTML DOM setTimeout() 方法.
setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
例如网页上常见的弹窗过了多少秒自动消失。
语法

	setTimeout(code,millisec)

code 	必需。要调用的函数后要执行的 JavaScript 代码串。
millisec 	必需。在执行代码前需等待的毫秒数。

**setTimeout() 只执行 code 一次**。如果要多次调用，请使用 setInterval() 或者让 code 自身再次调用 setTimeout()。


### HTML DOM setInterval() 方法

HTML DOM Window 对象
定义和用法

setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。

**setInterval() 方法会不停地调用函数**，直到 clearInterval() 被调用或窗口被关闭。
由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。
语法

	setInterval(code,millisec[,"lang"])

code 	必需。要调用的函数或要执行的代码串。
millisec 	必须。周期性执行或调用 code 之间的时间间隔，以毫秒计。

可以有第三个参数，第三个参数作为第一个参数（函数）的参数。

第一个参数是函数，有三种形式：

　　1、**传函数名，不用加引号，也不加括号**，如 setInterval( func, 1000)

　　2、传匿名函数，实际和1是一样的

　　3、传函数字符串，加引号，也要加括号。如 setInterval("func()",1000);   
	这种方法，会在全局作用域下查找函数，有时候有问题。所以推荐前两种


## 停止计时器的工作

clearTimeout(对象) 清除已设置的setTimeout对象

clearInterval(对象) 清除已设置的setInterval对象
