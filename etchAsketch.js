let isDrawing = false;
let eraserActivated = false;
const colorSelect = document.querySelector(".selectColour");
const colourPad = document.querySelector(".colourPad");

function createPixel(event) {
    const drawIO = document.createElement("div");
    drawIO.style.height = "16px";
    drawIO.style.width = "16px";
    drawIO.style.backgroundColor = colorSelect.value;
    drawIO.classList.add("square");

    let x = event.offsetX; 
    let y = event.offsetY;

    drawIO.style.position = "absolute";
    drawIO.style.left = `${x - 8}px`;  
    drawIO.style.top = `${y - 8}px`;

    colourPad.appendChild(drawIO); 
}

const erasor = document.querySelector(".erasor");

erasor.addEventListener("click", function(){
    eraserActivated = true;
})

colorSelect.addEventListener("click", function(){
    eraserActivated = false;
})

colourPad.addEventListener("mousedown", function(){
    isDrawing = true;
})

document.addEventListener("mouseup", function(){
    isDrawing = false;
})

colourPad.addEventListener("mousemove", function(event){
    if(isDrawing && eraserActivated){
        erase(event);
    }
    else if(isDrawing && !eraserActivated){
        createPixel(event);
    }
})

function erase(event) {
    const elements = document.elementsFromPoint(event.clientX, event.clientY);
    for (let el of elements) {
        if (el.classList.contains("square")) {
            el.remove();
            break;
        }
    }
}

