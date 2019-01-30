var countProd = function (arr) {
    if (!arr || !arr[0]) {
        return;
    }
    
    var col = arr.length; // lie
    var row = arr[0].length // 行
    var count = 0;
    var brr = []; // 用于存放所有元素为'W'的下标 row_col

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            // 判断这个点是否为边界点
            if (arr[i][j].toUpperCase() === 'W') {
                brr.push(i +'_' + j);
            }
        }
    }

    // 对brr里面的每一个点进行遍历
    var x, y;
    var str = ''; // 用于存放已经遍历点的下标字符串
    var wArr = []; // 用于存放每一片W的坐标字符串
    for (var i = 0, len = brr.length; i < len; i++) {
        if (str.indexOf(brr[i]) == -1) { // 如果当前点还没有被遍历
            // 获取当前点的横坐标和纵坐标
            x = brr[i].split('_')[0]; 
            y = brr[i].split('_')[1];

            // 对每个W点的右方和下方点进行遍历，直到不存在右方和下方点
            wArr.push(search(brr, x * 1, y * 1, ''));
        } 
    }

    for (var i = 0, len = wArr.length; i < len; i++) {
        // 判断是否有边界点
        if (!isContainBoundary(wArr[i], row, col)) { // 不包含边界点
            count += wArr[i].split('#').length;
        }
    }

    /**
     * 找到与当前'W'相连的所有'W'下标，并以字符串的形式返回
     * 思路：对每个相连'W'的右方和下方进行遍历
     * 上 (i-1)j 左i(j-1) 右i(j+1) 下(i+1)j
     * @param {array} arr 需要遍历的数组
     * @param {number} i  当前点的横坐标
     * @param {number} j  当前点的纵坐标
     * @param {string} resStr  存放当前点坐标的字符串
     * @return {string}   把每个片区的'W'的坐标通过'#'连接起来并返回
     */
    function search(arr, i, j, resStr) {
        resStr += resStr === '' ? i + '_' + j : '#' + i + '_' + j;
        str += str === '' ? i + '_' + j : '#' + i + '_' + j;

       // var upIndex = arr.indexOf((i-1) + '_' + j);
        var rightIndex = arr.indexOf(i + '_' + (j + 1));
        var downIndex = arr.indexOf((i+1) + '_' + j);
        // var leftIndex = arr.indexOf(i + '_' + (j- 1));
        if (rightIndex !== -1) {
            search(arr, i, j + 1, resStr);
        }
        if (downIndex !== -1) {
            search(arr, i + 1, j, resStr);
        }
        return resStr;
    }

    /**
     * 判断是否存在边界点，只需要判断是否存在0 || row || col即可
     * @param {*} item  string 当前点
     * @param {*} row  number  行
     * @param {*} col  number  列
     * @return {boolean} true：包含边界点， false: 不包含边界点
     */
    function isContainBoundary(item, row, col) {
        if (
            item.indexOf(0) !== -1 ||
            item.indexOf(row) !== -1 ||
            item.indexOf(col) !== -1
        ) {
            return true;
        }
        return false;
    }
    
    /**
     * 判断是否是边界点
     * @param {*} row 行数 
     * @param {*} col 列数
     * @param {*} i 当前点的行坐标
     * @param {*} j 当前点的列坐标
     */
    function isBoundary(row, col, i, j) {
        /**
         * 00 01 02 ... 0col
         * 00 10 20 ... row0
         * row0 row1 row2 ... rowcol
         * col0 col1 col2 ... colrow
         */
        if (i > 0 && i < row - 1 && j > 0 && j < col - 1) {
            return false;
        }
        return true;
    }

    return count;
}

var arr = [
    ['B', 'B', 'B', 'B'],
    ['W', 'B', 'W', 'B'],
    ['B', 'W', 'W', 'B'],
    ['B', 'B', 'B', 'B'],
];

var brr = [
    ['B', 'B', 'B', 'B'],
    ['W', 'W', 'W', 'B'],
    ['B', 'W', 'W', 'B'],
    ['B', 'B', 'B', 'B'],
];
var crr = [
    ['B', 'B', 'B', 'B'],
    ['W', 'W', 'B', 'B'],
    ['B', 'B', 'W', 'B'],
    ['B', 'B', 'B', 'B'],
];

console.log(countProd(arr));
console.log(countProd(brr));
console.log(countProd(crr));