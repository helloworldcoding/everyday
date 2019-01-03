var match = function (str) {
    var len = str.length;
    if (len === 0 || len === 1) {
        return false;
    }

    var arr = [];
    for (var i = 0; i < len; i++) {
        if (str[i] === '[' || str[i] === '{' || str[i] === '(') {
            arr.push(str[i]);
        } else if (
            (str[i] === ']' && arr[arr.length - 1] === '[') ||
            (str[i] === '}' && arr[arr.length - 1] === '{') ||
            (str[i] === ')' && arr[arr.length - 1] === '(') 
        ) {
            arr.length = arr.length - 1;
        } else {
            return false;
        }
    }
    return true;
}