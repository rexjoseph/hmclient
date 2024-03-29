import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import CollectionItem from "../components/CollectionItem"
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import InstaHandle from '../components/InstaHandle'
import axios from 'axios'
import Loading from "../components/Loading";

const Page = styled.section``
const Collections = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 769px) {
    padding: 0 1.5rem;
  }
`
const CollectionWrappers = styled.div`
  margin-top: 64px;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 580px;
  padding: 36px 0 36px;
  text-align: center;
`
const Heading = styled.h1`
  font-size: 48px;
  line-height: 1;
  margin: 0;

  @media (max-width: 769px) {
    font-size: 30px;
  }
`
const SubHeader = styled.h2`
  font-size: 17px;
  letter-spacing: 0;
  line-height: 22px;
  margin: 4px 0 0;
  font-weight: 400;

  @media (max-width: 769px) {
    font-size: 15px;
  }
`

const CollectionsList = () => {
  const {pathname} = useLocation()
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/category/all")
        setCategories(res.data)
        setLoading(true)
      } catch (err) {}
    };
     getCategories()
  }, [])

  useEffect(() => {
    document.title = `Shop By Collections — Hashingmart`
  })

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Page>
      <Announcement />
      <Navbar />
      <Collections>
        <CollectionWrappers>
          <Header>
            <Heading>Shop By Collections</Heading>
            <SubHeader>We create best in class essentials engineered for versatility, designed for the planet.</SubHeader>
          </Header>
          {
            loading ? (
              categories.map(item => (
                <CollectionItem item={item} key={item._id} />
              ))
            ) : (<Loading />)
          }
        </CollectionWrappers>
      </Collections>
      <InstaHandle />
      <Footer />
    </Page>
  )
}

export default CollectionsList