const container = document.querySelector('.container-grid');
let gridSquareSize = 0 ;

function addGrid(gridNum = 16) {
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    for (let i = 1 ; i <= gridNum**2 ; i ++) {
        const newGrid = document.createElement('div');
        newGrid.classList.add('grid-square');
        container.appendChild(newGrid);
    }
    gridSquareSize = gridNum;
}



addGrid();

const gridSquare = document.querySelectorAll('.grid-square');
gridSquare.forEach(turtle =>  {
    turtle.style.cssText = `background: purple`;
})


