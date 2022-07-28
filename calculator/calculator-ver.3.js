let total = "";
const numArray = [];
const operArray = [];
let operUsed = false;
let number = 0;
let numAdded = false;
let sum = 0;
let decimal = false;
let sumTotaled = false;
let sumStr = sum.toString();
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
let sqSum = 0;
let incompNum = false;
let sqSumOn = false;
let sqOper = false;
let sqr = false;
let powTot = false;
let powSum = 0;
let sqStr = sqSum.toString();
let powStr = powSum.toString();
let dec = false;
let clickDec = false;
let click = false;
let button = false;

const erase = () => {
    numInput.textContent = 0;
    powSum = 0;
    sqSum = 0;
    numInput.value = 0;
    total = "";
    sum = 0;
    sumTotaled = false;
    powTot = false;
    sqSumOn = false;
    incompNum = false;
    isNewSum = false;
    newSum = false;
    sameSum = false;
    pow = false;
    sR = false;
    sqr = false;
    square = false;
    decimal = false;
    presentNum = false;
    operUsed = false;
    numAdded = false;
    numArray.splice(0, numArray.length);
    operArray.splice(0, operArray.length);
}

/*const round = () => {
    if (sumStr.includes(".") && sumStr.length >= 16 || sumStr.length >= 17) {     
        if (sumStr.indexOf(".") <= 4) { 
            roundedNum = sum.toPrecision(9);
            numInput.textContent = roundedNum;
            
            if (sqSumOn || square || numInput.value === sqSum) {
                roundedNum = sqSum.toPrecision(9);
                numInput.textContent = roundedNum;
                //sqOper = false;
                sqSumOn = false;
                square = false;
                console.log("QEE");
            }
            console.log("POP");
            return;
        } else if (sumStr.length >= 17) {
            //roundedNum = sum.toFixed(2);
            roundedNum = Number(roundedNum); 
          //  roundedNum = roundedNum.toPrecision(9);
           roundedNum = sum.toPrecision(9);
            numInput.textContent = roundedNum;
          //  pow = false;
            if (sqSumOn || square) {
                roundedNum = sqSum.toPrecision(9);
                numInput.textContent = roundedNum;
                sqSumOn = false;
                square = false;
               // sqOper = false;
            }
            console.log("AEI");
            return;
        }     
        roundedNum = sum.toFixed(4);
        //number = Number(number); 
        roundedNum = roundedNum.toExponential();
        //number = Number(number);             
        console.log("POO");
        numInput.textContent = roundedNum;
       // pow = false;
        return;
}
}*/

const round = () => {
    if (sumStr.includes(".") && sumStr.length >= 17) {     
        if (sumStr.indexOf(".") <= 4 || sumStr.length >= 17) { 
            roundedNum = sum.toPrecision(9);
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
} else if (sqSum.includes(".") && sqSum.length >= 17) {
    if (sqSum.indexOf(".") <= 4 || sqSum.length >= 17) { 
     roundedNum = sqSum.toPrecision(9);
     numInput.textContent = roundedNum;
     //sqOper = false;
     sqSumOn = false;
     square = false;
     console.log("QEE");
 }
    roundedNum = sum.toFixed(4);
    number = Number(roundedNum); 
    roundedNum = roundedNum.toExponential();       
    console.log("DUM");
    numInput.textContent = roundedNum;
    return;
 } else if (powStr.includes(".") && powStr.length >= 17) {
    if (powStr.indexOf(".") <= 4 || powStr.length >= 17) { 
     roundedNum = powSum.toPrecision(9);
     numInput.textContent = roundedNum;
     //sqOper = false;
     sqSumOn = false;
     square = false;
     console.log("QEE");
 }
  roundedNum = sum.toFixed(4);
  number = Number(roundedNum); 
  roundedNum = roundedNum.toExponential();       
  console.log("DOO");
  numInput.textContent = roundedNum;
return;
}
console.log("DXV");
}
const power = () => {
    const powIndex = operArray.indexOf("pow");
   /* if (operArray.includes("-") || operArray.includes("+") && isNaN(numArray[powIndex + 1])) {
        if (operArray.indexOf("-") || operArray.indexOf("+") < powIndex && presentNum === false) {
           console.log("LOK");
           numInput.value = number;
           presentNum = true;
       }
   }*///sqr = false;
    if (isNaN(numArray[powIndex + 1])) {
        incompNum = true;
        powTot = false;
        return;
    }
    sum = Math.pow(numArray[powIndex], numArray[powIndex + 1]);
    powSum = sum;
    sqr = false;
    powTot = true;
    console.log(sum);
   // sumStr = sum.toString();
    incompNum = false;
    //if (isNewSum === true) {
        numInput.value = powSum;
    //}
    numArray.splice(powIndex, 2, sum);
    operArray.splice(powIndex, 1);
    console.log(operArray);
    const powStr = operArray.join("");
    if (powIndex >= 0) {
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
       || operArray[0] === "-"  && powStr.includes("*")  && sR === false) { 
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
    //powTot = false;
    console.log(sum);
    sqSum = sum;
    //sumStr = sum.toString();
    sqr = true;
    pow = false;
  
    numInput.value = sqSum;

    numArray.splice(sRIndex, 1, sum);
    operArray.splice(sRIndex, 1);
    const sRStr = operArray.join("");
    //console.log(numArray);
    console.log(operArray);
    if (sRIndex >= 0) {
        if (operArray[0] === "*" && !sRStr.includes("pow") && !sRStr.includes("sR") || operArray[0] === "+" && sRStr.includes("*") && !sRStr.includes("pow") && !sRStr.includes("sR")
        || operArray[0] === "-"  && sRStr.includes("*") && !sRStr.includes("pow") && !sRStr.includes("sR") && sR === false) {
            if (sRStr.includes("/")) {
                if (sRStr.indexOf("*") > sRStr.indexOf("/")) {
                    console.log("CCCCC");
                    sqSumOn = true;
                    sqr = true;
                    divide();
                    return;
                }
            } else {
                console.log("KILL");
                sqSumOn = true;
                sqr = true;
                multiply();
                return;
            }
        } else if (operArray[0] === "/" && !sRStr.includes("pow") && !sRStr.includes("sR") || operArray[0] === "+" && sRStr.includes("/") && !sRStr.includes("pow") && !sRStr.includes("sR")
        || operArray[0] === "-" && sRStr.includes("/") && !sRStr.includes("pow") && !sRStr.includes("sR") && sR === false) {
            if (sRStr.includes("*")) {
                if (sRStr.indexOf("*") < sRStr.indexOf("/")) {
                    console.log("ZZZZ");
                    sqSumOn = true;
                    sqr = true;
                    multiply();
                    return;
                }
            } else {
                console.log("HRT");
                sqSumOn = true;
                sqr = true;
                divide();
                return;
        }
        }
        else if (operArray[0] === "+" && !sRStr.includes("*") && !sRStr.includes("/") && !sRStr.includes("pow") && !sRStr.includes("sR") && sR === false) {
            console.log("DDT");
            isNewSum = false;
            presentNum = false;
            sqSumOn = true;
            sqr = true;
            add();
            return;
        } else if (operArray[0] === "-" && !sRStr.includes("*") && !sRStr.includes("/") && !sRStr.includes("pow") && !sRStr.endsWith("sR") && sR === false) {
            console.log("HJK");
            isNewSum = false;
            presentNum = false;
            sqSumOn = true;
            sqr = true;
            subtract();
            return;
        }
        return;
    }
}

const multiply = () => {
    const multIndex = operArray.indexOf("*");
    //sqr = false;
    //console.log(numArray, operArray);
    if (operArray.includes("-") || operArray.includes("+") && isNaN(numArray[multIndex + 1]) && presentNum === false) {
        if (operArray.indexOf("-") || operArray.indexOf("+") < multIndex && !presentNum) {
            console.log("DEA");
            numInput.value = number;
            presentNum = true;
            sameSum = true;
            if (sqr) {
                console.log("DSA");
                numInput.value = sqSum;
                sqOper = false;
            } else if (pow) {
                console.log("HGX");
                numInput.value = powSum;
               // pow = false;
            }
        }
    }
   /* if (pow) {
        console.log("GTX");
        numInput.value = powSum;
       // pow = false;
    }*/
    pow = false;
    if (isNaN(numArray[multIndex + 1])) {
        incompNum = true;
        return;
    }
    sum = numArray[multIndex] * numArray[multIndex + 1];
    numInput.value = sum;
   if (sqr) numInput.value = sqSum;
    console.log(sqr);
   // pow = false;
    sameSum = false;
    incompNum = false;
    sqr = false;
    console.log(sum);
   // sumStr = sum.toString();
    
  //  if (isNewSum === true) {
    //numInput.value = sum;
//}
//numInput.value = sum;
    numArray.splice(multIndex, 2, sum);
    operArray.splice(multIndex, 1);
    const mStr = operArray.join("");
   // console.log(numArray);
   // console.log(operArray);
   // console.log(presentNum);
    if (multIndex >= 0) {
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
    //sqr = false;
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
            if (sqr) {
                console.log("DOA");
                numInput.value = sqSum;
                sqOper = false;
            } else if (pow) {
                console.log("CRP");
                numInput.value = powSum;
               // pow = false;
            }
        }
    }pow = false;
    if (isNaN(numArray[divIndex + 1])) {
        incompNum = true;
        return;
    }
    sum = numArray[divIndex] / numArray[divIndex + 1];
    numInput.value = sum;
    if(sqr) numInput.value = sqSum;
    
    sqr = false;
    sameSum = false;
    incompNum = false;
  //  pow = false;
    console.log(sum);
  //  sumStr = sum.toString();
    
    if (isNewSum === true) {
       // numInput.value = sum;
    }
    
    //numInput.value = sum;
    //console.log(numArray, operArray);
    numArray.splice(divIndex, 2, sum);
    operArray.splice(divIndex, 1);
    dStr = operArray.join("");
    if (divIndex >= 0) {
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
    pow = false;
    if (isNaN(numArray[subIndex + 1])) {
        console.log("AQS");
        incompNum = true;
        return;
    }
    sum = numArray[subIndex] - numArray[subIndex + 1];
    //pow = false;
    sqr = false;
    //pow = false;
    incompNum = false;
    console.log(sum);
    //sumStr = sum.toString();
    
    numInput.value = sum;
    
    numArray.splice(subIndex, 2, sum);
    operArray.splice(subIndex, 1);
   // console.log(numArray, operArray);
   return sum;
}
const add = () => {
    const addIndex = operArray.indexOf("+");
    pow = false;
    if (isNaN(numArray[addIndex + 1])) {
        console.log("DHL");
        incompNum = true;
        return;
    }
    sum = numArray[addIndex] + numArray[addIndex + 1];

    sqr = false;
    //pow = false;
    incompNum = false;
    console.log(sum);
   // sumStr = sum.toString();
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
     if (numArray.length >= 1 || operArray[0] === "sR") {
        
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
            } else if (operArray[1] !== "pow" && operArray[1] !== "sR" || operArray[0] === "*" && operArray.length === 1) {
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
            } else if (operArray[1] !== "pow" && operArray[1] !== "sR" || operArray[0] === "/" && operArray.length === 1) {
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
                sqOper = true;
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
            && operArray[1] !== "sR" ||operArray[0] === "+" && operArray.length === 1) {
                console.log("WWWWWWWW");
                isNewSum = false;
                presentNum = false;
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
                sqOper = true;
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
            && operArray[1] !== "sR" || operArray[0] === "-" && operArray.length === 1) {
                console.log("PPP");
                isNewSum = false;
                presentNum = false;
                subtract();
            }
        } else {
            console.log("Error in totalNum()");
        } 
        
        
    }
    
   const currOpArray = operArray.join(""); 
    if (currOpArray.includes("=")) {
        if (newSum === false && square === false && sum === 0 && operArray.length === 1  || pow === true && square === false) {
            console.log("BHO");
            numInput.textContent = number;
            return;
        }
        console.log(numArray);
        console.log(operArray);
        const equal = operArray.indexOf("=");
        if (incompNum === true) {
            operArray.splice(equal -1, 1);
            //sqSumOn = false;
            sumTotaled = true;
            totalNum();
            console.log("PEE");
            return;
        }
        operArray.splice(equal, 1);
        //sqSumOn = false;
        sumTotaled = true;
        totalNum();
        return;
    }


    console.log(numArray);
    console.log(operArray);
    sumStr = sum.toString();
    operUsed = false;
    console.log(incompNum);
   // console.log(presentNum);
    //console.log(presentNum);
    console.log(numInput.value);
    console.log(pow);
    //console.log(sameSum);
    //console.log(square);
    console.log(powTot);
    //console.log(sqSum);
    console.log(sqSumOn);
    //console.log(sqOper);
    //let sqStr = sqSum.toString();
    //let sqSumStr = sqSum.toString();
    console.log(sqSum);
    console.log(sqr);
    if (newSum === false && square === false && sqr === false && numInput.value !== sum && numInput.value !== sqSum ||!square && !sqr && pow === true) {
        console.log("OPP");
        numInput.textContent = number;
        /*if (pow && powTot) {
            numInput.textContent = sum;
            powTot = false;
        }*/
        newSum = true;
       // pow = false;
        return;
    } 

    if (numInput.value === sqSum && sqSum !== 0 || numInput.value === powSum && powTot && pow) {
        if (sqStr.includes(".") && sqStr.length >= 16 || powStr.includes(".") && powStr.length >= 17) {      
           console.log("RRL");
            round(); 
            //square = false;
        } else if (numInput.value === sqSum && !pow) {
            console.log("SFV");
            numInput.textContent = sqSum;
            sqSumOn = false;
            square = false;
           // sqOper = false;
        } else if (numInput.value === powSum) {
            numInput.textContent = powSum;
            console.log("PEZ");
        } console.log("LPI");
        return;
    }

    if (numInput.value === number && sameSum === true) {//numInput.value === number && isNewSum === false && sameSum === true|| numInput.value === number && isNewSum === true && sameSum === true
        if (square || numInput.value === sqSum) {
            if (sqStr.includes(".") && sqStr.length >= 16 || powStr.includes(".") && powStr.length >= 17) {      
               console.log("STI");
                round();
                return;
            } else if (numInput.value === sqSum){
                console.log("POG");
                numInput.textContent = sqSum;
                sqSumOn = false;
                square = false;
                return;
            } else if (numInput.value === powSum) {
                console.log("BMF");
                numInput.textContent = powSum;
                return;
            } 
            console.log("BGF");
            //sqSumOn = false;
            //square = false;
            return;
        } if (sameSum === true) {
        console.log("MIA");
        numInput.textContent = number;
        sameSum = false;
       // pow = false;
       // pow = false;
        return;
    } console.log("LJB");
    } 
    pow = false;
     if (sumStr.includes(".") && sumStr.length >= 16 || sumStr.length >= 17) {   
        console.log("TRD")
        round();
        return;
     }
     console.log("KIP");
        //console.log(sum);
    numInput.textContent = sum;
    sqSumOn = false;
    console.log(sqSumOn);
    console.log(numArray);
    return sum;
}

const addValues = e => { 
  //  console.log(e.target.value, e.key);
   /* if (e.target.value === "BackSpace") {
        e.target.value = "";
        console.log("REN");
        console.log(total);
        } if (e.key === "BackSpace") {
            e.key = "";
            console.log("FYI");
        } if (e.key) e.target.value = "";
        if (e.target.value) e.key = "";*/
        total += e.target.value || e.key;
    console.log(total);
    if (total.startsWith("0")) {
        total = total.slice(0,0);
        console.log("DDT");
        total += e.target.value || e.key;
        console.log(total);
    } else if (total.length > 17) {
        total = total.slice(0,total.length -1);
        console.log(total);
        return;
    } else if (total === "") return;
     numInput.textContent = total;
     console.log(e.target.value, e.key);
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
        === numArray.length) {
        operArray[operArray.length - 2] = operArray[operArray.length - 1];
        operArray.pop();
        console.log(operArray);
        return;
    }
}

const backSpace = () => {
 // total = e.key || e.target.value;
  
    if (!total) {
        total = 0;
        numInput.textContent = 0;
        console.log("LPB");
        newSum = false;
        return;
    } else {
      /*  if (total.includes(".")) {
            decimal = true;
            console.log("BFF");
        }*/
       // if (total !== 0) {
        total = total.slice(0, total.length -1);
        //console.log("KZE");
       // console.log(total);
  //  }
      if (!total.includes(".")) {
          //  console.log(decimal);
          //  console.log("BVC");
            decimal = false;
            clickDec = true;
        }
        if (total === 0 || !total) {
        total = 0;
        newSum = false;
        numInput.textContent = 0;
        //console.log(total);
       // console.log("MMN");
       // return;
        }
   //console.log("BNV");
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
        operArray.push("=");
       // console.log(operArray);
        operUsed = true;
        if (numArray.length === operArray.length) {
            //return;
        }
       sR = false;
      // totalNum();
        //sumTotaled = true;
    } else {
        console.log("Error in addOperators()");
    }
   
    //checkOperators();
    totOpArray = operArray.join("");
    
    if (operUsed === true && numAdded === false && operArray.length === 1 && sumTotaled === false && numArray.length === 0) {
        operArray[0] = operArray[1]; 
        if (totOpArray.startsWith("=")) {
            operArray.splice(0, 1);
            console.log("LBJ");
            return;
        }
        operArray.pop();
        console.log(operArray);
        console.log("RUN");
        return;
    } else if (operUsed === true && numAdded === false && !totOpArray.includes("=") && operArray.length
        > numArray.length) {
        operArray[operArray.length - 2] = operArray[operArray.length - 1];
        operArray.pop();
        console.log(operArray);
        console.log("JOG");
        return;
    }
    numAdded = false;
    decimal = false;
   // console.log(operArray);
    totalNum(); 
}

const keyInput = e => {
    let key = e.key;
    console.log(key);

    //console.log(button);
    //console.log(click);
   /* if (key && clickNum && click && !button) {
        //key = "";
    console.log("SMX");
    console.log(key);
    console.log(e.target.value);
}
    else if (key && clickNum && !click && button) {
        e.target.value = "";
        console.log("MEX");
    console.log(key);
    console.log(e.target.value);
    }*/
    
    //console.log(clickNum.value);
    //console.log(key);
    //console.log(decimal);
    
   if (key === "Backspace") {
    //console.log("PYI");
    backSpace();
   return;
} else if (key === "0" || key === "1" || key === "2" || key === "3" || key === "4"
   || key === "5" || key === "6" || key === "7" || key === "8" || key === "9" || key === ".") { 
    
    if (key === "." && decimal) {
       // decimal = false;
       console.log("FAD");
        return;
        //dec = true;
    } else if (key === "." && !decimal) {
        decimal = true;
       // console.log("GHQ");
    } 
   // console.log(e.key);
   // console.log(e.target.value);
    
    addValues(e);
   } else if (key !== "0" || key !== "1" || key !== "2" || key !== "3" || key !== "4"
   || key !== "5" || key !== "6" || key !== "7" || key !== "8" || key !== "9" || key !== ".") return;
 if (key === "+" || key === "-" || key === "*" || key === "/" || key === "=" || key === "Enter") {
       addOperators(e);
 } else {
       return;
   }
}


/*const keyInput = e => {
    let key = e.key;
    console.log(key);
    //let clickNum = e.target.value;
    console.log(e.target.value);
    //console.log(button);
    //console.log(click);
   /* if (key && clickNum && click && !button) {
        //key = "";
    console.log("SMX");
    console.log(key);
    console.log(e.target.value);
}
    else if (key && clickNum && !click && button) {
        e.target.value = "";
        console.log("MEX");
    console.log(key);
    console.log(e.target.value);
    }*/
   /* if (key) {
        e.target.value = "";
       // console.log("DZX");
       button = true;
       click = false;
        console.log(e.target.value);
       console.log(key);
    } else if (clickNum) {
       e.key = "";
        click = true;
        button = false;
        //key = "";
       
    }
    //console.log(clickNum.value);
    //console.log(key);
    //console.log(decimal);
    
   if (key === "Backspace" || clickNum === "BackSpace") {
    //console.log("PYI");
    backSpace(e);
   return;
} else if (key === "0" || clickNum === "0" || key === "1" || clickNum === "1" || key === "2" || clickNum === "2" || clickNum === "3" || key === "3" || clickNum === "4" || key === "4"
   || key === "5" || clickNum === "5" || key === "6" || clickNum === "6" || key === "7" || clickNum === "7" || key === "8" || clickNum === "8" || key === "9" || clickNum === "9" || key === "." || clickNum === ".") { 
    
    if (key === "." && decimal || clickNum === "." && decimal) {
       // decimal = false;
       console.log("FAD");
        return;
        //dec = true;
    } else if (key === "." && !decimal || clickNum === "." && !decimal) {
        decimal = true;
       // console.log("GHQ");
    } 
   // console.log(e.key);
   // console.log(e.target.value);
    if (e.key === "" && e.target.value === "") {
        console.log("ASO"); 
       // addValues(e);
     //   return;
        }
    addValues(e);
   } else if (key !== "0" || clickNum !== "0" || key !== "1" || clickNum !== "1" || key !== "2" || clickNum !== "2" || clickNum !== "3" || key !== "3" || clickNum !== "4" || key !== "4"
   || key !== "5" || clickNum !== "5" || key !== "6" || clickNum !== "6" || key !== "7" || clickNum !== "7" || key !== "8" || clickNum !== "8" || key !== "9" || clickNum !== "9" || key !== "." || clickNum !== ".") return;
 if (key === "+" || key === "-" || key === "*" || key === "/" || key === "=" || key === "Enter") {
       addOperators(e);
 } 
    else {
       return;
   }
}*/

const clickInput = e => {
    console.log(e.target.value);
    let clickNum = e.target.value;
  //  console.log(clickNum);
    if (clickNum === "BackSpace") {
        backSpace();
        e.target.value = "";
        return;
    } else if (clickNum === "0" || clickNum === "1" || clickNum === "2" || clickNum === "3" || clickNum === "4" || clickNum === "5" || clickNum === "6" || clickNum === "7" || clickNum === "8" || clickNum === "9" || clickNum === ".") { 
     
     if (clickNum === "." && decimal) {
        // decimal = false;
        console.log("PMB");
         return;
         //dec = true;
     } else if (clickNum === "." && !decimal) {
         decimal = true;
        // console.log("GHQ");
     } 
    // console.log(e.key);
    // console.log(e.target.value);
     addValues(e);
    // e.target.value = "";
    } else {
        return;
    }
}

const numBtn = document.querySelectorAll(".numBtn");
const clrBtn = document.getElementById("clrBtn");
const operBtn = document.querySelectorAll(".operBtn");
const bckSpace = document.getElementById("BackSpace");
//const calculator = document.querySelectorAll(".numbers");
window.addEventListener("keydown", keyInput);
//numBtn.forEach(numbers => numbers.addEventListener("click", keyInput));
numBtn.forEach(numbers => numbers.addEventListener("click", clickInput));
operBtn.forEach(operators => operators.addEventListener("click", addOperators));
clrBtn.addEventListener("click", erase);

//bckSpace.addEventListener("click", backSpace);
bckSpace.addEventListener("click", clickInput);

