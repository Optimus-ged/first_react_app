// Imporing dependancies
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
} from "./navbar.elements";

// Building components
const Navbar = () => {
  // Making use of useState
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Optimus Ged
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
