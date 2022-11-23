import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InstaHandle from "./InstaHandle";
import { useLocation } from "react-router-dom";

const Page = styled.section``

const Header = styled.h1`
  margin-top: 8rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 6rem;

  @media (max-width: 769px) {
    font-size: 4rem;
  }
`

const Divider = styled.div`
  margin: 2rem 0;
  width: 100%;
  height: 1px;
  background: #d2d2d2;
`

const CollectionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 1250px;
  @media (max-width: 666px) {
    flex-direction: column;
  }

`

const ProductsWrapper = styled.div`
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  min-width: 66.6666666667%;
`

const ProductsUl = styled.ul`
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`

const Arrivals = () => {
  const [products, setProducts] = useState([]);
  const {pathname} = useLocation();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/products")
        setProducts(res.data)
      } catch (err) {}
    };
     getProducts()
  })

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = `Sale — Hashingmart`
  })

  return (
    <Page>
      <Navbar />
      <Header>Arrivals</Header>
      <Divider />
      <CollectionWrapper>
        <ProductsWrapper>
          <ProductsUl>
            { products.map(item => <Product 
            item={item} 
            key={item._id} 
            />)}
          </ProductsUl>
        </ProductsWrapper>
      </CollectionWrapper>
      <InstaHandle />
      <Footer />
    </Page>
  )
}

export default Arrivals