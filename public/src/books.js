function findAuthorById(authors, id) {
  for (item in authors){
    const authorId = authors[item].id;
    if (authorId === id){
      return authors[item];
    }
  }
}

function findBookById(books, id) {
  for (item in books){
    const bookId = books[item].id;
    if (bookId === id){
      return books[item];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = [];
  let returnedBooks = [];
  for (item in books){
    const isBorrowed = books[item].borrows;
    if (isBorrowed[0].returned === true){
      returnedBooks.push(books[item])
    }
    else {borrowedBooks.push(books[item])}
  }
  const result = [borrowedBooks, returnedBooks];
  return result;
}

function getBorrowersForBook(book, accounts) {
  let borrowerAccounts = [];
  let borrowers = book.borrows;
  for (item in accounts){
    const user = accounts[item];
    for (let i = 0; i < borrowers.length; i++){
      if (borrowers[i].id === accounts[item].id && borrowerAccounts.length < 10){
        const borrower = borrowers[i];
        const newAccount = {...user, ...borrower};
        // console.log(newAccount)
        borrowerAccounts.push(newAccount);
      }
    }
  }
  return borrowerAccounts
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};