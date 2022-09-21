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

// 3. reverse_nested: 接受一个带有n个元素的列表,反转里面的元素,包括里面的子列表中的元素
// 比如：[[2,3,4],8,1,9]翻转为[9,1,8,[4,3,2]]


let c = [[2, 3, 4], 3, 4, ['a', 'b', 's', [1, 2, 3, 4]], 6, 7];
let arr = [];
function reverse_nested(arr) {
    arr.reverse();

    // 对arr的每一个元素进行判断
    for (let i = 0; i < arr.length; i++) {

        // 如果元素为数组的话也要进行翻转，使用递归
        if (Array.isArray(arr[i])) {
            //这里递归会造成溢出怎么解决呢？要设置边界条件
            reverse_nested(arr[i]);
        }
    }
}
reverse_nested(c);
console.log(c);

// 这里是因为n不是对象所以无法调用吗
//result = n.reverse_nested();
// n.reverse和reverse(n)的不同

//这是Q3的第二种解答
// r_arr = function (n) {
//     for (let index = 0; index < n.length; index++) {
//         if (Array.isArray(n[index])) {
//             n[index].reverse();
//             r_arr(n[index])
//         }
//     }
// }
// r_arr(c);
// c.reverse();
// console.log(c);



// var n = 1;

// function test() {
//     n = n + 1;
// }

// // 调用第一次
// test();

// // 2
// console.log(n);

// // 调用第二次
// test();

// // 3
// console.log(n);

// // undefined,因为test()函数没有返回值,但是也是调用了一次test()
// console.log(test());

// // 4
// console.log(n);

// function test2(m) {
//     m = m + 1;
//     return m;
// }

// // 2
// console.log(test2(1));

// // 4
// console.log(test2(3));

// function test3(m) {
//     m = n + 1;
//     return m;
// }

// // 5
// console.log(test3(1));

// // 5
// console.log(test3(3));
