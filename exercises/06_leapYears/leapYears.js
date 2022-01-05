const leapYears = function(leap) {
    if (leap % 4 === 0 && leap % 100|| leap % 400 === 0) {
        return true;
    } else {
        return false;
    };

};

// Do not edit below this line
module.exports = leapYears;
