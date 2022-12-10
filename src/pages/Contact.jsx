import React, { useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Page = styled.section``;
const Main = styled.main`
  margin: 8rem 0;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 769px) {
    padding: 0 15px;
  }
`;

const HelpCenterHeader = styled.div`
  align-items: center;
  background: #f9f9f9;
  display: flex;
  height: 160px;
  justify-content: space-between;
  // padding: 0 72px;
`;

const Header = styled.h1`
  font-size: 60px;
  font-weight: 400;
  letter-spacing: -1.52px;
  line-height: 82px;
  margin-bottom: 0;

  @media (max-width: 769px) {
    font-size: 32px;
    text-align: center;
  }
`;

const Guarantee = styled.div`
  margin-top: 2rem;
`;

const SubHeader = styled.h2``;

const Other = styled.div`
  margin: 5rem 0;
  font-size: 1.5rem;
`;

const ContentDiv = styled.p`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
`;

const Paragraph = styled.p``;

const Contact = () => {
  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  useEffect(() => {
    document.title = `Contact Us — Hashingmart`;
  });

  return (
    <Page>
      <Announcement />
      <Navbar />
      <Main>
        <HelpCenterHeader>
          <Wrapper>
            <Header>Help Center</Header>
          </Wrapper>
        </HelpCenterHeader>
        <Wrapper>
          <Guarantee>
            <SubHeader>Guarantee</SubHeader>
            <Paragraph>
              All of our products come with a guarantee. Request a replacement
              or refund if one of our goods does not meet your expectations when
              you first acquire it or if it does not function as expected.
              Damage from transportation or general wear and tear will be
              repaired or replaced for a fair price.
            </Paragraph>
          </Guarantee>
          <Other>
            <ContentDiv>
              <Paragraph>
                To edit or cancel an order, please email us at
                help@hashingmart.com within 24 hours of placing an order or open
                live chat
              </Paragraph>
              <Paragraph>
                Calls?&nbsp;<a href="tel:7609355809">(760) 935-5809</a>
              </Paragraph>
              <Paragraph>
                Monday - Friday 5AM - 5PM CST
                <br />
                Saturday - Sunday 7AM - 4PM CST
              </Paragraph>
              <br />
              <Paragraph>HASHINGMART</Paragraph>
              <Paragraph>
                1629 K Street NW, Suite 300
                <br />
                Washington, DC 20006
              </Paragraph>
            </ContentDiv>
          </Other>
        </Wrapper>
      </Main>
      <Footer />
    </Page>
  );
};

export default Contact;
