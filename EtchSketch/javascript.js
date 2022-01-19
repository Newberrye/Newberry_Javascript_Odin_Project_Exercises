// Variables for rows and cells.
// Base container is needed for attaching rows onto
const basecontainer = document.getElementById("base");
let rows = document.getElementsByClassName("cellRows");
let cells = document.getElementsByClassName("cell");

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

// Creates a 16 by 16 grid
createGrid(16,16);

function changeEtch() {
    let cells = document.getElementsByClassName("cell");
    cells.setAttribute("style","background-color:black");

};

let pokemon=document.querySelectorAll('.cell');
    pokemon.forEach((pokemon)=>{
    pokemon.addEventListener('mouseover',changeEtch);
});
