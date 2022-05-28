
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

/*
    <div class="container">
        <div class="grid">
            <div class="row-1">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
            <div class="row-x"></div>
        </div>
    </div>
*/

createGrid(5,5);