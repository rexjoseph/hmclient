import { useState } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { login } from "../redux/apiCalls"
import { useDispatch } from "react-redux"
import {useSelector} from 'react-redux'

const Container = styled.div`
  background-color: #f7f7f7;
  width: 100%;
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
  padding-top: 4rem;
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

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`

const RecoverLink = styled.a`
  display: block;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 16px;
  color: var(--color-primary);
  cursor: pointer;
`

const Error = styled.span`
  color: red;
`

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector(state => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, {email, password});
  }

  return (
    <Container>
      <Navbar />
      <SignUpWrapper>
        <RegisterWrapper>
          <RegisterTitle>Hello</RegisterTitle>
          <RegisterParagraph>Old Friends... Welcome back! Let's get you back in.</RegisterParagraph>
          <RegisterFormDiv>
            <RegisterForm>
              <RegisterFormLabel htmlFor="Email">Email</RegisterFormLabel>
              <RegisterFormInput type="email" onChange={(e) => setEmail(e.target.value)} />
              <RegisterFormLabel htmlFor="Password">Password</RegisterFormLabel>
              <RegisterFormInput type="password" onChange={(e) => setPassword(e.target.value)} />
              <RegisterFormButton onClick={handleClick} disabled={isFetching} >Sign In</RegisterFormButton>
              {error && <Error>Invalid login credentials</Error>}
              <RecoverLink>
                Forgot Password?
              </RecoverLink>
              <RecoverLink>
                Create Account
              </RecoverLink>
            </RegisterForm>
          </RegisterFormDiv>
        </RegisterWrapper>
      </SignUpWrapper>
    </Container>
  )
}

export default Register