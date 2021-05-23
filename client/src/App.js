import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavBar from './components/navbar.component';
import ArticlesList from "./components/articles-list.component";

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <ArticlesList />
      {/* <Route path="/" exact component={ArticlesList}/> */}
    </div>
  );
}

export default App;
