let total = "";
const numArray = [];
const operArray = [];
let operUsed = false;
let operator;
let number = 0;
let numAdded = false;
let removedArrEl;
let sum = 0;
let decimal = false;
let sumTotaled = false;

let numInput = document.getElementById("numInput");

const erase = () => {
    numInput.textContent = 0;
    total = "";
    numArray.splice(0, 2);
    operArray.splice(0, 2);
    decimal = false;
}

const round = () => {
    const sumStr = sum.toString();
    if (sumStr.includes(".") && sumStr.length >= 17) {     
        if (sumStr.indexOf(".") <= 4 || sumStr.length >= 17) { 
           let roundedNum = sum.toPrecision(9);
            numInput.textContent = roundedNum;
            console.log("POP");
            return;
        }    
        roundedNum = sum.toFixed(4);
        number = Number(roundedNum); 
        roundedNum = roundedNum.toExponential();       
        console.log("POO");
        numInput.textContent = roundedNum;
        return;
} else {
    numInput.textContent = sum;
}
}

const totalNum = () => {
        //let sum = 0;
        
        if (operArray[0] ==="/") {
            sum = numArray[0] / numArray[1];
            if (numArray[1] === 0) sum = "ERROR!";
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
        //numArray.splice(0, 2);
        operArray.splice(0, 2);
        numArray[0] = sum;
        numArray.pop();
        console.log(numArray);
        console.log(operArray);
        round();
        console.log(sum);
        return sum;
    }
    numArray[0] = sum;
    numArray.pop();
    console.log(numArray);
    operArray[0] = operArray[1];
    operArray.pop();
    operUsed = false;
    //numInput.textContent =sum;
    round();
    console.log(numArray);
    return sum;
}

const addValues = e => { 
    total += e.target.value || e.key;
    if (total.startsWith("0")) {
        total = total.slice(0,0);
        total += e.target.value || e.key;
    } else if (total.length > 17) {
        total = total.slice(0,total.length -1);
        console.log(total);
        return;
    } else if (total === "") return;
     numInput.textContent = total;
     numAdded = true; 
     operUsed = false;  
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

const backSpace = () => {
    if (!total) {
        total = 0;
        numInput.textContent = 0;
        return;
    } else {
        total = total.slice(0, total.length -1);
        if (!total.includes(".")) {
              console.log("CVC");
              decimal = false;
          }
        if (total === 0 || !total) {
        total = 0;
        numInput.textContent = 0;
        return;
    }
    numInput.textContent = total;
    }
    console.log(total);
}

const addOperators = e => {
    if (total === ".") {
        console.log("!!!!!");
        return;
    } else if (numAdded === true && !isNaN(total)) {   
        numArray.push(Number(total));
        total = "";  
        } /*else if (isNaN(numArray[0] && numAdded === true)) {
           numArray.splice(0,1);
        } */
        
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
        sumTotaled = true;
    } else {
        console.log("Error in addOperators()");
    }
    if (numArray.length === 2) {
        totalNum();
    }
    checkOperators();
    decimal = false;
    numAdded = false;  
    console.log(operArray);
    console.log(numArray);
}

const keyInput = e => {
    const key = e.key;
    const clickNum = e.target;
    if (key === "Backspace") {
        backSpace();
    } else if (key === "0" || key === "1" || key === "2" || key === "3" || key === "4" || key === "4"
   || key === "5" || key === "6" || key === "7" || key === "8" || key === "9" || key === "." || clickNum.classList.value === "numBtn") { 
       if (key === "." && decimal || clickNum.value === "." && decimal === true) {
        return;
    } 
    if (key === "." && !decimal || clickNum.value === "." && !decimal) {
        decimal = true;
    }
    addValues(e);
   } else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "=" || key === "Enter") {
       addOperators(e);
   } 
    else {
       return;
   }
}

const numBtn = document.querySelectorAll(".numBtn");
const clrBtn = document.getElementById("clrBtn");
const operBtn = document.querySelectorAll(".operBtn");
const bckSpace = document.getElementById("backSpace");

numBtn.forEach(numbers => numbers.addEventListener("click", keyInput));
operBtn.forEach(operators => operators.addEventListener("click", addOperators))
clrBtn.addEventListener("click", erase);
window.addEventListener("keydown", keyInput);
bckSpace.addEventListener("click", backSpace);