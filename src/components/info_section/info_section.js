import React from "react";
import { Container } from "../../global_styles";
import { InfoSec } from "./info_section.elements";

const InfoSection = ({ lightBg }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>Optimus the best</TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
