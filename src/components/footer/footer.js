import React from "react";
import { Button } from "../../global_styles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
} from "./footer.elements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Join our exclusive membership to receive the latest news and trends
          </FooterSubHeading>
          <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        </FooterSubscription>
        <Form>
          <FormInput name="email" type="email" placeHolder="Your email">
            <Button fontBig>Subscribe</Button>
          </FormInput>
        </Form>
      </FooterContainer>
    </>
  );
};

export default Footer;
