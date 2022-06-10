import React, { Component } from "react";
import { Link } from "react-router-dom"
import * as BooksAPI from '../BooksAPI'
import Books from "../components/Books";

class Search extends Component {
  state = {
    book: [],
    query: "",
  }


  updateQuery = (query) => {
    this.setState(() => ({
      query
    }))

    BooksAPI.search(query).then((book) => {
        this.setState(() => ({
          book
        })) 
    })
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.book.map((book) => {
                return (
                  <li key={book.id}>
                    <Books
                      key={book.id}
                      book={book}
                      BackgroundImage={book.imageLinks.smallThumbnail}
                      bookTitle={book.title}
                      bookAuthors={book.authors}
                    />
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search