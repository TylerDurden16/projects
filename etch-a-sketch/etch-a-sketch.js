/*PROGRAM etchASketch
Takes in dimensions
create mainDiv
WHILE (DIMENSIONS AREN'T MADE) DO
Create containers
Create divs 
Add divs to containers
Attach containers to mainDiv
END
Attach mainDiv to body
END
Create button that clears grid and asks for new grid dimensions (prompt)
etchASketch() takes in dimensions
WHILE (DIMENSIONS AREN'T MADE) DO
Create containers
Create divs 
Add divs to containers
Attach containers to mainDiv
END
Attach mainDiv to body
END
*/
//let div;
const mainDiv = document.createElement('div');  //Main div holding Etch-A-Sketch created
mainDiv.setAttribute('id', 'mainDiv');          //id set
const randomColor = e => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

    
    
let r = 255;let g = 250;let b = 250;

const fadeToBlack = e => {     
    r -= 15;
    g -= 15;
    b -= 15;
e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function createEtch(grid) {


    if (grid <= 0 || grid > 100 || grid === null ) {
        alert("Please enter a positive number between 1-100.");
        createEtch(prompt("Enter a number from 1-100"));
    }

    for (let i = 1; i <= grid; i++) {                    //Outer for loop creates container divs
       const container = document.createElement('div');   //Container holding box divs created
         container.setAttribute('class', 'container');     //Class set

        for (let j = 1; j <= grid; j++){                     //Inner for loop creates "box" divs 
            const div = document.createElement('div');         
            div.setAttribute('class', 'div');              //Class set
            container.appendChild(div);                    //box div attached to container     
            div.setAttribute('style', `width: ${400 / grid}px ; height: ${400 / grid}px`);   
            div.addEventListener('mouseover', fadeToBlack);
        }
        mainDiv.appendChild(container);                 //Containers attached to Main div             
    }
    document.body.insertBefore(mainDiv, clearNewGridCon);       //Main div attached to HTML
}

const clearNewGridCon = document.createElement('div'); //Container for clear/new grid created
clearNewGridCon.setAttribute('class', 'clearNewGrid');   
const clearColorBtn = document.createElement('button');     //Button for clear/new grid created
const fadeToBlackBtn = document.createElement('button'); 
clearColorBtn.id = "clearBtn";
fadeToBlackBtn.id = "fadeToBlack";
clearColorBtn.textContent = 'New Color Grid';
fadeToBlackBtn.textContent = "Fade To Black Grid";
clearNewGridCon.appendChild(clearColorBtn);
clearNewGridCon.appendChild(fadeToBlackBtn);           //Button attached to clear/new grid 
document.body.appendChild(clearNewGridCon);           //Clear/new grid attached to HTML 

createEtch(prompt("Enter a number from 1-100"));


const clearColorGrid = e => {
    const clear = document.querySelectorAll(".container");
for (const div of clear) {
    mainDiv.removeChild(div);
}
    createEtch(prompt("Enter a number from 1-100"));
    let newDiv = document.querySelectorAll(".div");

    newDiv.forEach(div => {
        div.removeEventListener('mouseover', fadeToBlack);
        div.addEventListener('mouseover', randomColor)});
}

const clearFadeGrid = e => {
    const clear = document.querySelectorAll(".container");
for (const div of clear) {
    mainDiv.removeChild(div);
}
    createEtch(prompt("Enter a number from 1-100"));
}


const colorReset = e => {
    r = 255;
    g = 250;
    b = 250;
}

clearColorBtn.addEventListener('click', clearColorGrid);
fadeToBlackBtn.addEventListener('click', clearFadeGrid);
fadeToBlackBtn.addEventListener('click', colorReset);