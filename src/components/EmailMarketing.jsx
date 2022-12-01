import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { subscribe } from "../redux/apiCalls"

const EmailDiv = styled.div`
  background-color: #f8f7f5;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-height: 357px;
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

const EmailGrid = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin: 0 auto;
  -webkit-box-pack: center;
  justify-content: center;
`

const EmailCell = styled.div`
  position: relative;
  width: 100%;
  display: block;

  @media (min-width: 992px) {
    width: 66.6667%;
  }
`

const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 48px 28px;
`

const SignupRow = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`

const SignupForm = styled.form`
  width: 100%;
`
const SignupDisclaimer = styled.div`
  font-size: 14px
`

const Heading = styled.h2`
  font-weight: 700;
  font-size: 25px;
  line-height: 1.32;
  letter-spacing: .5px;
  color: var(--color-primary);
  margin-bottom: 2rem;
  padding: 0;
`

const Paragraph = styled.p`
  margin-bottom: 30px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 18px;
  padding: 0;
  font-size: 16px;
  letter-spacing: .5px;
`

const SignupFormRow = styled.div`
  @media (min-width: 769px) {
    display: flex;
    width: 100%;
    align-items: flex-start;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 24px;
  }
`

const SignupFormInput = styled.div`
  margin-bottom: 6px;

  @media (min-width: 769px) {
    margin-right: 6px;
    margin-bottom: 0;
    width: 70%;
  }
`
const Input = styled.input`
  width: 100%;
  height: 48px;
  font-family: inherit;
  appearance: none;
  font-size: 16px;
  letter-spacing: .5px;
  font-weight: 700;
  background: #fff;
  border-bottom: 2px solid var(--color-primary);
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-top-style: solid;
  border-right-style: solid;
  border-left-style: solid;
  border-radius: 0;
  padding: 2px 12px 0;
  outline: none;
`

const SignupFormButton = styled.div``

const Button = styled.button`
  font-size: 14px;
  font-family: inherit;
  padding: 13px 18px;
  cursor: pointer;
  transition: .1s;
  letter-spacing: 2px;
  background-color: var(--color-primary);
  color: #fff;
  text-align: center;
  text-decoration: none;
  opacity: 1;
  position: relative;
  border-radius: 2px;
  font-weight: 500;
  width: 100%;
  display: block;
  text-transform: capitalize;
  transition: all .1s ease;

  @media (min-width: 769px) {
    margin-left: 6px;
  }

  &:hover {
    background: var(--brand-blue);
  }
`

const Span = styled.div`
  font-size: 14px;

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`

const Link = styled.div`
  font-weight: 600;
  display: inline;
  text-decoration: underline;
  color: inherit;
  margin: 0;
  padding: 0;
`

const EmailMarketing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe(dispatch, {email})
    // navigate('/email-susbcribe/success');
  }
  return (
    <EmailDiv>
      <Container>
        <EmailGrid>
          <EmailCell>
            <EmailWrapper>
              <SignupRow>
                <Heading>
                  Want First Dibs?
                </Heading>
                <Paragraph>
                  Join our email list and be the first to know about new limited edition products, innovations, and lots of other fun updates.
                </Paragraph>
              </SignupRow>
              <SignupForm onSubmit={handleSubmit}>
                <SignupFormRow>
                  <SignupFormInput>
                    <Input placeholder="Enter Your Email Address" required onChange={(e) => setEmail(e.target.value)} />
                  </SignupFormInput>
                  <SignupFormButton>
                    <Button>Sign Up Now</Button>
                  </SignupFormButton>
                </SignupFormRow>
              </SignupForm>
              <SignupDisclaimer>
                <Span>
                  Note: You can opt-out at any time. See our&nbsp;
                  <Link>Privacy Policy</Link>
                  &nbsp;and&nbsp;
                  <Link>Terms.</Link>
                </Span>
              </SignupDisclaimer>
            </EmailWrapper>
          </EmailCell>
        </EmailGrid>
      </Container>
    </EmailDiv>
  )
}

export default EmailMarketing