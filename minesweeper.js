

// 设计一个扫雷小游戏，以矩阵的形式呈现，矩阵命名matrix，长宽分别为10和8，
// 其中含有15个炸弹


// matrix的纵轴长
var n = 10;

// matrix的横轴长
var m = 8;

// 炸弹的个数
var bombs = 15;


// 产生随机数
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

// 制造出地雷并放置matrix中，也就是说随机制造matrix中的地雷座标
function mines(bombs) {

    var matrix_mines = new Array();

    // 初始化matrix_mines，其有bombs个元素，每个元素皆是长度为2的数组
    for (let i = 0; i < bombs; i++) {

        // 随机生成matrix矩阵的炸弹座标
        matrix_mines[i] = [getRandomIntInclusive(0, m - 1), getRandomIntInclusive(0, n - 1)];
    }

    return matrix_mines;
}
//console.log(mines(bombs));

// 接收mines里的返回值matrix_mines
var a = mines(bombs);

// 制造随机地雷矩阵
function makeMatrix(m, n, a) {

    // 设置字符串为最后makeMatrix输出的扫雷矩阵
    var str = '';

    var matrix = new Array();

    // 初始化matrix数组
    for (let x = 0; x < n; x++) {

        matrix[x] = new Array();

        for (let y = 0; y < m; y++) {

            matrix[x][y] = '_';
        }
    }

    // 遍历matrix_mines数组,将炸弹放入进matrix对应的座标中
    for (let i = 0; i < a.length; i++) {

        // 将matrix_mines元素作为matrix的座标，给其赋值'*'
        matrix[a[i][1]][a[i][0]] = '*';

    }
    return matrix;

}

// 为了获得makeMatrix的返回值,
// 保存一开始生成的含有炸弹的矩阵
var madeMatrix = makeMatrix(m, n, a);

// 打印出地雷矩阵的字符串形式
function printMatrix(madeMatrix) {


    // 使用str将matrix矩阵换成字符串形式表达出来
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < m; j++) {

            // 直接输出a[i][j]的值
            process.stdout.write(madeMatrix[i][j] + ' ');
        }

        // 每个a[i]元素经过字符串转换后进行换行
        process.stdout.write('\n');
    }

}

printMatrix(madeMatrix);

// 引入readline模块,必须要在当前js文件中安装npm ："npm install readline-sync"
const readline = require("readline-sync");

// 从命令行获取x值
var str1 = readline.question("Enter x:");

// 从命令行获取y值
var str2 = readline.question("Enter y:");


// 用dfs算出玩家点击一个座标后，这个座标周围有几个炸弹
function howManyMines(a, str1, str2) {


    var dir_str1 = [0, 0, 1, -1];

    var dir_str2 = [1, -1, 0, 0];

    // 判断输入的str1，str2座标是否存在于minesMatrix中
    for (let i = 0; i < a.length; i++) {

        // 如果str1,str2的座标值是a中炸弹的座标，就加一计数
        if (a[i][0] == str1 & a[i][1] == str2) {

            res++;
        }
        else {
            // 否则返回
            return;
        }
    }

    // 将[str1,str2]上下左右的值都找出来
    for (let i = 0; i < 4; i++) {

        // 代表str1的左或右的值
        newstr1 = str1 + dir_str1[i];

        // 代表str2的上或下的值
        newstr2 = str2 + dir_str2[i];

        // 继续对座标(x,y)上下左右的座标进行搜索
        res = dfs(a, newstr1, newstr2);

    }
    // 返回炸弹的计数
    return res;
}

// 判断输入的x，y座标是否存在于minesMatrix中
for (let i = 0; i < a.length; i++) {

    // 如果minesMatrix中的数组元素内的元素，分别对应上炸弹座标值
    // ，输出bombs
    if (a[i][0] == str1 & a[i][1] == str2) {

        console.log('You are dead!');
    }
    else {

        // 调用dfs

    }
}






