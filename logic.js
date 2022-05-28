
/* Create grid of row x col squares */
function createGrid(rows, cols) {
    let body = document.body;
    let grid = document.createElement('div');
    grid.classList.add('grid');
    for (let i=0; i < rows; i++) {
        let row = document.createElement('div');
        row.classList.add("grid-row");
        for (let i=0; i < cols; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    body.appendChild(grid);
}

/* Add event listeners to .square divs */
function addSquareEventListeners() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
            square.style['background-color'] = "blue";
        })
    });
}

createGrid(16,16);
addSquareEventListeners();