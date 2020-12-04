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

let bookOne = new Book("Book One", "JKR", 53, "Yes");
let bookTwo = new Book("Book Two", "Author Two", 23, "No");
let bookThree = new Book("Book Three", "Author Three", 103, "Yes");

let myLibrary = [bookOne, bookTwo, bookThree];

function displayBook(book) {
  const table = document.querySelector('#table')
  const tr = document.createElement('tr')
  const title = document.createElement('td')
  const author = document.createElement('td')
  const pages = document.createElement('td')
  const read = document.createElement('td')

  title.textContent = book.title
  author.textContent = book.author
  pages.textContent = book.pages
  read.textContent = book.read

  tr.appendChild(title)
  tr.appendChild(author)
  tr.appendChild(pages)
  tr.appendChild(read)
  deleteBook(book, tr)
  readStatusToggle(book, tr)
  table.appendChild(tr)
}
// unnecessary
function eachBook(library) {
  for (let i = 0; i < library.length; i++) {
    displayBook(library[i])
  }
}

eachBook(myLibrary)
//

function deleteBook(book, tr) {
  const createBtn = document.createElement('button')

  createBtn.addEventListener('click', function (e) {
    tr.parentNode.removeChild(tr)
    if (myLibrary.indexOf(book) !== -1) {
      myLibrary.splice(myLibrary.indexOf(book), 1)
    }
  })

  createBtn.textContent = 'Delete'
  tr.appendChild(createBtn)
}

function readStatusToggle(book, tr) {
  const createBtn = document.createElement('button')

  createBtn.addEventListener('click', function (e) {
    const status = tr.querySelector('td:nth-child(4)')
    if (book.read == "Yes") {
      status.textContent = "No"
      book.read = 'No'
    } else {
      status.textContent = "Yes"
      book.read = 'Yes'
    }
  })

  createBtn.textContent = "Toggle status"
  tr.appendChild(createBtn)
}

function displayForm() {
  document.getElementById("newBookForm").style.display = "block";
}

newBookForm = document.forms.newBookForm
newBookForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const title = newBookForm.querySelector('input[name="title"').value
  const author = newBookForm.querySelector('input[name="author"').value
  const pages = newBookForm.querySelector('input[name="pages"').value
  const possibleReadValues = newBookForm.querySelectorAll('input[name="read"]')
  let read
  if (possibleReadValues[0].checked) {
    read = 'Yes'
  } else {
    read = 'No'
  }

  book = new Book(title, author, pages, read)
  displayBook(book)
  addBookToLibrary(book)
})