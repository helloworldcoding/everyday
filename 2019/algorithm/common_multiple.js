/**
 * 最小公倍数
 * @param {number} n 
 * @param {number} m
 * @return {number} 
 */
function findCommonMultiple(n, m) {
    var res = n > m ? n : m;
    
    for (var i = res; ; i++) {
        if (i % n === 0 && i % m === 0) {
            res = i;
            return res;
        }
    }
}