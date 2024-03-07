var rows = 16;
let hi = 384 / rows;
const container = document.querySelector("#container");
var grid = document.createElement('div');            // creates grid
grid.className = 'grid';

for (var i = 0; i < rows; ++i) {
    var column = document.createElement('div');      // creates column
    column.className = 'column';
    for (var j = 0; j < rows; ++j) {
        var cell = document.createElement('div');    // creates cell
        cell.className = 'cell';
        cell.setAttribute('style', 'height:'+hi+'px;');
        column.appendChild(cell);                    // appends cell to column (as row)
    }
    grid.appendChild(column);                        // appends column to grid
}

container.appendChild(grid);                     // appends grid to webpage

const cel = document.querySelectorAll('.cell');
cel.forEach((div) => {
    div.addEventListener('mouseenter' , () => {
        div.setAttribute('style', 'background: black; outline: solid  black; height:'+hi+'px;');
      });
});


const btn = document.querySelector('button');

btn.addEventListener('click' , () => {
    const element = document.querySelector('.grid');
    element.remove();
    rows = prompt("Enter new grid size");
    let hi = 384 / rows;
    var grid = document.createElement('div');            // creates grid
grid.className = 'grid';
for (var i = 0; i < rows; ++i) {
    var column = document.createElement('div');      // creates column
    column.className = 'column';
    for (var j = 0; j < rows; ++j) {
        var cell = document.createElement('div');    // creates cell
        cell.className = 'cell';
        cell.setAttribute('style', 'height:'+hi+'px;');
        column.appendChild(cell);                    // appends cell to column (as row)
    }
    grid.appendChild(column);                        // appends column to grid
}
container.appendChild(grid);                     // appends grid to webpage
const cel = document.querySelectorAll('.cell');
cel.forEach((div) => {
    div.addEventListener('mouseenter' , () => {
        div.setAttribute('style', 'background: black; outline: solid  black; height:'+hi+'px;');
      });
});
});
