function getTotalBooksCount(books) {
  let total = 0;
  for (item in books){
    total += 1;
  }
  return total;
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  for (user in accounts){
    total += 1;
  }
  return total;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for (item in books){
    const borrowed = books[item].borrows
    if (borrowed[0].returned === false){
      total += 1
    }
  }
  return total
}

function booksHelper(books){
  let counts = {}
  for (item in books){
    const genreName = books[item].genre;
    if (counts[genreName] === undefined){
      counts[genreName] = 1;
    }
    else {
      counts[genreName] = counts[genreName] + 1;
    }
  }
  return counts
}

function getMostCommonGenres(books) {
  let result = [];
  let counts = booksHelper(books);
  keys = Object.keys(counts);
  values = Object.values(counts);
  for (let y = 0; y < values.length; y++){
    let output = {};
    for (let i = 0; i < keys.length; i++){
      output.name = keys[y];
      output.count = values[y];
    }
    result.push(output);  
}
  result.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1));
  let finalResult = [];
  let total = 0
  for (let j = 0; j < result.length; j++){
    if (total < 5){
      finalResult.push(result[j]);
      total +=1
    }
  }
  return finalResult
  // return result
}

function getMostPopularBooks(books) {
  let result = [];
  let counts = {};
  for (item in books){
    const bookTitle = books[item].title;
    const borrow = books[item].borrows;
    for (let i = 0; i < borrow.length; i++){
      const bookId = borrow.id;
      if (counts[bookTitle] === undefined){
        counts[bookTitle] = 1;
      }
      else {
        counts[bookTitle] = counts[bookTitle] + 1;
      }
    }
  }
  keys = Object.keys(counts);
  values = Object.values(counts);
  for (let y = 0; y < values.length; y++){
    let output = {};
    for (let i = 0; i < keys.length; i++){
      output.name = keys[y];
      output.count = values[y];
    }
    result.push(output);
  }
  result.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1));
  let finalResult = [];
  let total = 0;
  for (let j = 0; j < result.length; j++){
    if (total < 5){
      finalResult.push(result[j]);
      total += 1;
    }
  } 
   return finalResult;
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  let counts = {};
  let names = {};
  for (item in books){
    const bookAuthorId = books[item].authorId;
    const borrow = books[item].borrows;
    for (let i = 0; i < borrow.length; i++){
      const bookId = borrow.id;
      if (counts[bookAuthorId] === undefined){
        counts[bookAuthorId] = 1;
      }
      else {
        counts[bookAuthorId] = counts[bookAuthorId] + 1;
      }
    }
  }
  for (item in authors){
    const authorId = authors[item].id;
    const name = authors[item].name;
    for (id in name){
      const firstName = name.first;
      const lastName = name.last;
      if (names[authorId] === undefined){
        names[authorId] = firstName + " " + lastName;
      }
    }
  }
  for (id in counts){
    let output = {};
    for (item in names){
      output.name = names[id];
      output.count = counts[id];
    }
    result.push(output);
  }
  result.sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
  let total = 0;
  let finalResult = [];
  for (let i = 0; i < result.length; i++){
    if (total < 5){
      finalResult.push(result[i]);
      total +=1;
    }
  }
  return finalResult;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
