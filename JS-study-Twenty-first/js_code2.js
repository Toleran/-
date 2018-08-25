var im = document.getElementsByClassName('im')[0];
var y = 0 ;
var timeId = setInterval(function () {

	y-=480;
	im.style.backgroundPosition='0 '+y+'px';

	console.log(y);
	if (y == -7680) {
		clearInterval(timeId);
	}  

}, 50);