// Importing dependancies
import styled, { createGlobalStyle } from "styled-components";

// Building all global styles for all components
const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

// Building the container component
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export default GlobalStyle;
