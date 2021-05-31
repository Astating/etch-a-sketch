const container = document.querySelector(".container-grid");

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearGrid);

const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click", erasing);

const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", rainbowing);

function addGrid(gridNum = 16) {
  container.textContent = "";
  eraserON = false;
  container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
  for (let i = 1; i <= gridNum ** 2; i++) {
    const newGrid = document.createElement("div");
    newGrid.classList.add("grid-square");
    newGrid.addEventListener("mouseenter", changeColor);
    container.appendChild(newGrid);
  }
  const gridSquare = document.querySelectorAll(".grid-square");
  gridSquare.forEach((turtle) => {
    turtle.style.cssText = `background: purple`;
  });
  gridSquareSize = gridNum;
}

function changeColor(e) {
  if (eraserON) {
    e.target.style.background = `purple`;
  } else {
    const newColor = Math.floor(Math.random() * 360 + 1);
    e.target.style.background = `hsl(${newColor}, 100%, 50%)`;
    console.log(e.target);
  }
}

function darkening() {}

let eraserON = false;

function erasing() {
  eraserON = true;
}

function rainbowing() {
  eraserON = false;
}

function clearGrid() {
  let newSize = Number(prompt("What size should it be ? (0-100)", "16"));
  if (newSize <= 100 && newSize >= 0) {
    addGrid(newSize);
  } else {
    alert("INVALID NUMBER :)");
  }
}

addGrid();

const gridSquare = document.querySelectorAll(".grid-square");
gridSquare.forEach((turtle) => {
  turtle.style.cssText = `background: purple`;
});
