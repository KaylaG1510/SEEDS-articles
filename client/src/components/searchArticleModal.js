import React, { Component } from 'react';
import {
    Button,
    Container,
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { searchArticles } from '../actions/articleActions';

class SearchArticleModal extends Component {
    state = {
        practice: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.practice]: e.target.value })
        console.log(this.state.practice)
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.searchArticles(this.state.practice);
    }

    // onSubmit = e => {
    //     e.preventDefault();

    //     const newArticle = {
    //         title: this.state.title,
    //         author: this.state.author,
    //         year: this.state.year,
    //         practice: this.state.practice,
    //         claim: this.state.claim,
    //         strength: this.state.strength
    //     }

    //     //Add article via new article action
    //     this.props.addArticle(newArticle);

    //     //close modal
    //     this.toggle();
    // }

    render() {
        const { articles } = this.props.article;
        return (
            <div>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
                >Search Practice</Button>

                <Modal
                contentClassName="custom-modal-style"
                isOpen={this.state.modal}
                toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Search SE Practice</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="practice"></Label>
                                <Input
                                    type="text"
                                    name="practice"
                                    id="practice"
                                    placeholder="SE Practice"
                                    onChange={this.onChange}
                                    onSubmit={this.onSubmit}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Search Practice</Button>
                            </FormGroup>
                        </Form>
                        {/* DIV HERE THAT DISPLAYS OUTPUT TABLE */}
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
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    article: state.article
});

export default connect(mapStateToProps, { searchArticles })(SearchArticleModal);