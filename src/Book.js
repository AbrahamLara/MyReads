import React from 'react';
import './css/Book.css';

const default_cover = 'https://books.google.com/books/content?id=NLK2AAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'

const Book = ({ book, onMovedToNewShelf }) => {
    const exists = key => key in book;
    const { imageLinks, title } = book;
    // Results in Search page that don't have a cover, shelf, or authors are given default values
    const cover = exists('imageLinks') ? imageLinks.thumbnail : default_cover;
    const shelf = exists('shelf') ? book.shelf : 'none';
    const authors = exists('authors') ? book.authors.join(', ') : 'No authors to display';

    return (
        <div className='Book'>
            <div className='book-top'>
                <img alt='Book Thumbnail' src={cover} />
                <div className='myreads-bookshelf-book-dropdown'>
                    <select defaultValue={shelf} onChange={(e) => onMovedToNewShelf(book, e.target.value)}>
                        <option value='move' disabled>Move to...</option>
                        <option value='currentlyReading'>Currently Reading</option>
                        <option value='wantToRead'>Want To Read</option>
                        <option value='read'>Read</option>
                        <option value='none'>none</option>
                    </select>
                </div>
            </div>
            <div className='book-title'>{title}</div>
            <div className='book-author'>{authors}</div>
        </div>
    );
}

export default Book;