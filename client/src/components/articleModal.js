import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addArticle } from '../actions/articleActions';

class ArticleModal extends Component {
    state = {
        modal: false,
        title: '',
        author: '',
        year: 0,
        practice: 'TDD',
        claim: '',
        strength: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChangeTitle = (e) => {
        // this.setState({ [e.target.title]: e.target.value })
        this.setState({
            title: e.target.value
        })
    }

    onChangeAuthor = (e) => {
        // this.setState({ [e.target.author]: e.target.value })
        this.setState({
            author: e.target.value
        })
    }

    onChangeYear = (e) => {
        // this.setState({ [e.target.year]: e.target.value })
        this.setState({
            year: e.target.value
        })
    }

    onChangePractice = (e) => {
        // this.setState({ [e.target.practice]: e.target.value })
        this.setState({
            practice: e.target.value
        })
    }

    onChangeClaim = (e) => {
        // this.setState({ [e.target.claim]: e.target.value })
        this.setState({
            claim: e.target.value
        })
    }

    onChangeStrength = (e) => {
        // this.setState({ [e.target.strength]: e.target.value })
        this.setState({
            strength: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const newArticle = {
            id: uuid(),
            title: this.state.title,
            author: this.state.author,
            year: this.state.year,
            practice: this.state.practice,
            claim: this.state.claim,
            strength: this.state.strength
        }

        //Add article via new article action
        this.props.addArticle(newArticle);

        //close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
                >Add Article</Button>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Article</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="title"></Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={this.state.title}
                                    placeholder="Article title"
                                    onChange={this.onChangeTitle}
                                />
                                <Label for="author"></Label>
                                <Input
                                    type="text"
                                    name="author"
                                    id="author"
                                    value={this.state.author}
                                    placeholder="Article author(s)"
                                    onChange={this.onChangeAuthor}
                                />
                                <Label for="year"></Label>
                                <Input
                                    type="text"
                                    name="year"
                                    id="year"
                                    value={this.state.year}
                                    placeholder="Article Publication Year"
                                    onChange={this.onChangeYear}
                                />
                                <Label for="practice"></Label>
                                <Input
                                    type="text"
                                    name="practice"
                                    id="practice"
                                    value={this.state.practice}
                                    placeholder="SE Practice"
                                    onChange={this.onChangePractice}
                                />
                                <Label for="claim"></Label>
                                <Input
                                    type="text"
                                    name="claim"
                                    id="claim"
                                    value={this.state.claim}
                                    placeholder="Article SE claim"
                                    onChange={this.onChangeClaim}
                                />
                                <Label for="strength"></Label>
                                <Input
                                    type="text"
                                    name="strength"
                                    id="strength"
                                    value={this.state.strength}
                                    placeholder="Article Strength"
                                    onChange={this.onChangeStrength}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Article</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    article: state.article
});

export default connect(mapStateToProps, { addArticle })(ArticleModal);