import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { publicRequest } from '../requestMethods'

const Section = styled.section`
  margin: 8rem 0;
`

const Container = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
`

const ContentHolder = styled.div`
  text-align: center;
`

const HeaderDiv = styled.div`

`

const LinkDiv = styled.div`
  max-width: 200px;
  margin: 1.5rem auto 0;
`

const Heading = styled.h1`
  font-size: 45px;
  padding: 20px 0;
`

const Paragraph = styled.p`
  font-size: 18px;
`

const Link = styled.a`
  margin-bottom: 12px;
  text-transform: uppercase;
  max-width: 100%;
  display: block;
  background-color: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-size: 14px;
  padding: 13px 18px;
  cursor: pointer;
  transition: all 100ms ease 0s;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  opacity: 1;
  position: relative;
  border-radius: 2px;
  font-weight: 400;

  &:hover {
    background: var(--brand-blue);
    border: 2px solid var(--brand-blue);
    color: var(--color-secondary);
  }
`

const EmailMarketingSuccessV2 = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const id = location.pathname.split("/")[2];
  const [subscriber, setSubscriber] = useState({});

  useEffect(() => {
    const getSubscriber = async () => {
      try {
        const res = await publicRequest.get(`/email/${id}/signup/success`);
        setSubscriber(res.data);
      } catch {}
    }
    getSubscriber();
  }, [id])

  return (
    <div>
      <Announcement />
      <Navbar />
      <Section>
        <Container>
          <ContentHolder>
            <HeaderDiv>
              <Paragraph>Use code WELCOME10 for</Paragraph>
              <Heading>10% Off</Heading>
              <Paragraph>at checkout</Paragraph>
            </HeaderDiv>
            <LinkDiv>
              <Link onClick={() => navigate('/products')}>Shop Arrivals</Link>
            </LinkDiv>
          </ContentHolder>
        </Container>
      </Section>
      <Footer />
    </div>
  )
}

export default EmailMarketingSuccessV2