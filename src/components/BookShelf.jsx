import React, { Component } from "react";
import Books from "./Books";

class BookShelf extends Component {
    render() {
        const { book, bookShelf } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookShelf.bookShelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                        book.map((book) => {
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

export default BookShelf;