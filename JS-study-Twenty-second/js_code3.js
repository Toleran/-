// 实现一个字符串头尾去除空格的函数
// 注意需要去除的空格，包括全角、半角空格
// 暂时不需要学习和使用正则表达式的方式

function diyTrim(str) {
    var result = "";

    result = str.trim();

    return result
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";

    var a = str.split('');//分割字符串
    var b =new Array();
    for (var i in a) {
    	if (b.indexOf(a[i])== -1) {
    		b.push(a[i]);
    	}
    }
    return result=b.join('');
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc
