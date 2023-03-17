import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1250px;
  width: 100%;

  @media (max-width: 769px) {
    padding: 0 1.5rem;
  }
`

const FeedReceived = styled.div`
  max-width: 40rem;
  margin: 10rem auto;
`

const Heading = styled.h1``
const Paragraph = styled.p``

const ThankYou = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <>
        <Container>
          <FeedReceived>
            <Heading>Feedback received</Heading>
            <Paragraph>Hi, your feedback has been recorded. Our team will reach out if need be in 24 hours.</Paragraph>
          </FeedReceived>
        </Container>
      </>
      <Footer />
    </div>
  )
}

export default ThankYou