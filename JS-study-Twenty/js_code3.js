// 点击某一个 Li 标签时，将 Li 的背景色显示在 P 标签内，
// 并将 P 标签中的文字颜色设置成 Li 的背景色
// var list = document.querySelectorAll("li");
//         for (var i = i = 0, len = list.length; i < len; i++) {
//             list[i].onclick = function(e) {
//                 var t = e.target;//指向当前点击的li标签

//                 var c = t.style.backgroundColor;

//                 var p = document.getElementsByClassName("color-picker")[0]; //指向的p中的text节点

//                 p.innerHTML = c;
                
//                 p.style.color = c;

//             }
//         }

 //利用事件委托，代码重构
 var parentUl=document.getElementsByClassName('palette')[0]; 
 //上面的操作获取到了ul
 parentUl.onclick=function (e){
 			var t = e.target;//指向当前点击的li标签
 			
            var c = t.style.backgroundColor;
            var p = document.getElementsByClassName("color-picker")[0]; //指向的p中的text节点
            p.innerText = c;
               
            p.style.color = c;
 }