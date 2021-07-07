// Importing depedancies
import styled from "styled-components";

// Building button component
export const Button = styled.button`
  height: 100px;
  width: 400px;
  background-color: ${(props) => props.bgc};
  &:hover {
    background-color: red;
  }
`;
