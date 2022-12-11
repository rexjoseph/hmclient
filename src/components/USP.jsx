import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1250px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3.5rem;
`

const Body = styled.div``

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  font-style: italic;
`

const USP = () => {
  return (
    <Container>
      <Body>
        <Heading>
          Lean into luxe. 100% biodegrable and recyclable essentials that rise to the occassion
        </Heading>
      </Body>
    </Container>
  )
}

export default USP