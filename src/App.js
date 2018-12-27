import React, { Component } from 'react';
import './App.css';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

class App extends Component {
	state = {
		currentlyReading: [],
		wantToRead: [],
		read: [],
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState((currState) => ({
				currentlyReading: currState.currentlyReading.concat(books.filter((book) => book.shelf === 'currentlyReading')),
				wantToRead: currState.currentlyReading.concat(books.filter((book) => book.shelf === 'wantToRead')),
				read: currState.currentlyReading.concat(books.filter((book) => book.shelf === 'read')),
			}));
		});
	}

	render() {
		const { currentlyReading, wantToRead, read } = this.state;

		return (
			<div>				
				<nav className='myreads-title'>MyReads</nav>
				<BookShelf id='currentlyReading' books={currentlyReading} name='Currently Reading'/>
				<BookShelf id='wantToRead' books={wantToRead}  name='Want To Read'/>
				<BookShelf id='read' books={read}  name='Read'/>
				<div className='myreads-button'>
					<button>Search</button>
				</div>
			</div>
		);
	}
}

export default App;
