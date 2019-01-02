/**
 * 思想：设要排序的数组是A[0]……A[N-1]，首先任意选取一个数据（通常选用数组的第一个数）
 * 作为关键数据，然后将所有比它小的数都放到它前面，
 * 所有比它大的数都放到它后面，这个过程称为一趟快速排序。
 * 值得注意的是，快速排序不是一种稳定的排序算法，
 * 也就是说，多个相同的值的相对位置也许会在算法结束时产生变动
 * @param {*} arr  需要排序的数组
 */
var quickSort = function (arr) {
    if (!arr || arr.length === 1) {
        return arr;
    }
    var sort = function (arr, left, right) {
        if (left >= right) {
            return;
        }
        var i = left;
        var j = right;
        var baseVal = arr[i];
        while (i < j) {
            while(j > i && arr[j] >= baseVal) {
                j--;
            }
            arr[i] = arr[j];
            while (i < j && arr[i] <= baseVal) {
                i++;
            }
            arr[j] = arr[i];
            
        }
        arr[i] = baseVal;
        sort(arr, left, j-1);
        sort(arr,j+1, right);
    }
    var newArr = arr.concat();
    sort(newArr, 0, newArr.length - 1);
    return newArr;
}

var arr = [2,1,3,1,3,56,77,3,4,5,63,2];
console.log(quickSort(arr));