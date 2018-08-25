/*
* @Author: Destiny
* @Date:   2018-08-25 11:04:11
* @Last Modified by:   Destiny
* @Last Modified time: 2018-08-25 11:13:36
*/

    // 当用户选择了 School 的单选框时，显示 School 的下拉选项，隐藏 Company 的下拉选项
    // 当用户选择了 School 的单选框时，显示 Company 的下拉选项，隐藏 School 的下拉选项
var  school=document.getElementById('school-select');
var company=document.getElementById('company-select');

document.onclick=function (argument) {
	if (document.getElementById('school').checked == true) {
		school.style.display='block';
		company.style.display='none';
	}else {
		company.style.display='block';
		school.style.display='none';
	}

}

