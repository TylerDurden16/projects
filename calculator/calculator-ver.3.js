let total = "";
const numArray = [];
const operArray = [];
let operUsed = false;
let number = 0;
let numAdded = false;
let sum = 0;
let decimal = false;
let sumTotaled = false;
let sumStr;
let currSum;
let numInput = document.getElementById("numInput");
let sR = false;
let pow = false;
let isNewSum = false;
let presentNum = false;
let roundedNum = 0;
let newSum = false;
let sameSum = false;
let square = false;

const erase = () => {
    numInput.textContent = 0;
    numInput.value = 0;
    total = "";
    sum = 0;
    sumTotaled = false;
    isNewSum = false;
    newSum = false;
    sameSum = false;
    pow = false;
    sR = false;
    square = false;
    decimal = false;
    presentNum = false;
    operUsed = false;
    numAdded = false;
    numArray.splice(0, numArray.length);
    operArray.splice(0, operArray.length);
}

const round = () => {
    if (sumStr.includes(".") && sumStr.length >= 16 || sumStr.length >= 17) {     
        if (sumStr.indexOf(".") <= 4) { 
            roundedNum = sum.toPrecision(9);
            numInput.textContent = roundedNum;
            pow = false;
            console.log("POP");
            return;
        } else if (sumStr.length >= 17) {
            //roundedNum = sum.toFixed(2);
            roundedNum = Number(roundedNum); 
          //  roundedNum = roundedNum.toPrecision(9);
           roundedNum = sum.toPrecision(9);
            numInput.textContent = roundedNum;
            pow = false;
            console.log("AEI");
            return;
        }     
        roundedNum = sum.toFixed(4);
        //number = Number(number); 
        roundedNum = roundedNum.toExponential();
        //number = Number(number);             
        console.log("POO");
        numInput.textContent = roundedNum;
        pow = false;
        return;
}
}

const power = () => {
    const powIndex = operArray.indexOf("pow");
   /* if (operArray.includes("-") || operArray.includes("+") && isNaN(numArray[powIndex + 1])) {
        if (operArray.indexOf("-") || operArray.indexOf("+") < powIndex && presentNum === false) {
           console.log("LOK");
           numInput.value = number;
           presentNum = true;
       }
   }*/
    if (isNaN(numArray[powIndex + 1])) return;
    sum = Math.pow(numArray[powIndex], numArray[powIndex + 1]);
    console.log(sum);
    sumStr = sum.toString();
  
    //if (isNewSum === true) {
        numInput.value = sum;
    //}
    numArray.splice(powIndex, 2, sum);
    operArray.splice(powIndex, 1);
    //console.log(operArray);
    const powStr = operArray.join("");
    if (powIndex !== 0) {
       if (powStr.includes("pow")) {
        if (powStr.includes("sR")) {
            if (powStr.indexOf("pow") > powStr.indexOf("sR")) {
                console.log("GRL");
                sqRt();
                return;
            } else {
                console.log("FZL");
                power();
            }
        } 
       } else if (powStr.includes("sR")) {
        if (powStr.includes("pow")) {
            if (powStr.indexOf("sR") > powStr.indexOf("pow")) {
                console.log("RLJ");
                power();
                return;
            } else {
                console.log("TMZ");
                sqRt();
            }
        } 
       } else if (operArray[0] === "*"  && !powStr.includes("pow") && !powStr.includes("sR") || operArray[0] === "+" && powStr.includes("*") 
       || operArray[0] === "-"  && powStr.includes("*")  && sR === false) { //ADJUSTMENT MADE
            if (powStr.includes("/")) {
                if (powStr.indexOf("*") > powStr.indexOf("/")) {
                    console.log("RRRR");
                   // isNewSum = false;
                    divide();
                    return;
                }
            } else {
            console.log("NNN");
           // isNewSum = false;
            multiply();
            }
        } else if (operArray[0] === "/" && !powStr.includes("pow") && !powStr.includes("sR") || operArray[0] === "+" && powStr.includes("/") && !powStr.includes("pow") && !powStr.includes("sR")
        || operArray[0] === "-"  && powStr.includes("/") && !powStr.includes("pow") && !powStr.includes("sR") && sR === false) {
            if (powStr.includes("*")) {
                if (powStr.indexOf("*") < powStr.indexOf("/")) {
                    console.log("ZZZZ");
                  //  isNewSum = false;
                    multiply();
                    return;
                }
            } else {
                console.log("NBA");
                //isNewSum = false;
                divide();
            }
        }
        else if (operArray[0] === "+" && !powStr.includes("*") && !powStr.includes("/") && !powStr.includes("pow") && !powStr.includes("sR") && sR === false) {
           console.log("III");
           presentNum = false;
           isNewSum = false;
            add();
        } else if (operArray[0] === "-" && !powStr.includes("*") && !powStr.includes("/") && !powStr.includes("pow") && !powStr.includes("sR") && sR === false) {
            console.log("FAT");
            isNewSum = false;
            presentNum = false;
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
      //  sum = sum.toFixed(4);
        sum = Number(sum); 
    }
    if (sumStr.length > 17) {
        //sum = sum.toPrecision(9);
        //sum = Number(sum); 
      }
      if (sum >= 10000000000000000n) {
      //  numInput.textContent = sum.toPrecision(9);
    }
  //  if (isNewSum === true) {
        numInput.value = sum;
   // }
    numArray.splice(sRIndex, 1, sum);
    operArray.splice(sRIndex, 1);
    const sRStr = operArray.join("");
    //console.log(numArray);
    //console.log(operArray);
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
                console.log("HRT");
                divide();
        }
        }
        else if (operArray[0] === "+" && !sRStr.includes("*") && !sRStr.includes("/") && !sRStr.includes("pow") && !sRStr.includes("sR") && sR === false) {
            console.log("DDT");
            isNewSum = false;
            presentNum = false;
            add();
        } else if (operArray[0] === "-" && !sRStr.includes("*") && !sRStr.includes("/") && !sRStr.includes("pow") && !sRStr.endsWith("sR") && sR === false) {
            console.log("HJK");
            isNewSum = false;
            presentNum = false;
            subtract();
        }
        return;
    }
}

const multiply = () => {
    const multIndex = operArray.indexOf("*");
    
    //console.log(numArray, operArray);
    if (operArray.includes("-") || operArray.includes("+") && isNaN(numArray[multIndex + 1]) && presentNum === false) {
        if (operArray.indexOf("-") || operArray.indexOf("+") < multIndex) {
            console.log("DEA");
            numInput.value = number;
            presentNum = true;
            sameSum = true;
        }
    }
    if (isNaN(numArray[multIndex + 1])) return;
    sum = numArray[multIndex] * numArray[multIndex + 1];
    sameSum = false;
    console.log(sum);
    sumStr = sum.toString();
    
    if (isNewSum === true) {
    numInput.value = sum;
}
//numInput.value = sum;
    numArray.splice(multIndex, 2, sum);
    operArray.splice(multIndex, 1);
    const mStr = operArray.join("");
    console.log(numArray);
    console.log(operArray);
    if (multIndex !== 0) {
            if (operArray[0] === "*" && !mStr.includes("pow") && !mStr.includes("sR") || operArray[0] === "+" && mStr.includes("*") && !mStr.includes("pow") && !mStr.includes("sR")
            || operArray[0] === "-"  && mStr.includes("*") && !mStr.includes("pow") && !mStr.includes("sR") && sR === false) {
                console.log("WER");
                multiply();
                //presentNum = false;
            } else if (operArray[0] === "/" && !mStr.includes("pow") && !mStr.includes("sR") || operArray[0] === "+" && mStr.includes("/") && !mStr.includes("pow") && !mStr.includes("sR")
            || operArray[0] === "-" && mStr.includes("/") && !mStr.includes("pow") && !mStr.includes("sR") && sR === false) {
                console.log("GFH");
                divide();
                //presentNum = false;
            } else if (operArray[0] === "+" && !mStr.includes("*") && !mStr.includes("/") && !mStr.includes("pow") && !mStr.includes("sR") && sR === false) {
                console.log("DUI");
                isNewSum = false;
                presentNum = false;
                console.log("presentNum");
                add();
        } else if (operArray[0] === "-" && !mStr.includes("*") && !mStr.includes("/") && !mStr.includes("pow") && !mStr.includes("sR") && sR === false) {
            console.log("LOL");
            isNewSum = false;
            presentNum = false;
            console.log("presentNum");
            subtract();
        }
        return;
    }
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
    } else if (operArray.includes("-") || operArray.includes("+") && isNaN(numArray[divIndex + 1]) && presentNum === false) {
         if (operArray.indexOf("-") || operArray.indexOf("+") < divIndex) {
            console.log("GMO");
            numInput.value = number;
            presentNum = true;
            sameSum = true;
            //isNewSum === false ? isNewSum = true : isNewSum =false;
        }
    }
    if (isNaN(numArray[divIndex + 1])) return;
    sum = numArray[divIndex] / numArray[divIndex + 1];
    sameSum = false;
    console.log(sum);
    sumStr = sum.toString();
    if (sumStr.includes(".") && sumStr.length >= 17) {
     //   sum = sum.toFixed(4);
        //sum = Number(sum); 
    }
    if (sumStr.length > 17) {
        //sum = sum.toPrecision(9);
        //sum = Number(sum); 
      }
      if (sum >= 10000000000000000n) {
       // numInput.textContent = sum.toPrecision(9);
    }
    if (isNewSum === true) {
        numInput.value = sum;
    }
   // numInput.value = sum;
    //console.log(numArray, operArray);
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
                    console.log("LKJ");
                   // presentNum = false;
                    //console.log("presentNum");
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
                    console.log("ZZT");
                    //presentNum = false;
                   // console.log("presentNum");
                    divide();
                //}
            } else if (operArray[0] === "+" && !dStr.includes("*") && !dStr.includes("/") && !dStr.includes("pow") && !dStr.includes("sR" && sR === false)) {
                console.log("ASD");
                isNewSum = false;
                presentNum = false;
                console.log("presentNum");
                add();
        } else if (operArray[0] === "-" && !dStr.includes("*") && !dStr.includes("/") && !dStr.includes("pow") && !dStr.includes("sR") && sR === false) {
            console.log("JIK");
            isNewSum = false;
            presentNum = false;
            console.log("presentNum");
            subtract();
        }
        return;
    }
   // console.log(numArray, operArray);
}
const subtract = () => {
    const subIndex = operArray.indexOf("-");
    if (isNaN(numArray[subIndex + 1])) return;
    sum = numArray[subIndex] - numArray[subIndex + 1];
    console.log(sum);
    sumStr = sum.toString();
    if (sumStr.includes(".") && sumStr.length >= 17) {
       // sum = sum.toFixed(4);
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
    numInput.value = sum;
    
    numArray.splice(subIndex, 2, sum);
    operArray.splice(subIndex, 1);
   // console.log(numArray, operArray);
   return sum;
}
const add = () => {
    const addIndex = operArray.indexOf("+");
    if (isNaN(numArray[addIndex + 1])) return;
    sum = numArray[addIndex] + numArray[addIndex + 1];
    console.log(sum);
    sumStr = sum.toString();
    if (sumStr.includes(".") && sumStr.length >= 17) {
       // sum = sum.toFixed(4);
        //sum = Number(sum); 
    }
    if (sumStr.length > 17) {
        console.log("H");
        //sum = sum.toPrecision(9);
       // sum = Number(sum); 
      }
      if (sum >= 10000000000000000n) {
      //  numInput.textContent = sum.toPrecision(9);
    }
    numInput.value = sum;
    
    numArray.splice(addIndex, 2, sum);
    operArray.splice(addIndex, 1);
   // console.log(numArray, operArray);
    return sum;
}
const sum2 = () => {
    //numInput.textContent = sum;
    //if ()
    
    operUsed = false;
    return sum;
}

const totalNum = () => {
    console.log(numArray);
    console.log(operArray);
    const operStr = operArray.join("");
    if(operArray.includes('sR')) {
        square = true;
        console.log("SQR");
    }
     if (numArray.length >= 2 || operArray[0] === "sR") {
        
       // console.log(operArray);

       if (operArray[0] === "pow") {
          // isNewSum = true;
          console.log("LOP");
           power();
       } else if (operArray[0] === "sR") {
          // isNewSum = true;
          console.log("GOR");
           sqRt();
       }
        else if (operStr[0] === "*") {
            if (operStr.includes("pow") && numArray.length >= 3) {
                console.log("RED");
                isNewSum = true;
                power();
            } else if (operStr.includes("sR") && numArray.length >= 2) {
                console.log("BAD");
                isNewSum = true;
                sqRt();
            } else if (operArray[1] !== "pow" && operArray[1] !== "sR") {
                console.log("MUL");
                isNewSum = true;
                multiply();
            }
        } else if (operStr[0] === "/") {
            if (operStr.includes("pow") && numArray.length >= 3) {
                console.log("CAD");
                isNewSum = true;
                power();
            } else if (operStr.includes("sR") && numArray.length >= 2) {
                console.log("CBD");
                isNewSum = true;
                sqRt();
            } else if (operArray[1] !== "pow" && operArray[1] !== "sR") {
                console.log("DIV");
                isNewSum = true;
                divide();
            } 
        } else if (operArray[0] === "+") {
            if (operStr.includes("pow") && numArray.length >= 3) {
                console.log("BBB");
                isNewSum = true;
                power();
            } else if (operStr.includes("sR") && numArray.length >= 2) {
                console.log("ANT");
                isNewSum = true;
                sqRt();
            } else if (operStr.includes("*", 1)) {
                if (operStr.includes("/", 1)) {
                    if (operStr.indexOf("*") > operStr.indexOf("/")) {
                        console.log("TRY");
                        isNewSum = true;
                        divide();
                    } else if (operStr.indexOf("/") > operStr.indexOf("*")) {
                        console.log("LIK");
                        isNewSum = true;
                        multiply();                     
                    }
                } else if (!operStr.includes("/", 1)) {
                console.log("YYYYYY");
                isNewSum = true;
                multiply();
                }
            } else if (operStr.includes("/", 1)) {
                console.log("hhh");
                isNewSum = true;
                divide();
            } else if (operArray[1] !== "*" && operArray[1] !== "/" && operArray[1] !== "pow" 
            && operArray[1] !== "sR") {
                console.log("WWWWWWWW");
                isNewSum = false;
                console.log("presentNum")
                add();
            }
        } else if (operArray[0] === "-") {
            if (operStr.includes("pow") && numArray.length >= 3) {
                console.log("FLO");
                isNewSum = true;
                power();
            } else if (operStr.includes("sR") && numArray.length >= 2) {
                console.log("VPN");
                isNewSum = true;
                sqRt();
            } else if (operStr.includes("*")) {
                if (operStr.includes("/", 1)) {
                    if (operStr.indexOf("*") > operStr.indexOf("/")) {
                        console.log("ZIP");
                        isNewSum = true;
                        divide();
                    } else if (operStr.indexOf("/") > operStr.indexOf("*")) {
                        console.log("KRS");
                        isNewSum = true;
                        multiply();
                    }
                } else if (!operStr.includes("/", 1)) {
                console.log("CAT");
                isNewSum = true;
                multiply();
                }
            } else if (operStr.includes("/")) {
                console.log("SEW");
                isNewSum = true;
                divide();
            } else if (operArray[1] !== "*" && operArray[1] !== "/" && operArray[1] !== "pow" 
            && operArray[1] !== "sR") {
                console.log("PPP");
                isNewSum = false;
                subtract();
            }
        } else {
            console.log("Error in totalNum()");
        } 
        
        
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
    console.log(numArray);
    console.log(operArray);
    sumStr = sum.toString();
    operUsed = false;
   
    if (newSum === false  && square === false || pow === true && square === false) {
        console.log("OPP");
        numInput.textContent = number;
        newSum = true;
        pow = false;
        return;
    } 
    console.log(numInput.value);
    console.log(isNewSum);  
    console.log(sameSum);
    console.log(square);
    if (square === true) {
        if (sumStr.includes(".") && sumStr.length >= 16 || sumStr.length >= 17) {      
           console.log("RRL");
            round();    
        } else {
            numInput.textContent = sum;
        }
        return;
    }

    if (numInput.value === number && isNewSum === false || numInput.value === number && sameSum === true ) {
        if (square === true) {
            if (sumStr.includes(".") && sumStr.length >= 16 || sumStr.length >= 17) {      
               console.log("STI");
                round();
            } else {
                console.log("POG");
                numInput.textContent = sum;
            }  
            console.log("BGF");
            square = false;
            return;
        } if(isNewSum === false || sameSum === true) {
        console.log("MIA");
        numInput.textContent = number;
        sameSum = false;
        pow = false;
        return;
    } console.log("LJB");
    } 
     pow = false;
     
     if (sumStr.includes(".") && sumStr.length >= 16 || sumStr.length >= 17) {   
        console.log("TRD")
        round();
        return;
     }
        //console.log(sum);
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
        total = total.slice(0,total.length -1);
         console.log(total);
        return;
    } 
     numInput.textContent = total;
     numAdded = true; 
     operUsed = false;
}

const checkOperators = () => {
    if (operUsed === true && numAdded === false && operArray.length === 1 && sumTotaled === false && numArray.length === 0) {
        operArray[0] = operArray[1];
        operArray.pop();
        console.log(operArray);
        return;
    } else if (operUsed === true && numAdded === false && operArray.length
        !== numArray.length) {
        operArray[operArray.length - 2] = operArray[operArray.length - 1];
        operArray.pop();
        console.log(operArray);
        return;
    }
}

const backSpace = () => {
    if (!total) {
        total = 0;
        numInput.textContent = 0;
        newSum = false;
        return;
    } else {
        total = total.slice(0, total.length -1);
        if (!total.includes(".")) {
            decimal = false;
        }
        if (total === 0 || !total) {
        total = 0;
        newSum = false
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
        number = total;
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
       sR = false;
       totalNum();
        sumTotaled = true;
    } else {
        console.log("Error in addOperators()");
    }
   
    //checkOperators();
    numAdded = false;
    decimal = false;
    
    if (operUsed === true && numAdded === false && operArray.length === 1 && sumTotaled === false && numArray.length === 0) {
        operArray[0] = operArray[1];
        operArray.pop();
        console.log(operArray);
        return;
    } else if (operUsed === true && numAdded === false && operArray.length
        !== numArray.length) {
        operArray[operArray.length - 2] = operArray[operArray.length - 1];
        operArray.pop();
        console.log(operArray);
        return;
    }

    console.log(operArray);
    totalNum(); 
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