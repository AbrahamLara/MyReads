import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchPage extends Component {
    state = {
        search_query: '',
        results: [],
    }

    updateSearchQuery = (query) => {
        this.setState({
            search_query: query,
        });
    }

    render() {
        return (
            <div>
                <div className='search-bar'>
                    <Link to='/'>
                        <button className='search-page-back-button'>Back</button>
                    </Link>
                    <input
                        value={this.state.search_query}
                        onChange={(e) => this.updateSearchQuery(e.target.value)}
                        placeholder='Search by title or author'
                        className='search-page-input'
                    />
                </div>
                <div className='search-page-boobs'>
                    
                </div>
            </div>
        );
    }
}

export default SearchPage;