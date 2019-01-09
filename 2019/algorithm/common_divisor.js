/**
 * 求两个正整数的最大公约数
 * @param {number} n 
 * @param {number} m 
 * @return {number}
 */
function getCommonDivisor(n, m) {
    if (isNaN(n) || isNaN(m)) {
        return;
    }
    var sqr = n > m ? parseInt(m) : parseInt(n);
    var res = 1;
    for (var i = 1; i <= sqr; i++) {
        if (n % i === 0 && m % i === 0) {
            res = i;
        }
    }
    return res;
}

console.log(getCommonDivisor(12, 24));