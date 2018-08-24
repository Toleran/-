// 在这个练习中仅允许使用以下 DOM 方法或属性，不得使用高级选择器

//     getElementById()
//     getElementsByTagName()
//     childNodes
//     parentNode

    function getAllListItem() {
        // 返回页面中所有li标签
        return document.getElementsByTagName('li');
        
    }

    function findAllHtmlSpanInOneSection(sectionId) {
        // 返回某个section下所有span中内容为HTML的span标签
        var spanObj=sectionId.getElementsByTagName('span');
        for (var i = 0; i <= spanObj.length-1; i++) {
        	 if (spanObj[i].innerText == 'HTML') 
        	 {
        	 	console.log(spanObj[i]);
        	 }
        }
    }

    function findListItem(sectionId, spanCont) {
        // 返回某个section下，所有所包含span内容为spanCont的LI标签
        var spanObj=sectionId.getElementsByTagName('span');
        for (var i = 0; i <= spanObj.length-1; i++) {
        	 if (spanObj[i].innerText == spanCont) 
        	 {
        	 	console.log(spanObj[i].parentNode);
        	 }
        }
    }

    function getActiveLinkContent(sectionId) {
        // 返回某个section下，class为active的链接中包含的文字内容
        var aObj=sectionId.getElementsByTagName('a');
        for (var i = 0; i <= aObj.length-1; i++) {
        	if (aObj[i].className == 'active') {
        		console.log(aObj[i].innerText);
        	}
        }
    }
