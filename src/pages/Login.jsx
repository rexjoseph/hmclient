import { useState } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { login } from "../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Announcement from "../components/Announcement"

const Container = styled.div`
  // background-color: #f7f7f7;
  width: 100%;
  margin: 0;
  // padding: 5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const SignUpWrapper = styled.div`
  max-width: 430px;
  width: 100%;
  margin: 0 auto;
`

const RegisterWrapper = styled.div`
  display: block;
  margin-top: 4rem;
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
  height: 36px;
  margin-bottom: 19px;
  -webkit-appearance: none;
  border: 1px solid #f1f1f1;
  border-radius: 2px;
  background-color: white;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  padding: 0 12px;
  background: #f1f1f1;
`

const RegisterFormButton = styled.button`
  display: block;
  width: 100%;
  height: 36px;
  font-family: inherit;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: var(--color-primary);
  color: white;
  padding: 0 12px;
  border: none;
  -webkit-appearance: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
  border: 2px solid transparent;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  transition: all 200ms ease;

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

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector(state => state.user)
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { email, password });
  }

  return (
    <Container>
      <Announcement />
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
              <RegisterFormButton onClick={handleClick} disabled={isFetching}>
                Sign In
              </RegisterFormButton>
              {error && <Error>Invalid login credentials</Error>}
              <RecoverLink> 
                Forgot Password?
              </RecoverLink>
              <RecoverLink onClick={() => navigate('/register')}>
                Create Account
              </RecoverLink>
            </RegisterForm>
          </RegisterFormDiv>
        </RegisterWrapper>
      </SignUpWrapper>
    </Container>
  )
}

export default Login