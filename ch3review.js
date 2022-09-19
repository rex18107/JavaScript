// 完成以下函数
//1. reverse-two: 接受一个带有2个元素的列表,
//  返回一个新的列表, 左边的在右边, 右边的在左边

function reverse_two() {
    temp = x[0];
    x[0] = x[1];
    x[1] = temp;
    return x;
}
//(2) ['dog', 'cat']
var x = ['cat', 'dog'];

reverse_two(x);

console.log(x);

//2. build_list: 接受一个数字n,返回从100到 n乘以 100的列表:(100 200 300 .. n * 100)

var n = 9;

var a = [];

function build_list() {


    for (let i = 0; i < n; i++) {

        //将i存到数组a中
        a[i] = (i + 1) * 100;

    }


}
//调用函数
build_list(n);

// 为什么这种情况下的for循环没有任何反应
// for (let i in n) {
//     console.log(i);
// }

console.log(a);

//3. reverse_nested: 接受一个带有n个元素的列表,反转里面的元素,包括里面的子列表中的元素

var n = [];

function reverse_nested() {

    n.reverse();

    for (let i = 0; i < n.length; i++) {

        if (Array.isArray(n[i])) {
            //这里递归会造成溢出怎么解决呢？
            reverse_nested(n[i]);

            return;
        }
    }
}

n = [[2, 3, 4], 3, 4, ['a', 'b', 's', [1, 2, 3, 4]], 6, 7];

// 这里是因为n不是对象所以无法调用吗
// result = n.reverse_nested();
// n.reverse和reverse(n)的不同

reverse_nested(n);

//reverse_nested(n);

console.log(n);

