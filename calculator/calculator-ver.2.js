let total = "";
const numArray = [];
const operArray = [];
let operUsed = false;
let operator;
let numAdded = false;
let removedArrEl;
let sum = 0;
let decimal = false;
const multipyPos = [];
const dividePos = [];
const addPos = [];
const subPos = [];
let numInput = document.getElementById("numInput");
const arrStr = operArray.join("");
let sumTotaled = false;

const erase = () => {
    numInput.textContent = 0;
    total = "";
    sumTotaled = false; 
    numArray.splice(0, numArray.length);
    operArray.splice(0, operArray.length);
}

const powerRoot = () => {
  let pRArrStr = arrStr;
  for (let i = 0; ; i++) {  
      if (pRArrStr.startsWith("s") || pRArrStr.startsWith("a")
      || pRArrStr.startsWith("d") || pRArrStr.startsWith("m")) {
          continue;
} else if (operArray[i] === "pow") {
    let index = operArray.indexOf("pow");
    sum = Math.pow(numArray[index], numArray[index + 1]);
    numArray.splice(index, 2, sum);
    console.log(numArray);
    operArray.splice(index, 1);
    pRArrStr = operArray.join("");
    console.log(operArray);
   } if (operArray[i] === "sR") {
    let  index = operArray.indexOf("sR");
    console.log(numArray);
      sum = Math.sqrt(numArray[index]);
      numArray.splice(index, 1, sum);
      operArray.splice(index, 1); 
      pRArrStr = operArray.join(""); 
      console.log(operArray);
      console.log(numArray);
  }
   if (pRArrStr.includes("pow") || pRArrStr.includes("sR")) {
       powerRoot();
       break;
   } else if (operArray.length === 0) {
         sum = sum.toString();
         if (sum.length >= 17) {
             console.log("H");
             sum = Number(sum);
             sum = sum.toPrecision(9);
    }
       numInput.textContent = sum;
       break;
   } else if (!operArray.includes("pow") && !operArray.includes("sR") && pRArrStr.includes("m") || pRArrStr.includes("d")) { 
    console.log("G");
    multiplyDivide();
    break; 
 }
} 
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
    }  if (operArray[j] === "d") {
     index = operArray.indexOf("d");
     if (numArray[index + 1] === 0) {
        numArray.splice(0, numArray.length);
        operArray.splice(0, operArray.length);
        numInput.textContent = "ERROR";
        return "ERROR";
    } 
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
    sum = sum.toString();
        if (sum.length >= 17) {
            console.log("H");
            sum = Number(sum);
            sum = sum.toPrecision(9);
        }
    numInput.textContent = sum;
    break;
}
else if (!operArray.includes("d",0) && !operArray.includes("m",0) && mDArrStr.includes("a") || mDArrStr.includes("s")) { 
    console.log("G");
    addSubtract();
    break; 
 }
}  
console.log(numArray);    
} 

const operate = () => { 
    
    if (numArray.length === 1 && !operArray.includes("sR")) {
        return numArray;
    } else if (operArray.includes("pow") || operArray.includes("sR") || numArray.length === 1 && operArray.includes("sR")) {
        powerRoot();
    } else if (operArray.includes("m") || operArray.includes("d") && !operArray.includes("pow") || !operArray.includes("sR")) {
    multiplyDivide();
   } else if (!operArray.includes("d") || !operArray.includes("m") && operArray.includes("a") || operArray.includes("s")) {
           addSubtract();
       }
       operUsed = false;
}
const addSubtract = () => {
    let aSArrStr = arrStr;
        for (let k = 0; ; k++) {
            
        if (operArray[k] === "a") {
          let  index = operArray.indexOf("a");
          console.log(numArray);
            sum = numArray[index] + numArray[index + 1];
            numArray.splice(index, 2, sum);
            operArray.splice(index, 1); 
            aSArrStr = operArray.join(""); 
            console.log(operArray);
            console.log(numArray);
        } if (operArray[k] === "s") {
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
        sum = sum.toString();
        if (sum.length >= 17) {
            console.log("H");
            sum = Number(sum);
            sum = sum.toPrecision(9);
        }
        numInput.textContent = sum;
        break;
    }
}
    console.log(numArray);
    }

const w = () => {
    numArray.push(12,4,151,62,17,31,17,2);
    operArray.push("s","m","d","a","m","s","d");
}

const addValues = e => { 
    total += e.target.value || e.key;
    //console.log(e.target.value);
     if (total.startsWith("0")) {
        total = total.slice(0,0);
        total += e.target.value || e.key;
    } else if (total.length > 17) {
        return;
    } 
    numInput.textContent = total;
    numAdded = true;  
    operUsed = false; 
}

const checkOperators = () => { 
        if (operUsed === true && numAdded === false && operArray.length === 1 && sumTotaled === false) {
            operArray[0] = operArray[1];
            operArray.pop();
            console.log(operArray);
            return;
        } else if (operUsed === true && numAdded === false && operArray.length
            !== numArray.length) {
        operArray[operArray.length -2] = operArray[operArray.length -1];
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
        return;
    } else if (numAdded === true && !isNaN(total)) {   
        numArray.push(Number(total));
        total = "";  
        }
        
     if (e.target.id === "power") {
        operArray.push("pow");
        operUsed = true;
     } else if (e.target.id === "squareRoot") {
         operArray.push("sR");
         operUsed = true;
         /*if (operArray.includes("sR") && operArray.length === numArray.length) {
             operate();
             sumTotaled = true;
         }*/
     }
      else if (e.target.id === "divide" || e.key === "/") {
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
        if (operArray.length === numArray.length && !operArray.includes("sR")) {
            return;
        } else if (operArray.length !== numArray.length || operArray.includes("sR") && operArray.length === numArray.length) {
        console.log(numArray);
        operate();
        sumTotaled = true;
       }
    } else {
        console.log("Error in addOperators()");
    }
    checkOperators();
    numAdded = false; 
    decimal = false; 
    console.log(operArray);
    console.log(numArray); 
}

const keyInput = e => {
    const key = e.key;
    const clickNum = e.target;
    if (key === "0" || key === "1" || key === "2" || key === "3" || key === "4" || key === "4"
   || key === "5" || key === "6" || key === "7" || key === "8" || key === "9" || key === "." || clickNum.classList.value === "numBtn") {
       if (key === "." || clickNum.value === "." && decimal === true) {
           return;
       }
       if (key === "." || clickNum.value === ".") {
        decimal = true;
    }
       addValues(e);
   } else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "=" || key === "Enter") {
       addOperators(e);
   } else if (key === "Backspace") {
       backSpace();
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