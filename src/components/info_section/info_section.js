import React from "react";
import { Container } from "../../global_styles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
} from "./info_section.elements";

const InfoSection = ({ lightBg, imgStart }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
