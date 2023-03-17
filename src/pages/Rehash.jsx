import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Page = styled.section``;
const RehashDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 65px;
  margin-top: 100px;
`;

const RehashHeader = styled.div``;

const Title = styled.h2`
  max-width: 630px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  line-height: 1.4;
  font-size: 2.5rem;
  font-weight: 700;
`;

const RehashDescription = styled.div`
  max-width: 860px;
  padding: 20px 0;
  text-align: center;
  font-weight: 400;
  line-height: 1.4;
`;

const Paragraph = styled.p``;

const SoonDiv = styled.div`
  font-weight: 700;
  font-style: italic;
  margin-top: 2rem;
`;

const Rehash = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = `Rehash - Renew, Recycle & Fix Your Faves — Hashingmart`;
  });

  return (
    <Page>
      <Announcement />
      <Navbar />
      <RehashDiv>
        <RehashHeader>
          <Title>ReHash is Hashingmart's hub for keeping faves in play</Title>
        </RehashHeader>
        <RehashDescription>
          <Paragraph>
            Why should our faves have an extended lifespan? Because reducing our
            consumption and making better use of the items we currently own are
            the best things we can do for the environment.
            <br />
            <br />
            Join us to fix, renew and recycle your faves.
          </Paragraph>
          <SoonDiv>
            <Paragraph>Hub launching soon</Paragraph>
          </SoonDiv>
        </RehashDescription>
      </RehashDiv>
      <Footer />
    </Page>
  );
};

export default Rehash;
