const clearNewGridCon = document.createElement('div'); //Container for clear/new grids created
clearNewGridCon.setAttribute('class', 'clearNewGrid');   //ID set
const colorBtn = document.createElement('button');     //Buttons created
const fadeToBlackBtn = document.createElement('button');   
const eraserBtn = document.createElement('button');
const regularBtn = document.createElement('button');     
colorBtn.id = "clearBtn";                               //ID's set
fadeToBlackBtn.id = "fadeToBlack";                       
eraserBtn.id = "eraser";
regularBtn.id = "regular"
colorBtn.textContent = 'New Color Grid';                //Text set
fadeToBlackBtn.textContent = "Fade To Black Grid";
eraserBtn.textContent = "Eraser";
regularBtn.textContent = "Regular Grid"
clearNewGridCon.appendChild(colorBtn);                 //Buttons attached to clear/new grid 
clearNewGridCon.appendChild(fadeToBlackBtn);           
clearNewGridCon.appendChild(regularBtn);
clearNewGridCon.appendChild(eraserBtn);
document.body.appendChild(clearNewGridCon);      //Clear/new grid container attached to HTML 
const mainDiv = document.createElement('div');  //Main div holding Etch-A-Sketch created
mainDiv.setAttribute('id', 'mainDiv');          //id set

//White rgb color for fadeToBlck function
let r = 255;let g = 250;let b = 250;

//Color Etch-A-Sketch
const randomColor = e => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

//Regular black Etch-A-Sketch 
const blackEtch = e => {
    e.target.style.backgroundColor = "black";
}    

//Slowly fades Etch-A-Sketch to black                                                                                                                                                                                            
const fadeToBlack = e => {     
    r -= 5;
    g -= 5;
    b -= 5;
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

//Gets grid dimensions
const gridDimensions = () => {
    for (let i = 0; ; i++){
        const grid = prompt("Enter a number from 1-100");
    if (grid <= 0 || grid > 100 || grid === null ||
         grid === NaN ) {         //Ensures only numbers < 100 and numbers > 0 are chosen
        alert("Please enter a positive number between 1-100.");
    } else {
        return grid;
    }
  } 
}

function createEtch() {
    const grid = gridDimensions();
    for (let i = 1; i <= grid; i++) {                    //Outer for loop creates container divs
       const container = document.createElement('div');   //Container holding box divs created
         container.setAttribute('class', 'container');     //Class set

        for (let j = 1; j <= grid; j++){                     //Inner for loop creates "box" divs 
            const div = document.createElement('div');      //Box div created   
            div.setAttribute('class', 'div');              //Class set
            container.appendChild(div);                    //Box div attached to container     
            div.setAttribute('style', `width: ${400 / grid}px; height: ${400 / grid}px;`); 
            div.addEventListener('mouseover', blackEtch);  
        }
        mainDiv.appendChild(container);                 //Containers attached to Main div             
    }
    document.body.insertBefore(mainDiv, clearNewGridCon);       //Main div attached to HTML
}
//Runs Etch-A-Sketch on load
const runEtch = e => {
    createEtch();
}


//Removes prior grid and adds new color grid
const clearColorGrid = e => {
    const clear = document.querySelectorAll(".container");
for (const div of clear) {
    console.log(div);
    mainDiv.removeChild(div);
}
    createEtch();
    let newDiv = document.querySelectorAll(".div");

    newDiv.forEach(div => {
        div.removeEventListener('mouseover', blackEtch);
        div.addEventListener('mouseover', randomColor)});
}

//Removes prior grid and addes Fade-To-Black grid
const clearFadeGrid = e => {
    const clear = document.querySelectorAll(".container");
for (const div of clear) {
    mainDiv.removeChild(div);
}
    createEtch();
    const newDivs = document.querySelectorAll(".div");

    newDivs.forEach(div => {
        div.removeEventListener('mouseover', blackEtch);
        div.addEventListener('mouseover', fadeToBlack)});
}

//Regular Etch-A-Sketch
const regularGrid = e => {
    const clear = document.querySelectorAll(".container");
    for (const div of clear) {
        mainDiv.removeChild(div);
    }
    createEtch();
}

//Erases Etch-A-Sketch
const eraser = e => {
    const divs = document.querySelectorAll('.div');
    divs.forEach( div => {
        div.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "white";
    })});
}

//Resets Fade-To-Black grid's rgb
const colorReset = e => {
    r = 255;
    g = 250;
    b = 250;
}

window.addEventListener('load', runEtch);
colorBtn.addEventListener('click', clearColorGrid);
fadeToBlackBtn.addEventListener('click', clearFadeGrid);
fadeToBlackBtn.addEventListener('click', colorReset);
eraserBtn.addEventListener('click', eraser);
regularBtn.addEventListener('click', regularGrid);