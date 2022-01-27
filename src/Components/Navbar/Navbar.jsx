import React, { useState } from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Search } from "..";
import logo from "../../Assets/Icons/logo.svg";
import style from "./Navbar.module.scss";
function MainNavbar({ getTerm, closeMenu }) {
  // const [open, setOpen] = useState(false);
  // const onToggleMenu = (state) => {
  //   setOpen(state);
  // };

  return (
    <Navbar className={style.mainNavbar} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} fluid loading="lazy" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={style.navContainer}>
          <Nav className={`m-auto`}>
            <Nav.Link href="/home">الرئيسية</Nav.Link>
            <Nav.Link href="/prices">الأسعار</Nav.Link>
            <Nav.Link href="/contact-us">كلم المبيعات</Nav.Link>
          </Nav>
          <Nav className={style.leftNav}>
            {/* <Nav.Link href="/track-containers">تتبع شحنتك</Nav.Link> */}
            <NavDropdown
              className={style.dropdownList}
              title="تتبع شحنتك"
              id="basic-nav-dropdown"
              // show={open}
              // onToggle={(e) => onToggleMenu(e)}
            >
              <Search getTerm={getTerm} />
            </NavDropdown>
            <Nav.Link href="/login">تسجيل الدخول</Nav.Link>
            <button className={style.langBtn}>ENG</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
