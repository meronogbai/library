function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let bookOne = new Book("Book One", "JKR", 53, "yes");
let bookTwo = new Book("Book Two", "Author Two", 23, "no");
let bookThree = new Book("Book Three", "Author Three", 103, "yes");

let myLibrary = [bookOne.info(), bookTwo.info(), bookThree.info()];

function displayBook(book) {
    const table = document.querySelector('#table')
    const tr = document.createElement('tr')
    const tdOne = document.createElement('td')
    const tdTwo = document.createElement('td')
    const tdThree = document.createElement('td')
    const tdFour = document.createElement('td')

    tdOne.textContent = book.title
    tdTwo.textContent = book.author
    tdThree.textContent = book.pages
    tdFour.textContent = book.read
    
    tr.appendChild(tdOne)
    tr.appendChild(tdTwo)
    tr.appendChild(tdThree)
    tr.appendChild(tdFour)
    table.appendChild(tr)
}


