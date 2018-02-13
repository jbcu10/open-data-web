import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';


class Header extends Component {

    render(){
        return(<Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a>Open Data Challenge</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
        </Navbar>);
    }

}

export default Header;
