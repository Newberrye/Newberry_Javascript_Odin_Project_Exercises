const fibonacci = function(num) {
    let first = 0;
    let second = 1;
    let storage;

    if (num >= 1) {
        for (let i = 1; i <= num; i++) {
            storage = first + second;
            first = second;
            second = storage;
        };
        return first;
    } else {
        return "OOPS";
    };
};

// Do not edit below this line
module.exports = fibonacci;
