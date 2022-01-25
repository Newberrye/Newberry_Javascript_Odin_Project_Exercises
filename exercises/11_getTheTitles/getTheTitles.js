const getTheTitles = function(books) {
const container = [];
        for (let key in books) {
            container[key] = books[key].title;
        };
        return container;
        
};

// Do not edit below this line
module.exports = getTheTitles;
