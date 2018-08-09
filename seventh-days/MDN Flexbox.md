# 弹性盒子
	一直以来，唯一可用的且有稳定的跨浏览器兼容性的能用来布局的工具只有float和position，但是有些时候不能实现我们想要的功能
	1.在父内容里面垂直居中一个块内容。
	2.使容器的所有子项占用等量的可用宽度/高度，而不管有多少宽度/高度可用。
	3.使多列布局中的所有列采用相同的高度，即使它们包含的内容量不同。
利用弹性盒子我们可以使很多的布局任务变得容易起来。

# 指定元素的布局为 flexible
	我们需要给这些 flexible 元素的父元素 display 设置一个特定值。在本例中，我们想要设置 <article> 元素，因此我们给 <section>（变成了 flex 容器）设置 display：
	section {
	  display: flex;
	}
注意：假如你想设置行内元素为 flexible box，也可以置 display 属性的值为 inline-flex。

# flex模型说明
	元素表现为flex框时，他们沿着两个轴来布局
	1.主轴（main axis）
		是沿着 flex 元素放置的方向延伸的轴（比如页面上的横向的行、纵向的列）。该轴的开始和结束被称为 main start 和 main end。
	2.交叉轴(cross axis)
		是垂直于 flex 元素放置方向的轴。该轴的开始和结束被称为 cross start 和 cross end。
	其中设置了display：flex的父元素被称之为 flex 容器（flex container）。在flex容器中表现为柔性的盒子的元素被称为flex项。

# 指定主轴的方向，列还是行?
	弹性盒子提供了 flex-direction 这样一个属性，— 它默认值是 row，这使得它们在按你浏览器的默认语言方向排成一排（在英语/中文浏览器中是从左到右）。
	flex-direction: column   设置为列布局
	注意：你还可以使用 row-reverse 和 column-reverse 值反向排列 flex 项目。用这些值试试看吧！

# 换行
	当你在布局中使用定宽或者定高的时候，可能会有一个问题出来即处于容器中的弹性盒子子元素会溢出，破坏了布局。
	解决这个问题，需要在父级容器中添加
		flex-wrap:wrap;
	现在我们有了多行 弹性盒子— 任何溢出的元素将被移到下一行。

# flex-flow 缩写
	到这里，应当注意到存在着 flex-direction 和 flex-wrap — 的缩写 flex-flow。比如，你可以将
		flex-direction: row;
		flex-wrap: wrap;
	替换为
		flex-flow: row wrap;表示的行布局，子元素环绕
	