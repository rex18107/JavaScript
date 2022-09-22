
//演示作用域
var a = 'a';

function func() {
	var a = 'b';
	console.log(a);
}
func();

console.log(a);

// ans:
// b
// a

function func2() {
	console.log(a);
}

func2();

// ans:
// a

function func3() {
	a = 'c';
	console.log(a);
}

func3();
console.log(a);

// ans:
// c
// c

//------------

//演示JS lambda
var sum = (a, b) => a + b;

console.log(sum(1, 2));

a = 10;
result = sum(a, 2);
console.log('result: ' + result);

// ans:
// 3
// result: 12

//------------
//演示JS 变量存着一个函数，以及函数之间相互调用


var multiply = function (a, b) {
	return a * b;
}

var multiply_2 = function (a, b) {
	var res = 0;
	for (var i = 0; i < b; ++i) {
		res = sum(res, a);
	}
	return res;
}


console.log(multiply(a, 3));

console.log(multiply_2(a, 3));

// ans:
// 30
// 30

//------------

//演示JS 内建函数setInterval的使用，以及回调函数这个概念
var star = "";

var output = function (a, b) {
	console.log(star);
	star += "*";
	if (star.length > 10) {
		clearInterval(myInterval);
	}
}

const myInterval = setInterval(output, 1000);

// ans
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
