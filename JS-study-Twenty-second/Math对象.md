### Math 对象(内置对象)

Math 对象用于执行数学任务。
使用 Math 的属性和方法的语法：

	var pi_value=Math.PI;
	var sqrt_value=Math.sqrt(15);

注释：Math 对象并不像 Date 和 String 那样是对象的类，
因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数，
不是某个对象的方法。您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。
**Math对象方法**
abs(x) 	返回数的绝对值。
floor(x) 	对数进行下舍入
round(x) 	把数四舍五入为最接近的整数。
max(x,y) 	返回 x 和 y 中的最高值。
min(x,y) 	返回 x 和 y 中的最低值。
pow(x,y) 	返回 x 的 y 次幂。
random() 	返回 0 ~ 1 之间的随机数。


valueOf() 	返回 Math 对象的原始值。
	Math

		E: 2.718281828459045		​
		LN10: 2.302585092994046		​
		LN2: 0.6931471805599453
		LOG10E: 0.4342944819032518		​
		LOG2E: 1.4426950408889634		​
		PI: 3.141592653589793		​
		SQRT1_2: 0.7071067811865476		​
		SQRT2: 1.4142135623730951		​
		abs: function abs()		​
		acos: function acos()
		acosh: function acosh()
		asin: function asin()		​
		asinh: function asinh()		​
		atan: function atan()	
		min: function min()
		pow: function pow()
		random: function random()
		round: function round()
		trunc: function trunc()
		Symbol(Symbol.toStringTag): "Math"
		<prototype>: Object { … }
