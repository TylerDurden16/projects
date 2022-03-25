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
let div;

//Creates Etch-A-Sketch
function createEtch(grid) {
    grid = parseInt(grid);
    const mainDiv = document.createElement('div');  //Main div holding Etch-A-Sketch created
    mainDiv.setAttribute('id', 'mainDiv');          //id set
    let container;                                  //Container holding box divs declared
    if (grid <= 0 || grid === NaN || grid > 100) {
        alert("Please enter a positive number between 1-100.");
        createEtch(prompt("Enter a number from 1-100"));
    }

    for(let i = 1; i < grid; i++) {                        //Outer for loop creates container divs
         container = document.createElement('div');   
         container.setAttribute('class', 'container');     //Class set

        for(let j = 1; j < grid; j++){                     //Inner for loop creates "box" divs 
             div = document.createElement('div');         
            div.setAttribute('class', 'div');              //Class set
            container.appendChild(div);                    //box div attached to container     
            //container.setAttribute('style', `width: ${480 / grid}px ; height: ${400 / grid}px`)   
        const randomColor = e => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    div.addEventListener('mouseover', randomColor);
        }
        mainDiv.appendChild(container);                 //Containers attached to Main div             
    }

    
    
    document.body.insertBefore(mainDiv, clearNewGridCon);                     //Main div attached to HTML
}

const clearNewGridCon = document.createElement('div');   //Container for clear/new grid created
clearNewGridCon.setAttribute('class', 'clearNewGrid');   
const clearBtn = document.createElement('button');    //Button for clear/new grid created
clearBtn.id = "clearBtn";
clearBtn.textContent = 'New Grid';
clearNewGridCon.appendChild(clearBtn);                //Button attached to clear/new grid 
document.body.appendChild(clearNewGridCon);           //Clear/new grid attached to HTML 
 //div = document.getElementsByClassName('div');
createEtch(16);

const clearCreateGrid = e => {
    document.body.removeChild(mainDiv);
    createEtch(prompt("Enter a number from 1-100"));
}

clearBtn.addEventListener('click', clearCreateGrid);
