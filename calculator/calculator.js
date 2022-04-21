let total = 0;

let numInput = document.getElementById("numInput");
const erase = e => {
    numInput.textContent = "";
}
/*const total = (...args) => {
    
}*/
const addValues = (e) => {
    numInput.textContent += e.target.value;
    console.log(typeof "*");
}

const numBtn = document.querySelectorAll(".numBtn");
const clrBtn = document.getElementById("clrBtn");

numBtn.forEach(numbers => numbers.addEventListener("click", addValues));
clrBtn.addEventListener("click", erase)