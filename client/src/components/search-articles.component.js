import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchField from "react-search-field";

export default class SearchArticle extends Component {
  constructor(props) {
    super(props);

    this.onEnter = this.onEnter.bind(this);

    this.state = {
      title: '',
      practice: 'TDD',
      articles: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/articles/')
      .then(response => {
        this.setState({ articles: response.data })
        console.log("component mounted :D")
        console.log(response.data)
        // console.log(articles)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onEnter(e) {
    console.log(e.searchText)
    this.setState({
      // practice: searchText 
    })

    axios.get('/')
      .then((response) => {
        const data = response.data
        this.setState({ articles: data })
        this.displayArticles(this.state.articles)
        console.log("Data received")
      })
      .catch(() => {
        alert("Error receiving data")
      });
  }

  displayArticles = (articles) => {
    if (!articles.length) return null;

    // articles.map((article, index) => {
    //   <div key={index}>
    //     <h3>article.title</h3>
    //     <p>article.practice</p>
    //   </div>
    // })
  };

  render() {
    return (
      <div>
        <h3>Search Articles</h3>
        <SearchField
          placeholder="Search..."
          onEnter={this.onEnter}
          onSearchClick={this.onEnter}
          onChange={this.onEnter}
          searchText="Search a practice here..."/>

          {/* {this.displayArticles()} */}
      </div>
    )
  }
}