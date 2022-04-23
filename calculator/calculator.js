let total = "";
const array = [];
let operUsed = false;
let operator;
let number = 0;
let numFinished = true;
let removedArrEl;

let numInput = document.getElementById("numInput");
const erase = e => {
    numInput.textContent = "";
    array.splice(0, 2);
}

const totalNum = () => {
        let sum = 0;
        if (operator === "/") {
            sum = array[0] / array[1];
        } else if (operator === "*") {
            console.log("!!!!!");
            sum = array[0] * array[1];
        } else if (operator === "-") {
            sum = array[0] - array[1];
        } else if (operator === "+") {
            sum = array[0] + array[1];
        } else {
            console.log("Error in totalNum()");
        }
    
    array[0] = sum;
    array.splice(1,1)
   // console.log(sum);
    console.log(array);
    return array;
}
const addValues = e => {    
     total += e.target.value;

    numInput.textContent = total;
    //total += number;


    
    
}

const addOperators = e => {
   // numFinished = true;
        array.push(parseInt(total));
        total = "";
        console.log(array);

    if (e.target.id === "divide") {
       // array.push("/");
       // total += "/";
        operator = "/";
        operUsed = true;
    } else if (e.target.id === "multiply") {
       // array.push("*");
        operator = "*";
        operUsed = true;
    } else if (e.target.id === "subtract") {
        //array.push("-");
       // total += "-";
        operator = "-"
        operUsed = true;
    } else if (e.target.id === "add") {
        //array.push("+");
       // total+= "+";
        operator = "+";
        operUsed = true;
    } else if (e.target.id === "equals") {

    } else {
        console.log("Error in operators");
    }
    if (array.length === 2) {
        totalNum();
    }
}

const numBtn = document.querySelectorAll(".numBtn");
const clrBtn = document.getElementById("clrBtn");
const operBtn = document.querySelectorAll(".operBtn");

numBtn.forEach(numbers => numbers.addEventListener("click", addValues));
operBtn.forEach(operators => operators.addEventListener("click", addOperators))
clrBtn.addEventListener("click", erase);