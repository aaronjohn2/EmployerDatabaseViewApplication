import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import * as auth from "../firebase/auth";

class Navbar1 extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">EDVA</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/Dashboard/">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Home/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/aaronjohn2/EmployerDatabaseViewApplication.git">Github</NavLink>
                            </NavItem>
                            <NavItem>
                                <button
                                    className="btn__logout"
                                    onClick={() => auth.getAuth().signOut()}
                                >
                                    Logout
                                </button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

 export default Navbar1;