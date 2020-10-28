import request from "superagent";
import React, {useState} from 'react';
import Header from "./header";
import Tile from "./tile";
import Footer from "./footer";

const objStyleSearch = {
  width: "60%",
  marginTop: "1rem",
  borderRadius: "0.8rem",
  boxShadow: "0 0 1rem black",
  backgroundColor: "#839ac9",
  height: "1.5rem",
  paddingLeft: "1rem"
}

function App() {
  const [searchRan, setSearchRan] = useState(false);
  const [search, setSearch] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [bookResults, setBookResults] = useState([{
    id: "9999",
    authors: "test",
    title: "test",
    image: "nothing",
    publishDate: "9999",
    description: "descript",
    previewLink: "preview",
    publisher: "no one"
  }]);

function handleSearch (e) {
  setSearch(e.target.value);
}

const apiKey = "AIzaSyAT6i_gIL7iFH-tfxq2HLGwC4t6K6Y3VgY";

function searchBooks (e) {
  e.preventDefault();
  console.log("click");
  setSearchRan(false); //reset
  setErrorMsg(""); //Clear
  setBookResults(""); //clear
    request
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`)
      .then(function(data){
        setBookResults(data.body.items.map(function(book){
          return {
            id: book.id,
            authors: book.volumeInfo.authors || "Authors n/a",
            title: book.volumeInfo.title || "Title n/a",
            image: book.volumeInfo.imageLinks.thumbnail,
            publishDate: book.volumeInfo.publishedDate.slice(0,4) || "????",
            description: book.volumeInfo.description || "No Description",
            previewLink: book.volumeInfo.previewLink,
            rating: book.volumeInfo.averageRating,
            publisher: book.volumeInfo.publisher
          }
        }));
        setSearchRan(true);
        setSearch("");

    })
    .catch((err) => {
      setSearch("");
      setErrorMsg("Search Not Found, Try Again");
    });

}

  return (
    <div className="App">
      <Header />

      <form style={{textAlign: "center"}} onSubmit={searchBooks} >
        <input style={objStyleSearch} type="text" minLength="3" onChange={handleSearch} placeholder="Search" value={search} />
        <input style={{marginLeft: "1rem", backgroundColor: "#839ac9", pointerEvents: "all"}} type="submit" value="Search"/>
      </form>

      <main>
        {errorMsg.length > 1 ? <div style={{backgroundColor: "gray", width: "100%", color: "black"}}>{errorMsg}
          </div> : ""}
        <h3>Search Results: {searchRan ? bookResults.length : "0"}</h3>
        {searchRan && bookResults.map((book, index) => <Tile image={book.image} key={index} id={`tile${book.id}`} title={book.title} authors={book.authors} publishDate={book.publishDate} description={book.description} previewLink={book.previewLink} publisher={book.publisher}/>)}

      </main>
    <Footer />
    </div>
  );
}

export default App;
