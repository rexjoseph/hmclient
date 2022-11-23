import styled from "styled-components"
import Navbar from "../components/Navbar"

const Container = styled.div`
  background-color: #f7f7f7;
  width: 100vw;
  margin: 0;
  padding: 5rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const SignUpWrapper = styled.div`
  max-width: 430px;
  width: 100%;
  margin: 0 auto;
`

const RegisterWrapper = styled.div`
  display: block;
`
const RegisterTitle = styled.h1`
  font-weight: 600;
  font-size: 2.4rem;
  text-transform: uppercase;
`

const RegisterParagraph = styled.p`
  margin-top: 19px;
  margin-bottom: 19px;
  line-height: 1.375;
`

const RegisterFormDiv = styled.div``

const RegisterForm = styled.form`

`

const RegisterFormLabel = styled.label`
  display: block;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px
`

const RegisterFormInput = styled.input`
  width: 100%;
  margin-bottom: 19px;
  -webkit-appearance: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background-color: white;
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  padding: 19px 20px;
`

const RegisterFormButton = styled.button`
  display: block;
  width: 100%;
  font-family: inherit;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: var(--color-primary);
  color: white;
  padding: 23px 0;
  border: none;
  -webkit-appearance: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
  border: 2px solid transparent;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;

  &:hover {
    background: var(--brand-blue);
  }
`

const RegisterLegal = styled.div`
  font-size: 11px;
  margin: 15px 0 30px;
  text-align: center;
`

const RegisterLegalLink = styled.a`
  display: inline;
  font-size: 11px;
  text-decoration: underline;
`

const Register = () => {
  return (
    <Container>
      <Navbar />
      <SignUpWrapper>
        <RegisterWrapper>
          <RegisterTitle>Hi</RegisterTitle>
          <RegisterParagraph>New friend? How sweet. We never save credit card information.</RegisterParagraph>
          <RegisterParagraph>Registering makes checkout fast and easy and saves your order information in your account.</RegisterParagraph>
          <RegisterFormDiv>
            <RegisterForm>
              <RegisterFormLabel htmlFor="FirstName">First Name</RegisterFormLabel>
              <RegisterFormInput type="text" />
              <RegisterFormLabel htmlFor="LastName">Last Name</RegisterFormLabel>
              <RegisterFormInput type="text" />
              <RegisterFormLabel htmlFor="Email">Email*</RegisterFormLabel>
              <RegisterFormInput type="email" />
              <RegisterFormLabel htmlFor="Password">Password*</RegisterFormLabel>
              <RegisterFormInput type="password" />
              <RegisterFormLabel htmlFor="ConfirmPassword">Confirm Password*</RegisterFormLabel>
              <RegisterFormInput type="password" />
              <RegisterFormButton>Register</RegisterFormButton>
              <RegisterLegal>
                By creating an account, you agree to our&nbsp;
                <RegisterLegalLink>
                  Terms of Use
                </RegisterLegalLink>
                &nbsp;and&nbsp;
                <RegisterLegalLink>
                  Privacy Policy
                </RegisterLegalLink>
              </RegisterLegal>
            </RegisterForm>
          </RegisterFormDiv>
        </RegisterWrapper>
      </SignUpWrapper>
    </Container>
  )
}

export default Register