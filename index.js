function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then(resp =>  resp.json())
  .then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    p.innerHTML =`Book's isbn: ${ book.isbn} `;
    h2.innerHTML = book.name;
    main.appendChild(h2);
    main.appendChild(p)
  });
}
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
