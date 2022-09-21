
// 2.实现一个函数，接受一个数值n，，计算1 + 2 + 3 + ..n的求和

function add_all(n) {

    var sum = 0;
    for (var i = 1; i <= n; i++) {

        sum = i + sum;

    }
    return sum;
}

// 45
console.log(add_all(9));


// 3.实现一个函数，接受含有n个数字的列表，计算他们相乘是多少



function multiply_all(n) {

    var sum = 1;
    for (var i = 0; i < n.length; i++) {

        sum = n[i] * sum;
    }
    return sum;
}

var n3 = [2, 3, 4, 5, 6, 7];

console.log(multiply_all(n3));


// 4.实现一个函数，比较给出的列表中是否含有数字44？

// 判断元素是否属于数组
function isInArray(arr, value) {

    for (var i = 0; i < arr.length; i++) {

        // 如果value值等于数组元素，返回true，否则返回false
        if (value == arr[i]) {

            return true;
        }
        else {

            return false;
        }
    }

}

arrp = [33, 22, 44];

// faulse, 为什么？？？
isInArray(arrp, 44);

console.log(isInArray(arrp, 44));