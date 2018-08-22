
function insertAfter(newElement,targetElement) {
	var parent=targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else {
		Parent.insertBefore(newElement,targetElement.nextSibling)
	}
}

document.getElementById("hello-btn").onclick=function (argument) {
	var divBox=document.createElement('div');

	var lastBox=document.getElementById("father").lastChild;
	document.getElementById("father").insertAfter(divBox, lastBox);
	divBox.className="mes-five clearfix";
};