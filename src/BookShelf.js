import React, { Component } from 'react';
import './BookShelf.css';

class BookShelf extends Component {
    render() {
        const books = this.props.books;
        return (
            <div className='myreads-bookshelf'>
                <header className='myreads-bookshelf-header'><strong>{this.props.name}</strong></header>
                <ul className='myreads-bookshelf-books'>
                    {books.map((book) => (
                        <li key={book.id} className='myreads-bookshelf-book'>
                            <img alt='Book Thumbnail' src={`${book.imageLinks.thumbnail}`} />
                            <button>Dropwdown</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BookShelf;