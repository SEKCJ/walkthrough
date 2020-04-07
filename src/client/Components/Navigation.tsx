import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IAppProps } from '../App';

const Navigation: React.FC<IAppProps> = props => {

    const [nav1Style, setNav1Style] = useState({})
    const [nav2Style, setNav2Style] = useState({})
    const [nav3Style, setNav3Style] = useState({})
    const [nav4Style, setNav4Style] = useState({})

    let handleMouseEnter = (id: number) => {

    }
    return (
        <Navbar variant="light" bg="success" expand="lg" className="sticky-top">
            <Navbar.Brand href="/veggies">VG Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navigation"/>
            <Navbar.Collapse id="navigation">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/"><h5>Help Me Choose</h5></Nav.Link>
                    <Nav.Link as={Link} to="/veggies">My Veggies</Nav.Link>
                    <Nav.Link as={Link} to="/">Calendar</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown className="mr-auto" title="Profile" id="profile-dropdown">
                        <NavDropdown.Item>My Profile</NavDropdown.Item>
                        <NavDropdown.Item>My Garden</NavDropdown.Item>
                        <NavDropdown.Item>Saved Veggies</NavDropdown.Item>
                        <NavDropdown.Item>Settings</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/">Community Garden</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar >
    )
}

export default Navigation;