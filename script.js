const divContainer = document.getElementById("container");

const clearButton = document.getElementById("clearButton");

const resizeButton = document.getElementById("resizeButton");

// let size = prompt("Enter amount of Squares per side");
let initSize = 20;

function calcSize(size) {
    let sqaureSize = 600 / size;
    return sqaureSize + 'px'
}


function createCanvas(size) {
    for (let i = 0; i < size * size; i++) {
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

createCanvas(initSize);

clearButton.addEventListener('click', () => {
    let dirtyGrid = document.querySelectorAll('.grid');
    for (let k = 0; k < dirtyGrid.length; k++) {
        dirtyGrid[k].style.backgroundColor = "black";
    }
});

resizeButton.addEventListener('click', function () {
    resizeCanvas(50);
});

function deleteCanvas(){
    let canvas = document.querySelectorAll('.grid');
    for(let i = 0; i < canvas.length; i++){
        canvas[i].remove();
    }
}

function resizeCanvas(newSize) {
    console.log("??")
    deleteCanvas();
    createCanvas(newSize);
}

