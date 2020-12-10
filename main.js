const myLibrary = [];
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  deleteBook = (tr) => {
    const createBtn = document.createElement('button');

    createBtn.addEventListener('click', () => {
      tr.parentNode.removeChild(tr);
      if (myLibrary.indexOf(this) !== -1) {
        myLibrary.splice(myLibrary.indexOf(this), 1);
      }
    });

    createBtn.textContent = 'Delete';
    createBtn.setAttribute('class', 'btn btn-danger mr-2 ml-3');
    tr.appendChild(createBtn);
  };

  readStatusToggle = (tr) => {
    const createBtn = document.createElement('button');

    createBtn.addEventListener('click', () => {
      const status = tr.querySelector('td:nth-child(4)');
      if (this.read === 'Yes') {
        status.textContent = 'No';
        this.read = 'No';
      } else {
        status.textContent = 'Yes';
        this.read = 'Yes';
      }
    });

    createBtn.textContent = 'Toggle status';
    createBtn.setAttribute('class', 'btn btn-success');
    tr.appendChild(createBtn);
  };

  displayBook = () => {
    const tbody = document.querySelector('#tbody');
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const pages = document.createElement('td');
    const read = document.createElement('td');

    title.textContent = this.title;
    author.textContent = this.author;
    pages.textContent = this.pages;
    read.textContent = this.read;

    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(pages);
    tr.appendChild(read);
    this.deleteBook(tr);
    this.readStatusToggle(tr);
    tbody.appendChild(tr);
  };
}

// display examples
const exampleOne = new Book('Harry Potter', 'JK Rowling', 350, 'Yes');
const exampleTwo = new Book('Mocking Bird', 'Author', 280, 'No');
myLibrary.push(exampleOne, exampleTwo);
myLibrary.forEach(book => {
  book.displayBook();
});

// buttons to view and remove add book form
const newBookForm = document.forms[0];

document.querySelector('#form-btn').addEventListener('click', () => {
  newBookForm.classList.toggle('d-none');
});

document.querySelector('#cancel-link').addEventListener('click', () => {
  newBookForm.classList.add('d-none');
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

  const book = new Book(title, author, pages, read);
  book.displayBook();
  myLibrary.push(book);
});
