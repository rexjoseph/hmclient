import styled from "styled-components"
import CollectionItem from "./CollectionItem"
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios' 

const Container = styled.div`
  margin: 0 auto;
  max-width: 1250px;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 28px 0;
  width: 100%;

  @media (max-width: 550px) {
    margin-bottom: 16px;
    padding: 0 12px;
  }
`

const HeaderTitle = styled.h1`
  font-size: 6rem;
  font-weight: 400;

  ${mobile({
    fontSize: "36px",
    letterSpacing: "-1.6px",
    lineHeight: "1.08"
  })}
`

const HeaderLink = styled.a`
  line-height: 40px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  width: 249px;
  border-radius: 24px;
  height: 40px;
  background: var(--color-primary);
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 0 24px;
  position: relative;
  transition: background .2s ease-in-out,color .2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: var(--brand-blue);
  }

  ${mobile({
    display: "none"
  })}
`

const CollectionRows = styled.ul`
  display: flex;
  overflow-x: auto;
  padding: 0;
  position: relative;
  margin: 30px 0;

  &:first-of-type {
    padding-left: 1.2rem;
  }

  &:last-of-type {
    padding-right: 1.2rem;
  }
`

const Collections = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/category/all")
        setCategories(res.data)
      } catch (err) {}
    };
     getCategories()
  })

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Collections
        </HeaderTitle>
        <HeaderLink onClick={() => navigate('/collections')}>
          Shop — Collections
        </HeaderLink>
      </Header>
      {categories?.map(item => (
        <CollectionItem item={item} key={item._id} />
      ))}
    </Container>
  )
}

export default Collections