export const addCnToPg = () => {
    const mnHead = document.querySelector(".main-head");
    mnHead.textContent = "Contact";
    const mnCard = document.querySelector(".main-card");

    for (let i = 0; i <= 2; i++) {
        const conCard = document.createElement("div");
        conCard.classList = "contact-card card";
        const conHead = document.createElement("h2");
        conHead.classList = "contact-head";
        const jobHead = document.createElement("h4");
        jobHead.classList = "job-head";
        const conP = document.createElement("p");
        conP.classList = "contact-p";
        if (i === 0) {
            conHead.textContent = "Homer Simpson";
            jobHead.textContent = "Owner";
            conP.textContent = "555-555-1234\r\nhomietheclown@fakemail.com";
        }
        else if (i === 1) {
            conHead.textContent = "Abe Simpson";
            jobHead.textContent = "Manager";
            conP.textContent = "555-555-2345\r\nhellfishh20@fakemail.com";
        }
        else if (i === 2) {
            conHead.textContent = "Marge Simpson";
            jobHead.textContent = "Chef";
            conP.textContent = "555-555-3456\r\nmargietallhair@fakemail.com";
        }
        conCard.appendChild(conHead);
        conCard.appendChild(jobHead);
        conCard.appendChild(conP);
        mnCard.appendChild(conCard);
    }
}

