const bookForm = document.createElement("form");
const titleInput = document.createElement("input");
const titleLab = document.createElement("label");
const titleP = document.createElement("p")
const authorInput = document.createElement("input");
const authorLab = document.createElement("label");
const authorP = document.createElement("p");
const pagesInput = document.createElement("input");
const pagesLab = document.createElement("label");
const pagesP = document.createElement("p");
const readInputY = document.createElement("input");
const readLabY = document.createElement("label");
const readInputN = document.createElement("input");
const readLabN = document.createElement("label");
const readDiv = document.createElement("div");
const subBtn = document.querySelector(".sub-btn");
const mainCon = document.querySelector(".main-con");
//mainCon.setAttribute("class", "main-con");
let cardCon = document.querySelector(".card-con");
const newBookBtn = document.querySelector(".new-book-btn");
//newBookBtn.setAttribute("class", "new-book-Btn");
//newBookBtn.textContent = "NEW BOOK";
//document.body.appendChild(newBookBtn);
//mainCon.appendChild(cardCon);
//const wholeCon = document.createElement("div");
//wholeCon.classList ="whole-con";
//wholeCon.appendChild(newBookBtn);
//wholeCon.appendChild(mainCon);

const removeBtn = document.createElement("button");
let myLibrary = [];
let bookPos = 0;
const togReadBtn = document.createElement("button");

/*function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}*/

class Book {
    constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

Book.prototype.togRead = function(e) {
    this.read === "read" ? this.read = "not read yet" : this.read = "read";
    mainCon.removeChild(cardCon);
    cardCon = document.createElement("div");
    addLibraryToPage();   
}

const togRead = e => {
    const read = e.target.parentNode.dataset.bookPos;
    myLibrary[read].togRead(e);
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
//console.log(theHobbit.info());
myLibrary.push(theHobbit);
const saw = new Book("Saw", "James Wan", 956, "not read yet");
const theConjuring = new Book("The Conjuring", "James Wan", 1023, "read");
const insidious = new Book("Insidious", "James Wan", 923, "read");
myLibrary.push(theConjuring);
myLibrary.push(insidious);
myLibrary.push(saw);

function addBookToLibrary(e) {
    e.preventDefault();
    newBookBtn.classList.toggle("inactive");
    wholeCon.removeChild(bookForm);
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, bookForm.elements["read_yet"].value);
    myLibrary.push(newBook);
    addNewBook(e);
}

const addLibraryToPage = e => {
    bookPos = 0;

    for (let i = 0; i < myLibrary.length; i++) {
        if (i > 0 && myLibrary.length >= 2 && myLibrary[i].title === myLibrary[i-1].title && myLibrary[i].author === myLibrary[i-1].author) {
            continue;
        };
              
                const card = document.createElement("div");
                cardCon.classList = "card-con";
                card.setAttribute("class", "card");
                card.setAttribute("data-book-pos", `${bookPos}`);
                bookPos++;
                const removeBtn = document.createElement("button");
                removeBtn.type = "button";
                removeBtn.classList = "remove-btn";
                removeBtn.textContent = "x";
                card.appendChild(removeBtn);
                const pTitle = document.createElement("p");
                pTitle.setAttribute("class", "p-title");
                pTitle.textContent = myLibrary[i].title;
                card.appendChild(pTitle);
                const pAuthor = document.createElement("p");
                pAuthor.setAttribute("class", "p-author");
                const by = document.createElement("p");
                by.classList = "by";
                by.textContent = "by";
                card.appendChild(by);
                pAuthor.textContent = `${myLibrary[i].author}`;
                card.appendChild(pAuthor);
                const pPages = document.createElement("p");
                pPages.setAttribute("class", "p-pages");
                pPages.textContent = `${myLibrary[i].pages} pages`;
                card.appendChild(pPages);
                const pRead = document.createElement("p");
                pRead.setAttribute("class", "p-read");
                pRead.textContent = myLibrary[i].read;
                card.appendChild(pRead);
                const togReadBtn = document.createElement("button");
                togReadBtn.setAttribute("type", "button");
                togReadBtn.classList = "tog-read-btn";
                
                myLibrary[i].read === "read" ? togReadBtn.textContent = "Not Read" : togReadBtn.textContent = "Read";
                card.appendChild(togReadBtn);
                cardCon.appendChild(card);
                
                removeBtn.addEventListener("click", removeBook);
                togReadBtn.addEventListener("click", togRead);
               // mainCon.appendChild(cardCon);
    } 
}

const addNewBook = e => {
    
    const card = document.createElement("div");
                card.setAttribute("class", "card");
                card.setAttribute("data-book-pos", `${bookPos}`);
                bookPos++;
                const removeBtn = document.createElement("button");     
                removeBtn.type = "button";
                removeBtn.classList = "remove-btn";
                removeBtn.textContent = "x";
                card.appendChild(removeBtn);
                const pTitle = document.createElement("p");
                pTitle.setAttribute("class", "p-title");
                pTitle.textContent = titleInput.value;
                card.appendChild(pTitle);
                const pAuthor = document.createElement("p");
                pAuthor.setAttribute("class", "p-author");
                const by = document.createElement("p");
                by.classList = "by";
                by.textContent = "by";
                card.appendChild(by);
                //const br = document.createElement("br");
                pAuthor.textContent = `${authorInput.value}`;
                card.appendChild(pAuthor);
                const pPages = document.createElement("p");
                pPages.setAttribute("class", "p-pages");
                pPages.textContent = `${pagesInput.value} pages`;
                card.appendChild(pPages);
                const pRead = document.createElement("p");
                pRead.setAttribute("class", "p-read");
                pRead.textContent = bookForm.elements["read_yet"].value;
                card.appendChild(pRead);
                togReadBtn.setAttribute("type", "button");
                togReadBtn.classList = "tog-read-btn";        
                bookForm.elements["read_yet"].value === "read" ? togReadBtn.textContent = "Not Read" : togReadBtn.textContent = "Read";
                card.appendChild(togReadBtn);
                removeBtn.addEventListener("click", removeBook);
            for (let i = 0; i < myLibrary.length; i++) {
                if (i > 0 && myLibrary.length >= 2 && myLibrary[i].title === myLibrary[i-1].title && myLibrary[i].author === myLibrary[i-1].author) {
                    mainCon.removeChild(cardCon);
                    cardCon = document.createElement("div");
                    addLibraryToPage();
                    break;
                } else {
                    cardCon.appendChild(card);
                }
            }
}

const removeBook = e => {
   cardCon.removeChild(e.target.parentElement);
   const bookPos = e.target.parentElement.dataset.bookPos;
   myLibrary.splice(bookPos, 1);
   mainCon.removeChild(cardCon);
   cardCon = document.createElement("div");
   addLibraryToPage();
}

const addBook = e => {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    newBookBtn.setAttribute("class", "inactive");
    bookForm.setAttribute("action", "./library.html");
    bookForm.setAttribute('class', "book-form");
    bookForm.setAttribute("method", "post");
    
    titleInput.setAttribute("id", "title");
    
    titleLab.setAttribute("for", "title");
    titleInput.setAttribute("name", "title");
    titleLab.textContent = "Title:";
    
    titleLab.appendChild(titleInput);
    titleP.appendChild(titleLab);

    bookForm.appendChild(titleP);
    
    authorInput.id = "author";
    
    authorLab.setAttribute("for", "author");
    authorInput.setAttribute("name", "author");
    authorLab.textContent = "Author:";
    authorLab.appendChild(authorInput);
    
    authorP.appendChild(authorLab);
    bookForm.appendChild(authorP);
    
    pagesInput.id = "pages";
    
    pagesLab.textContent = "Pages:";
    pagesLab.setAttribute("for", "pages");
    pagesInput.setAttribute("name", "pages");
    pagesLab.appendChild(pagesInput);
    
    pagesP.appendChild(pagesLab);
    bookForm.appendChild(pagesP);
    
    readInputY.setAttribute("type", "radio");
    readInputY.id = "yes";
    readInputY.checked = true;
    readLabY.setAttribute("for", "yes");
    readInputY.setAttribute("name", "read_yet");
    readInputY.setAttribute("value", "read");
    readLabY.textContent = "Yes";
    
    readInputN.setAttribute("type", "radio");
    readInputN.id = "no";
    
    readLabN.setAttribute("for", "no");
    readInputN.setAttribute("name", "read_yet");
    readInputN.setAttribute("value", "not read yet");
    
    readLabN.textContent = "No";
    
    readDiv.textContent = "Read Yet:";
    readDiv.appendChild(readInputY);
    readDiv.appendChild(readLabY);
    readDiv.appendChild(readInputN);
    readDiv.appendChild(readLabN);
    bookForm.appendChild(readDiv);
    subBtn.setAttribute("type", "submit");
    subBtn.textContent = "Add Book";
    bookForm.appendChild(subBtn);

    if (myLibrary.length >= 1) {
        wholeCon.insertBefore(bookForm, mainCon);
        return;
    }
    wholeCon.appendChild(bookForm); 
}
//addLibraryToPage();


window.addEventListener("load", addLibraryToPage)

//document.body.appendChild(wholeCon);
newBookBtn.addEventListener("click", addBook);
bookForm.addEventListener("submit", addBookToLibrary);
removeBtn.addEventListener("click", removeBook);
togReadBtn.addEventListener("click", togRead);