import React, { Component } from 'react';
import './css/Book.css';

class Book extends Component {
    render() {
        const { shelf, cover, book, onMovedToNewShelf } = this.props;

        return (
            <div>
                <div className='book-top'>
                    <img alt='Book Thumbnail' src={`${cover}`} />
                    <div className='myreads-bookshelf-book-dropdown'>
                        <select defaultValue={shelf} onChange={(e) => onMovedToNewShelf(book, e.target.value)}>
                            <option value='move' disabled>Move to...</option>
                            <option value='currentlyReading'>Currently Reading</option>
                            <option value='wantToRead'>Want To Read</option>
                            <option value='read'>Read</option>
                        </select>
                    </div>
                </div>
                <p className='book-title'>{book.title}</p>
                <p className='book-author'>{book.authors.join(', ')}</p>
            </div>
        );
    }
}

export default Book;