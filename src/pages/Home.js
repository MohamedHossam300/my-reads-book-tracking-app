import React, { Component } from "react";
import { Link } from "react-router-dom"
import ListBooks from "../components/ListBooks";

class Home extends Component {
    render() {
        return (
            <>
                <div className="list-books-title">
                        {console.log(this.props.book.authors)}
                    <h1>MyReads</h1>
                </div>
                <ListBooks book={this.props.book} />
                <Link to="/search" className="open-search">
                    <button>Add a book</button>
                </Link>
            </>
        )
    }
}

export default Home