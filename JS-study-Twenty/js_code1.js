var btn=document.getElementById('submit-btn');

var inputObj=document.getElementById('name');


inputObj.onfocus=function (argument) {

	console.log();
		if (argument.keyCode == 13) {
			//enter
			
			console.log(inputObj.value);
		}
		if (argument.keyCode == 27) {
			//esc
			inputObj.value = '';
		}
	}
btn.onclick=function (argument) {

	
	console.log(inputObj.value);


}