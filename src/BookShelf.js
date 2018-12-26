import React, { Component } from 'react';
import './BookShelf.css';

class BookShelf extends Component {
    render() {
        return (
            <div className='myreads-bookshelf'>
                <header className='myreads-bookshelf-header'><strong>{this.props.name}</strong></header>
                <div className='myreads-bookshelf-books'>
                    HELLO
                </div>
            </div>
        );
    }
}

export default BookShelf;