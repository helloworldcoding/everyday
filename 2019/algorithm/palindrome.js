/**
 * 返回字符串中所有的回文字符串和最长的回文字符串
 */
var findPalindrome = function (str) {
    var res = {};
    var max = 0;
    var arr = [];
    var temp = '';
    var maxStr = '';
    for (var i = 0, len = str.length - 1; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            temp = str.substring(i,j + 1);
            if (isPalindrome(temp)) {
                arr.push(temp);
                if (temp.length > max) {
                    max = temp.length;
                    maxStr = temp;
                }
            }
        }
    }
    res = {
        arr: arr,
        max: max,
        maxStr: maxStr,
    };

    /**
     * 判断字符串是否是回文字符串
     * @param {string} str 
     * @return {boolean}
     */
    function isPalindrome(str) {
        var i = 0;
        var j = str.length - 1;
        while(i < j) {
            if (str[i] != str[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    return res;
}

var str = 'asaabb,ccffccll';
console.log(findPalindrome(str));