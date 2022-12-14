import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styled from "styled-components"
import axios from 'axios'

const Homepage = styled.div`
  margin-top: 5rem;
`

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;

  @media (max-width: 500px) {
    height: 60vh
  }
`

const Layout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  text-align: center;

  @media (max-width: 1420px) {
    padding: 0;
  }
`

const Asset = styled.div`
  background-color: #f1f1f1;
  height: 100%;
  left: 0;
  object-fit: cover;
  object-position: top center;
  padding-top: 56.25%;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 2;
`

const Figure = styled.figure`
  height: calc(100% - 86px);
  padding: 0;
  margin: 0;
  width: 100%;
`

const AssetImage = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: top center;
  width: 100%;
  opacity: 1;
`

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  left: 0;
  margin: 0 auto;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

const Heading = styled.h1`
  font-size: 80px;
  font-weight: 500;
  color: #FFF;
  letter-spacing: -3.2px;
  line-height: 1;
  margin: 0;
  z-index: 2;
  width: 65%;

  @media (max-width: 1420px) {
    width: 70%;
  }

  @media (max-width: 769px) {
    width: 100%;
    font-size: 45px;
  }
`

const SubHeading = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: #FFF;
  letter-spacing: -.3px;
  line-height: 1.29;
  margin: 24px 0 12px;
  max-width: 600px;
  z-index: 2;
  width: 65%;
  padding: 0 24px;

  @media (max-width: 1420px) {
    width: 60%;
  }

  @media (max-width: 769px) {
    width: 100%;
  }
`

const Action = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  width: 100%;
  z-index: 2;
`

const LinkA = styled.a`
  border: 0;
  cursor: pointer;
  font-size: 16px;
  padding: 0 24px;
  position: relative;
  transition: background .2s ease-in-out,color .2s ease-in-out;
  white-space: nowrap;
  border-radius: 24px;
  height: 48px;
  background: #fff;
  color: var(--color-primary);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  line-height: 48px;

  &:hover {
    background: var(--color-primary);
    color: #FFF;
  }
`

const Slider = () => {
  const navigate = useNavigate()
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const getBanners = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/banner/all")
        setBanner(res.data)
      } catch (err) {}
    };
     getBanners()
  }, [])

  return (
    <Homepage>
      {banner?.map(item => (
        <Hero>
          <Layout>
            <Asset>
              <Figure>
                <AssetImage>
                  <Image src={item.image} />
                </AssetImage>
              </Figure>
              <Header>
                <Heading>{item.title}</Heading>
                <SubHeading>{item.caption}</SubHeading>
                <Action>
                  <LinkA onClick={() => navigate(`${item.target}`)}>{item.actionText}</LinkA>
                </Action>
              </Header>
            </Asset>
          </Layout>
        </Hero>
      ))}
    </Homepage>
  )
}

export default Slider