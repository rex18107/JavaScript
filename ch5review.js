// 1.rotate: 给你一个列表,将列表中的元素向右轮转 k 个位置,其中 k 是非负数。
// 输入: nums = (1 2 3 4 5 6 7), k = 3
// 输出: (5 6 7 1 2 3 4)
// k = 3意味着所有元素都会往右边跑3格，对于已经在最右边的7，会跑到左边去，所以最右边的7跑到最左边第三格去了。

// 输入：nums = (-1, -100 3 99), k = 2
// 输出：(3 99 -1 -100)
// 解释:
// 向右轮转 1 步: (99 -1 -100 3)
// 向右轮转 2 步: (3 99 -1 -100)

// 提示：使用字符串反转实现，比如说(1 2 3 4 5 6 7), k = 3 第一轮全部翻转，得到7654321
// 第二轮翻转[0,2]的部分，得到5674321
// 第三轮翻转[3,6]的部分，得到5671234

function rotate(arr1, k) {

    //将数组翻转
    arr1.reverse();

    for (let i = 0; i < k; i++) {

        arr1.push(arr1[0]);

        arr1.shift();
    }

    arr1.reverse();

    return arr1;
}

arr1 = [1, 2, 3, 4, 5, 6, 7];

console.log(rotate(arr1, 3));

// 不用翻转的版本，但是有误。
// function rotate(arr1, k) {

//     l = arr1.length

//     for (let i = 0; i < k; i++) {

//         arr1.unshift(arr1[l]);

//         arr1.pop();
//     }


//     return arr1;
// }

// arr1 = [1, 2, 3, 4, 5, 6, 7];

// [ undefined, undefined, undefined, 1, 2, 3, 4 ]，为什么会是未定义？
// console.log(rotate(arr1, 3));


// 2. subsets: 给你一个整数列表 nums ,列表中的元素 互不相同 。返回该列表所有可能的子集(幂集)。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 输入:nums = (1 2 3)
// 输出:(() (1) (2) (1 2) (3) (1 3) (2 3) (1 2 3))

// 注意观察：我们有1 2 3 但是没有 3 2 1，因为这不是个排列问题。 我们可以返回 (3 2 1)，但是那样就不能再返回(1 2 3) 因为我们不返回重复的子集。
// 提示：可以使用之前的二进制递增来判断子集，比如说1代表拿,0代表不拿（有点像排列组合）
// 那么对于(1 2 3) 我们第一轮是(0 0 0)，产生一个()空集
// 第二轮是(0 0 1),1代表我们取第三位,产生(3)
// 第三轮是(0 1 0),1代表我们取第二位,产生(2)
// 第三轮是(0 1 1),1代表我们取第二位和第三位,产生(2 3) 以此类推就可以解决问题。

// 对二进制数组加一
function binary_add(bi) {

    // 这是递归的结束条件，代表数组元素除递归到最后
    if (bi[bi.length - 1] == 1) {

        binary_add(bi.pop());

        bi.push(0);
    }
    else if (bi[bi.length - 1] = 0) {

        bi[bi.length - 1] = 1;
    }
    else {
        binary_add(bi.pop());
    }

}

function subsets(nums) {

    var make0 = [];

    for (let i = 0; i < nums.length; i++) {

        make0[i] = 0;
    }



}



// 3.count_islands: 给你一个由 '1'(陆地)和 '0'(水)组成的的二维网格,请你计算网格中岛屿的数量。
// 岛屿总是被水包围,并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成（也就是说只有上下左右联通的才算是一个岛屿，斜线的不算）
// 此外,你可以假设该网格的四条边均被水包围。

// 输入:grid = (
//   (1 1 1 1 0)
//   (1 1 0 1 0)
//   (1 1 0 0 0)
//   (0 0 0 0 0)
// )
// 输出:1 (只有一个岛屿)

// 输入:grid = (
//   (1 1 0 0 0)
//   (1 1 0 0 0)
//   (0 0 1 0 0)
//   (0 0 0 1 1)
// )
// 输出:3(左上角一个四个1的岛屿,第三行有个只有一个1的岛屿,右下角有个有两个1的岛屿,一共三个

// 提示：这道题用深度优先搜索就可以，但是怎么实现呢？
// 这道题欢迎网上查题解找思路，重点在于实现。
// https://leetcode.cn/problems/number-of-islands/solution/dao-yu-shu-liang-by-leetcode/

var matrix = [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]];

// matrix的长度
const m = matrix.length;

// matrix的数组元素的长度，因为是矩阵，数组元素的长度
// 都一样，就用第一个数组元素代表
const n = matrix[0].length;

// 深度优先算法找出岛屿，area是保存岛屿面积的参数
function dfs(x, y, area) {



    var dir_x = [0, 0, 1, -1];

    var dir_y = [1, -1, 0, 0];
    // 当其一边界为0时，或x，y的值超出矩阵的长度和宽度，直接返回
    if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] == 0) {

        return area;
    }
    else {
        area += 1;
        // 这里是matrix[x][y] = 1的情况，所以需要置0
        matrix[x][y] = 0;
    }
    // 将matrix[x][y]上下左右的值都找出来
    for (let i = 0; i < 4; i++) {

        // 代表x的左或右的值
        newx = x + dir_x[i];

        // 代表y的上或下的值
        newy = y + dir_y[i];

        // 继续对座标(x,y)上下左右的座标进行搜索
        area = dfs(newx, newy, area);

    }


    // dfs这除了搜索出连在一起的1并且置0外还要返回area的值
    return area;


}


function islands(matrix) {

    // 岛屿的数量
    var res = 0;

    // islands中各岛屿的面积
    var island_area = [];

    // 遍历出矩阵的所有值
    for (let x = 0; x < matrix.length; x++) {

        for (let y = 0; y < matrix[x].length; y++) {

            // 如果matrix[x][y] = 1，就进行递归，并且岛屿计数加一
            if (matrix[x][y] == 1) {
                island_area[res] = dfs(x, y, 0);
                res++;
            }
        }
    }

    return { res, island_area };

}


console.log(islands(matrix));



