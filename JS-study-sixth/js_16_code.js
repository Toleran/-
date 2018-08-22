/*
* @Author: Jhon
* @Date:   2018-08-22 17:41:09
* @Last Modified by:   Jhon
* @Last Modified time: 2018-08-22 17:58:35
*/

document.getElementById("add-btn").onclick=function () {
	var firstNumber=parseInt(document.getElementById("first-number").value);
	var scondNumber=parseInt(document.getElementById("second-number").value);
	var result=firstNumber+scondNumber;
	document.getElementById("result").textContent='运算结果是：'+ result;
};

document.getElementById("minus-btn").onclick=function () {
	var firstNumber=parseInt(document.getElementById("first-number").value);
	var scondNumber=parseInt(document.getElementById("second-number").value);
	var result=firstNumber-scondNumber;
	document.getElementById("result").textContent='运算结果是：'+ result;
	
};

document.getElementById("times-btn").onclick=function () {
	var firstNumber=parseInt(document.getElementById("first-number").value);
	var scondNumber=parseInt(document.getElementById("second-number").value);
	var result=firstNumber*scondNumber;
	document.getElementById("result").textContent='运算结果是：'+ result;
};

document.getElementById("divide-btn").onclick=function () {
	var firstNumber=parseInt(document.getElementById("first-number").value);
	var scondNumber=parseInt(document.getElementById("second-number").value);
	var result=firstNumber/scondNumber;
	document.getElementById("result").textContent='运算结果是：'+ result;
};