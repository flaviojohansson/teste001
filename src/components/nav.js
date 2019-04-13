import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    Nav,
    Container,
} from 'react-bootstrap'

const links = [
    { href: '/', label: 'Home' },
    { href: '/signin', label: 'Signin' },
]

const nav = () => {
  return (
    <Navbar collapseOnSelect bg="light" variant="light" expand="md" sticky="top">
        <Container>
            <NavLink to="/">
                <Navbar.Brand to="/">
                    <div>Hello Bill</div>
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto bold">
                    {links.map((link, idx) => {
                        return (
                            <NavLink
                                exact
                                key={idx}
                                to={link.href}
                                activeClassName="active-link">
                                {link.label}
                            </NavLink>
                        )
                    })}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default nav;