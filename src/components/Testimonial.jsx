import styled from "styled-components"
import { mobile } from "../responsive";

const Marquee = styled.div`
  // background: #ffcc75;
  // background: #D3A878;
  background: #f7f7f7;
  color: var(--color-primary);
  padding: 10px 0;
  max-width: 100%;
  overflow: hidden;
  margin-bottom: 4rem;
`

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1200px) {
    padding: 0 1.5rem;
  }
`

const MarqueeContent = styled.div`
  display: flex;
  animation: 40s linear infinite scrolling;

  @keyframes scrolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translatex(-2266px);
    }
  }
`

const MarqueeItem = styled.div`
  font-size: 1.8rem;

  ${mobile({
    fontSize: "1.4rem"
  })}
`

const MarqueeInner = styled.div`
  display: flex;
  text-align: center;
  width: auto;
  height: 100%;
  padding: 0 2rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
`

const Paragraph = styled.p`
  white-space: nowrap;
`

const Bold = styled.span`
  font-weight: 600;
`

const Testimonial = () => {
  return (
    <Marquee>
      <Container>
        <MarqueeContent>
          <MarqueeItem>
            <MarqueeInner>
              <Paragraph>
                "Great functionality, love that the body is 100% recyclable" - 
                <Bold>Barbara S.</Bold>
              </Paragraph>
            </MarqueeInner>
          </MarqueeItem>
          <MarqueeItem>
            <MarqueeInner>
              <Paragraph>
                "I have the Eco Friendly Dust Brush and it is AMAZING." - 
                <Bold>Zavier T.</Bold>
              </Paragraph>
            </MarqueeInner>
          </MarqueeItem>
          <MarqueeItem>
            <MarqueeInner>
              <Paragraph>
                "Great functionality, love that the body is 100% recyclable" - 
                <Bold>Barbara S.</Bold>
              </Paragraph>
            </MarqueeInner>
          </MarqueeItem>
          <MarqueeItem>
            <MarqueeInner>
              <Paragraph>
                "I have the Eco Friendly Dust Brush and it is AMAZING." - 
                <Bold>Zavier T.</Bold>
              </Paragraph>
            </MarqueeInner>
          </MarqueeItem>
          <MarqueeItem>
            <MarqueeInner>
              <Paragraph>
                "Great functionality, love that the body is 100% recyclable" - 
                <Bold>Barbara S.</Bold>
              </Paragraph>
            </MarqueeInner>
          </MarqueeItem>
          <MarqueeItem>
            <MarqueeInner>
              <Paragraph>
                "I have the Eco Friendly Dust Brush and it is AMAZING." - 
                <Bold>Zavier T.</Bold>
              </Paragraph>
            </MarqueeInner>
          </MarqueeItem>
        </MarqueeContent>
      </Container>
    </Marquee>
  )
}

export default Testimonial