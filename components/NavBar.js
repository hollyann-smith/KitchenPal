/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>KitchenPal</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/inventory">
              <Nav.Link>Inventory</Nav.Link>
            </Link>
            <Link passHref href="/equipment">
              <Nav.Link>Equipment</Nav.Link>
            </Link>
            <Link passHref href="/recipes">
              <Nav.Link>Recipes</Nav.Link>
            </Link>
            <Link passHref href="/equipment">
              <Nav.Link>Equipment</Nav.Link>
            </Link>
            <Link passHref href="/recipes">
              <Nav.Link>Recipes</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
