import axios from "axios"
import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const PPEmailWrapper = styled.div`
  background-color: #f6f6f6;
  padding: 32px;
  clear: both;

  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`

const Form = styled.form``

const FormDiv = styled.div`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1250px;
`

const FormDivInner1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  margin: auto;

  @media screen and (min-width: 768px) {
    gap: 24px;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`

const Paragraph = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 21px;
`

const FormInputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 4px;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`

const FormInnerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`

const FormInnerDiv1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 8px;
`

const FormInnerDiv2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 4px;
`

const FormInnerDiv3 = styled.div`
  position: relative;
`

const FormInnerDiv4 = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

const FormInput = styled.input`
  appearance: none;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  white-space: nowrap;
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
  border-color: var(--color-primary);
  outline: none;
  padding-left: 0;
  height: 44px;
  padding-bottom: 0;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
`

const ButtonP = styled.p`
  text-align: left;
  color: var(--color-primary);
  transition: opacity .1s;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.8px;
`

const Button = styled.button`
  height: 50px;
  width: 280px;
  font-family: inherit;
  background-color: initial;
  border: 1px solid;
  border-color: var(--color-primary);
  color: var(--color-primary);
  padding-left: 12px;
  padding-right: 12px;
  appearance: none;
  cursor: pointer;
  display: inline-flex;
  transition: all .2s;
  user-select: none;
  white-space: nowrap;
  position: relative;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--color-primary);
    
    ${ButtonP} {
      color: var(--color-secondary);
    }
  }
`

const ErrorMessageDiv = styled.div`
  color: var(--color-danger);
  font-size: 13px;
`

const PPEmailMarketing = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [resMessage, setResMessage] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/api/email/signup/v2`, {email: email})
      navigate(`/email/${res.data}/signup/success`)
    } catch (err) {
      setResMessage(err.response.data.message);
    }
  }

  return (
    <PPEmailWrapper>
      <Form onSubmit={handleSubmit}>
        <FormDiv>
          <FormDivInner1>
            <Paragraph>
              Want 10% off your first full price order? It's time to drive real impact.
            </Paragraph>
            <FormInputDiv>
              <FormInnerDiv>
                <FormInnerDiv1>
                  <FormInnerDiv2>
                    <FormInnerDiv3>
                      <FormInnerDiv4>
                        <FormInput type="email" placeholder="Enter Your Email Address*" onChange={handleEmail} required />
                      </FormInnerDiv4>
                    </FormInnerDiv3>
                  </FormInnerDiv2>
                </FormInnerDiv1>
                <Button>
                  <ButtonP>Submit</ButtonP>
                </Button>
              </FormInnerDiv>
              {
                resMessage && (
                  <ErrorMessageDiv>
                    {resMessage}
                  </ErrorMessageDiv>
                )
              }
            </FormInputDiv>
          </FormDivInner1>
        </FormDiv>
      </Form>
    </PPEmailWrapper>
  )
}

export default PPEmailMarketing