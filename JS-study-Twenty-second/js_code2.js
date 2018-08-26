var strA = document.getElementById('str-a');
var strB = document.getElementById('str-b');
var btns = document.querySelectorAll('button');

var pObj=document.getElementById('result');

btns[0].onclick=function () {
	txt= strA.value.length+'------'+strB.value.length;
	pObj.innerHTML+=txt;
}
btns[1].onclick=function () {
	pObj.innerHTML+='<br>'+strA.value[2]+'-----------'+strB.value[2]
}
btns[2].onclick=function (argument) {
	pObj.innerHTML+='<br>'+strA.value.concat(strB.value);
}
btns[3].onclick=function (argument) {
	pObj.innerHTML+='<br>'+strA.value.indexOf(strB.value);
}
btns[4].onclick=function (argument) {
	pObj.innerHTML+='<br>'+strB.value.lastIndexOf(strA.value);
}
btns[5].onclick=function (argument) {
	var a=Number(document.getElementById('num-a').value);
	var b=Number(document.getElementById('num-b').value);
	pObj.innerHTML+='<br>'+strA.value.slice(a, b)+'---'+strB.value.slice(a, b)
}

btns[6].onclick=function (argument) {
	
}
btns[7].onclick=function (argument) {
	var a=Number(document.getElementById('num-a').value);
	var b=Number(document.getElementById('num-b').value);
	pObj.innerHTML+='<br>'+strA.value.substr(a ,b)+'----'+strB.value.substr(a, b);
}
btns[8].onclick=function (argument) {
	pObj.innerHTML+='<br>'+strA.value.toUpperCase()+'----'+strB.value.toUpperCase();
}
btns[9].onclick=function (argument) {
	pObj.innerHTML+='<br>'+strA.value.toLowerCase()+'----'+strB.value.toLowerCase();
}
btns[10].onclick=function (argument) {
	pObj.innerHTML+='<br>'+strA.value.replace('',' ');
}
btns[11].onclick=function (argument) {
	pObj.innerHTML+='<br>'+strA.value.replace('a',strB.value);
}