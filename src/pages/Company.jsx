import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {mobile} from "../responsive"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faCertificate, faHeart, faTruck } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Announcement from "../components/Announcement";


const CompanyPage = styled.section``
const About = styled.section`
  margin-top: 10rem;
`

const Container = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;

  ${mobile({
    padding: "0 1.5rem"
  })}
`

const ContainerNoPad = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;

  ${mobile({
    padding: "0"
  })}
`
const AboutBody = styled.div`
  margin: 4rem auto;
`
const AboutMission = styled.h1`
  font-size: 4rem;
  text-align: center;

  ${mobile({
    fontSize: "2.5rem"
  })}
`
const AboutDivider = styled.div`
  border: 1px solid #333;
  display: block;
  width: 60px;
  height: 1px;
  border-right: 0;
  border-left: 0;
  border-bottom: 0;
  margin: 5px auto;
`
const AboutBodyTitle = styled.div`
  max-width: 50rem;
  margin: 3rem auto;
`
const AboutBodyHeading = styled.h1`
  text-align: center;
  font-style: italic;
  font-weight: 600;

  ${mobile({
    fontSize: "1.8rem"
  })}
`
const AboutParagraphBody = styled.div`
  max-width: 100rem;
  margin: 0 auto 5rem;
`
const AboutParagraph = styled.p``
const Br = styled.br``

const AboutMissionQuote = styled.h1`
  font-style: italic;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
`
const Value = styled.div``
const ValueUl = styled.ul`
  letter-spacing: .09375rem;
  padding-left: 0;
  background: var(--brand-blue);
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;

  @media (min-width: 769px) {
    flex-wrap: nowrap;
  }
`
const ValueLi = styled.li`
  width: 25%;
  color: #fff;
  text-align: center;
  padding: 1.5625rem 0.9375rem 2.1875rem;
  display: flex;

  ${mobile({
    width: "100%",
    justifyContent: "space-between"
  })}
`
const IconSet = styled.div`
  height: 2.375rem;
  margin: auto 0.625rem auto auto;
  width: 3.125rem;

  :not(:root) {
    overflow: hidden;
  }
`
const CopyWrap = styled.div`
  margin: auto auto auto 0.625rem;
  padding-top: 0.625rem;
  text-transform: uppercase;

  ${mobile({
    paddingTop: 0,
    marginLeft: "0.3125rem"
  })}
`
const CopyParagraph = styled.p`
  font-size: 1.2rem;
  max-width: 10.8125rem;
  width: 100%;
  margin: 0 auto;
  text-align: left;

  ${mobile({
    maxWidth: "11.25rem"
  })}
`
// const CompanyPage = styled.section``

const Company = () => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <CompanyPage>
      <Announcement />
      <Navbar />
      <About>
        <Container>
          <AboutBody>
            <AboutMission>
              Our Mission
            </AboutMission>
            <AboutDivider></AboutDivider>
            <AboutBodyTitle>
              <AboutBodyHeading>"Quality unscathed, everyday - for everyone including our habitat"</AboutBodyHeading>
            </AboutBodyTitle>
            <AboutParagraphBody>
              <AboutParagraph>
                Our mission for quality things in a sustainable way that amplifies nature's resources is what motivates us to design and deliver premium products. We do this with nature's resources and sustainable materials without the toxic stuff by working with creative and diverse team to create items that are more admirable with a touch of style, and having an effect on buyers everywhere.
              </AboutParagraph>
              <Br></Br>
              <AboutParagraph>
                Hashing Mart LLC, which comprises Hashingmart, is based in Washington DC.
              </AboutParagraph>
            </AboutParagraphBody>
            <AboutMissionQuote>
              "Eliminating the barrier"
            </AboutMissionQuote>
            <AboutParagraphBody>
              <AboutParagraph>
                Opting for a direct-to-consumer fulfilment model to cater for customer' exact needs on-demand with
                less compromise wherever in the world they may be.
              </AboutParagraph>
            </AboutParagraphBody>
          </AboutBody>
        </Container>
      </About>
      <Value>
        <ContainerNoPad>
          <ValueUl>
            <ValueLi>
              <IconSet>
                <FontAwesomeIcon icon={faTruck} />
              </IconSet>
              <CopyWrap>
                <CopyParagraph>Fast order fulfilment</CopyParagraph>
              </CopyWrap>
            </ValueLi>
            <ValueLi>
              <IconSet>
                <FontAwesomeIcon icon={faUndo} />
              </IconSet>
              <CopyWrap>
                <CopyParagraph>Quick returns worldwide</CopyParagraph>
              </CopyWrap>
            </ValueLi>
            <ValueLi>
              <IconSet>
                <FontAwesomeIcon icon={faCertificate} />
              </IconSet>
              <CopyWrap>
                <CopyParagraph>30 day guarantee on all products</CopyParagraph>
              </CopyWrap>
            </ValueLi>
            <ValueLi>
              <IconSet>
                <FontAwesomeIcon icon={faHeart} />
              </IconSet>
              <CopyWrap>
                <CopyParagraph>100% safe and secure checkout</CopyParagraph>
              </CopyWrap>
            </ValueLi>
          </ValueUl>
        </ContainerNoPad>
      </Value>
      <Footer />
    </CompanyPage>
  )
}

export default Company