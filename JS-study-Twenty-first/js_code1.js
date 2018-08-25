
 // 点击按钮时，开始改变 fade-obj 的透明度，开始一个淡出（逐渐消失）动画，直到透明度为0
 // 在动画过程中，按钮的状态变为不可点击
 // 在动画结束后，按钮状态恢复，且文字变成“淡入”
 // 在 按钮显示 淡入 的状态时，点击按钮，开始一个“淡入”（逐渐出现）的动画，和上面类似按钮不可点，直到透明度完全不透明
 // 淡入动画结束后，按钮文字变为“淡出”
 

 var btn = document.getElementById('fade-btn');
var divObj=document.getElementById('fade-obj');

function fade() {
	if (btn.innerHTML == '淡出') {
		var a = 100; // 路程的远近
		var timeId=setInterval( function (){

				divObj.style.opacity = a/100;
				a= a-5; // 步伐
				btn.style.checked = false;

				if (a == 0) {
					clearInterval(timeId);
					btn.style.checked='';
					btn.innerHTML = '淡入';
				}
		}, 500);
	}
		if (btn.innerHTML == '淡入') {
		var a = 0;
		var timeId=setInterval( function (){

				divObj.style.opacity = a/100;
				a= a+5;
				//console.log(a);   测试
				btn.style.checked = false;

				if (a == 100) {
					clearInterval(timeId);
					btn.style.checked='';
					btn.innerHTML = '淡出';
				}
		}, 500);
	}



}

addEventListener( 'click', fade, false);