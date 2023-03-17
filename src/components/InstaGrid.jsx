import styled from 'styled-components';
import { mobile } from "../responsive";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  width: 100%;
`

const IGWrapper = styled.div`
  margin: 4rem 0 4rem;
`
const IGHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  width: 100%;

  @media (max-width: 550px) {
    margin-bottom: 16px;
    padding: 0 12px;
  }
`

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 400;

  ${mobile({
    fontSize: "36px",
    letterSpacing: "-1.6px",
    lineHeight: "1.08"
  })}
`

const Link = styled.a`
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

const IGFooter = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2.5rem;

  @media (min-width: 550px) {
    display: none;
  }
`

const IGFooterLink = styled.a`
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
`

const IGRows = styled.ul`
  display: flex;
  overflow-x: auto;
  padding: 0;
  position: relative;

  &:first-of-type {
    padding-left: 1.2rem;
  }

  &:last-of-type {
    padding-right: 1.2rem;
  }
`

const IGList = styled.li`
  scroll-snap-align: start;
  align-items: flex-start;
  display: inline-flex;
  margin: 0 1px;
  position: relative;
`

const IGContentWrapper = styled.div`
  height: 406px;
  position: relative;
  width: 406px;

  @media (max-width: 550px) {
    height: calc(100vw - 24px);
    width: calc(100vw - 24px);
  }
`

const IGContent = styled.div`
  height: 100%;
  width: 100%;
  background: #f1f1f1;
  left: 0;
  position: absolute;
  top: 0;
`

const SocialHandle = styled.div`
  height: 26px;
  left: 0;
  overflow: hidden;
  position: absolute;
  bottom: 12px;
  width: 100%;
`

const HandleLink = styled.a`
  color: #fff;
  font-size: 1.3rem;
  align-items: center;
  background: var(--color-primary);
  border-radius: 0 13px 13px 0;
  bottom: 0;
  max-width: calc(100% - 54px);
  padding: 0 10px 2px 6px;
  text-overflow: ellipsis;
`

const InstaGrid = () => {
  const [ugcContent, setUgcContent] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const getUGCs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/social/all")
        setUgcContent(res.data)
      } catch (err) {}
    };
     getUGCs()
  })

  return (
    <IGWrapper>
      <Container>
        <IGHeader>
          <Title>On The Grid</Title>
          <Link onClick={() => navigate('/products')}>Shop — Social</Link>
        </IGHeader>
      </Container>
      <IGRows>
        {ugcContent?.map(item => (
          <IGList key={item._id}>
            <IGContentWrapper>
              <IGContent>
                <LazyLoadImage
                  src={item.photourl}
                  width={"100%"}
                  height={"100%"}
                  effect="blur"
                />
                <SocialHandle>
                  <HandleLink>
                    @{item.handle}
                  </HandleLink>
                </SocialHandle>
              </IGContent>
            </IGContentWrapper>
          </IGList>
        )).reverse()}
      </IGRows>
      <IGFooter>
        <IGFooterLink onClick={() => navigate('/products')}>
          Shop — Social
        </IGFooterLink>
      </IGFooter>
    </IGWrapper>
  )
}

export default InstaGrid