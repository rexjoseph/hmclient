import React, {useState, useEffect} from 'react';
import Announcement from '../components/Announcement';
import Footer from './Footer';
import Navbar from './Navbar';
import Prefooter from './Prefooter';
import styled from 'styled-components';

const Body = styled.section`
  margin: 8rem 0;
`

const Container = styled.div`
  max-width: 1250px;
  width: 100%;
  margin 0 auto;
`

const Subheading = styled.h2`
  font-size: 35px;
  font-weight: 400;
`

const Paragraph = styled.p``

const NoInternetConnection = (props) => {
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);

  // On initization set the isOnline state.
  useEffect(()=>{
      setOnline(navigator.onLine)
  },[])

  // event listeners to update the state 
  window.addEventListener('online', () => {
      setOnline(true)
  });

  window.addEventListener('offline', () => {
      setOnline(false)
  });

  // if user is online, return the child component else return a custom component
  if(isOnline){
  return(
      props.children
  )
  } else {
    return(
      <div>
        <Announcement />
        <Navbar />
        <Body>
          <Container>
            <Subheading>No internet connection</Subheading>
            <Paragraph>[Network err]</Paragraph> 
          </Container>
        </Body>
        <Prefooter />
        <Footer />
      </div>
    )
  }
}

export default NoInternetConnection;