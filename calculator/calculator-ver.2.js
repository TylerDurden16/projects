let total = "";
const numArray = [];
const operArray = [];
let operUsed = false;
let operator;
let number = 0;
let numAdded = false;
let removedArrEl;
let sum = 0;
const operPos = {
    multiply: [],
    divide: [],
    add: [],
    subtract: []
}
const multipyPos = [];
const dividePos = [];
const addPos = [];
const subPos = [];
let numInput = document.getElementById("numInput");
let currTotal = document.getElementById("currTotal");
currTotal.style.display = "none";

const erase = e => {
    numInput.textContent = "0";
    total = "";
    currTotal.textContent = "";
    numArray.splice(0, numArray.length);
    operArray.splice(0, operArray.length);
}
/*const checkOper = operArray.map((oper, index) => {
    if (oper === "m") {
      multipyPos.push(index);
      operPos.multiply.push(index);
    } if (oper === "d") {
        dividePos.push(index);
        operPos.divide.push(index);
    } if (oper === "a") {
        addPos.push(index);
        operPos.add.push(index);
    } if (oper === "s") {
        subPos.push(index);
        operPos.subtract.push(index);
    }
    return oper;
});*/

const totalNum = () => {
        //let sum = 0;

//checkOper();
   // console.log(operArray);
    //console.log(operPos);
   /* if (operArray[1] === "=") {
        //numArray.splice(0, 2);
        //operArray.splice(0, 2);
        console.log(numArray);
        console.log(operArray);
        //currTotal.textContent = sum;
        numInput.textContent = sum;
        console.log(sum);
        return sum;
    }*/
    //numArray[0] = sum;
    //numArray.pop();
    
    //operArray[0] = operArray[1];
    //operArray.pop();
    operUsed = false;
    numInput.textContent =sum;
    //console.log(numArray);
    //return sum;
}

const operate = () => {
    
    for (let i = 0; i < 10; i++) {
     operArray.map((oper, index) => {
       // console.log("runs!!");
    if (oper === "m") {
        sum = numArray[index] * numArray[index + 1];
        numArray.splice(index, 0, sum);
        numArray.splice(index + 1, 2);
        console.log(numArray);
        
                operArray.splice(index, 1);
            
        console.log(operArray);
    } if (oper === "d") {
        sum = numArray[index] / numArray[index + 1];
        numArray.splice(index, 0, sum);
        console.log(sum);
        numArray.splice(index + 1, 2);
        console.log(numArray);
        operArray.splice(index, 1);
        console.log(operArray);
    }
        });

}

   /* let j = 0;
    while (!operArray.includes("a")) {
        operArray.map((oper, index) => {  
    if (oper === "a") {
        sum = numArray[index] + numArray[index + 1];
        numArray.splice(index, 0, sum);
        numArray.splice(index + 1, 2);
        console.log(numArray);
        operArray.map((oper, index) => {
            if (oper === "a") {
                oper.slice(index, 1);
            }
            return oper;
        });
        
    }
    }); 
j++;
}
    let k = 0;
   while (!operArray.includes("s")){
    operArray.map((oper, index) => {  
    if (oper === "s") {
        sum = numArray[index] + numArray[index + 1];
        numArray.splice(index, 0, sum);
        numArray.splice(index + 1, 2);
        console.log(numArray);
    }
    operArray.map((oper, index) => {
        if (oper === "s") {
            oper.slice(index, 1);
        }
        return oper;
    });
   })
k++;
}*/
return numArray;
}


        /*for (let i = 0; ; i++){
            
        if (operArray[i] === "m") {
            sum = numArray[multipyPos.value] * numArray[multipyPos.value + 1];
            numArray.splice(multipyPos.value, 0, sum);
            numArray.splice(multipyPos.value + 1, 2);
            operArray.map((oper, index) => {
                if (oper === "m") {
                    oper.slice(index, 1);
                }
                return oper;
            });
        } else if (operArray[i] === "d") {
            sum = numArray[dividePos.value] / numArray[dividePos.value + 1];
            numArray.splice(dividePos.value, 0, sum);
            numArray.splice(dividePos.value + 1, 2);
            operArray.map((oper, index) => {
                if (oper === "d") {
                    oper.slice(index, 1);
                }
                return oper;
            });
        } 
        for ( let j = 0; ; j++) {
        if (operArray[i] === "a") {
            
            sum = numArray[j] + numArray[i +1];
            numArray.splice()
            
        } else if (dividePos[i] !== 0) {
            sum = numArray[i] + numArray[i];
        } else {
            console.log("Error in totalNum()");
        }
    }
    }
}*/

const addValues = e => {  
     total += e.target.value || e.key;
     numInput.textContent = total;

     numAdded = true;   
}

const checkOperators = () => {
    if (numAdded === false) {
        numArray.splice(1, 1);
        console.log(numArray);  
    }
    if (operUsed === true && operArray[1]) {
        //operArray[0] = operArray[1];
        //operArray.pop();
        //console.log(operArray);
    }

}

const backSpace = (e) => {
    if (!total) {
        total = "";
        numInput.textContent = "0";
        return;
    } else {
        total = total.slice(0, total.length -1);
        numInput.textContent = total;
    }
      console.log(total);
}

const addOperators = e => {
   
        checkOperators();
        if (numAdded === true) {   
        numArray.push(parseInt(total));
        total = "";  
        }
        if (isNaN(numArray[0] && numAdded === true)) {
           numArray.splice(0,1);
        } 
           
       // console.log(numArray);
        
        numAdded = false;  
     if (e.target.id === "divide" || e.key === "/") {
        operArray.push("d");
        operator = "d";
        operUsed = true;
    } else if (e.target.id === "multiply" || e.key  === "*") {
        operArray.push("m");
        operator = "m";
        operUsed = true;
    } else if (e.target.id === "subtract" || e.key === "-") {
        operArray.push("s");
        operator = "s";
        operUsed = true;
    } else if (e.target.id === "add" || e.key === "+") {
        operArray.push("a");
        operator = "a";
        operUsed = true;
    } else if (e.target.id === "equals" || e.key === "=" || e.key === "Enter") {
        operArray.push("=");
        operate();
    } else {
        console.log("Error in addOperators()");
    }
    if (operArray.length === 3) {
       // totalNum();
    }
    totalNum();
}

const keyInput = e => {
    const key = e.key;
    //console.log(e.key);
    if (key === "0" || key === "1" || key === "2" || key === "3" || key === "4" || key === "4"
   || key === "5" || key === "6" || key === "7" || key === "8" || key === "9" || key === "."){
       addValues(e);
   } if (key === "+" || key === "-" || key === "*" || key === "/" || key === "=" || key === "Enter") {
       addOperators(e);
   } if (key === "Backspace") {
       backSpace(e);
   }
    else {
       return;
   }
}

const numBtn = document.querySelectorAll(".numBtn");
const clrBtn = document.getElementById("clrBtn");
const operBtn = document.querySelectorAll(".operBtn");
const bckSpace = document.getElementById("backSpace");

numBtn.forEach(numbers => numbers.addEventListener("click", addValues));
operBtn.forEach(operators => operators.addEventListener("click", addOperators))
clrBtn.addEventListener("click", erase);
window.addEventListener("keydown", keyInput);
bckSpace.addEventListener("click", backSpace);