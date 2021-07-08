// Importing dependancies
import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Container } from "../../global_styles";
import { Link } from "react-router-dom";

// Building the nav elements
export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 500;
`;

// Building the navbar container
export const NavbarContainer = styled(Container)`
  height: 80px;
  justify-content: space-between;
  display: flex;
  ${Container}
`;

// Builing the navLogo element
export const NavLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  align-items: center;
  text-decoration: none;
`;

// Building the nav icon element
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;
