// Creates the grid based on amount entered
function createGrid(rows,columns) {
    rowMaker(rows);
    columnMaker(columns);
};

// Creates rows and attaches them to base container
function rowMaker(rowAmount) {

    for (let row = 0; row < rowAmount ; row++) {
        let newrow = document.createElement("div");
        basecontainer.appendChild(newrow).className = "cellRows";
        };
};

//Creates columns by attaching the 'cell' into the row
function columnMaker(columnAmount) {

    for (let row = 0; row < rows.length ; row++) {
        for (let column = 0; column < columnAmount; column++) {
            let cell = document.createElement("div");
            rows[column].appendChild(cell).className = "cell";

            rows[column].setAttribute("id",`${column + 1}`);
            cell.setAttribute("id",`${column+1},${row+1}`);
        };
    };
};

//Changes background color of grid
function changeEtch(event) {
    event.target.setAttribute("style","background-color:black");
};

//Resets etch and moves onto getPrompt.
function clearGrid() {
    let allCells=document.querySelectorAll('.cell');
    allCells.forEach((allCells)=>{
        allCells.setAttribute("style","background-color:white");
    });
    return getPrompt();
};

// Gets prompt from user and makes said grid.
function getPrompt() {
    let promptInput = prompt("Enter a full number: ");
    let maxSize = 100;
    let minSize = 1;

    promptInput = Math.floor(Number(promptInput));
    if (typeof(promptInput) === "number") {
        if (promptInput <= maxSize && promptInput >= minSize) {
            return (
                deleteGrid(),
                createGrid(promptInput,promptInput),
                getCells()
            );
        } else {
            return alert("Please use a number between 1 and 100");
        };
    } else {
        return alert("Please enter a number");
    };
};

// Deletes the grid
function deleteGrid() {
    let allRows=document.querySelectorAll('.cellRows');
    allRows.forEach((allRows)=>{
        allRows.remove();
    });
};

// Reselects new grid cells and adds event listener for them
function getCells() {
    let allCells=document.querySelectorAll('.cell');
    allCells.forEach((allCells)=>{
            allCells.addEventListener('mouseover',changeEtch);
    });
};


// Variables for rows and cells.
// Base container is needed for appending rows.
const basecontainer = document.getElementById("base");
let rows = document.getElementsByClassName("cellRows");
let cells = document.getElementsByClassName("cell");

// Creates first load grid
createGrid(16,16);

// Creates first load grid
getCells();

// Creates button and adds will clear and make a new grid
let clearButton = document.querySelector("button");
clearButton.addEventListener("click", clearGrid);