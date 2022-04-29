let total = "";
const numArray = [];
const operArray = [];
let operUsed = false;
let operator;
let number = 0;
let numAdded = false;
let removedArrEl;
let sum = 0;

let numInput = document.getElementById("numInput");
let currTotal = document.getElementById("currTotal");
currTotal.style.display = "none";

const erase = e => {
    numInput.textContent = "0";
    total = "";
    currTotal.textContent = "";
    numArray.splice(0, 2);
    operArray.splice(0, 2);
}

const totalNum = () => {
        //let sum = 0;
        
        if (operArray[0] ==="/") {
            sum = numArray[0] / numArray[1];
        } else if (operArray[0] === "*") {
            sum = numArray[0] * numArray[1];
        } else if (operArray[0] === "-") {
            sum = numArray[0] - numArray[1];
        } else if (operArray[0] === "+") {
            sum = numArray[0] + numArray[1];
        } else {
            console.log("Error in totalNum()");
        }
   // console.log(operArray);
    if (operArray[1] === "=") {
        numArray.splice(0, 2);
        operArray.splice(0, 2);
        console.log(numArray);
        console.log(operArray);
        //currTotal.textContent = sum;
        numInput.textContent = sum;
        console.log(sum);
        return sum;
    }
    numArray[0] = sum;
    numArray.pop();
    console.log(numArray);
    operArray[0] = operArray[1];
    operArray.pop();
    operUsed = false;
    numInput.textContent =sum;
    console.log(numArray);
    return sum;
}

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
        operArray[0] = operArray[1];
        operArray.pop();
        console.log(operArray);
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
           
        console.log(numArray);
        
        numAdded = false;  
     if (e.target.id === "divide" || e.key === "/") {
        operArray.push("/");
        operator = "/";
        operUsed = true;
    } else if (e.target.id === "multiply" || e.key  === "*") {
        operArray.push("*");
        operator = "*";
        operUsed = true;
    } else if (e.target.id === "subtract" || e.key === "-") {
        operArray.push("-");
        operator = "-";
        operUsed = true;
    } else if (e.target.id === "add" || e.key === "+") {
        operArray.push("+");
        operator = "+";
        operUsed = true;
    } else if (e.target.id === "equals" || e.key === "=" || e.key === "Enter") {
        operArray.push("=");
    } else {
        console.log("Error in addOperators()");
    }
    if (numArray.length === 2) {
        totalNum();
    }
    console.log(operArray);
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