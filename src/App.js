import React, { Component } from 'react';
import './App.css';
import BookShelf from './BookShelf';

class App extends Component {
	render() {
		return (
			<div>
				<nav className='myreads-title'>MyReads</nav>
				<BookShelf name='Currently Reading'/>
				<BookShelf name='Want To Read'/>
				<BookShelf name='Read'/>
			</div>
		);
	}
}

export default App;
