### 方法一、使用 obj.style.属性 来修改样式表的类名

从下面的代码可以看出ob.style.属性是如何来btnB的样式的。
	
  function changeStyle1() {
    var obj = document.getElementById("btnB");
    obj.style.backgroundColor= "black"; 
  }

该段代码修改btB的文字的颜色，在浏览器中打开调试工具，可以发现btB标签中多了一个属性【style="内联式>外联式。
而btB的hove伪类的background-color样式写在内联式中，所以嵌入式的background-color覆盖了伪类中，
这就使得鼠标放入btB上感觉不到背景颜色的变化。

### 方法二、使用obj.style.cssText来修改嵌入式的css

直接上JavaScript代码：

  function changeStyle2() {
     var obj = document.getElementById("btnB");
     obj.style.cssText = " display:block;color:White;
  }

该段代码和【一】中的效果是一样的，缺陷也是一样。
cssText的本质是设置style的属性值，在浏览器中你给它赋什么
指它就返回什么值。ie中有问题，需要注意。
但是使用这个方法会覆盖原有的style样式，我们需要使用
  Element.style.cssText += ‘width:100px;height:100px;top:100px;left:100px;’
因此，上面cssText累加的方法在IE中是无效的。

最后，可以在前面添加一个分号来解决这个问题：

  Element.style.cssText += ‘;width:100px;height:100px;top:100px;left:100px;’

再进一步，如果前面有样式表文件写着 div { text-decoration:underline; }，这个会被覆盖吗？不会！
因为它不是直接作用于 HTML 元素的 style 属性。

### 方法三、使用obj.className属性和setAttribute()方法来修改样式表的类名

使用代码来修改btB引用样式的类名，如下段代码：

  function changeStyle3() {
    var obj = document.getElementById("btnB");
    //obj.className = "style2";
    obj.setAttribute("class", "style2");
  }

通过更改btB的css的类名的方式来更改样式，更改样式类名有两种方式。
1、obj.className = "style2";  
2、 obj.setAttribute("class", "style2");都是一样的效果。

通过className设置元素的样式也有一个缺陷,那就是通过className设置元素的class属性时将替换(而不是追加)
该元素原有的class属性,在实际开发中往往很多时候我们需要**追加class；**

所以根据这个需要我们可以自定义一个方法来实现追加className的效果代码如下:
复制代码

  function addClass(element,value) {
      if (!element.className) {
          element.className = value;
      } else {
          newClassName = element.className;
          newClassName += " "; //这句代码追加的类名分开
          newClassName += value;
          element.className = newClassName;
      }
  }

### 方法四、使用更改外联的css文件，从而改变元素的css

通过更改外联的css文件引用从而来更改btB的样式，操作很简单。代码如下：

首先得引用外联的css文件，代码如下：

<link href="css1.css" rel="stylesheet" type="text/css" id="css"/>
 
function changeStyle4() {
   var obj = document.getElementById("css");
   obj.setAttribute("href","css2.css");
 }

这样也能方便的更改btB的样式，个人觉得这种方式是最好用的，是实现整体页面换肤的最佳方案。