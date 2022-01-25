const findTheOldest = function(array) {
    
    const people = array.sort((a,b) => {
        const fullDate = new Date();
        let year = fullDate.getFullYear();


        if (!a.yearOfDeath === true && !b.yearOfDeath === true) {
            const lastPerson = year - a.yearOfBirth;
            const nextPerson = year - b.yearOfBirth;

            if (lastPerson > nextPerson) {
                return -1;
            } else {
                return 1;
            }
        } else if (!a.yearOfDeath === true) {
            const lastPerson = a.yearOfDeath - a.yearOfBirth;
            const nextPerson = year - b.yearOfBirth;

            if (lastPerson > nextPerson) {
                return -1;
            } else {
                return 1;
            }
        } else if (!b.yearOfDeath === true) {
            const lastPerson = year - a.yearOfBirth;
            const nextPerson = b.yearOfDeath - b.yearOfBirth;

            if (lastPerson > nextPerson) {
                return -1;
            } else {
                return 1;
            }
        } else {
            const lastPerson = a.yearOfDeath - a.yearOfBirth;
            const nextPerson = b.yearOfDeath - b.yearOfBirth;

            if (lastPerson > nextPerson) {
                return -1;
            } else {
                return 1;
            }
        };
    });
    return people;
};

// Do not edit below this line
module.exports = findTheOldest;
