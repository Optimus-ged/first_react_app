import React from "react";
import GlobileStyles from "../../GlobileStyles";
import {
  Wrapper,
  LoginContainer,
  ReviewTitle,
  ReviewUnderline,
  AuthorWrapper,
  BackgroundContainer,
  ImgContainer,
  CiteContainer,
  AuthorName,
  Role,
  AboutDev,
  SupriseMeButton,
} from "./LoginElement";

const LoginPage = () => {
  return (
    <>
      <GlobileStyles />
      <Wrapper>
        <LoginContainer>
          <ReviewTitle>Our reviews</ReviewTitle>
          <ReviewUnderline />
          <AuthorWrapper>
            <BackgroundContainer>
              <ImgContainer>
                <CiteContainer>''</CiteContainer>
              </ImgContainer>
            </BackgroundContainer>
            <AuthorName>Optimus ged</AuthorName>
            <Role>WEB DEVELOPER</Role>
            <AboutDev>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              laboriosam vitae ipsum, optio quae eos beatae odit, doloribus amet
              dicta eveniet unde dolor exercitationem fugit sint, odio
              laudantium! Perspiciatis, impedit?
            </AboutDev>
            <SupriseMeButton>Suprise me</SupriseMeButton>
          </AuthorWrapper>
        </LoginContainer>
      </Wrapper>
    </>
  );
};

export default LoginPage;
