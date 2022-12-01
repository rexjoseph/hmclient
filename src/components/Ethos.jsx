import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1250px;
  width: 100%;
`

const MissionStatement = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`
const Mission = styled.div`
  width: 70%; 

  @media (max-width: 1420px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
  
`
const Paragraph = styled.h1`
  font-size: 80px;
  font-weight: 400;
  letter-spacing: -3.5px;
  line-height: 88px;

  ${mobile({
    fontSize: "36px",
    letterSpacing: "-1.6px",
    lineHeight: "39px"
  })}
`
const MissionMore = styled.div`
  margin: 12px 0 0;
`

const MissionLink = styled.a`
  color: var(--color-primary);
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: var(--brand-blue);
  }
`

const Ethos = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MissionStatement>
        <Mission>
          <Paragraph>
          We make sustainable + versatile pieces so that you can do more with less. We partner with factories who put people + planet first.
          </Paragraph>
        </Mission>
        <MissionMore>
          <MissionLink onClick={() => navigate('/sustainability')}>Our Story</MissionLink>
        </MissionMore>
      </MissionStatement>
    </Container>
  )
}

export default Ethos