import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {mobile} from "../responsive"

const Page = styled.section``

const PageWrapper = styled.section`
  margin-top: 10rem;
`

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;

  ${mobile({
    padding: "0 15px"
  })}
  
  }
`

const Header = styled.div`
  background-color: #f7f7f7;
  width: 100%;
`

const Heading = styled.h1`
  margin: 44px 92px;
  font-size: 4.8rem;

  ${mobile({
    margin: "22px 0",
    fontSize: "2.8rem"
  })}
`

const Tooltip = styled.p`
  font-size: 2.2rem;
  font-weight: 400;
`

const TooltipSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #0064b2;
  display: inline-block;
  margin: 15px 30px;
`

const Paragraph = styled.p`
  font-size: 2.2rem;
  font-weight: 400;

  ${mobile({
    fontSize: "16px"
  })}
`

const Br = styled.br``

const SecondDiv = styled.div`

`

const Unorder = styled.ul`
  font-size: 2.2rem;
  font-weight: 400;
`

const ListItem = styled.li`
  margin-left: 2rem;
`

const Sustainability = () => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Page>
      <Announcement />
      <Navbar />
      <PageWrapper>
      <Container>
        <Header>
          <Heading>Our Beginnings</Heading>
        </Header>
        <Tooltip>
          <TooltipSpan>Sustainability at Hashingmart</TooltipSpan>
        </Tooltip>
        <Paragraph>
          Did you know? Scope 3 emissions generates as much as 98 percent for home, fashion and other retailers. These emissions are generated across the value chain and not directly in the control of retailers. Why so much? Because our industry loves fossil fuels—to power factories, ship things, and make materials. In other words, most of what we wear is made from plastic, and plastic comes from oil, a fossil fuel.
        </Paragraph>
        <Br></Br>
        <Paragraph>
          Wait, was it always like this? No. In fact, humans really only became obsessed with plastic over the last 80 years. So we asked ourselves, “Would it be better if we went back to making things from natural materials?”
        </Paragraph>
        <SecondDiv>
          <Heading>Our Approach</Heading>
          <Paragraph>
            Now what? Holding ourselves accountable to the impact we make. The reality is, being a carbon neutral business shouldn't take 50 years, because it's possible today, this minute. But we don't think just offsetting our emissions and calling it a day should earn us a gold medal. It should be the prologue - chapter one in our mission to ultimately have zero emissions to begin with.
          </Paragraph>
          <Br></Br>
          <Unorder>
            <Paragraph>Approach steps:</Paragraph>
            <ListItem>Measure</ListItem>
            <ListItem>Reduce</ListItem>
            <ListItem>Reuse</ListItem>
            <ListItem>Recycle</ListItem>
            <ListItem>Offset</ListItem>
          </Unorder>
        </SecondDiv>
        <SecondDiv>
          <Heading>Our Commitments</Heading>
          <Paragraph>
            Hey, we get it—talk is cheap. And frankly, it seems like there’s a lot of it, without much action. Which is why we’re focused on 2027 and committing to a five-year to-do list—goals that will let you hold us accountable. Every purchase you make counts towards this accountability.
          </Paragraph>
          <Br></Br>
          <Paragraph>
           Climate change is so important because it's so connected to everything.
          </Paragraph>
        </SecondDiv>
      </Container>
        <Footer />
      </PageWrapper>
    </Page>
  )
}

export default Sustainability