
    function getAllListItem() {
        // 返回页面中所有li标签
        return document.querySelectorAll('li');
    }

    function findAllHtmlSpanInOneSection(sectionId) {
        // 返回某个section下所有span中内容为HTML的span标签
        var a = sectionId.querySelectorAll('span');
        for (var i = 0; i <= a.length-1; i++) {
        	if (a[i].innerHTML == 'HTML') {
        		console.log(a[i]);
        	}
        }
    }

    function findListItem(sectionId, spanCont) {
        // 返回某个section下，所有所包含span内容为spanCont的LI标签
        var a = sectionId.querySelectorAll('span');
        for (var i = 0; i <= a.length-1; i++) {
        	if (a[i].innerHTML == spanCont) {
        		console.log(a[i]);
        	}
        }
    }

    function getActiveLinkContent(sectionId) {
        // 返回某个section下，class为active的链接中包含的文字内容
        return sectionId.querySelector('.active').innerHTML;
        
        
    }
