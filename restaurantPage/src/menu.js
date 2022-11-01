let breakArr = [];
let burgerArr = [];
let sidesArr = [];
let desrtArr = [];
let bevArr = [];




const menuItem = (fdHead, img, fdP, pr) => {
    const foodHead = fdHead;
    const imgName =  img[0];
    const imgAlt = img[1];
    const foodP = fdP;
    const price = pr; 
    return {foodHead, imgName, imgAlt, foodP, price} 
}
const addFdToArr = () => {
    breakArr = [];
    burgerArr = [];
    sidesArr = [];
    desrtArr = [];
    bevArr = [];
const baconEggs = menuItem("Bacon and Eggs", ["bacon and eggs", "bacon and eggs"], "Eggs (done your way) and four bacon strips. Served with toast.", "$13.50");
breakArr.push(baconEggs);
//breakArr[0] = baconEggs;
const frenchToast = menuItem("French Toast", ["french toast", "french toast with powdered sugar on top"], "Two slices of thick, buttery french toast with powdered sugar on top.", "$9");
breakArr.push(frenchToast);
//breakArr[1] = frenchToast;
const strBrryFT = menuItem("Strawberry French Toast", ["strawberry french toast", "french toast with strawberries, whipped cream, and powdered sugar"], "Two slices of french toast, fresh strawberries, and whipped cream with powdered sugar on top.",
 "$10.25");
 breakArr.push(strBrryFT);
 //breakArr[2] = strBrryFT
 const pancakes = menuItem("Pancakes", ["pancakes", "pancakes"], "Three buttermilk pancakes.", "$8.50");
 breakArr.push(pancakes);
 //breakArr[3] = pancakes;
 const frtyPan = menuItem("Fruity Pancakes", ["fruity pancakes", "pancakes with fruit"], "Three buttermilk pancakes with banana slices, strawberries, and rasberries on top.", "$11");
 breakArr.push(frtyPan);
 //breakArr[4] = frtyPan;
 const panCombo = menuItem("Pancake Combo", ["pancake combo", "pancakes with eggs and bacon"], "Three buttermilk pancakes, eggs (done your way), and bacon or sausage links.", "$12.75");
 breakArr.push(panCombo);
//breakArr[5] = panCombo;

const chseBurger = menuItem("Cheeseburger", ["cheeseburger", "cheeseburger"], "1/4lb. all-beef patty, lettuce, tomato, onions, pickles, and cheese.", "$4.50");
burgerArr.push(chseBurger);

const calBurger = menuItem("California Burger", ["cali burger", "California burger"], "Two all-beef patties, lettuce, tomato, onions, pickles, cheese, and 1000 island dressing.", "$8.25");
burgerArr.push(calBurger);
const dbBcChseBurger = menuItem("Double Bacon Cheeseburger", ["double bacon cheeseburger", "double bacon cheeseburger"], "Two 1/4lb. all-beef patties, four slices of bacon, lettuce, tomato, onions, pickles, and cheese.", "$10.75");
burgerArr.push(dbBcChseBurger);
const dnutBurger = menuItem("Donut Burger", ["donut burger", "donut burger"], "Three 1/4lb. all-beef patties, two slices of bacon, and cheese between a sugar donut.", "$13.75");
burgerArr.push(dnutBurger);
const bLT = menuItem("BLT", ["blt", "bacon, lettuce, and tomato sandwich"], "Bacon, lettuce, tomato, and mayo on white bread.", "$4");
burgerArr.push(bLT);
const hACSndwch = menuItem("Ham and Cheese Sandwich", ["ham sandwich", "ham and cheese sandwich"], "Honey ham and swiss cheese on toated white bread.", "$4.50");
burgerArr.push(hACSndwch);
const tkySndwch = menuItem("Turkey Sandwich", ["turkey sandwich", "turkey sandwich"], "Turkey, lettuce, tomato, mayo, and swiss cheese on toated white bread.", "$6");
burgerArr.push(tkySndwch);

const fries = menuItem("Fries", ["fries", "french fries"], "Sea-salted french fries.", "$3.50");
sidesArr.push(fries);
const onRngs = menuItem("Onion Rings", ["onion rings", "onion rings"], "Served with ranch dressing.", "$3.75");
sidesArr.push(onRngs);
const mozStks = menuItem("Mozzerella Sticks", ["mozzerella sticks", "mozzerella sticks"], "Served with marinara sauce.", "$5");
sidesArr.push(mozStks);
const mAC = menuItem("Mac and Cheese", ["mac and cheese", "macaroni and cheese"], "Macaroni covered in a three-cheese blend and special seasoning.", "$6.25");
const chips = menuItem("Potato Chips", ["chips", "potato chips"], "Freshly-made potato chips covered with our signature seasoning.", "$3");
sidesArr.push(chips);
const bacon = menuItem("Bacon", ["bacon", "slices of bacon"], "Three slices of thick, hickory-smoked bacon.", "$2.25");
sidesArr.push(bacon);
const crnbrdMffn = menuItem("Cornbread Muffin", ["cornbread", "cornbread muffin"], "Soft, buttery cornbead made from scratch.", "$1.15");
sidesArr.push(crnbrdMffn);

const brownie = menuItem("Brownie Sundae", ["brownie", "brownie with ice cream"], "Fudge brownie with nuts, chocolate sauce, and two scoops of vanilla ice cream on top.", "$9.75");
desrtArr.push(brownie);
const chCake = menuItem("Chocolate Cake", ["chocolate cake", "chocolate cake"], "Triple chocolate cake.", "$8.75");
desrtArr.push(chCake);
const pcnPie = menuItem("Pecan Pie", ["pecan pie", "pecan pie"], "Served with one scoop of vanilla ice cream.", "$10.50");
desrtArr.push(pcnPie);
const pmkPie = menuItem("Pumpkin Pie", ["pumpkin pie", "pumpkin pie"], "Served with one scoop of vanilla ice cream and whipped cream.", "$10.50");
desrtArr.push(pmkPie);
const cnmBun = menuItem("Cinnamon Bun", ["cinnamon bun", "cinnamon bun"], "Giant, buttery cinnamon bun covered in icing.", "$8.75");
desrtArr.push(cnmBun);
const iceCream = menuItem("Ice Cream Cone", ["ice cream cone", "ice cream cone"], "Giant scoop of vanilla or chocolate ice cream in a sugar cone.", "$4.25");
desrtArr.push(iceCream);

const soda = menuItem("Soda", ["soda", "soda"], "Coke, Diet Coke, Sprite, Fanta.", "$1.50");
bevArr.push(soda);
const oJ = menuItem("Orange Juice", ["orange juice", "orange juice"], "Freshly squeezed, No pulp orange juice.", "$1.75");
bevArr.push(oJ);
const milk = menuItem("Milk", ["milk", "milk"], "2% or fat-free.", "$1.50");
bevArr.push(milk);
const coffee = menuItem("Coffee", ["coffee", "coffee"], "Black or decaf.", "$0.75");
bevArr.push(coffee);
const hChoc = menuItem("Hot Chocolate", ["hot chocolate", "Hot chocolate with whipped cream and chocolate flakes on top."], "Hot chocolate with whipped cream and chocolate flakes on top.", "$3.50");
bevArr.push(hChoc);
}
const addItmsToPg = course => {

 
    const mnCard = document.querySelector(".main-card");
    for (let i = 0; i < course.length; i++) {
        const fdCard = document.createElement("div");
        fdCard.classList = "card food-card";
        const fdHead = document.createElement("h3");
        fdHead.classList = "food-head";
        fdHead.textContent = course[i].foodHead;
        fdCard.appendChild(fdHead);
        const fdPic = document.createElement("img");
        fdPic.classList = "food-pic";
        fdPic.src = `../src/pics/${course[i].imgName}.jpg`;
        fdPic.setAttribute("alt", `${course[i].imgAlt}`);
        fdCard.appendChild(fdPic);
        const fdP = document.createElement("p");
        fdP.classList = "food-p";
        fdP.textContent = course[i].foodP;
        fdCard.appendChild(fdP);
        const price = document.createElement("h4");
        price.classList = "price";
        price.textContent = course[i].price;
        fdCard.appendChild(price);
        mnCard.appendChild(fdCard);
    } 
} 


//console.log(breakfastArr[0]);
export {breakArr, burgerArr, sidesArr, bevArr, desrtArr, menuItem, addFdToArr, addItmsToPg}