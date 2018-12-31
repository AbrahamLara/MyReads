import React, { Component } from 'react';
import './css/App.css';
import BookShelf from './BookShelf';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';
import { Link, Route } from 'react-router-dom';

class App extends Component {
	state = {
		currentlyReading: [],
		wantToRead: [],
		read: [],
	}

	componentDidMount() {
		/**
		 * Retreives all books that belong in shelves to
		 * be display in the main page
		 */
		BooksAPI.getAll().then((books) => {
			this.setState({
				currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
				wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
				read: books.filter((book) => book.shelf === 'read'),
			});
		});
	}

	/**
	 * @description Moves a book to a new shelf or no shelf
	 * @param {object} book - A book object
	 * @param {object} shelf - The shelf the book will be moved to. Can be 'none'
	 */
	moveBookToShelf = (book, shelf) => {
		BooksAPI.update(book, shelf).then((bookShelves) => {
			this.setState((currState) => {
				if (book.shelf !== undefined) {
					currState[book.shelf] = currState[book.shelf]
					.filter((b) => bookShelves[book.shelf].includes(b.id));
				}
				
				if (shelf !== 'none' || book.shelf === 'none') {
					book.shelf = shelf;
					currState[shelf].push(book);
				}
				
				return currState;
			});
		});
	}

	shelfGenerator = () => {
		const shelves = [
			[this.state.currentlyReading, 'currentlyReading', 'Currently Reading'],
			[this.state.wantToRead, 'wantToRead', 'Want To Read'],
			[this.state.read, 'read', 'Read'],
		]

		return shelves.map((shelf) => (
			<BookShelf
				key={shelf[1]}
				id={shelf[1]}
				books={shelf[0]}
				name={shelf[2]}
				onBookMoved={this.moveBookToShelf}
			/>
		));
	}
	
	render() {
		const { currentlyReading, wantToRead, read } = this.state;

		/**
		 * The search method in the api returns books that doesn't show which
		 * shelf it is in. The bookShelves object will be passed to the
		 * SearchPage component so that any book that has its id as a key
		 * will have its shelf displayed in its dropwdown to be moved to a
		 * new shelf if they user desires to do so.
		 */
		let bookShelves = {};
		[...currentlyReading, ...wantToRead, ...read].forEach((book) => {
			bookShelves[book.id] = book.shelf;
		});

		return (
			<div>
				<Route exact path='/' render={() => (
					<div>
						<nav className='myreads-title'>MyReads</nav>
						<div className='bookshelves-container'>
							{this.shelfGenerator()}
						</div>
						<div className='myreads-button'>
							<Link to='/search'>
								<button>Search</button>
							</Link>
						</div>
					</div>
				)}/>

				<Route path='/search' render={() => (
						<SearchPage
							bookShelves={bookShelves}
							onBookMoved={this.moveBookToShelf}
						/>
					)
				}/>
			</div>
		);
	}
}

export default App;
