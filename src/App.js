import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './pages/Home'
import Search from './pages/Search'

class App extends Component {
  state = {
    book: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((book) => {
        this.setState(() => ({
          book
        }))
      })
  }

  render() {
    return (
      <div className="app">
          <Routes>
            <Route exact path='/' element={<Home book={this.state.book}/>} />
            <Route  path='/search' element={<Search />} />
          </Routes>
      </div>
    )
  }
}

export default App
