/**
 * 大数相加
 */
var add = function (n, m) {
    var sum = [];
    n = n + '';
    m = m + '';
    var c = 0; // 进位
    var min = max = n;
    if (n.length > m.length) {
        min = m;
        max = n;
    } else {
        min = n;
        max = m;
    }
 
    var temp = 0;
    var len = max.length;
    var diff = len - min.length;
    for (var i = len - 1; i >= 0; i--) {
        if (i >= diff) {
            temp = min[i - diff] * 1 + max[i] * 1 + c;
        } else {
            temp = max[i] * 1 + c;
        }
        c = parseInt(temp / 10);
        temp =  temp % 10;
        sum.push(temp);
    }

    if (c > 0) {
        sum.push(c);
    }
    
    return sum.reverse().join('');
}

console.log(add(1234, 1234));