const Library = (booksArray) => {
  const addBookToLibrary = (book) => {
    booksArray.push(book);
  };
  return { booksArray, addBookToLibrary };
};

const Book = (title, author, pages, read) => ({
  title, author, pages, read,
});

const myLibrary = Library([]);

const deleteBook = (book, tr) => {
  const createBtn = document.createElement('button');

  createBtn.addEventListener('click', () => {
    tr.parentNode.removeChild(tr);
    if (myLibrary.booksArray.indexOf(book) !== -1) {
      myLibrary.booksArray.splice(myLibrary.booksArray.indexOf(book), 1);
    }
  });

  createBtn.textContent = 'Delete';
  createBtn.setAttribute('class', 'btn btn-danger mr-2 ml-3');
  tr.appendChild(createBtn);
};

const readStatusToggle = (book, tr) => {
  const createBtn = document.createElement('button');

  createBtn.addEventListener('click', () => {
    const status = tr.querySelector('td:nth-child(4)');
    if (book.read === 'Yes') {
      status.textContent = 'No';
      book.read = 'No';
    } else {
      status.textContent = 'Yes';
      book.read = 'Yes';
    }
  });

  createBtn.textContent = 'Toggle status';
  createBtn.setAttribute('class', 'btn btn-success');
  tr.appendChild(createBtn);
};

const displayBook = (book) => {
  const tbody = document.querySelector('#tbody');
  const tr = document.createElement('tr');
  const title = document.createElement('td');
  const author = document.createElement('td');
  const pages = document.createElement('td');
  const read = document.createElement('td');

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  read.textContent = book.read;

  tr.appendChild(title);
  tr.appendChild(author);
  tr.appendChild(pages);
  tr.appendChild(read);
  deleteBook(book, tr);
  readStatusToggle(book, tr);
  tbody.appendChild(tr);
};

// examples
const exampleOne = Book('Harry Potter', 'JK Rowling', 350, 'Yes');
const exampleTwo = Book('Mocking Bird', 'Author', 280, 'No');
myLibrary.addBookToLibrary(exampleOne);
myLibrary.addBookToLibrary(exampleTwo);
const eachBook = (library) => {
  for (let i = 0; i < library.length; i += 1) {
    displayBook(library[i]);
  }
};
eachBook(myLibrary.booksArray);

// buttons to view and remove add book form
const newBookForm = document.forms;

document.querySelector('#form-btn').addEventListener('click', () => {
  newBookForm.style.display = 'block';
});

document.querySelector('#cancel-link').addEventListener('click', () => {
  newBookForm.style.display = 'none';
});


newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = newBookForm.querySelector('input[name="title"').value;
  const author = newBookForm.querySelector('input[name="author"').value;
  const pages = newBookForm.querySelector('input[name="pages"').value;
  const possibleReadValues = newBookForm.querySelectorAll('input[name="read"]');
  let read;
  if (possibleReadValues[0].checked) {
    read = 'Yes';
  } else {
    read = 'No';
  }

  const book = Book(title, author, pages, read);
  displayBook(book);
  myLibrary.addBookToLibrary(book);
});
