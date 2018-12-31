import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import './css/SearchPage.css';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_query: '',
            results: [],
        }
        this.timeout = null;
    }
    
    /**
	 * @description Makes search query after 500ms once the user has finished typing
	 */
    makeQuery = (query) => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            query = query === '' ? ' ' : query;

            BooksAPI.search(query).then((books) => {
                if (typeof books !== 'object' || ('error' in books)) {
                    books = [];
                }

                this.setState({
                    results: books,
                    search_query: query,
                });
            });
        }, 500);
    }

    render() {
        const { results } = this.state;
        const { bookShelves, onBookMoved } = this.props;
        
        return (
            <div>
                <div className='search-bar'>
                    <Link to='/'>
                        <button className='search-page-back-button'>Back</button>
                    </Link>
                    <input
                        onChange={(e) => {this.makeQuery(e.target.value)}}
                        placeholder='Search by title or author'
                        className='search-page-input'
                    />
                </div>
                <div className='search-page-books'>
                    {results.map((book) => {
                        if (bookShelves[book.id]) {
                            book['shelf'] = bookShelves[book.id];
                        }

                        return (
                        <Book
                            key={book.id}
                            book={book}
                            onMovedToNewShelf={onBookMoved}
                        />
                    )})}
                </div>
            </div>
        );
    }
}

export default SearchPage;