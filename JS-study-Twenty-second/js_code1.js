var btns = document.querySelectorAll('button');

var numA =document.getElementById('num-a');
var numB =document.getElementById('num-b');

var pObj=document.getElementById('result');

btns[0].onclick=function (argument) {
	var a =Number(numA.value);
	var b =Number(numB.value);
	if (isNaN(a) || isNaN(b) || numA.value == '' || numB.value== '' ) {
		console.log('请输入数字！');
	}
}

btns[1].onclick=function (argument) {
	var a =Number(numA.value);
	var b =Number(numB.value);
	if (isNaN(a) || isNaN(b) || numA.value == '' || numB.value== '' ) {
		console.log('请输入数字！');
	} else {
		pObj.innerHTML +='<br>' + a.toFixed(b);
	}
}

btns[2].onclick=function (argument) {
	var a =Number(numA.value);
	var b =Number(numB.value);
	if (isNaN(a) || isNaN(b) || numA.value == '' || numB.value== '') {
		console.log('请输入数字！');
	} else {	
	pObj.innerHTML  +='<br>' + Math.abs(a) +'====='+Math.abs(b);
	}
}
btns[3].onclick=function (argument) {
	var a =Number(numA.value);
	var b =Number(numB.value);
	if (isNaN(a) || isNaN(b) || numA.value == '' || numB.value== '') {
		console.log('请输入数字！');
	} else {
		pObj.innerHTML +='<br>' + Math.ceil(a)+'====='+Math.ceil(b);
	}
}
btns[4].onclick=function (argument) {
	var a =Number(numA.value);
	var b =Number(numB.value);
	if (isNaN(a) || isNaN(b) || numA.value == '' || numB.value== '') {
		console.log('请输入数字！');
	} else {
		pObj.innerHTML +='<br>' + Math.floor(a)+'====='+Math.floor(b);
	}
}
btns[5].onclick=function (argument) {
	var a =Number(numA.value);
	var b =Number(numB.value);
	if (isNaN(a) || isNaN(b) || numA.value == '' || numB.value== '') {
		console.log('请输入数字！');
	} else {
		pObj.innerHTML +='<br>' + Math.round(a)+'====='+Math.round(b);
	}
}
btns[6].onclick=function (argument) {
	var a =Number(numA.value);
	var b =Number(numB.value);
	if (isNaN(a) || isNaN(b) || numA.value == '' || numB.value== '') {
		console.log('请输入数字！');
	} else {
		pObj.innerHTML +='<br>' + Math.max(a,b);
	}
}
btns[7].onclick=function (argument) {
	var a =Number(numA.value);
	var b =Number(numB.value);
	if (isNaN(a) || isNaN(b) || numA.value == '' || numB.value== '') {
		console.log('请输入数字！');
	} else {
		pObj.innerHTML +='<br>' + Math.min(a,b);
	}
}