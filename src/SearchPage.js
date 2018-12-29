import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import debounce from './debounce';
import './css/SearchPage.css';

class SearchPage extends Component {
    state = {
        search_query: '',
        results: [],
    }

    makeQuery = debounce(() => {
        const search_query = this.state.search_query;
        if (search_query === '') {
            this.setState({
                results: [],
            });
            return;
        }

        BooksAPI.search(search_query).then((books) => {
            if (typeof books === 'object' && !('error' in books)) {
                this.setState({
                    results: books,
                });
            }
        });
    }, 500)

    render() {
        const results = this.state.results;

        return (
            <div>
                <div className='search-bar'>
                    <Link to='/'>
                        <button className='search-page-back-button'>Back</button>
                    </Link>
                    <input
                        onChange={(e) => {this.setState({search_query: e.target.value})}}
                        onKeyUp={this.makeQuery.bind(this)}
                        placeholder='Search by title or author'
                        className='search-page-input'
                    />
                </div>
                <div className='search-page-books'>
                    {results.map((book) => (
                        <Book
                            key={book.id}
                            book={book}
                            onMovedToNewShelf={() => {}}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default SearchPage;