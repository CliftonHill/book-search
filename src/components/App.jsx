import React from 'react';
import Header from "./header";
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



function App() {


  return (
    <div className="App">
      <Header />
      <main>
        {books.map((book, index) => <Tile stars={book.stars} image={book.img} num={index} key={index} id={`tile${index}`} title={book.title} author={book.author} price={book.price} listPrice={book.listPrice} review={book.review}/>)}

      </main>

    </div>
  );
}

export default App;
