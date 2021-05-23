import React, { Component } from 'react';
import axios from 'axios';

export default class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePractice = this.onChangePractice.bind(this);
    this.onChangeClaim = this.onChangeClaim.bind(this);
    this.onChangeStrength = this.onChangeStrength.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      author: '',
      year: 0,
      practice: 'TDD',
      claim: '',
      strength: '',
      users: [],
      strengths: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4969/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
      axios.get('http://localhost:4969/strengths/')
       .then(response => {
           if (response.data.length > 0) {
               this.setState({
                   strengths: response.data.map(strength => strength.strength),
                   strength: response.data[0].strength
               })
           }
       })
       .catch((error) => {
           console.log(error);
       })
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    })
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value
    })
  }

  onChangePractice(e) {
    this.setState({
      practice: e.target.value
    })
  }

  onChangeClaim(e) {
      this.setState({
          claim: e.target.value
      })
  }

  onChangeStrength(e) {
      this.setState({
          strength: e.target.value
      })
  }

  onSubmit(e) {
    e.preventDefault();

    const article = {
      title: this.state.title,
      author: this.state.author,
      year: this.state.year,
      practice: this.state.practice,
      claim: this.state.claim,
      strength: this.state.strength
    }

    console.log(article);

    axios.post('http://localhost:4969/articles/add', article)
      .then(res => console.log(res.data))
      .catch(error => console.log(error));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Article</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Title: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div> 
        <div className="form-group"> 
          <label>Author: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
              />
        </div>
        <div className="form-group">
          <label>Year: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeYear}
              />
        </div>
        {/* <div className="form-group"> 
          <label>Practice: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.practice}
              onChange={this.onChangePractice}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div> */}
        <div className="form-group">
          <label>Practice: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.practice}
              onChange={this.onChangePractice}
              />
        </div>
        <div className="form-group"> 
          <label>Claim: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.claim}
              onChange={this.onChangeClaim}
              />
        </div>
        <div className="form-group"> 
          <label>Strength: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.strength}
              onChange={this.onChangeStrength}>
              {
                this.state.strengths.map(function(strength) {
                  return <option 
                    key={strength}
                    value={strength}>{strength}
                    </option>;
                })
              }
          </select>
        </div>
        {/* <div className="form-group"> 
          <label>Strength: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.strength}
              onChange={this.onChangeStrength}
              />
        </div> */}
        <div className="form-group">
          <input type="submit" value="Submit Article" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}