//Elements created
const entireEtch = document.createElement('div');                    //Entire content container
const mainContainer = document.createElement('div');                 //Main container
const clearNewGridCon = document.createElement('div');               //Container for clear/new grids 
const etchDiv = document.createElement('div');                       //Div holding Etch-A-Sketch 
//Buttons
const colorBtn = document.createElement('button');                   //Button for new color grid
const fadeToBlackBtn = document.createElement('button');             //Button for new fade-to-black grid 
const eraserBtn = document.createElement('button');                  //Button for eraser
const regularBtn = document.createElement('button');                 //Button for new black-and-white grid
//id's/classes set
colorBtn.id = "colorBtn";                               
fadeToBlackBtn.id = "fadeToBlackBtn";                       
eraserBtn.id = "eraserBtn";
regularBtn.id = "regularBtn";
entireEtch.id = "entireEtch";
etchDiv.setAttribute('id', 'etchDiv');          
clearNewGridCon.setAttribute('id', 'clearNewGrid');
mainContainer.classList.add('mainContainer'); 
//Text set
colorBtn.textContent = 'New Color Grid';                
fadeToBlackBtn.textContent = "Fade To Black Grid";
eraserBtn.textContent = "Eraser";
regularBtn.textContent = "Regular Grid";
//Buttons attached to clear/new grid container
clearNewGridCon.appendChild(colorBtn);                  
clearNewGridCon.appendChild(fadeToBlackBtn);           
clearNewGridCon.appendChild(regularBtn);
clearNewGridCon.appendChild(eraserBtn);
//Grid container attached to main container 
mainContainer.appendChild(clearNewGridCon);   

//White rgb color for fadeToBlack function
let r = 255;
let g = 250;
let b = 250;

//Color Etch-A-Sketch
const randomColor = e => {
    const r = Math.floor(Math.random() * 256);               //Random numbers generated and used for rgb color during .div event
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

//Regular black Etch-A-Sketch 
const blackEtch = e => {
    e.target.style.backgroundColor = "black";                //Black background for Etch-A-Sketch during .div event
}    

//Slowly fades Etch-A-Sketch to black                                                                                                                                                                                            
const fadeToBlack = e => {     
    r -= 5;                                                  //Subtracts rgb numbers for blacker background during .div event
    g -= 5;
    b -= 5;
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function createEtch(grid) {

    if (grid <= 0 || grid > 100 || grid === null ) {         //Ensures only numbers < 100 and numbers > 0 are chosen
        alert("Please enter a positive number between 1-100.");
        createEtch(prompt("Enter a number from 1-100"));
    }

    for (let i = 1; i <= grid; i++) {                        //Outer for loop creates container divs
       const container = document.createElement('div');      //Container holding box divs created
       container.setAttribute('class', 'container');         //Class set

        for (let j = 1; j <= grid; j++){                     //Inner for loop creates "box" divs 
            const div = document.createElement('div');       //Box div created   
            div.setAttribute('class', 'div');                //Class set
            container.appendChild(div);                      //Box div attached to container     
            div.setAttribute('style', `width: ${400 / grid}px; height: ${400 / grid}px;`);//Width/height set 
            div.addEventListener('mouseover', blackEtch);  
        }
        etchDiv.appendChild(container);                      //Containers attached to Etch-A-Sketch            
    }
      mainContainer.appendChild(etchDiv);                    //Etch-A-Sketch attached to main container
      entireEtch.appendChild(mainContainer);                 //Main container attached to entire container    
      document.body.appendChild(entireEtch);                 //Main container attached to HTML
}


createEtch(prompt("Enter a number from 1-100"));             //Etch-A-Sketch drawn/called

//Removes prior grid and adds new color grid
const clearColorGrid = e => {
    const containers = document.querySelectorAll(".container");       //Gets all "container" divs
    
    for (const div of containers) {                                   //Loop removes "container" divs from Etch-A-Sketch
        etchDiv.removeChild(div);
}
    createEtch(prompt("Enter a number from 1-100"));                  //Etch-A-Sketch drawn/called
    const newDivs = document.querySelectorAll(".div");                //Every square div selected

    newDivs.forEach(div => {      
        div.removeEventListener('mouseover', blackEtch);              //blackEtch function removed from every div
        div.addEventListener('mouseover', randomColor)});             //randomColor function added to every div
}

//Removes prior grid and adds Fade-To-Black grid
const clearFadeGrid = e => {
    const containers = document.querySelectorAll(".container"); 
    
    for (const div of containers) { 
        etchDiv.removeChild(div); 
}
    createEtch(prompt("Enter a number from 1-100"));  
    const newDivs = document.querySelectorAll(".div");

    newDivs.forEach(div => {
        div.removeEventListener('mouseover', blackEtch);
        div.addEventListener('mouseover', fadeToBlack)});             //fadeToBlack function added to every div
}

//Regular Etch-A-Sketch
const regularGrid = e => {
    const containers = document.querySelectorAll(".container");
    
    for (const div of containers) {
        etchDiv.removeChild(div);
    }
    createEtch(prompt("Enter a number from 1-100"));
}

//Erases Etch-A-Sketch
const eraser = e => {
    const newDivs = document.querySelectorAll('.div');
    
    newDivs.forEach( div => {
        div.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "white";              //Turns Etch-A-Sketch divs white
    })});
}

//Resets Fade-To-Black grid's rgb to white
const colorReset = e => {
    r = 255;                 
    g = 250;
    b = 250;
}

//Event listeners
colorBtn.addEventListener('click', clearColorGrid);
fadeToBlackBtn.addEventListener('click', clearFadeGrid);
fadeToBlackBtn.addEventListener('click', colorReset);
eraserBtn.addEventListener('click', eraser);
regularBtn.addEventListener('click', regularGrid);