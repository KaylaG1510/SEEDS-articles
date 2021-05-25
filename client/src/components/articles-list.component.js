import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Button, Table } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getArticles } from '../actions/articleActions';
import  PropTypes from 'prop-types';

class ArticlesList extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    const { articles } = this.props.article;
    return(
      <Container>
        <h3> All Articles </h3>
        <Table striped bordered hover>
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Practice</th>
              <th>Claim</th>
              <th>Strength</th>
              </tr>
          </thead>
          <tbody>
            {articles.map(({id, title, author, year, practice, claim, strength}) => (
              <tr>
                <td>{ title }</td>
                <td>{ author }</td>
                <td>{ year }</td>
                <td>{ practice }</td>
                <td>{ claim }</td>
                <td>{ strength }</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

ArticlesList.propTypes = {
  getArticles: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  article: state.article
});

export default connect(mapStateToProps, { getArticles })(ArticlesList);
//to add article or delete article, need to add as a param to this connect method
//ie : { getArticles } becomes { getArticles, deleteArticle }