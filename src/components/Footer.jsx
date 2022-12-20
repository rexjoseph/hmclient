import {useNavigate} from 'react-router-dom'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Wrapper = styled.footer`
  bottom: 0;
  left: 0;
  // position: fixed;
  right: 0;
  top: auto;
  z-index: 0;
  background: #fff;
  min-height: 600px;
  // padding: 0 0 83px;
  position: relative;
  width: 100%;
  clear: both;
`

const ContentWrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  height: 600px;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1250px;

  @media (max-width: 960px) {
    flex-direction: column;
    height: auto;
    margin: 0 auto;
    min-height: auto;
    width: 100%;
  }
`

const Content = styled.div`
  flex: 1 1;
  flex-direction: column;
  justify-content: center;
  max-width: 446px;
  padding: 0;
  display: flex;
  position: relative;
  width: 100%;

  @media (max-width: 519px) {
    padding: 48px 24px;
    &:after {
      background: #d2d2d2;
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`

const Heading = styled.h2`
  font-size: 60px;
  letter-spacing: -3.4px;
  margin: 0;
  font-weight: 400;

  @media (max-width: 519px) {
    font-size: 32px;
    letter-spacing: -1.6px;
    line-height: 1.08
  }
`

const Paragraph = styled.p`
  font-size: 13px;
  margin-top: 12px
  margin: 0 0 12px;
`

const LinksWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-start;
  margin-bottom: 10%;
`

const LinkBody = styled.ul`
  display: flex;
  height: 100%;
  flex: 2 1;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
`

const LinkHolder = styled.li`
  list-style-type: none;
  display: inline-block;
  width: fit-content;
`

const LinkA = styled.a`
  display: inline-block;
  height: 100%;
  line-height: 36px;
  margin-bottom: 12px;
  padding: 0 12px;
  white-space: nowrap;
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: var(--brand-blue);
  }
`

const LinkBodyOne = styled.ul`
  display: flex;
  height: 100%;
  flex: 1 1;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0
`

const Copywright = styled.div`
  bottom: 0;
  left: 0;
  padding: 0 0 0 12px;
  position: absolute;
`

const CopySpan = styled.span`
  font-size: 13px;
  letter-spacing: .25px;
`

const SocialIconUl = styled.ul`
  align-items: center;
  display: flex;
  margin: 16px 0 16px;
`

const SocialIconLi = styled.li`
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: center;
  margin: 0 48px 0 0;
  padding: 0;
  width: 20px;
  list-style-type: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: var(--brand-blue);
  }
`

const Footer = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <ContentWrap>
        <Content>
          <Heading>Drive The Impact</Heading>
          <Paragraph>Exclusive offers, a heads up on new things, innovations, and sightings of Hashingmart in the wild. #hashingmart</Paragraph>
          <SocialIconUl>
            <a href="https://instagram.com/hashingmart" target={"blank"}>
              <SocialIconLi>
                <FontAwesomeIcon icon={faInstagram} />
              </SocialIconLi>
            </a>
            <a href="https://facebook.com/hashingmartofficial" target={"blank"}>
              <SocialIconLi>
                <FontAwesomeIcon icon={faFacebookSquare} />
              </SocialIconLi>
            </a>
            <a href="https://tiktok.com/@hashingmart" target={"blank"}>
              <SocialIconLi>
                <FontAwesomeIcon icon={faTiktok} />
              </SocialIconLi>
            </a>
            <a href="https://twitter.com/hashingmart" target={"blank"}>
              <SocialIconLi>
                <FontAwesomeIcon icon={faTwitter} />
              </SocialIconLi>
            </a>
          </SocialIconUl>
        </Content>
        <Content>
          <LinksWrapper>
            <LinkBody>
              <LinkHolder>
                <LinkA>My Account</LinkA>
              </LinkHolder>
              <LinkHolder>
                <LinkA onClick={() => navigate('/products')}>Sale</LinkA>
              </LinkHolder>
              <LinkHolder>
                <LinkA onClick={() => navigate('/sustainability')}>Sustainability</LinkA>
              </LinkHolder>
              <LinkHolder>
                <LinkA onClick={() => navigate('/company')}>Company</LinkA>
              </LinkHolder>
              <LinkHolder>
                <LinkA onClick={() => navigate('/shipping')}>Shipping</LinkA>
              </LinkHolder>
            </LinkBody>
            <LinkBodyOne>
              <LinkHolder>
                <LinkA onClick={() => navigate('/faq')}>FAQs</LinkA>
              </LinkHolder>
              <LinkHolder>
                <LinkA onClick={() => navigate('/refunds')}>Refunds</LinkA>
              </LinkHolder>
              <LinkHolder>
                <LinkA onClick={() => navigate('/privacy-policy')}>Privacy</LinkA>
              </LinkHolder>
              <LinkHolder>
                <LinkA onClick={() => navigate('/terms-of-use')}>Terms</LinkA>
              </LinkHolder>
              <LinkHolder>
                <LinkA onClick={() => navigate('/contact')}>Contact</LinkA>
              </LinkHolder>
            </LinkBodyOne>
          </LinksWrapper>
          <Copywright>
            <CopySpan>&copy;2022 Hashingmart</CopySpan>
          </Copywright>
        </Content>
      </ContentWrap>
    </Wrapper>
  )
}

export default Footer