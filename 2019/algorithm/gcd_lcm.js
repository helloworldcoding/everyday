/**
 * 最大公约数和最小公倍数
 */
/**
 * 最大公约数
 * @param {number} n 
 * @param {number} m 
 */
function findGCD(n, m) {
    if (n < m) {
        let temp = n;
        n = m
        m = temp;
    }

    while (m != 0) {
        temp = n % m;
        n = m;
        m = temp;
    }
    return n;
}

function findGCD1(n, m) {
    if (n < m) {
        let temp = n;
        n = m
        m = temp;
    }

    if (n % m === 0) {
        return m;
    } else {
        return findGCD1(m, n % m);
    }
}

/**
 * 最小公倍数，等于两个数的乘积除以它们的最大公约数
 * @param {number} n 
 * @param {number} m 
 */
function findLCM(n, m) {
    return n * m / findGCD(n, m);
}