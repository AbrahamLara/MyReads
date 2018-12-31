import React from 'react';
import './css/BookShelf.css';
import Book from './Book';

const BookShelf = ({ books, onBookMoved, name }) => {
    return (
        <div className='myreads-bookshelf'>
            <header className='myreads-bookshelf-header'><strong>{name}</strong></header>
            <ul className='myreads-bookshelf-books'>
                {books.map((book) => (
                    <li key={book.id} className='myreads-bookshelf-book'>
                        <Book
                            key={book.id}
                            book={book}
                            onMovedToNewShelf={onBookMoved}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookShelf;