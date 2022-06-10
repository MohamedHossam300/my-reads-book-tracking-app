import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";

class Books extends Component {
    render() {
        const { book, BackgroundImage, bookTitle, bookAuthors } = this.props
        return (
            <div className="book">
            <div className="book-top">
              <img className="book-cover" src={BackgroundImage} alt={bookTitle} />
              <BookShelfChanger book={book}/>
            </div>
            <div className="book-title">{bookTitle}</div>
            <div className="book-authors">{bookAuthors}</div>
          </div>
        )
    }
}

export default Books;