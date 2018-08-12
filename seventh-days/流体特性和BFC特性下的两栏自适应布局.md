### 流体特性
块状水平元素，如div元素（下同），在默认情况下（非浮动、绝对定位等），水平方向会自动填满外部的容器；如果有margin-left/margin-right, padding-left/padding-right, border-left-width/border-right-width等，实际内容区域会响应变窄。*这就是流体特性*
>当然，你可以左侧有多个浮动，或者左浮动+右浮动。于是，我们不仅可以实现两栏自适应效果，多栏自适应效果也不在话下。
然而，利用块状元素流体特性实现的自适应布局有个不足，就是，我们需要知道浮动或绝对定位内容的尺寸。然后，流体内容才能有对应的margin或padding或border值进行位置修正。于是，问题来了，我们没法单纯使用一个公用的类名，类似.clearfix这样，整站通用。因为不同自适应场景的留白距离是不一样的。
###  BFC元素简介与基本表现
BFC全称”Block Formatting Context”, 中文为“块级格式化上下文”。*BFC元素特性表现原则*就是，内部子元素再怎么翻江倒海，翻云覆雨都不会影响外部的元素。所以，避免margin穿透啊，清除浮动什么的也好理解了。
### 触发BFC的情况
	-1.float的值不为none。
	-2.overflow的值为auto,scroll或hidden。
	-3.display的值为table-cell, table-caption, inline-block中的任何一个。
	-4.position的值不为relative和static。
普通流体元素BFC后，为了和浮动元素不产生任何交集，顺着浮动边缘形成自己的封闭上下文。同时，-元素原本的流体特性-依然保留了。虽然不与浮动交集，自动退避浮动元素宽度的距离，但本身作为普通元素的流动性依然存在，反映在布局上就是自动填满除去浮动内容以外的剩余空间。这不就是自适应布局嘛！！
#### BFC自适应布局模块间的间距
	使用浮动元素的margin-right或者padding-right轻松实现间距效果。间距是20像素，直接：
	```
	.float-left {
    float: left;
    margin-right: 20px;
	}
	```
	不仅如此，我们还可以使用BFC元素的padding-left撑开间距（虽然margin-left作用鸡肋）。
### BFC自适应布局优势
-1.自适应内容由于封闭，更健壮，容错性强。比方说，内部clear:both不会与兄弟float产生矛盾。而纯流体布局，clear:both会让后面内容无法和float元素在一个水平上，产生布局问题。
-2.自适应内容自动填满浮动以为区域，无需关心浮动元素宽度，可以整站大规模应用。而纯流体布局，需要大小不确定的margin/padding等值撑开合适间距，无法CSS组件化。
```
.float-left {
    float: left; margin-right: 20px; 
}
.bfc-content {
    overflow: hidden; background-color: #beceeb;
}
```
### BFC元素家族与自适应布局面面观
由于绝大多数的触发BFC的属性自身有一些古怪的特性，所以，实际操作的时候，能兼顾流体特性和BFC特性来实现无敌自适应布局的属性并不多。例如下面的例子：
-1.float:left 浮动元素本身BFC化，然而浮动元素有破坏性和包裹性，失去了元素本身的流体自适应性，因此，无法用来实现自动填满容器的自适应布局。不过，其因兼容性还算良好，与堆积木这种现实认知匹配，上手简单，因此在旧时代被大肆使用，也就是常说的“浮动布局”，也算阴差阳错开创了自己的一套布局。
-2.position:absolute 这个脱离文档流有些严重，过于清高，不跟普通小伙伴玩耍
-3.overflow:hidden 这个超棒的哦！不像浮动和绝对定位，玩得有点过。也就是溢出剪裁什么的，本身还是个很普通的元素。因此，块状元素的流体特性保存相当完好，附上BFC的独立区域特性，可谓如虎添翼，宇宙无敌！就跟清除浮动，由于很多场景我们是不能overflow:hidden的，因此无法作为一个通用CSS类整站大规模使用。
-4.display:inline-block CSS届最伟大的声明之一，但是，在这里，就有些捉襟见肘了。display:inline-block会让元素尺寸包裹收缩，完全就不是我们想要的block水平的流动特性。但是在IE6/IE7浏览器下，block水平的元素设置display:inline-block元素还是block水平，也就是还是会自适应容器的可用宽度显示。于是，我们就阴差阳错得到一个比overflow:hidden更牛逼的声明，即BFC特性加身，又流体特性保留。
-5.display:table-cell 让元素表现得像单元格一样，IE8+以上浏览器才支持。跟display:inline-block一样，会跟随内部元素的宽度显示，看样子也是不合适的命。但是，单元格有个非常神奇的特性，就是你宽度值设置地再大，大到西伯利亚，实际宽度也不会超过表格容器的宽度。如果我们把display:table-cell这个BFC元素宽度设置很大，比方说3000像素。那其实就跟block水平元素自动适应容器空间效果一模一样了。除非你的容器宽度超过3000像素，实际上，一般web页面不会有3000像素宽的模块的。所以，要是你实在不放心，设个9999像素值好了！但是有两点问题：
	-1.一是IE8+以上浏览器兼容，有些苦逼的团队还要管IE6；
	-2.二是应付连续英文字符换行有些吃力（可以嵌套table-layout（布局）:fixed解决）。
##### 总结
我们对BFC声明家族大致过了一遍，能担任自适应布局重任的也就是：
-1.overflow:auto/hidden IE7+
-2.display:inline-block IE6/IE7
-3.display:table-cell IE8+