const newBookBtn = document.querySelector(".new-book-btn");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }  
    this.cardCon = () => {
        return document.querySelector(".card-con");
    }
     this.addLibraryToPage = () => {
        for (let i = 0; i < myLibrary.length; i++) {
            if (this.cardCon().children[i]) {
               this.cardCon().children[i].setAttribute("data-book-pos", i);        
                 continue;
             };      
                    const card = document.createElement("div");
                    this.cardCon().classList = "card-con";
                    card.setAttribute("class", "card");
                    card.setAttribute("data-book-pos", i);
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
                    pAuthor.textContent = myLibrary[i].author;
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
                    myLibrary[i].read === "Read" ? togReadBtn.textContent = "Not Read" : togReadBtn.textContent = "Read";
                    card.appendChild(togReadBtn);
                    this.cardCon().appendChild(card);  
                    removeBtn.addEventListener("click", this.removeBook);
                    togReadBtn.addEventListener("click", this.togRead);
        }
    }
    this.removeBook = e => {
        const bookPos = e.target.parentElement.dataset.bookPos;
        myLibrary[bookPos].cardCon().removeChild(e.target.parentElement);
        myLibrary.splice(bookPos, 1);
        myLibrary[bookPos].addLibraryToPage();
     }
}

Book.prototype.togRead = function(e) {
    const bookPos = e.target.parentElement.dataset.bookPos;
    const readYet = e.target.parentNode.childNodes[5];
    const togReadBtn = e.target.parentNode.childNodes[6];
    let libraryBk = myLibrary[bookPos]; 
    const book = e.target.parentNode;
    libraryBk.read === "Read" ? libraryBk.read = "Not Read" : libraryBk.read = "Read";
    libraryBk.read == "Read" ? togReadBtn.textContent = "Not Read" : togReadBtn.textContent = "Read";
    readYet.textContent = libraryBk.read;
    libraryBk.cardCon().replaceChild(book, book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not Read");
myLibrary.push(theHobbit);
const saw = new Book("Saw", "James Wan", 956, "Not Read");
const theConjuring = new Book("The Conjuring", "James Wan", 1023, "Read");
const insidious = new Book("Insidious", "James Wan", 923, "Read");
myLibrary.push(theConjuring);
myLibrary.push(insidious);
myLibrary.push(saw);

const addBookToLibrary = e => {
    e.preventDefault();
    const titleInput = document.querySelector("#title");
    const bookForm = document.querySelector("form");
    const authorInput = document.querySelector("#author");
    const pagesInput = document.querySelector("#pages");
    const togForm = () => {
        titleInput.value = "";
        authorInput.value = "";
        pagesInput.value = "";
        newBookBtn.classList.toggle("inactive");
        bookForm.classList.toggle("inactive"); 
        bookForm.addEventListener("submit", addBookToLibrary);
    }
     if (bookForm.classList.value == "inactive") {
        togForm();
        return;
     }
     document.querySelector(".read-yes").checked = true;
    newBookBtn.classList.toggle("inactive");
    bookForm.classList.toggle("inactive");
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, bookForm.elements["read_yet"].value);
    myLibrary.push(newBook);
    newBook.addLibraryToPage();  
}

/*const removeBook = e => {
   cardCon.removeChild(e.target.parentElement);
   const bookPos = e.target.parentElement.dataset.bookPos;
   myLibrary.splice(bookPos, 1);
   mainCon.removeChild(cardCon);
   cardCon = document.createElement("div");
   addLibraryToPage();
}*/

//newBookBtn.addEventListener("click", addBook);
newBookBtn.addEventListener("click", addBookToLibrary);
//bookForm.addEventListener("submit", addBookToLibrary);
//removeBtn.addEventListener("click", removeBook);
//togReadBtn.addEventListener("click", togRead);
saw.addLibraryToPage();