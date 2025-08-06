const sumAll = function(args1, args2) {
    let sum = 0;
    for(let i = args1; i <= args2; i++){
        sum += i;
    }
    return sum;
};
sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
