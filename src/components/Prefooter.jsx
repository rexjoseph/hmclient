import styled from "styled-components"
import Check from "./Check"
import Leaf from "./Leaf"
import Heart from "./Heart"

const Wrapper = styled.section`
  background: #000;
  clear: both;
`

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 1200px) {
    padding: 0 1.5rem;
  }
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  // --bs-gutter-x: 1.6rem;
  --bs-gutter-y: 0;
  margin-left: calc(var(--bs-gutter-x)*-.5);
  margin-right: calc(var(--bs-gutter-x)*-.5);
  margin-top: calc(var(--bs-gutter-y)*-1);
`

const Column = styled.div`
  color: var(--color-secondary);
  text-align: center!important;
  padding-bottom: 1.6rem!important;
  padding-top: 1.6rem!important;
  flex: 0 0 auto;
  width: 100%;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 25%;
  }

  @media (min-width: 576px) {
    text-align: left!important;
    margin: 3.2rem 0!important;
    flex: 0 0 auto;
  }
`

const Icon = styled.div`
  max-width: 44px;
  max-height: 44px;

  @media (max-width: 576px) {
    margin: 0 auto;
  }
`

const Title = styled.h5`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -.01em;
  line-height: 1.25;
  padding-top: 0.8rem!important;

  @media (min-width: 992px) {
    font-size: 2.4rem;
  }
`

const Paragraph = styled.p`
  padding-bottom: 0.8rem!important;
  padding-top: 0.8rem!important;
  display: none;

  @media (min-width: 576px) {
    display: block;
  }
`

const Link = styled.a`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-secondary);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`

const Prefooter = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Column>
            <Icon>
              <Check />
            </Icon>
            <Title>We guarantee everything we make.</Title>
            <Paragraph>
              Because we are aware that putting durability first leads in using less energy, wasting less water, and producing less trash.
            </Paragraph>
            <Link>View Guarantee</Link>
          </Column>
          <Column>
            <Icon>
              <Leaf />
            </Icon>
            <Title>Learn how your essentials are made.</Title>
            <Paragraph>
            Everything we create has an impact on both people and the environment. Find out more about this in our Flight Plan.
            </Paragraph>
            <Link>View Our Flight Plan</Link>
          </Column>
          <Column>
            <Icon>
              <Heart />
            </Icon>
            <Title>Keep your fave in play.</Title>
            <Paragraph>
            Renew used, recycle and fix your essentials through ReHash.
            </Paragraph>
            <Link>Visit ReHash</Link>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Prefooter