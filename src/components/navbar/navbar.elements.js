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

// Building the icon for mobile, it will be displaying
// only when the screen width will turn at 960px
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

// Building the navigatoion bar Menu
export const NavMenu = styled.div`
  display: flex;
  list-style: none;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

// Building the navigation Items
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

// Building the Navigation items links
export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0.5rem 1rem;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

// Building the Navigation item button
export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 100%;
  }
`;

// Building the navigation button link
export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
