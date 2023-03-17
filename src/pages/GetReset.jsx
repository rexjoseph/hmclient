import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { reset } from "../redux/apiCalls";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { publicRequest } from "../requestMethods";

const Page = styled.section``;
const Container = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 750px) {
    padding: 0 15px;
  }
`;

const UserRoot = styled.div`
  max-width: 526px;
  width: 100%;
  margin-top: 8rem;
  margin-left: auto;
  margin-right: auto;
  // text-align: center;
`;

const RegisterTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 32px;

  @media (max-width: 769px) {
    font-size: 28px;
    margin-bottom: 22px;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const FormFieldset = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const FormField = styled.div`
  margin: 0 6px;
  width: 100%;
`;

const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  letter-spacing: -0.653333px;
  line-height: 22px;
  margin-bottom: 6px;
`;

const Input = styled.input`
  background: #fff;
  border: 1px solid #d2d2d2;
  border-radius: 2px;
  color: var(--color-primary);
  cursor: text;
  font-family: inherit;
  height: 40px;
  margin: 0;
  padding: 0 12px;
  width: 100%;
`;

const FormAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;

  @media (max-width: 960px) {
    margin: 6px 0 24px;
  }
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
  border-radius: 24px;
  border: transparent;
  height: 40px;
  line-height: 40px;
  padding: 0 36px;
  background: var(--color-primary);
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  position: relative;
  text-decoration: none;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: var(--brand-blue);
  }
`;

const Paragraph = styled.p`
  margin: 0 0 24px;
`

const Link = styled.a`
text-decoration: underline;
transition: color .2s ease-in-out;
cursor: pointer;

&:hover {
  color: var(--brand-blue);
}
`

const GetReset = () => {
  const [email, setEmail] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {isFetching, error} = useSelector();

  useEffect(() => {
    document.title = `Reset — Hashingmart`;
  });

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   reset(dispatch, {email})
  // };

  const handleClick = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const res = await publicRequest.post("/auth/reset", {
          email: email
        });
        if (res.status === 200) {
          navigate('/');
        }
      } catch (err) {}
    } else {
      alert('Please fill out the fields')
    }
  }

  return (
    <Page>
      <Announcement />
      <Navbar />
      <Container>
        <UserRoot>
          <RegisterTitle>Forgot Password</RegisterTitle>
          <Form onSubmit={handleClick}>
            <FormFieldset>
              <FormField>
                <Label htmlFor="email">Email</Label>
                <Input type="email" required onChange={(e) => setEmail(e.target.value)} />
              </FormField>
            </FormFieldset>
            <FormAction>
              <ButtonWrapper>
                <Button>Send Email</Button>
              </ButtonWrapper>
            </FormAction>
          </Form>
          <Paragraph>
            Don't have an account?&nbsp;<Link onClick={() => navigate('/register')}>Create one</Link>
          </Paragraph>
        </UserRoot>
      </Container>
    </Page>
  );
};

export default GetReset;
