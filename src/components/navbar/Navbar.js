import React, { useState } from "react";
import { Logo, MenuLink, Nav, Menu, Hamburger } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <i>{"<Clarusway>"}</i>
        <span>Recipe</span>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/about" onClick={() => setIsOpen(!isOpen)}>
          About
        </MenuLink>
        <MenuLink
          to={{ pathname: "https://github.com/orgs/clarusway/dashboard" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Github
        </MenuLink>
        <MenuLink to="/login" onClick={() => setIsOpen(!isOpen)}>
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
