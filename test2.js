var matrix = [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]];

// matrix的长度
const m = matrix.length;

// matrix的数组元素的长度，因为是矩阵，数组元素的长度
// 都一样，就用第一个数组元素代表
const n = matrix[0].length;

// 深度优先算法找出岛屿，area是保存岛屿面积的参数
function dfs(x, y, area) {

    // 设置一个参数来存放area的值
    var newArea = area;

    var dir_x = [0, 0, 1, -1];

    var dir_y = [1, -1, 0, 0];
    // 当其一边界为0时，或x，y的值超出矩阵的长度和宽度，直接返回
    if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] == 0) {

        return newArea;
    }
    else {
        newArea += 1;
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
        newArea = dfs(newx, newy, newArea);

    }


    // dfs这除了搜索出连在一起的1并且置0外还要返回area的值
    return newArea;


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



