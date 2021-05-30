import React, { Component } from 'react';
import { Container, Form, FormGroup, Button, Table, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getArticles } from '../actions/articleActions';
import { searchArticles } from '../actions/articleActions';
import  PropTypes from 'prop-types';

class ArticlesList extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  handleSearch(e) {
    console.log(e.currentTarget.value);
    // const { articles } = this.props.getArticles();
    const searchTerm = e.currentTarget.value;
    searchArticles(searchTerm);
  }

  filterContent(articles, searchTerm) {
    const result = articles.filter((article) => article.practice.includes(searchTerm));
    this.setState({ articles: result });
  }

  render() {
    const { articles } = this.props.article;
    return(
      <Container>
        <h3> SEEDS Articles </h3>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="practice"></Label>
              <Input
                type="text"
                name="practice"
                id="practice"
                placeholder="SE Practice"
                onChange={this.handleSearch}
              /><br />
            {/* <Button
              color="dark"
              style={{marginTop: '2rem'}}
              block
            >Search Practice</Button> */}
          </FormGroup>
        </Form>
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
  article: PropTypes.object.isRequired,
  searchArticles: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  article: state.article
});

export default connect(mapStateToProps, { getArticles, searchArticles })(ArticlesList);
//to add article or delete article, need to add as a param to this connect method
//ie : { getArticles } becomes { getArticles, deleteArticle }