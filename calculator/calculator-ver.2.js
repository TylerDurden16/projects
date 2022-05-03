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
    numInput.textContent = "0";
    total = "";
    currTotal.textContent = "";
    numArray.splice(0, numArray.length);
    operArray.splice(0, operArray.length);
}

const totalNum = () => {
        //let sum = 0;
        
     

   //console.log(operArray);
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

    console.log(numArray);
    //return sum;
}

const multiplyDivide = () => {
    
    for (let j = 0; j < 10; j++) {        
     if (arrStr.startsWith("s") || arrStr.startsWith("a")) {
     //j = operArray.findIndex(oper => oper === "m") || operArray.findIndex(oper => oper === "d");
        continue;
     } else if (arrStr.startsWith("m") || arrStr.startsWith("d")) {
         j = 0;
 }  else if (arrStr.endsWith("d") || arrStr.endsWith("m")){
    j = operArray.length - 2;
 }
 
 if (operArray[j] === "m") {
     let index = operArray.findIndex(oper => oper === "m");
     sum = numArray[index] * numArray[index + 1];
     numArray.splice(index, 2, sum);
     console.log(numArray);
     operArray.splice(index, 1);    
     console.log(operArray);
 } if (operArray[j] === "d") {
     index = operArray.indexOf("d");
     sum = numArray[index] / numArray[index + 1];
     numArray.splice(index, 2, sum);
    // console.log(numArray);
     operArray.splice(index, 1);
     console.log(operArray);
 } 
 if (arrStr.startsWith("a") || arrStr.startsWith("s") && !operArray.includes("d") && !operArray.includes("m")) {
    addSubtract();
    break;
}
    else if (arrStr.endsWith("s") || arrStr.endsWith("a") || operArray.length === 1) {
     break;
 }

}  
console.log(numArray);    
} 

const operate = () => { 
   
    console.log(operArray);
    if (operArray.includes("m") || operArray.includes("d")) {
    multiplyDivide();
   }   
       else if (!operArray.includes("d") || !operArray.includes("m") && operArray.includes("a") || operArray.includes("s")) {
           addSubtract();
       }
       operUsed = false;
       numInput.textContent =sum;
}
const addSubtract = () => {
        for (let i = 0; i < 10; i++) {
            
        if (operArray[i] === "a") {
          let  index2 = operArray.indexOf("a");
          console.log(numArray);
            sum = numArray[index2] + numArray[index2 + 1];
            numArray.splice(index2, 2, sum);
            operArray.splice(index2, 1);  
            console.log(operArray);
            console.log(numArray);
        } if (operArray[i] === "s") {
            index2 = operArray.indexOf("s");
            sum = numArray[index2] - numArray[index2 + 1];
            numArray.splice(index2, 2, sum);
            operArray.splice(index2, 1);  
            console.log(operArray);
            console.log(numArray);
        }  if (arrStr.startsWith("a") || arrStr.startsWith("s")) {
            i = 0;
        } else if (operArray.includes("a") || arrStr.endsWith("s")) { 
            i = operArray.length - 2;
            //i--;
   } if (numArray.length === 1) {
            break;
        }
    } console.log(arrStr);
    console.log(numArray);
    }



const addValues = e => {  
     total += e.target.value || e.key;
     numInput.textContent = total;

     numAdded = true;   
}

const checkOperators = () => { 
    if (operUsed === true && numAdded === false && operArray[1]) {
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
    
        checkOperators();
        
        if (numAdded === true && !isNaN(total)) {   
        numArray.push(parseInt(total));
        total = "";  
        }
      // else if (isNaN(numArray[0] && numAdded === true)) {
          // numArray.splice(0,numArray.length -1);
        //} 
           
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
        operate();
    } else {
        console.log("Error in addOperators()");
    }
    if (operArray.length === 3) {
       // totalNum();
    }
   // totalNum();
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