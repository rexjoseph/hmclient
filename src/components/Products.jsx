import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

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
const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( cat ? `http://localhost:4000/api/products?category=${cat}` : "http://localhost:4000/api/products")
        setProducts(res.data)
      } catch (err) {}
    };
     getProducts()
  }, [cat])

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) => 
        Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
        )
      )
    );
  }, [products, cat, filters])

  useEffect(() => {
    if (sort==="newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
        );
    } else if (sort==="asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a,b) => a.price - b.price)
        );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a,b) => b.price - a.price)
        );
    }
  }, [sort])

  return (
    <CollectionWrapper>
      <ProductsWrapper>
        <ProductsUl>
          { cat 
            ? filteredProducts.map(item => <Product item={item} key={item.id}/>)
            : products.slice(0, 6).map(item => <Product item={item} key={item.id}/>)}
        </ProductsUl>
      </ProductsWrapper>
    </CollectionWrapper>
  )
}

export default Products