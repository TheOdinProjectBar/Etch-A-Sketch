const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexFlow = "column";
body.style.gap = "40px";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.margin = "0";
body.style.backgroundColor = "#f0f0f0";

const board = document.getElementById("board");

// BOARD STYLES
board.style.display = "flex";
board.style.flexWrap = "wrap";
board.style.width = "400px";
board.style.height = "400px";


let gridSize = 18;

function createGrid(){
    // Each square should take up 1/16 of the width and height
    let size = 400 / gridSize; // 25px per cell

    for (let i = 0; i < Math.pow(gridSize,2); i++) {
    const cell = document.createElement("div");
    cell.style.width = `${size}px`;
    cell.style.height = `${size}px`;
    cell.style.boxSizing = "border-box";
    cell.style.background = "lightblue";
    cell.style.border = "1.5px solid #b77777ff"; // optional
    cell.addEventListener("mouseover",(e) => {
        e.target.style.background = "grey";
    })
    board.appendChild(cell);
    }
}
const menuDiv = document.createElement("div");
menuDiv.style.display = "flex";
menuDiv.style.gap = "200px";

body.appendChild(menuDiv);

const resetButton = document.createElement("button");

resetButton.textContent = "Reset";
resetButton.addEventListener("click",reset);

menuDiv.appendChild(resetButton);

const inputDiv = document.createElement("div");
inputDiv.style.display = "flex";
inputDiv.style.gap = "20px";

const gridSizeReq = document.createElement("input");
gridSizeReq.style.width = "50px";
gridSizeReq.placeholder = "2-100";
const gridSizeBut = document.createElement("button");
gridSizeBut.textContent = "Change"
gridSizeBut.addEventListener("click",changeGridSize);


inputDiv.appendChild(gridSizeReq);
inputDiv.appendChild(gridSizeBut);
menuDiv.appendChild(inputDiv);


function reset (){
    const cells = board.children;
    for(let i=0;i<cells.length;i++){
        cells[i].style.background = "lightblue";
    }
}

function changeGridSize(){
    gridSize = gridSizeReq.value;
    gridSizeReq.value = "";
    board.innerHTML = "";
    createGrid();
}

createGrid();


