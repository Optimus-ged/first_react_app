// Imporing dependancies
import React from "react";
import { Nav, NavbarContainer } from "./navbar.elements";

// Building components
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;