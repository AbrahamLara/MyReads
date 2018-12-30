# MyReads Project

This is my project for Udacity's React Fundamental's course utilizing their BooksAPI. This app allows users to put books into three different shelves ('Currently Reading', 'Want to Read', 'Read'). Each book has a dropdown that allows users to change the shelf they belong in or to no shelf. In the Search page users can search for books and add them to a shelf if they are already not in one or change which shelf they belong in even in the search page.

## Backend Server
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## How to Setup

* install all project dependencies with `npm install`
* start the development server with `npm start`