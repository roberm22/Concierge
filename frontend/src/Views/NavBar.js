import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class NavBar extends React.Component {

    render() {

        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">

                <LinkContainer to="/">
                    <Navbar.Brand>Concierge</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <LinkContainer to="/services/transport/">
                            <Nav.Link>Transports</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/services/restaurants/">
                            <Nav.Link>Restaurants</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/services/room_services/">
                            <Nav.Link>Room Services</Nav.Link>
                        </LinkContainer>

                    </Nav>
                    <Nav className="justify-content-end">
                        {((this.props.isLogged) && (this.props.points !== undefined)) ?
                            <LinkContainer to="/shopping/">
                                <Nav.Link>Points: {this.props.points}</Nav.Link>
                            </LinkContainer>
                            : null
                        }
                        <LinkContainer to="/profile/">
                            <Nav.Link><AccountCircleIcon/></Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
