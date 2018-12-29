import React, { Component } from 'react';
import './css/BookShelf.css';
import Book from './Book';

class BookShelf extends Component {
    render() {
        const { books, id, onBookMoved } = this.props;

        return (
            <div className='myreads-bookshelf'>
                <header className='myreads-bookshelf-header'><strong>{this.props.name}</strong></header>
                <ul className='myreads-bookshelf-books'>
                    {books.map((book) => (
                        <li key={book.id} className='myreads-bookshelf-book'>
                            <Book
                                key={book.id}
                                shelf={id}
                                cover={book.imageLinks.thumbnail}
                                book={book}
                                onMovedToNewShelf={onBookMoved}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BookShelf;