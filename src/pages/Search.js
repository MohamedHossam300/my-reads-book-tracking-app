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
    try {
      BooksAPI.search(query).then((book) => {
        this.setState(() => ({
          book
        }))
      })
    } catch (err) {
      throw new Error(`Unable To Search About Book. Error ${err}`)
    }
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
            {Array.isArray(this.state.book) ?
              this.state.book.map((book) => {
                return (
                  <li key={book.id}>
                    <Books
                      key={book.id}
                      book={book}
                      BackgroundImage={book.imageLinks? book.imageLinks.smallThumbnail: ""}
                      bookTitle={book.title}
                      bookAuthors={book.authors}
                    />
                  </li>
                )
              }) : (<div>No Result Found</div>)
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search