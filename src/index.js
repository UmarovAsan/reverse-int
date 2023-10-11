module.exports = function reverse (n) {
    let isNegative = n < 0;
    if (isNegative) {
        n = Math.abs(n);
    }
    let reversed = parseInt(n.toString().split("").reverse().join(''));
    console.log(reversed);
    return isNegative ? reversed : reversed;
};