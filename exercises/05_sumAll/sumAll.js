const sumAll = function(one,two) {

    if (one < 0 || two < 0 || typeof one !== 'number' || typeof two !== 'number'){
        return "ERROR"
    } 
    
    largest = Math.max(one,two);
    smallest = Math.min(one,two);
    let sum = 0;

    for (let i = smallest; i <= largest; i++) {
        sum += i;
    };
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
