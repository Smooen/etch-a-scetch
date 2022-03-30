const divContainer = document.getElementById("container");

const clearButton = document.getElementById("clearButton");

// let size = prompt("Enter amount of Squares per side");
let size = 20;

function calcSize(size) {
    let sqaureSize = 600 / size;
    return sqaureSize + 'px'
}



function createCanvas() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let grid = document.createElement('div');
            grid.className = "grid";
            grid.style.height = calcSize(size);
            grid.style.width = calcSize(size);
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = "white";
            });
            divContainer.appendChild(grid);
        }
    }
}

clearButton.addEventListener('click', () => {
    let dirtyGrid = document.querySelectorAll('.grid');
    for(let k = 0; k < dirtyGrid.length; k++){
        dirtyGrid[k].style.backgroundColor = "black";
    }
});


createCanvas();
//clear-grid button