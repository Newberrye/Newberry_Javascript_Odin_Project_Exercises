const removeFromArray = function() {
// arguments lets you have variable amount of parameters
// first argument is made for array; separate variable is needed otherwise you
    // cannot loop through the array
// first for loop loops through arguments
// second for loop loops through array length
// everytime an argument is found in array it is removed
    let array = arguments[0];

       for (let outer = 1; outer < arguments.length; outer++) {
            for (let inner = 0; inner < array.length; inner++) {   
                if (array[inner] === arguments[outer]) {
                    array.splice(inner,1);
                };
            };
       };
       return array;

    };

// Do not edit below this line
module.exports = removeFromArray;
