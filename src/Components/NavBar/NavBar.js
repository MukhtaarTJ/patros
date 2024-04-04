import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className={` ${styles.navbar}`}>
        <Container >
          <Navbar.Brand href="#" className={`text-white font-weight-bolder text-uppercase ms-5  fs-2 ${styles.nav_brand}`}>PATROS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className={`  my-2 my-lg-0 ${styles.nav}`}
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Nav.Link href="#action1" className={`text-white pe-4 ${styles.nav_links}`}>HOME</Nav.Link>
              <Nav.Link href="#action2" className={`text-white pe-4  ${styles.nav_links}`}>ABOUT</Nav.Link>
              <Nav.Link href="#action2" className={`text-white pe-4  ${styles.nav_links}`}>SERVICES</Nav.Link>
              <Nav.Link href="#action2" className={`text-white pe-4  ${styles.nav_links}`}>TEAM</Nav.Link>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
