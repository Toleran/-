## 改变 HTML 样式

如需改变 HTML 元素的样式，请使用这个语法：

	document.getElementById(id).style.property=new style
## HTML DOM Style 对象
**Style对象**
Style 对象代表一个单独的样式声明。可从应用样式的文档或元素访问 Style 对象。
使用 Style 对象属性的语法：

	document.getElementById("id").style.property="值"

#### Layout 属性
|属性 	|描述
|clear 	|设置在元素的哪边不允许其他的浮动元素
|clip 	|设置元素的形状
|content 	|设置元信息
|counterIncrement 	|设置其后是正数的计数器名称的列表。其中整数指示每当元素出现时计数器的增量。默认是1。
|counterReset 	|设置其后是正数的计数器名称的列表。其中整数指示每当元素出现时计数器被设置的值。默认是0。
|cssFloat 	|设置图像或文本将出现（浮动）在另一元素中的何处。
|cursor 	|设置显示的指针类型
|direction 	|设置元素的文本方向
|display 	|设置元素如何被显示
|height 	|设置元素的高度
|markerOffset 	|设置marker box的principal box距离其最近的边框边缘的距离
|marks 	|设置是否cross marks或crop marks应仅仅被呈现于page box边缘之外
|maxHeight 	|设置元素的最大高度
|maxWidth 	|设置元素的最大宽度
|minHeight 	|设置元素的最小高度
|minWidth 	|设置元素的最小宽度
|overflow 	|规定如何处理不适合元素盒的内容
|verticalAlign 	|设置对元素中的内容进行垂直排列
|visibility 	|设置元素是否可见
|width 	|设置元素的宽度

### Table 属性
|属性 	|描述
|borderCollapse 	|设置表格边框是否合并为单边框，或者像在标准的HTML中那样分离。
|borderSpacing 	|设置分隔单元格边框的距离
|captionSide 	|设置表格标题的位置
|emptyCells 	|设置是否显示表格中的空单元格
|tableLayout 	|设置用来显示表格单元格、行以及列的算法