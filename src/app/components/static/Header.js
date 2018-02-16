import React, { Component } from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';


class Header extends Component {

    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>Open Data Philippines</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Nav>
                    <NavItem  onClick={this.props.clicked} href="">
                        Table
                    </NavItem>
                    <NavItem  onClick={this.props.clicked} href="">
                        Chart
                    </NavItem>
                </Nav>
            </Navbar>);
    }


}

export default Header;
