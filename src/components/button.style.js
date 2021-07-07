// Importing dependancies
import styled from "styled-components";

// Building components
export const Button = styled.button`
  max-height: 40px;
  min-width: 100px;
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: green;
  }
`;
