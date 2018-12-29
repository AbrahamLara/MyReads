import React, { Component } from 'react';
import './css/Book.css';

class Book extends Component {
    render() {
        const { book, onMovedToNewShelf } = this.props;
        const default_cover = 'https://books.google.com/books/content?id=NLK2AAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api';

        return (
            <div className='Book'>
                <div className='book-top'>
                    <img alt='Book Thumbnail' src={'imageLinks' in book ? book.imageLinks.thumbnail : default_cover} />
                    <div className='myreads-bookshelf-book-dropdown'>
                        <select defaultValue={'shelf' in book ? book.shelf : 'none'} onChange={(e) => onMovedToNewShelf(book, e.target.value)}>
                            <option value='move' disabled>Move to...</option>
                            <option value='currentlyReading'>Currently Reading</option>
                            <option value='wantToRead'>Want To Read</option>
                            <option value='read'>Read</option>
                            <option value='none'>none</option>
                        </select>
                    </div>
                </div>
                <p className='book-title'>{book.title}</p>
                <p className='book-author'>{'authors' in book ? book.authors.join(', ') : 'No authors to display'}</p>
            </div>
        );
    }
}

export default Book;