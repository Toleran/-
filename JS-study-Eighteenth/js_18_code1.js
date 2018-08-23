


document.getElementById("add-btn").onclick=function () {
	var firstNumber=parseInt(document.getElementById("first-number").value);
	var secondNumber=parseInt(document.getElementById("second-number").value);

	if (isNaN(firstNumber)||isNaN(secondNumber)) return alert('输入数字');
	var result=firstNumber+secondNumber;
	document.getElementById("result").textContent='运算结果是：'+ result;
	 
};

document.getElementById("minus-btn").onclick=function () {
	var firstNumber=parseInt(document.getElementById("first-number").value);
	var secondNumber=parseInt(document.getElementById("second-number").value);

	if (isNaN(firstNumber)||isNaN(secondNumber)) return alert('输入数字');
	var result=firstNumber-secondNumber;
	document.getElementById("result").textContent='运算结果是：'+ result;
	
};

document.getElementById("times-btn").onclick=function () {
	var firstNumber=parseInt(document.getElementById("first-number").value);
	var secondNumber=parseInt(document.getElementById("second-number").value);

	if (isNaN(firstNumber)||isNaN(secondNumber)) return alert('输入数字');
	var result=firstNumber*secondNumber;
	document.getElementById("result").textContent='运算结果是：'+ result;
};

document.getElementById("divide-btn").onclick=function () {
	var firstNumber=parseInt(document.getElementById("first-number").value);
	var secondNumber=parseInt(document.getElementById("second-number").value);

	if (isNaN(firstNumber)||isNaN(secondNumber)) return alert('输入数字');
	
	if (secondNumber==0) return alert('输入有错误');
	var result=firstNumber/secondNumber;
	document.getElementById("result").textContent='运算结果是：'+ result;
};