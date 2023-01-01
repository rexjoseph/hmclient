import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import FormInput from "../components/FormInput";

const Page = styled.div``;

const Container = styled.div`
  width: 100%;
  margin: 0;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

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
  margin-bottom: 2.5rem;
`

const Register = () => {
  const { isFetching } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage: "First name must be minimun 3 characters and not include special characters",
      label: "First Name",
      pattern: "^[A-Za-z]{3,20}$",
      required: true
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Last name must be minimun 3 characters and not include special characters",
      label: "Last Name",
      pattern: "^[A-Za-z]{3,20}$",
      required: true
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "john@doe.com",
      errorMessage: "Must be a valid email address",
      label: "Email",
      required: true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include atleast 1 letter, 1 number, and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords do not match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ]

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: [e.target.value]})
  }

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { ...values });
    navigate('/login');
  };

  useEffect(() => {
    document.title = `Register — Hashingmart`;
  });

  return (
    <Page>
      <Announcement />
      <Navbar />
      <Container>
        <div className="signUpWrapper">
          <div className="registerWrapper">
            <h1 className="registerTitle">Hi</h1>
            <p className="registerParagraph">
              New friend? How sweet. We never save credit card information.
            </p>
            <p className="registerParagraph">
              Registering makes checkout fast and easy and saves your order
              information in your account.
            </p>
            <div className="registerFormDiv">
              <form className="registerForm" onSubmit={handleClick}>
                {inputs.map(input => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={handleChange}  
                  />
                ))}
                <button className="registerFormButton" disabled={isFetching}>
                  Register
                </button>
                <div className="registerLabel">
                  By creating an account, you agree to our&nbsp;
                  <a href="/terms-of-use" className="registerLabelLink">Terms of Use</a>
                  &nbsp;and&nbsp;
                  <a href="/privacy-policy" className="registerLabelLink">Privacy Policy</a>
                </div>
              </form>
              <RecoverLink onClick={() => navigate('/login')}>
                Got an account? Login
              </RecoverLink>
            </div>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default Register;
