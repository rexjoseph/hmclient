import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";

const Page = styled.div``;

const Container = styled.div`
  // background-color: #f7f7f7;
  width: 100%;
  margin: 0;
  // padding: 5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SignUpWrapper = styled.div`
  max-width: 430px;
  width: 100%;
  margin: 0 auto;
`;

const RegisterWrapper = styled.div`
  display: block;
  margin-top: 4rem;
`;
const RegisterTitle = styled.h1`
  font-weight: 600;
  font-size: 2.4rem;
  text-transform: uppercase;
  padding-top: 4rem;
`;

const RegisterParagraph = styled.p`
  margin-top: 19px;
  margin-bottom: 19px;
  line-height: 1.375;
`;

const RegisterFormDiv = styled.div``;

const RegisterForm = styled.form``;

const RegisterFormLabel = styled.label`
  display: block;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

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
`;

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
`;

const RegisterLegal = styled.div`
  font-size: 11px;
  margin: 15px 0 30px;
  text-align: center;
`;

const RegisterLegalLink = styled.a`
  display: inline;
  font-size: 11px;
  text-decoration: underline;
`;

const Error = styled.span`
  color: red;
`;

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (password  === confirmPassword) {
      register(dispatch, { firstName, lastName, email, password });
      navigate('/login');
    } else {
      alert('Confirm password and password must be the same')
    }
  };

  return (
    <Page>
      <Announcement />
      <Navbar />
      <Container>
        <SignUpWrapper>
          <RegisterWrapper>
            <RegisterTitle>Hi</RegisterTitle>
            <RegisterParagraph>
              New friend? How sweet. We never save credit card information.
            </RegisterParagraph>
            <RegisterParagraph>
              Registering makes checkout fast and easy and saves your order
              information in your account.
            </RegisterParagraph>
            <RegisterFormDiv>
              <RegisterForm onSubmit={handleClick}>
                <RegisterFormLabel htmlFor="firstName">
                  First Name*
                </RegisterFormLabel>
                <RegisterFormInput
                  type="text"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <RegisterFormLabel htmlFor="lastName">
                  Last Name*
                </RegisterFormLabel>
                <RegisterFormInput
                  type="text"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
                <RegisterFormLabel htmlFor="email">Email*</RegisterFormLabel>
                <RegisterFormInput
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <RegisterFormLabel htmlFor="Password">
                  Password*
                </RegisterFormLabel>
                <RegisterFormInput
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RegisterFormLabel htmlFor="ConfirmPassword">
                  Confirm Password*
                </RegisterFormLabel>
                <RegisterFormInput type="password" required onChange={(e) => setConfirmPassword(e.target.value)} />
                <RegisterFormButton disabled={isFetching}>
                  Register
                </RegisterFormButton>
                {/* {error && <Error>Invalid login credentials</Error>} */}
                <RegisterLegal>
                  By creating an account, you agree to our&nbsp;
                  <RegisterLegalLink>Terms of Use</RegisterLegalLink>
                  &nbsp;and&nbsp;
                  <RegisterLegalLink>Privacy Policy</RegisterLegalLink>
                </RegisterLegal>
              </RegisterForm>
            </RegisterFormDiv>
          </RegisterWrapper>
        </SignUpWrapper>
      </Container>
    </Page>
  );
};

export default Register;
