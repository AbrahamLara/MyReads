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
		BooksAPI.getAll().then((books) => {
			this.setState({
				currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
				wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
				read: books.filter((book) => book.shelf === 'read'),
			});
		});
	}

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

	getObjShelves = (book) => {
		let obj = {};
		obj[book.id] = book.shelf;
		return obj;
	}

	render() {
		const { currentlyReading, wantToRead, read } = this.state;

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
							<BookShelf
								id='currentlyReading'
								books={currentlyReading}
								name='Currently Reading'
								onBookMoved={this.moveBookToShelf}
							/>
							<BookShelf
								id='wantToRead'
								books={wantToRead}
								name='Want To Read'
								onBookMoved={this.moveBookToShelf}
							/>
							<BookShelf
								id='read'
								books={read}
								name='Read'
								onBookMoved={this.moveBookToShelf}
							/>
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
