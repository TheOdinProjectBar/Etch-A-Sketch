let gridSize = 18;

const plastic = document.getElementById("plastic");

const board = plastic.childNodes[1];

// --- Changing DOM ---
const menuDiv = document.createElement("div");
menuDiv.className = "menu";

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", reset);
menuDiv.appendChild(resetButton);

const inputDiv = document.createElement("div");
inputDiv.className = "input-div";

const gridSizeReq = document.createElement("input");
gridSizeReq.placeholder = "2-100";

const gridSizeBut = document.createElement("button");
gridSizeBut.textContent = "Change";
gridSizeBut.addEventListener("click", changeGridSize);

inputDiv.append(gridSizeReq, gridSizeBut);
menuDiv.appendChild(inputDiv);
plastic.appendChild(menuDiv);

// --- GRID CREATION ---
function createGrid() {
  board.innerHTML = "";
  const size = 400 / gridSize;

  for (let i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell"); // ✅ apply styles from CSS
    cell.style.width = `${size}px`;
    cell.style.height = `${size}px`;
    cell.addEventListener("mouseover",(e) => e.target.style.backgroundColor = "grey");
    board.appendChild(cell);
  }
}

// --- BUTTON FUNCTIONS ---
function reset() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.style.backgroundColor = "lightblue";
  });
}

function changeGridSize() {
  const value = parseInt(gridSizeReq.value);
  if (isNaN(value) || value < 2 || value > 100) {
    alert("Please enter a number between 2 and 100");
    gridSizeReq.value = "";
    return;
  }
  gridSize = value;
  gridSizeReq.value = "";
  createGrid();
}

// --- INITIALIZE ---
createGrid();
