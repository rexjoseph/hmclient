import styled from "styled-components";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import Announcement from "../components/Announcement";

const Container = styled.div`

`

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  text-align: center;
  margin-top: 8rem;
`

const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  letter-spacing: -2.6px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  text-transform: capitalize;

  @media (max-width: 769px) {
    font-size: 36px;
  }
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1250px;
  margin: 0 auto;

  @media (max-width: 769px) {
    padding: 0 15px;
  }
`
const Filter = styled.div`
  padding: 20px 0;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  @media (max-width: 769px) {
    font-size: 16px;
  }
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: 1px solid var(--color-primary);
  outline: none;
`

const Option = styled.option`
  
`

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  const {pathname} = useLocation();
  
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }

  useEffect(() => {
    document.title = 'Sale — Hashingmart'
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Header>
        <Title>{cat}</Title>
      </Header>
      <FilterContainer>
        <Filter>
          <FilterText>
            Filter Products:
          </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            Sort Products:
          </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Prefooter />
      <Footer />
    </Container>
  )
}

export default ProductList