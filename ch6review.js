// 1.value:  增加value的功能，可以支持坐标相加，也就是支持有2个数字的列表，分别代表x y，相加以后得到(x1+x2 y1+y2)的结果。
// 如(1 2) + (3 4) = (4 6)
// 提示：我们需要重新定义 + 流程并且修改value的代码？

// 判断数组是否含有运算符
function find_operator(arr) {

    // 先一个一个数组元素进行查找
    for (let i = 0; i < arr.length; i++) {


        // 如果数组元素是数组的话调用递归
        if (Array.isArray(arr[i])) {

            return find_operator(arr[i]);
        }
        else {
            // 如果数组元素有这些运算符就返回true
            if (arr[i] == '+' || arr[i] == '*' || arr[i] == '^') {

                return true;
            }
            // 否则继续
            else {
                continue;
            }
        }
    }

    // 进行到这一步意味着没有找到任何运算符，就返回false
    return false;


}

function value_all(arr) {

    var result;

    switch (arr[1]) {


        case "+":
            result = arr[0] + arr[2];
            break;
        case "*":
            result = arr[0] * arr[2];
            break;
        case "^":
            result = Math.pow(arr[0], arr[2]);
            break;


    }
    if (Array.isArray(arr[i])) {

        if (find_operator(arr[i]) === true) {

        }



    }

}
