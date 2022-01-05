const reverseString = function(str) {
    let arrayString = Array.from(str);


    let revString = "";
    for (let i = arrayString.length - 1; i >= 0; i--) {
        revString += arrayString[i];
    };

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
