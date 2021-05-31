const container = document.querySelector(".container-grid");

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearGrid);

const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click", erasing);

const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", rainbowing);

const drknBtn = document.querySelector("#darkening");
drknBtn.addEventListener("click", darkening);

let gridSquareSize = 16;

function addGrid(gridNum = gridSquareSize) {
  container.textContent = "";
  eraserON = false;
  darkenON = false;
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
    turtle.style.opacity = "1";
  });
  gridSquareSize = gridNum;
}

let darkenON = false;

function changeColor(e) {
  if (eraserON) {
    e.target.style.backgroundColor = `purple`;
    e.target.style.opacity = '1';
  } else if (
    darkenON === false ||
    (darkenON === true && e.target.style.backgroundColor == `purple`)
  ) {
    e.target.style.opacity = '1';
    const newColor = Math.floor(Math.random() * 360 + 1);
    e.target.style.backgroundColor = `hsl(${newColor}, 100%, 50%)`;
  } else if (e.target.style.backgroundColor != "purple") {
    e.target.style.opacity = `${e.target.style.opacity - 0.1}`;
    if (e.target.style.opacity === "0") {
      return;
    }
  }
}

function darkening() {
  darkenON = true;
  eraserON = false;
}

let eraserON = false;

function erasing() {
  eraserON = true;
}

function rainbowing() {
  eraserON = false;
  darkenON = false;
}

function clearGrid() {
  let newSize = Number(
    prompt("What size should it be ? (1-100)", `${gridSquareSize}`)
  );
  if (newSize <= 100 && newSize >= 1) {
    addGrid(newSize);
  } else {
    alert("INVALID NUMBER :)");
  }
}

addGrid();
