//<<:  二进制位运算左移,如输入列表(0 0 1 1) 左移 1 次以后就是(0 1 1 0) 左移 3 次是(1 0 0 0)

// n是数组，times是位移的次数
function add_0_to_right(n, times) {

    // 左移几次就有几次循环，每次循环都执行下代码块动作
    for (var i = 0; i < times; i++) {

        // 数组尾巴加0
        n.push(0);

        // 移除数组第一个元素
        n.shift();
    }

    return n;
}

n = [1, 0, 0, 1];

arr1 = add_0_to_right(n, 2);

// [ 0, 1, 0, 0 ]
console.log(arr1);


// and:  二进制位运算与操作,输入两个列表，返回一个新列表，
// 只有A和B列表中都为1的位才会出现在新列表中显示1否则是0

function and(n1, n2) {

    // 先将n1，n2进行翻转
    n1.reverse();

    n2.reverse();

    var n3 = [];

    // 以长度较长的数组为n3（新数组）的长度
    if (n1.length < n2.length) {

        n3.length = n2.length;
    }
    else {

        n3.length = n1.length;
    }

    for (var i = 0; i < n3.length; i++) {

        if (n1[i] == n2[i]) {

            // 如果n1和n2的第i个元素皆为1，n3的i元素与n1相同
            n3[i] = n1[i];
        }
        // 果n1和n2的第i个元素不等于，n3的i元素赋值为0
        else if (n1[i] != n2[i]) {

            n3[i] = 0;
        }
        else {

            n3[i] = 0;
        }
    }

    n3.reverse();

    return n3;
}

n1 = [1, 0, 0, 1];

n2 = [0, 1, 0, 1, 0, 0, 1];

console.log(and(n1, n2));


// binary to decimal: 将二进制列表转为整数，如(0 0) 就是 0， (0 1) 就是1 (1 1)就是2
// 提示：1011对应2^3 + 2^1 + 2^0 = 11 以此类推。
// 利用前面写的位运算来判断某一位比特是否是1

function b_to_d(bi) {

    // 先将bi数组翻转
    bi.reverse();

    var sum = 0;

    for (let i = 0; i < bi.length; i++) {

        // 判断bi[i]的值是否为1，分别执行代码
        if (bi[i] == 1) {

            sum = Math.pow(2, i) + sum

        }
        else {

            sum = 0 + sum;

        }
    }

    return sum;

}

// 5
let bi = [1, 0, 1];

console.log(b_to_d(bi));
