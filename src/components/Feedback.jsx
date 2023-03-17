import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const FeedbackSection = styled.section`
  padding: 2rem 0;
  width: 100%;
  margin: 5rem 0;
`

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  width: 100%;
}
`

const Body = styled.div`
  text-align: center;
`

const Paragraph = styled.p`
  margin-bottom: 2.5rem;
`

const LinkA = styled.a`
  padding: 1rem 2.5rem;
  background: #fff;
  border: 0.1rem solid var(--color-primary);
  color: var(--color-primary);
  font-weight: 500;
  font-size: 1.5rem;
  border-radius: 2.5rem;
  cursor: pointer;
  transition: all .1s ease;

  &:hover {
    background: var(--color-primary);
    color: #FFF;
  }
`

const Feedback = () => {
  const navigate = useNavigate()
  return (
    <FeedbackSection>
      <Container>
        <Body>
          <Paragraph>We'd love to hear what you think!</Paragraph>
          <LinkA onClick={() => navigate('/feedback')}>Get in touch</LinkA>
        </Body>
      </Container>
    </FeedbackSection>
  )
}

export default Feedback