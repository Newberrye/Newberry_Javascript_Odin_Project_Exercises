function computerPlay() {
    var options = ["Rock","Paper","Scissor"];
    var compPlay = options[Math.floor(Math.random()) * options.length()];
    return compPlay;
};

console.log(computerPlay())