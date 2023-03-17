import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Featured from './Featured'
import Channels from './Channels'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Home = () => {

  useEffect(() => {
    document.title = `Admin Dashboard — Hashingmart`
  }, [])

  return (
    <Container>
      <Sidebar />
      <>
      <Featured />
      </>
      <Channels />
    </Container>
  )
}

export default Home