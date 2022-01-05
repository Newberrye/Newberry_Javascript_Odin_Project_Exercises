const repeatString = function(string,num) {
    let repeatString = "";
    let counter = num;
    
    while (counter > 0) {
        repeatString += string;
        counter--;
    };

    if (num === 0) {
        return repeatString = "";
    } else if (num < 0) {
        return "ERROR";
    } else {
        return repeatString;
    };
};

// Do not edit below this line
module.exports = repeatString;
