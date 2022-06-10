import React, { Component } from "react";
import BookShelf from "./BookShelf";

class ListBooks extends Component {
    state = {
        bookShelf: [
            {
                id: 1,
                bookShelfTitle: "Currently Reading",
                shelf: "currentlyReading",
            },
            {
                id: 2,
                bookShelfTitle: "Want to Read",
                shelf: "wantToRead",
            },
            {
                id: 3,
                bookShelfTitle: "Read",
                shelf: "read"
            }
        ]
    }

    render() {
        const { book } = this.props
        return (
            <div className="list-books-content">
                {this.state.bookShelf.map((shelf) => {
                    return (
                        <BookShelf key={shelf.id} bookShelf={shelf} book={book.filter(bookShelf => bookShelf.shelf === shelf.shelf )}/>
                    )
                })}
            </div>
        )
    }
}

export default ListBooks;