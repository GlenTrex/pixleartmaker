//Variable declaration 
var canvas = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var sizePicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");

color.addEventListener("click", function(){});

sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};
// makeGrid function. draw grid base on row and column size
function makeGrid() {
    for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

//fill grid color functions 
function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}

// clear grid after re-clicking resubmit to start a new grid
function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}


