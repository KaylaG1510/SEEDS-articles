import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">SEEDS</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className = "ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/KaylaG1510/SEEDS-articles">GitHub</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Articles</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/search">Search Articles</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink href="/create">Add Article</NavLink>
                            </NavItem> */}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
}


export default AppNavBar;
