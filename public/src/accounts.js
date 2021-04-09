function findAccountById(accounts, id) {
  for (account in accounts) {
    const name = accounts[account];
    const accountId = name.id;
    if (id === accountId) {
      return name;
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lastNameA, lastNameB) => lastNameA.name.last > lastNameB.name.last ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  let totalBorrows = [];
  for (book in books){
    const name = books[book];
    const borrowed = name.borrows;
    const bookBorrows = borrowed.map((bookId) => bookId.id);
    totalBorrows.push(...bookBorrows);
  }
  for (let i = 0; i < totalBorrows.length; i++){
    if (totalBorrows[i] === account.id){
      total += 1;
    }
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = [];
  let author;
  let borrowedBooks;
  let borrows;
  let output = [];
  for (book in books){
    const borrowed = books[book].borrows;
    for (let i = 0; i < borrowed.length; i++){
      if (borrowed[i].id === account.id && borrowed[i].returned === false){
        checkedOut = books[book];
        borrowedBooks = books[book].borrows;
      }
    }
  }
  for (pos in authors){
    const id = authors[pos].id
    if (checkedOut.authorId === id){
      author = authors[pos];
    }
  }
  for (let i = 0; i < borrowedBooks.length; i++){
    if (borrowedBooks[i].returned === false){
      borrows = borrowedBooks[i];
    }
  }
  const {id, title, genre, authorId} = checkedOut;
  const result = { id, title, genre, authorId, author, borrows};
  output.push(result);
  return output;
};


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

