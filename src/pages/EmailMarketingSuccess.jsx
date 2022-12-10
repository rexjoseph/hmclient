import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";

const Page = styled.section``;

const EmailSignUp = styled.div`
  background-color: rgb(248, 247, 245);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-height: 357px;
  margin-top: 5rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin: 0px auto;
  -webkit-box-pack: center;
  justify-content: center;
`;

const GridCell = styled.div`
  @media (min-width: 992px) {
    width: 66.6667%;
  }

  position: relative;
  width: 100%;
  display: block;
`;

const GridcellContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 48px 24px;
`;

const Row = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    align-items: flex-start;
    -webkit-box-pack: center;
    justify-content: center;
  }
  margin-bottom: 24px;
`;

const Div = styled.div``;

const Header = styled.h2`
  font-weight: 700;
  font-size: 25px;
  line-height: 1.32;
  letter-spacing: 0.5px;
  color: var(--color-primary);
  margin-bottom: 0px;
  margin-top: 30px;
  padding: 0px;

  @media (min-width: 992px) {
    font-size: 32px;
    line-height: 1.31;
  }
`;

const Paragraph = styled.p`
  font-weight: 400;
  color: var(--color-primary);
  line-height: 1.5;
  font-size: 16px;
  letter-spacing: 0.5px;
  // margin: 0px 0px 18px;
  margin-bottom: 30px;
  padding: 0px;
`;

const QuickDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-bottom: 48px;
`;

const Link = styled.a`
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  padding: 13px 18px;
  font-weight: 600;
  border: 2px solid var(--brand-blue);
  border-radius: 2px;
  color: #fff;
  border-color: var(--brand-blue);
  background-color: var(--brand-blue);
  transition: color 0.25s ease-out, background-color 0.25s ease-out,
    border-color 0.25s ease-out;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
    background: none;
  }
`;

const EmailMarketingSuccess = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/');
  }

  return (
    <Page>
      <Announcement />
      <Navbar />
      <EmailSignUp>
        <Container>
          <Grid>
            <GridCell>
              <GridcellContainer>
                <Row>
                  <Div>
                    <Header>It's Official</Header>
                    <Paragraph>
                      Wow, new friends. Stay tuned, we’ll get in touch soon.
                    </Paragraph>
                    <QuickDiv>
                      <Link onClick={handleClick}>Home</Link>
                    </QuickDiv>
                  </Div>
                </Row>
              </GridcellContainer>
            </GridCell>
          </Grid>
        </Container>
      </EmailSignUp>
      <Footer />
    </Page>
  );
};

export default EmailMarketingSuccess;
