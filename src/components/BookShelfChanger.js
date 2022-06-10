import React, { Component } from "react";
import * as BooksAPI from '../BooksAPI'

class BookShelfChanger extends Component {
  state = {
    shelfState: this.props.book.shelf,
  }
  async setShelfState(book, shelf) {
    await BooksAPI.update(book, shelf).then((shelf) => {
      this.setState(() => ({
        shelfState: shelf
      }))
      window.location.reload()
    })
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.state.shelfState}
          onChange={(e) => {
            const selectedShelf = e.target.value
            this.setShelfState(this.props.book, selectedShelf)
          }}>
          {console.log(this.state.shelfState)}
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger;