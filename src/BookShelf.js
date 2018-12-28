import React, { Component } from 'react';
import './BookShelf.css';

class BookShelf extends Component {
    render() {
        const { books, id } = this.props;

        return (
            <div className='myreads-bookshelf'>
                <header className='myreads-bookshelf-header'><strong>{this.props.name}</strong></header>
                <ul className='myreads-bookshelf-books'>
                    {books.map((book) => (
                        <li key={book.id} className='myreads-bookshelf-book'>
                            <div className='book-top'>
                                <img alt='Book Thumbnail' src={`${book.imageLinks.thumbnail}`} />
                                <div className='myreads-bookshelf-book-dropdown'>
                                    <select value={id} onChange={(e) => {console.log(e.target.value)}}>
                                        <option value='move' disabled>Move to...</option>
                                        <option value='currentlyReading'>Currently Reading</option>
                                        <option value='wantToRead'>Want To Read</option>
                                        <option value='read'>Read</option>
                                    </select>
                                </div>
                            </div>
                            <p className='book-title'>{book.title}</p>
                            <p className='book-author'>{book.authors.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BookShelf;