import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { publicRequest } from "../requestMethods";
import { newpassword } from "../redux/apiCalls";

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
`;

const Link = styled.a`
  text-decoration: underline;
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--brand-blue);
  }
`;

const Tip = styled.div`
  color: #737373;
  font-size: 12px;
  letter-spacing: 0.1px;
  line-height: 15px;
  margin-top: 6px;
`;

const PostReset = () => {
  const location = useLocation()
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];
  // const {isFetching, error} = useSelector();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await publicRequest.get(`/auth/reset/${id}`)
        setUser(res.data);
      } catch {}
    }
    getUser()
  }, [id])

  useEffect(() => {
    document.title = `Set Password — Hashingmart`;
  });

  const handleClick = (e) => {
    if (password === confirmPassword) {
      e.preventDefault();
      newpassword(dispatch, {password, userId: user._id, passwordToken: id})
    } else {
      alert('Passwords do not match!')
    }
  };

  return (
    <Page>
      <Announcement />
      <Navbar />
      <Container>
        <UserRoot>
          <RegisterTitle>Set Password</RegisterTitle>
          <Form onSubmit={handleClick}>
            <FormFieldset>
              <FormField>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Tip>Must be atleast 8 characters</Tip>
              </FormField>
            </FormFieldset>
            <FormFieldset>
              <FormField>
                <Label htmlFor="password">Confirm Password</Label>
                <Input
                  type="password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormField>
            </FormFieldset>
            <Input
              type="hidden"
              value={user._id}
            />
            <Input
              type="hidden"
              value={id}
            />
            <FormAction>
              <ButtonWrapper>
                <Button>Save</Button>
              </ButtonWrapper>
            </FormAction>
          </Form>
          <Paragraph>
            Don't have an account?&nbsp;
            <Link onClick={() => navigate("/register")}>Create one</Link>
          </Paragraph>
        </UserRoot>
      </Container>
    </Page>
  );
};

export default PostReset;
