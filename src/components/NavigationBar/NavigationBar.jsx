import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavigationBar.module.scss';

const NavigationBar = () => {
  return (
    <Navbar expand="md" className={`bg-body-tertiary ${classes['navigation-bar']}`} data-bs-theme="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand className='me-5 fs-4 fw-bold'><Link to="/">Movies</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='mx-3'>Home</NavLink>
            <NavLink to="/movies" className='mx-3'>Movies</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
