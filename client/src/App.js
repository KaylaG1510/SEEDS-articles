import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'; 
import { Container } from 'reactstrap';

import AppNavBar from './components/navbar.component';
import ArticlesList from "./components/articles-list.component";
import ArticleModal from './components/articleModal'
import SearchArticleModal from './components/searchArticleModal';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <AppNavBar />
      <Container>
        <ArticleModal />
        <SearchArticleModal />
        <ArticlesList />
      </Container>
      {/* <Route path="/" exact component={ArticlesList}/> */}
    </div>
    </Provider>
  );
}

export default App;
