### addEventListener()和removeEventListener()
这个函数和事件处理属性是类似的，但是语法略有不同。我们可以重写上面的随即颜色背景代码：

	var btn = document.querySelector('button');

	function bgChange() {
  		var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + 		random(255) + ')';
  		document.body.style.backgroundColor = rndCol;
	}   

	btn.addEventListener('click', bgChange);

在addEventListener() 函数中, 我们具体化了两个参数——我们想要将处理器应用上去的事件名称，和包含我们用来回应事件的函数的代码。
注意将这些代码全部放到一个匿名函数中是可行的:

	btn.addEventListener('click', function() {
  		var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  		document.body.style.backgroundColor = rndCol;
	});

有一个相对应的方法，removeEventListener()，这个方法移除事件监听器。例如，下面的代码将会移除上个代码块中的事件监听器：

btn.removeEventListener('click', bgChange);

在这个简单的、小型的项目中可能不是很有用，但是在大型的、复杂的项目中就非常有用了，可以非常高效地清除不用的事件处理器，
另外在其他的一些场景中也非常有效——比如您需要在不同环境下运行不同的事件处理器，您只需要恰当地删除或者添加事件处理器即可。

我们想要给一个监听器注册多个处理事件，需要使用的是方法addEventListener()。不会被后面的覆盖。


### 事件对象

有时候在事件处理函数内部，您可能会看到一个固定指定名称的参数，
例如event，evt或简单的e。 这被称为事件对象，它被自动传递给事件处理函数，以提供额外的功能和信息。 
例如，让我们稍稍重写一遍我们的随机颜色示例：

	function bgChange(e) {
	  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	  e.target.style.backgroundColor = rndCol;
	  console.log(e);
	}  

	btn.addEventListener('click', bgChange);
在这里，您可以看到我们在函数中包括一个事件对象e，并在函数中设置
背景颜色样式在e.target上 - 它指的是按钮本身。 
**事件对象 e 的target属性始终是事件刚刚发生的元素的引用。 **
所以在这个例子中，我们在按钮上设置一个随机的背景颜色，而不是页面。

**注意：**您可以使用任何您喜欢的名称作为事件对象 - 您只需要选择一个名称，
然后可以在事件处理函数中引用它。 开发人员最常使用 e / evt / event，因为它们很简单易记。 坚持标准总是很好。


### 阻止默认行为

有时，你会遇到一些情况，你希望事件不执行它的默认行为。 最常见的例子是Web表单，例如自定义注册表单。 当你填写详细信息并按提交按钮时，
自然行为是将数据提交到服务器上的指定页面进行处理，并将浏览器重定向到某种“成功
消息”页面（或 相同的页面，如果另一个没有指定。）

但是在用户没有提交正确的数据的时候，我们不想提交跳转。
一个简单的HTML表单，需要你填入名（first name）和姓（last name）

	<form>
	  <div>
	    <label for="fname">First name: </label>
	    <input id="fname" type="text">
	  </div>
	  <div>
	    <label for="lname">Last name: </label>
	    <input id="lname" type="text">
	  </div>
	  <div>
	     <input id="submit" type="submit">
	  </div>
	</form>
	<p></p>

 

这里我们用一个onsubmit事件处理程序（在提交的时候，在一个表单上发起submit事件）来实现一个非常简单的检查，用于测试文本字段是否为空。 
如果是，我们在事件对象上调用preventDefault()函数，这样就停止了表单提交，然后在我们表单下面的段落中显示一条错误消息，告诉用户什么是错误的：

	var form = document.querySelector('form');
	var fname = document.getElementById('fname');
	var lname = document.getElementById('lname');
	var submit = document.getElementById('submit');
	var para = document.querySelector('p');

	form.onsubmit = function(e) {
	  if (fname.value === '' || lname.value === '') {
	    **e.preventDefault();**
	    para.textContent = 'You need to fill in both names!';
	  }
	}

显然，这是一种非常弱的表单验证——例如，用户输入空格或数字提交表单，表单验证并不会阻止用户提交——这不是我们例子想要达到的目的。