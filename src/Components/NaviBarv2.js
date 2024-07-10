import React, {useState} from "react";
import {Navbar, Nav, Button, Container, NavDropdown, OverlayTrigger, Tooltip, Modal, Image, Stack} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ".././styles.css";
import ip_head from "../images/ip_head.png"

const setActive=({isActive}) => isActive ? 'active-link' : 'non-active';

function NaviBarv2() {

  return (

    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container className="py-1">
        <Navbar.Brand className="text-white">
        <Stack direction="horizontal" gap={3}>
        <Image variant="bottom" className = ""
          src={ip_head}
          fluid
          style={{ width: '5rem' }, {height: '5rem'}}
          />{' '}
          <h3></h3></Stack></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" className="justify-content-end flex-grow-1 pe-4">
          <Nav.Link><NavLink to="/" className={setActive} ><h5>Главная</h5></NavLink></Nav.Link>
          <Nav.Link><NavLink to="/modeling" className={setActive}><h5>Моделирование</h5></NavLink></Nav.Link>
          <Nav.Link><NavLink to="/data"
          className={setActive}><h5>Данные</h5></NavLink></Nav.Link>
          <h5><NavDropdown title={<span className="fdrop">Статистика</span>} id="collasible-nav-dropdown">
            <NavDropdown.Item> <NavLink to="/statistics" className={({isActive}) => isActive ? 'active-dropdown' : 'non-active-dropdown'} >Коронавирус</NavLink></NavDropdown.Item>
          </NavDropdown></h5>
          <div class="header__lang">
                    <a href="/" class="header__lang-link active">RU</a>
                    <span>|</span>
                    <a href="/EN/" class="header__lang-link">EN</a>
                </div>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default NaviBarv2;

