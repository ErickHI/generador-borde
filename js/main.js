/* Programación */
let taReview = document.getElementById("taReview");
let radiusLT = document.getElementById("radiusLT");
let inputLT = document.getElementById("inputLT");

let radiusRT = document.getElementById("radiusRT");
let inputRT = document.getElementById("inputRT");

let radiusLD = document.getElementById("radiusLD");
let inputLD = document.getElementById("inputLD");

let radiusRD = document.getElementById("radiusRD");
let inputRD = document.getElementById("inputRD");

let allRadius = document.getElementById("allRadius");

let widthBorder = document.getElementById("widthBorder");
let widthButton = document.getElementById("widthButton");

let solidButton = document.getElementById("solidButton");
let dottedButton = document.getElementById("dottedButton");
let dashedButton = document.getElementById("dashedButton");
let doubleButton = document.getElementById("doubleButton");
let grooveButton = document.getElementById("grooveButton");
let ridgeButton = document.getElementById("ridgeButton");
let insetButton = document.getElementById("insetButton");
let outsetButton = document.getElementById("outsetButton");
let hiddenButton = document.getElementById("hiddenButton");
let noneButton = document.getElementById("noneButton");

let color = document.getElementById("color");
let transparencia = document.getElementById("transparencia");
let colorButton = document.getElementById("colorButton");

let allButton = document.getElementById("allButton");
let topButton = document.getElementById("topButton");
let rightButton = document.getElementById("rightButton");
let bottomButton = document.getElementById("bottomButton");
let leftButton = document.getElementById("leftButton");

var borderStyle = "solid";
var borderSide = 1;

radiusLT.oninput = function() {
    if(allRadius.checked == false){
        inputLT.value = radiusLT.value;
        taReview.style.borderTopLeftRadius = inputLT.value + "px";
    } else {
        inputLT.value = radiusLT.value;
        inputRT.value = radiusLT.value;
        inputLD.value = radiusLT.value;
        inputRD.value = radiusLT.value;

        radiusRT.value = radiusLT.value;
        radiusLD.value = radiusLT.value;
        radiusRD.value = radiusLT.value;
        taReview.style.borderRadius = inputLT.value + "px";
    }
};
inputLT.oninput = function() {
    if(allRadius.checked == false){
        radiusLT.value = inputLT.value;
        taReview.style.borderTopLeftRadius = inputLT.value + "px";
    } else {
        radiusLT.value = inputLT.value;
        inputRT.value = inputLT.value;
        inputLD.value = inputLT.value;
        inputRD.value = inputLT.value;

        radiusRT.value = radiusLT.value;
        radiusLD.value = radiusLT.value;
        radiusRD.value = radiusLT.value;
        taReview.style.borderRadius = inputLT.value + "px";
    }
};

radiusRT.oninput = function() {
    inputRT.value = radiusRT.value;
    taReview.style.borderTopRightRadius = inputRT.value + "px";
};
inputRT.oninput =function(){
    radiusRT.value = inputRT.value;
    taReview.style.borderTopRightRadius = inputRT.value + "px";
};

radiusLD.oninput = function() {
    inputLD.value = radiusLD.value;
    taReview.style.borderBottomLeftRadius = inputLD.value + "px";
};
inputLD.oninput = function() {
    radiusLD.value = inputLD.value;
    taReview.style.borderBottomLeftRadius = inputLD.value + "px";
};

radiusRD.oninput = function() {
    inputRD.value = radiusRD.value;
    taReview.style.borderBottomRightRadius = inputRD.value + "px";
};
inputRD.oninput = function() {
    radiusRD.value = inputRD.value;
    taReview.style.borderBottomRightRadius = inputRD.value + "px";
};

allRadius.oninput = function() {
    if(allRadius.checked == false){
        radiusRT.value = 0;
        radiusLD.value = 0;
        radiusRD.value = 0;

        inputRT.value = 0;
        inputLD.value = 0;
        inputRD.value = 0;
        taReview.style.borderTopRightRadius = "0px";
        taReview.style.borderBottomLeftRadius = "0px";
        taReview.style.borderBottomRightRadius = "0px";

        radiusRT.disabled = false;
        radiusLD.disabled = false;
        radiusRD.disabled = false;

        inputRT.disabled = false;
        inputLD.disabled = false;
        inputRD.disabled = false;
    } else {
        radiusLT.value = inputLT.value;
        inputRT.value = inputLT.value;
        inputLD.value = inputLT.value;
        inputRD.value = inputLT.value;

        radiusRT.value = inputLT.value;
        radiusLD.value = inputLT.value;
        radiusRD.value = inputLT.value;
        taReview.style.borderRadius = inputLT.value + "px";

        radiusRT.disabled = true;
        radiusLD.disabled = true;
        radiusRD.disabled = true;

        inputRT.disabled = true;
        inputLD.disabled = true;
        inputRD.disabled = true;
    }
};
widthBorder.oninput = function() {
    taReview.style.borderWidth = widthBorder.value + "px";
};
widthButton.onclick = function() {
    taReview.style.borderWidth = "1px";
    widthBorder.value = 1;
};
solidButton.onclick = function() {
    borderStyle = "solid";
    switch (borderSide) {
        case 1:
            allBorder();
            break;
        case 2:
            topBorder();
            break;
        case 3:
            rightBorder();
            break;
        case 4:
            bottomBorder();
            break;
        case 5:
            leftBorder();
            break;
    }
};
dottedButton.onclick = function() {
    borderStyle = "dotted";
    switch (borderSide) {
        case 1:
            allBorder();
            break;
        case 2:
            topBorder();
            break;
        case 3:
            rightBorder();
            break;
        case 4:
            bottomBorder();
            break;
        case 5:
            leftBorder();
            break;
    }
};
dashedButton.onclick = function() {
    borderStyle = "dashed";
    switch (borderSide) {
        case 1:
            allBorder();
            break;
        case 2:
            topBorder();
            break;
        case 3:
            rightBorder();
            break;
        case 4:
            bottomBorder();
            break;
        case 5:
            leftBorder();
            break;
    }
};
doubleButton.onclick = function() {
    borderStyle = "double";
    switch (borderSide) {
        case 1:
            allBorder();
            break;
        case 2:
            topBorder();
            break;
        case 3:
            rightBorder();
            break;
        case 4:
            bottomBorder();
            break;
        case 5:
            leftBorder();
            break;
    }
};
grooveButton.onclick = function() {
    borderStyle = "groove";
    switch (borderSide) {
        case 1:
            allBorder();
            break;
        case 2:
            topBorder();
            break;
        case 3:
            rightBorder();
            break;
        case 4:
            bottomBorder();
            break;
        case 5:
            leftBorder();
            break;
    }
};
ridgeButton.onclick = function() {
    borderStyle = "ridge";
    switch (borderSide) {
        case 1:
            allBorder();
            break;
        case 2:
            topBorder();
            break;
        case 3:
            rightBorder();
            break;
        case 4:
            bottomBorder();
            break;
        case 5:
            leftBorder();
            break;
    }
};
insetButton.onclick = function() {
    borderStyle = "inset";
    switch (borderSide) {
        case 1:
            allBorder();
            break;
        case 2:
            topBorder();
            break;
        case 3:
            rightBorder();
            break;
        case 4:
            bottomBorder();
            break;
        case 5:
            leftBorder();
            break;
    }
};
outsetButton.onclick = function() {
    borderStyle = "outset";
    switch (borderSide) {
        case 1:
            allBorder();
            break;
        case 2:
            topBorder();
            break;
        case 3:
            rightBorder();
            break;
        case 4:
            bottomBorder();
            break;
        case 5:
            leftBorder();
            break;
    }
};
hiddenButton.onclick = function() {
    borderStyle = "hidden";
    switch (borderSide) {
        case 1:
            allBorder();
            break;
        case 2:
            topBorder();
            break;
        case 3:
            rightBorder();
            break;
        case 4:
            bottomBorder();
            break;
        case 5:
            leftBorder();
            break;
    }
};
noneButton.onclick = function() {
    borderStyle = "none";
    switch (borderSide) {
        case 1:
            allBorder();
            break;
        case 2:
            topBorder();
            break;
        case 3:
            rightBorder();
            break;
        case 4:
            bottomBorder();
            break;
        case 5:
            leftBorder();
            break;
    }
};

color.oninput = function() {
    functionTrans();
}
transparencia.oninput = function() {
    functionTrans();
};

function functionTrans() {
    taReview.style.borderColor = color.value + (parseInt(transparencia.value).toString(16));
}

colorButton.onclick = function() {
    taReview.style.borderColor = color.value;
    transparencia.value = 255;
};

function allBorder(){
    taReview.style.borderStyle = borderStyle;
};
function topBorder(){
    taReview.style.borderStyle = "hidden";
    taReview.style.borderTopStyle = borderStyle;
}
function rightBorder(){
    taReview.style.borderStyle = "hidden";
    taReview.style.borderRightStyle = borderStyle;
}
function bottomBorder(){
    taReview.style.borderStyle = "hidden";
    taReview.style.borderBottomStyle = borderStyle;
}
function leftBorder(){
    taReview.style.borderStyle = "hidden";
    taReview.style.borderLeftStyle = borderStyle;
}

allButton.onclick = function (){
     allBorder();
     borderSide = 1;
};
topButton.onclick = function (){
     topBorder();
     borderSide = 2;
};
rightButton.onclick = function (){
     rightBorder();
     borderSide = 3;
};
bottomButton.onclick = function (){
     bottomBorder();
     borderSide = 4;
};
leftButton.onclick = function (){
     leftBorder();
     borderSide = 5;
};
