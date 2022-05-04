let total = "";
const numArray = [];
const operArray = [];
let operUsed = false;
let operator;
let number = 0;
let numAdded = false;
let removedArrEl;
let sum = 0;

const multipyPos = [];
const dividePos = [];
const addPos = [];
const subPos = [];
let numInput = document.getElementById("numInput");
let currTotal = document.getElementById("currTotal");
currTotal.style.display = "none";
const arrStr = operArray.join("");

const erase = e => {
    numInput.textContent = 0;
    total = "";
    currTotal.textContent = "";
    numArray.splice(0, numArray.length);
    operArray.splice(0, operArray.length);
}

const totalNum = () => {
   //console.log(operArray);
  
    //numArray[0] = sum;
    //numArray.pop();
    
    //operArray[0] = operArray[1];
    //operArray.pop();

    console.log(numArray);
    //return sum;
}

const multiplyDivide = () => {
   let mDArrStr = arrStr;
    for (let j = 0; ; j++) {        
     if (mDArrStr.startsWith("s") || mDArrStr.startsWith("a")) {
        continue;
    } 
    else if (operArray[j] === "m") {
     let index = operArray.indexOf("m");
     sum = numArray[index] * numArray[index + 1];
     numArray.splice(index, 2, sum);
     console.log(numArray);
     operArray.splice(index, 1);
     mDArrStr = operArray.join("");
     console.log(operArray);
    } if (operArray[j] === "d") {
     index = operArray.indexOf("d");
     sum = numArray[index] / numArray[index + 1];
     numArray.splice(index, 2, sum);
    // console.log(numArray);
     operArray.splice(index, 1);
     mDArrStr = operArray.join();
     console.log(operArray);
     console.log(mDArrStr);
 } 
 if (mDArrStr.includes("d") || mDArrStr.includes("m")) {  
   multiplyDivide();
    break;
}  
else if (operArray.length === 0) {
    break;
}
else if (!operArray.includes("d",0) && !operArray.includes("m",0)) { 
    console.log("G");
    addSubtract();
    break; 
 }
}  
console.log(numArray);    
} 

const operate = () => { 
    if (numArray.length === 1) {
        return numArray;
    }
    else if (operArray.includes("m") || operArray.includes("d") && !isNaN(numArray)) {
    multiplyDivide();
   }   
       else if (!operArray.includes("d") || !operArray.includes("m") && operArray.includes("a") || operArray.includes("s")) {
           addSubtract();
       }
       operUsed = false;
       numInput.textContent = sum;
}
const addSubtract = () => {
    let aSArrStr = arrStr;
        for (let i = 0; ; i++) {
            
        if (operArray[i] === "a") {
          let  index = operArray.indexOf("a");
          console.log(numArray);
            sum = numArray[index] + numArray[index + 1];
            numArray.splice(index, 2, sum);
            operArray.splice(index, 1); 
            aSArrStr = operArray.join(""); 
            console.log(operArray);
            console.log(numArray);
        } if (operArray[i] === "s") {
            index = operArray.indexOf("s");
            sum = numArray[index] - numArray[index + 1];
            console.log(sum);
            numArray.splice(index, 2, sum);
            operArray.splice(index, 1);
            aSArrStr = operArray.join("");  
            console.log(operArray);
            console.log(numArray);
        } if (aSArrStr.includes("a") || aSArrStr.includes("s")) {
            addSubtract();
            break;
   } else if (numArray.length === 1 || operArray.length === 0) {
            break;
        }
    } console.log(arrStr);
    console.log(numArray);
    }

const w = () => {
    numArray.push(12,4,151,62,17,31,17,2);
    operArray.push("s","m","d","a","m","s","d");
}

const addValues = e => {  
     total += e.target.value || e.key;
     numInput.textContent = total;
     numAdded = true;  
     operUsed = false; 
}

const checkOperators = () => { 
    
        if (operUsed === true && numAdded === false && operArray.length === 1) {
            operArray[0] = operArray[1];
            operArray.pop();
            console.log(operArray);
            return;
        } else if (operUsed === true && numAdded === false && operArray.length !== numArray.length) {
        operArray[operArray.length -2] = operArray[operArray.length -1];
        operArray.pop();
        console.log(operArray);
    }

}

const backSpace = (e) => {
    if (!total) {
        total = "";
        numInput.textContent = 0;
        return;
    } else {
        total = total.slice(0, total.length -1);
        numInput.textContent = total;
    }
      console.log(total);
}

const addOperators = e => {
       
      
        
        if (numAdded === true && !isNaN(total)) {   
        numArray.push(parseInt(total));
        total = "";  
        }

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
        operate();
    } else {
        console.log("Error in addOperators()");
    }
    checkOperators();
    numAdded = false;  
    console.log(operArray);
    console.log(numArray); 
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