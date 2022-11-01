import lnk from "./eating.jpg";

 const createHomepage = () => {
const mnCard = document.querySelector(".main-card");

const mnHeader = document.querySelector(".main-head");
mnHeader.textContent = "JustinSaine Food";
const eatingImg = document.createElement("img");
eatingImg.classList = "eating";
eatingImg.setAttribute("alt", "people eating");
eatingImg.src = lnk;
mnCard.appendChild(eatingImg);
const storyCard = document.createElement("div");
storyCard.classList = "story-card card";
mnCard.appendChild(storyCard);
const storyHead = document.createElement("h2");
storyHead.classList = "story-head";
storyHead.textContent = "Story";
storyCard.appendChild(storyHead);
const storyP = document.createElement("p");
storyP.classList = "story-p";
storyP.textContent = "Our story begins with 3 friends who grew tired of eating the same dull,run-of-the-mill food that was served in Las Vegas. They got together and opened JustinSaine Foods; a restaurant that only serves the newest and wildest food."
storyCard.appendChild(storyP);

const hrsCard = document.createElement("div");
hrsCard.classList = "hours-card card";
mnCard.appendChild(hrsCard);
const hrsHead = document.createElement("h2");
hrsHead.classList = "hours-head";
hrsHead.textContent = "Hours";
hrsCard.appendChild(hrsHead);
for (let i = 0; i <= 2; i++) {
    const hoursP = document.createElement("p");
    hoursP.classList = "hours-p";
    if (i === 0) hoursP.textContent = "Mon-Fri: 7am-12am";
    else if (i === 1) hoursP.textContent = "Sat: 8am-2am";
    else if (i === 2) hoursP.textContent = "Sun: 9am-10pm";
    hrsCard.appendChild(hoursP);
}

const locCard = document.createElement("div");
locCard.classList = "loc-card card";
mnCard.appendChild(locCard);
const locHead = document.createElement("h2");
locHead.classList = "loc-head";
locHead.textContent = "Location";
locCard.appendChild(locHead);
const locP = document.createElement("p");
locCard.appendChild(locP);
locP.classList = "loc-p";
locP.textContent = "555 S. Fake rd.\r\n Las Vegas, NV 89109";
}
const pgSrt = () => {
    const conDiv = document.querySelector("#content");

const pgLnks = document.createElement("div");
pgLnks.classList = "page-links";
for (let i = 0; i <= 2; i++) {
   const button = document.createElement("button");
   if (i === 0) {
    button.id = "home";
    button.textContent = "Home";
   } else if (i === 1) {
    button.id = "menu";
    button.textContent = "Menu";
   } else if (i === 2) {
    button.id = "contact";
    button.textContent = "Contact";
   }
   pgLnks.appendChild(button);
}

pgLnks.children[0].textContent = "Home";
pgLnks.children[1].textContent = "Menu";
pgLnks.children[2].textContent = "Contact";
conDiv.appendChild(pgLnks);

const bgDiv = document.createElement("div");
bgDiv.classList = "background";

conDiv.appendChild(bgDiv);
const mnCard = document.createElement("div");
mnCard.classList = "main-card";
bgDiv.appendChild(mnCard);
const headCon = document.createElement("div");
headCon.classList = "head-con";
const mnHeader  = document.createElement("h1");
mnHeader.classList = "main-head";
headCon.appendChild(mnHeader);
mnCard.appendChild(headCon);
}
export {pgSrt, createHomepage}