import React from 'react';
import NavBar from "./navbar";
import Tile from "./tile";
const data = require("./books.js");
const books = data.books;

// {
// title:
// author:
// img:
// stars:
// listPrice:
// price:
// review:
// },
console.log(books[0].price)



function App() {


  return (
    <div className="App">
      <NavBar />
      <main>
        {books.map((book, index) => <Tile stars={book.stars} image={book.img} num={index} key={index} id={index}/>)}

      </main>

    </div>
  );
}

export default App;
