//Elements created
const etchHolder = document.createElement('div');     //Entire content container
const mainContainer = document.createElement('div');  //Main container
const clearNewGridCon = document.createElement('div'); //Container for clear/new grids 
const functionalityDiv = document.createElement('div');  //Div holding Etch-A-Sketch functionality
//Buttons
const colorBtn = document.createElement('button');     
const fadeToBlackBtn = document.createElement('button');   
const eraserBtn = document.createElement('button');
const regularBtn = document.createElement('button');     
colorBtn.id = "colorBtn";                               //ID's/classes set
fadeToBlackBtn.id = "fadeToBlackBtn";                       
eraserBtn.id = "eraserBtn";
regularBtn.id = "regularBtn";
etchHolder.id = "etchHolder";
functionalityDiv.setAttribute('id', 'functionalityDiv');          
clearNewGridCon.setAttribute('class', 'clearNewGrid');
mainContainer.classList.add('mainContainer'); 
//Text set
colorBtn.textContent = 'New Color Grid';                
fadeToBlackBtn.textContent = "Fade To Black Grid";
eraserBtn.textContent = "Eraser";
regularBtn.textContent = "Regular Grid";
//Buttons attached to clear/new grid
clearNewGridCon.appendChild(colorBtn);                  
clearNewGridCon.appendChild(fadeToBlackBtn);           
clearNewGridCon.appendChild(regularBtn);
clearNewGridCon.appendChild(eraserBtn);
mainContainer.appendChild(clearNewGridCon);   //Grid container attached to main container 


//White rgb color for fadeToBlck function
let r = 255;
let g = 250;
let b = 250;

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

function createEtch(grid) {

    if (grid <= 0 || grid > 100 || grid === null ) {            //Ensures only numbers < 100 and numbers > 0 are chosen
        alert("Please enter a positive number between 1-100.");
        createEtch(prompt("Enter a number from 1-100"));
    }

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
        functionalityDiv.appendChild(container);                 //Containers attached to Main div             
    }
mainContainer.appendChild(functionalityDiv);
etchHolder.appendChild(mainContainer)
    document.body.appendChild(etchHolder);       //Main div attached to HTML
}


createEtch(prompt("Enter a number from 1-100"));

//Removes prior grid and adds new color grid
const clearColorGrid = e => {
    const clear = document.querySelectorAll(".container");
for (const div of clear) {
    console.log(div);
    functionalityDiv.removeChild(div);
}
    createEtch(prompt("Enter a number from 1-100"));
    let newDiv = document.querySelectorAll(".div");

    newDiv.forEach(div => {
        div.removeEventListener('mouseover', blackEtch);
        div.addEventListener('mouseover', randomColor)});
}

//Removes prior grid and addes Fade-To-Black grid
const clearFadeGrid = e => {
    const clear = document.querySelectorAll(".container");
for (const div of clear) {
    functionalityDiv.removeChild(div);
}
    createEtch(prompt("Enter a number from 1-100"));
    const newDivs = document.querySelectorAll(".div");

    newDivs.forEach(div => {
        div.removeEventListener('mouseover', blackEtch);
        div.addEventListener('mouseover', fadeToBlack)});
}

//Regular Etch-A-Sketch
const regularGrid = e => {
    const clear = document.querySelectorAll(".container");
    for (const div of clear) {
        functionalityDiv.removeChild(div);
    }
    createEtch(prompt("Enter a number from 1-100"));
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

colorBtn.addEventListener('click', clearColorGrid);
fadeToBlackBtn.addEventListener('click', clearFadeGrid);
fadeToBlackBtn.addEventListener('click', colorReset);
eraserBtn.addEventListener('click', eraser);
regularBtn.addEventListener('click', regularGrid);