let total = "";
const numArray = [];
const operArray = [];
let operUsed = false;
let number = 0;
let numAdded = false;
let removedArrEl;
let sum = 0;
let decimal = false;
let sumTotaled = false;
let sumStr;
const tSArray = [];
const tSOArray = [];
let numInput = document.getElementById("numInput");
let sR = false;
let pow = false;

const erase = () => {
    numInput.textContent = 0;
    total = "";
    sum = 0;
    sumTotaled = false;
    numArray.splice(0, numArray.length);
    operArray.splice(0, operArray.length);
    tSArray.splice(0, numArray.length);
    tSOArray.splice(0, operArray.length);
}

const power = () => {
    const powIndex = operArray.indexOf("pow");
    if (isNaN(numArray[powIndex + 1])) {
        console.log("IOU");
        return;
    }
    sum = Math.pow(numArray[powIndex], numArray[powIndex + 1]);
    console.log(sum);
    sumStr = sum.toString();
    if (sumStr.includes(".") && sumStr.length >= 17) {
        sum = sum.toFixed(2);
        sum = Number(sum); 
    }
    if (sumStr.length > 17) {
        console.log("LLL");
        //sum = sum.toPrecision(9);
        //sum = Number(sum); 
      }
      if (sum >= 10000000000000000n) {
        //numInput.textContent = sum.toPrecision(9);
    }
    //numInput.textContent = sum;
    
    numArray.splice(powIndex, 2, sum);
    operArray.splice(powIndex, 1);
    console.log(operArray);
    const powStr = operArray.join("");
    if (powIndex !== 0) {
        if (operArray[0] === "*"  && !powStr.includes("pow") && !powStr.includes("sR") || operArray[0] === "+" && powStr.includes("*") && !powStr.includes("pow") && !powStr.includes("sR")
        || operArray[0] === "-"  && powStr.includes("*") && !powStr.includes("pow") && !powStr.includes("sR") && sR === false) {
            if (powStr.includes("/")) {
                if (powStr.indexOf("*") > powStr.indexOf("/")) {
                    console.log("RRRR");
                    divide();
                    return;
                }
            } else {
            console.log("NNN");
            multiply();
            }
        } else if (operArray[0] === "/" && !powStr.includes("pow") && !powStr.includes("sR") || operArray[0] === "+" && powStr.includes("/") && !powStr.includes("pow") && !powStr.includes("sR")
        || operArray[0] === "-"  && powStr.includes("/") && !powStr.includes("pow") && !powStr.includes("sR") && sR === false) {
            if (powStr.includes("*")) {
                if (powStr.indexOf("*") < powStr.indexOf("/")) {
                    console.log("ZZZZ");
                    multiply();
                    return;
                }
            } else {
                console.log("NBA");
                divide();
            }
        }
        else if (operArray[0] === "+" && !powStr.includes("*") && !powStr.includes("/") && !powStr.includes("pow") && !powStr.includes("sR") && sR === false) {
           console.log("III");
            add();
        } else if (operArray[0] === "-" && !powStr.includes("*") && !powStr.includes("/") && !powStr.includes("pow") && !powStr.includes("sR") && sR === false) {
            subtract();
        }
        return;
    }
}
const sqRt = () => {
    const sRIndex = operArray.indexOf("sR");
    sum = Math.sqrt(numArray[sRIndex]);
    console.log(sum);
    sumStr = sum.toString();
    if (sumStr.includes(".") && sumStr.length >= 17) {
       // sum = sum.toFixed(2);
        sum = Number(sum); 
    }
    if (sumStr.length > 17) {
        //sum = sum.toPrecision(9);
        //sum = Number(sum); 
      }
      if (sum >= 10000000000000000n) {
      //  numInput.textContent = sum.toPrecision(9);
    }
    //numInput.textContent = sum;
    
    numArray.splice(sRIndex, 1, sum);
    operArray.splice(sRIndex, 1);
    const sRStr = operArray.join("");
    console.log(numArray);
    console.log(operArray);
    if (sRIndex !== 0) {
        if (operArray[0] === "*" && !sRStr.includes("pow") && !sRStr.includes("sR") || operArray[0] === "+" && sRStr.includes("*") && !sRStr.includes("pow") && !sRStr.includes("sR")
        || operArray[0] === "-"  && sRStr.includes("*") && !sRStr.includes("pow") && !sRStr.includes("sR") && sR === false) {
            if (sRStr.includes("/")) {
                if (sRStr.indexOf("*") > sRStr.indexOf("/")) {
                    console.log("CCCCC");
                    divide();
                    return;
                }
            } else {
                console.log("KILL");
                multiply();
            }
        } else if (operArray[0] === "/" && !sRStr.includes("pow") && !sRStr.includes("sR") || operArray[0] === "+" && sRStr.includes("/") && !sRStr.includes("pow") && !sRStr.includes("sR")
        || operArray[0] === "-" && sRStr.includes("/") && !sRStr.includes("pow") && !sRStr.includes("sR") && sR === false) {
            if (sRStr.includes("*")) {
                if (sRStr.indexOf("*") < sRStr.indexOf("/")) {
                    console.log("ZZZZ");
                    multiply();
                    return;
                }
            } else {
            divide();
        }
        }
        else if (operArray[0] === "+" && !sRStr.includes("*") && !sRStr.includes("/") && !sRStr.includes("pow") && !sRStr.includes("sR") && sR === false) {
            add();
        } else if (operArray[0] === "-" && !sRStr.includes("*") && !sRStr.includes("/") && !sRStr.includes("pow") && !sRStr.endsWith("sR") && sR === false) {
            console.log("HJK");
            subtract();
        }
        return;
    }
}

const multiply = () => {
    const multIndex = operArray.indexOf("*");
    console.log(numArray, operArray);
    if (isNaN(numArray[multIndex + 1])) return;
    sum = numArray[multIndex] * numArray[multIndex + 1];
    sumStr = sum.toString();
    if (sumStr.includes(".") && sumStr.length > 17) {
        sum = sum.toFixed(2);
        sum = Number(sum); 
    }
    if (sumStr.length >= 17) {
        console.log("H");
        //sum = sum.toPrecision(9);
        //sum = Number(sum); 
      } 
      if (sum >= 10000000000000000n) {
      //  numInput.textContent = sum.toPrecision(9);
    }
    //numInput.textContent = sum;
    
    numArray.splice(multIndex, 2, sum);
    operArray.splice(multIndex, 1);
    const mStr = operArray.join("");
    if (multIndex !== 0) {
            if (operArray[0] === "*" && !mStr.includes("pow") && !mStr.includes("sR") || operArray[0] === "+" && mStr.includes("*") && !mStr.includes("pow") && !mStr.includes("sR")
            || operArray[0] === "-"  && mStr.includes("*") && !mStr.includes("pow") && !mStr.includes("sR") && sR === false) {

                multiply();
            } else if (operArray[0] === "/" && !mStr.includes("pow") && !mStr.includes("sR") || operArray[0] === "+" && mStr.includes("/") && !mStr.includes("pow") && !mStr.includes("sR")
            || operArray[0] === "-" && mStr.includes("/") && !mStr.includes("pow") && !mStr.includes("sR") && sR === false) {
                divide();
            } else if (operArray[0] === "+" && !mStr.includes("*") && !mStr.includes("/") && !mStr.includes("pow") && !mStr.includes("sR") && sR === false) {
            add();
        } else if (operArray[0] === "-" && !mStr.includes("*") && !mStr.includes("/") && !mStr.includes("pow") && !mStr.includes("sR") && sR === false) {
            subtract();
        }
        return;
    }
   // console.log(numArray, operArray);
}

const divide = () => {
    const divIndex = operArray.indexOf("/");
    if (numArray[divIndex + 1] === 0) {
        console.log("QQQQ");
        numArray.splice(0, numArray.length);
        operArray.splice(0, operArray.length);
        total = "ERROR";
        numInput.textContent = "ERROR";
        return "ERROR";
    }
    if (isNaN(numArray[divIndex + 1])) return;
    sum = numArray[divIndex] / numArray[divIndex + 1];
    sumStr = sum.toString();
    if (sumStr.includes(".") && sumStr.length >= 17) {
        sum = sum.toFixed(2);
        sum = Number(sum); 
    }
    if (sumStr.length > 17) {
        //sum = sum.toPrecision(9);
        //sum = Number(sum); 
      }
      if (sum >= 10000000000000000n) {
       // numInput.textContent = sum.toPrecision(9);
    }
    //numInput.textContent = sum;
    
    console.log(numArray, operArray);
    numArray.splice(divIndex, 2, sum);
    operArray.splice(divIndex, 1);
    dStr = operArray.join("");
    if (divIndex !== 0) {
        if (operArray[0] === "*" && !dStr.includes("pow") && !dStr.includes("sR") || operArray[0] === "+" && dStr.includes("*") && !dStr.includes("pow") && !dStr.includes("sR")
            || operArray[0] === "-"  && dStr.includes("*") && !dStr.includes("pow") && !dStr.includes("sR") && sR === false) {
               /* if (dStr.includes("/")) {
                    if (dStr.indexOf("*") < dStr.indexOf("/")) {
                        console.log("FFF");
                        multiply();
                        return;
                    } else if (dStr.indexOf("*") > dStr.indexOf("/")) {
                        console.log("GGGG");
                        divide();
                        return;
                    }
                } else {*/
                    multiply();
               // }
               
            } else if (operArray[0] === "/" && !dStr.includes("pow") && !dStr.includes("sR") || operArray[0] === "+" && dStr.includes("/") && !dStr.includes("pow") && !dStr.includes("sR")
            || operArray[0] === "-" && dStr.includes("/") && !dStr.includes("pow") && !dStr.includes("sR") && sR === false) {
               /* if (dStr.includes("*")) {
                    if (dStr.indexOf("*") < dStr.indexOf("/")) {
                        console.log("VVV");
                        multiply();
                        return;
                    } else if (dStr.indexOf("*") > dStr.indexOf("/")) {
                        console.log("XXXX");
                        divide();
                        return;
                    }
                } else {*/
                    divide();
                //}
            } else if (operArray[0] === "+" && !dStr.includes("*") && !dStr.includes("/") && !dStr.includes("pow") && !dStr.includes("sR" && sR === false)) {
            add();
        } else if (operArray[0] === "-" && !dStr.includes("*") && !dStr.includes("/") && !dStr.includes("pow") && !dStr.includes("sR") && sR === false) {
            subtract();
        }
        return;
    }
    console.log(numArray, operArray);
}
const subtract = () => {
    const subIndex = operArray.indexOf("-");
    if (isNaN(numArray[subIndex + 1])) return;
    sum = numArray[subIndex] - numArray[subIndex + 1];
    sumStr = sum.toString();
    if (sumStr.includes(".") && sumStr.length >= 17) {
        sum = sum.toFixed(2);
        sum = Number(sum); 
    }
    if (sumStr.length > 17) {
        console.log("H");
        //sum = sum.toPrecision(9);
        //sum = Number(sum); 
      }
      if (sum >= 10000000000000000n) {
       // numInput.textContent = sum.toPrecision(9);
    }
   // numInput.textContent = sum;
    
    numArray.splice(subIndex, 2, sum);
    operArray.splice(subIndex, 1);
    console.log(numArray, operArray);
}
const add = () => {
    const addIndex = operArray.indexOf("+");
    if (isNaN(numArray[addIndex + 1])) return;
    sum = numArray[addIndex] + numArray[addIndex + 1];
    console.log(numArray, operArray);
    sumStr = sum.toString();
    if (sumStr.includes(".") && sumStr.length >= 17) {
        sum = sum.toFixed(2);
        sum = Number(sum); 
    }
    if (sumStr.length > 17) {
        console.log("H");
        //sum = sum.toPrecision(9);
       // sum = Number(sum); 
      }
      if (sum >= 10000000000000000n) {
      //  numInput.textContent = sum.toPrecision(9);
    }
  //  numInput.textContent = sum;
    
    numArray.splice(addIndex, 2, sum);
    operArray.splice(addIndex, 1);
    console.log(numArray, operArray);
    return sum;
}
const sum2 = () => {
    //numInput.textContent = sum;
    //if ()
    if (tSOArray[0] === "pow") {

    }
    operUsed = false;
    return sum;
}

const totalNum = () => {
    let index;
    console.log(numArray);
    //console.log(operArray);
     if (numArray.length >= 2 || operArray[0] === "sR") {
        const operStr = operArray.join("");
        //if (pow === true &&)
        console.log(operArray);
       if (operArray[0] === "pow") {
           power();
       } else if (operArray[0] === "sR") {
           sqRt();
       }
        else if (operStr[0] === "*") {
            if (operStr.includes("pow") && numArray.length >= 3) {
                power();
            } else if (operStr.includes("sR") && numArray.length >= 2) {
                sqRt();
            } else if (operArray[1] !== "pow" && operArray[1] !== "sR") {
                multiply();
            }
        } else if (operStr[0] === "/") {
            if (operStr.includes("pow") && numArray.length >= 3) {
                power();
            } else if (operStr.includes("sR") && numArray.length >= 2) {
                sqRt();
            } else if (operArray[1] !== "pow" && operArray[1] !== "sR") {
                divide();
            } 
        } else if (operArray[0] === "+") {
            if (operStr.includes("pow") && numArray.length >= 3) {
                console.log("BBB");
                power();
            } else if (operStr.includes("sR") && numArray.length >= 2) {
                sqRt();
            } else if (operStr[1] === "*" && numArray.length >= 3) {
                console.log("YYYYYY");
                multiply();
            } else if (operStr[1] === "/" && numArray.length >= 3) {
                console.log("hhh");
                divide();
            } else if (operArray[1] !== "*" && operArray[1] !== "/" && operArray[1] !== "pow" 
            && operArray[1] !== "sR") {
                console.log("WWWWWWWW");
                add();
            }
        } else if (operArray[0] === "-") {
            if (operStr.includes("pow") && numArray.length >= 3) {
                power();
            } else if (operStr.includes("sR") && numArray.length >= 2) {
                console.log("VPN");
                sqRt();
            } else if (operStr[1] === "*" && numArray.length >= 3) {
                console.log("OOO");
                multiply();
            } else if (operStr[1] === "/" && numArray.length >= 3) {
                divide();
            } else if (operArray[1] !== "*" && operArray[1] !== "/" && operArray[1] !== "pow" 
            && operArray[1] !== "sR") {
                console.log("PPP");
                subtract();
            }
        } else {
            console.log("Error in totalNum()");
        } 
        operUsed = false;
    }
   // console.log(operArray);
    /*if (operArray[1] === "=") {
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
    operArray.pop();*/
    if (sum >= 10000000000000000n) {
        numInput.textContent = sum.toPrecision(9);
        return;
    }
    numInput.textContent = sum;
    
    console.log(numArray);
    return sum;
}

const addValues = e => { 
    total += e.target.value || e.key;
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
    /*if (numAdded === false) {
        numArray.splice(1, 1);
        console.log(numArray);  
    }*/if (operUsed === true && numAdded === false && operArray.length === 1 && sumTotaled === false && numArray.length === 0) {
        operArray[0] = operArray[1];
        operArray.pop();
        console.log(operArray);
        return;
    } else if (operUsed === true && numAdded === false && operArray.length
        !== numArray.length) {
        operArray[operArray.length - 2] = operArray[operArray.length - 1];
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
            pow = true;
            sR = false;
         } else if (e.target.id === "squareRoot") {
            operArray.push("sR");
             operUsed = true;
             sR = true;
        } else if (e.target.id === "divide" || e.key === "/") {
        operArray.push("/");
        operUsed = true;
        sR = false;
    } else if (e.target.id === "multiply" || e.key  === "*") {
        operArray.push("*");
        operUsed = true;
        sR = false;
    } else if (e.target.id === "subtract" || e.key === "-") {
        operArray.push("-");
        operUsed = true;
        sR = false;
    } else if (e.target.id === "add" || e.key === "+") {
        operArray.push("+");
        operUsed = true;
        sR = false;
    } else if (e.target.id === "equals" || e.key === "=" || e.key === "Enter") {
        //operArray.push("=");
        console.log(operArray);
        if (numArray.length === operArray.length) {
            return;
        }
       // sum2();
       sR = false;
       totalNum();
        sumTotaled = true;
    } else {
        console.log("Error in addOperators()");
    }
    if (operArray.length >= 2) {
      //  totalNum();
    }
    checkOperators();
    numAdded = false;
    decimal = false;
    totalNum(); 
    console.log(operArray);
    
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