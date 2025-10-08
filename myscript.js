let gridSize = 18;

const plastic = document.getElementById("plastic");

const title = document.createElement("p");
title.textContent = "Etch A Sketch";
title.className = "title";

const board = document.getElementById("board");
plastic.insertBefore(title, board);

// --- Changing DOM ---
const menuDiv = document.createElement("div");
menuDiv.className = "menu";

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", reset);
menuDiv.appendChild(resetButton);

const rainbowButton = document.createElement("button");
rainbowButton.textContent = "Rainbow";
rainbowButton.addEventListener("click", () => setDrawColor("rainbow"));
menuDiv.appendChild(rainbowButton);

const greyButton = document.createElement("button");
greyButton.textContent = "Grey";
greyButton.addEventListener("click",() => setDrawColor("grey"));
menuDiv.appendChild(greyButton);

const inputDiv = document.createElement("div");
inputDiv.className = "input-div";

const gridSizeReq = document.createElement("input");
gridSizeReq.placeholder = "2-100";

const gridSizeBut = document.createElement("button");
gridSizeBut.textContent = "Resize";
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

function setDrawColor(color) {
  document.querySelectorAll(".cell").forEach(cell => {
    // Remove previous mouseover by overwriting
    cell.onmouseover = (e) => {
        if (color === "rainbow"){
            // Generate random r,g,b
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        }
        else{
            e.target.style.backgroundColor = color;
        }
    };
  });
}

function rainbowText(button) {
  const text = "Rainbow";
  button.innerHTML = ""; // clear current text
  for (let char of text) {
    const span = document.createElement("span");
    span.textContent = char;
    // random color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    span.style.color = `rgb(${r},${g},${b})`;
    button.appendChild(span);
  }
}

// Example: change color every 0.5 seconds
setInterval(() => rainbowText(rainbowButton), 800);

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
