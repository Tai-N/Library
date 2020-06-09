const addBookBtn = document.querySelector(".btn-add");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pagesInput = document.querySelector(".pages-input");
const readInput = document.querySelector(".read-input");
const display = document.querySelector(".books-display");

const myLibrary = [];

function render() {
  display.innerHTML = "";
  myLibrary.forEach((book, index) => {
    let bookTemplateStr = `<div class="card">
    <h4><b>${book.title}</b></h4>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <p>${book.read}</p>
    <button class='btn-toggle-read' value=${index}>Read</button>
    <button class='btn-delete' value=${index}>Delete</button>
</div>`;

    display.innerHTML += bookTemplateStr;
  });
}

display.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-delete")) {
    let deleteBtn = e.target;
    deleteBook(deleteBtn.value);
  }

  if (e.target.classList.contains("btn-toggle-read")) {
    let toggleBtn = e.target;
    toggleRead(toggleBtn.value);
  }
});

function toggleRead(index) {
  let book = myLibrary[index];
  book.read = book.read === "Y" ? "N" : "Y";
  render();
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.displayInfo = function () {
    let readMssg = this.read === "Y" ? " read!" : " not read yet!";
    console.log(
      this.title +
        " by " +
        this.author +
        ", " +
        this.pages +
        " pages" +
        "," +
        readMssg
    );
  };
}

function createBook(title, author, pages, read) {
  return new Book(title, author, pages, read);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookBtn.addEventListener("click", function () {
  let newBook = createBook(
    titleInput.value,
    authorInput.value,
    pagesInput.valueAsNumber,
    readInput.value
  );

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";

  addBookToLibrary(newBook);
  console.log("myLibrary:", myLibrary);
  render();
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
