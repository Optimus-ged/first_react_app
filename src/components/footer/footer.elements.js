import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media sreen and (max-width:820px){
        flex-direction: column;
        width: 80%;
    }
`;
