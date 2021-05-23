import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Button, Table } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

class ArticlesList extends Component {
  state = {
    articles: [
      {id: uuid(), 
        title: 'The Cat in The Hat', 
        author: 'Dr. Seuss',
        year: 2000, 
        practice: 'TDD',
        claim: 'Teamwork makes the dream work',
        strength: 'Moderately supports'},
      {id: uuid(), 
        title: 'Thrawn',
        author: 'Timothy Zahn',
        year: 2017,
        practice: 'TDD',
        claim: 'Thrawn is better than Tarkin',
        strength: 'Strongly suppports'},
      {id: uuid(), 
        title: 'Thrawn: Alliances',
        author: 'Timothy Zahn',
        year: 2018,
        practice: 'TDD',
        claim: 'Thrawn knows what happened to Vader',
        strength: 'Weakly supports'}
    ]
  }

  render() {
    const { articles } = this.state;
    return(
      <Container>
        <h3> All Articles </h3>
        {/* <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Item');
            if(name) {
              this.setState(state => ({
                articles: [...state.articles, { id: uuid(), name: name }]
              }));
            }
          }}
        >Add Article</Button> */}
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

        {/* <ListGroup>
          <TransitionGroup classNames="article-list">
            {articles.map(({id, title, author, practice}) => (
              <CSSTransition key={id}timeout={500} classNames="fade">
                <ListGroupItem>
                  {title}, {author}, {practice}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup> */}
      </Container>
    );
  }
}

export default ArticlesList;