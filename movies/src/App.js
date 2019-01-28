import React, { Component } from 'react';
import { Header, MoviesLists, MoviesDetails, MoviesElements } from './components';
import logo from './logo.svg';
import './App.css';
//import MoviesList from './components/movies-lists/MoviesLists';
//import MoviesDetails from './components/movies-details/MoviesDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <MoviesLists />
        <MoviesDetails />
        <MoviesElements />


      </div>
    );
  }
}

export default App;
// 1. instancier les component header movielist etc..
// 2. importer les components  pq les composant dans app.js n'esxiste pas
// 3. deux façon de les exporters
// 3. 1 façon = import Header from '.components/header/Header'; //on ne precise pas d'index
// 3. 2 façon = avec index 