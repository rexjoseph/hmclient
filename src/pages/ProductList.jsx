import styled from "styled-components";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer";
import "./ProductList.css";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import Announcement from "../components/Announcement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PPEmailMarketing from "../components/PPEmailMarketing";

const Container = styled.div``

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  text-align: center;
  margin: 8rem auto 0;
`

const Title = styled.h1`
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -1.6px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  text-transform: capitalize;

  @media (max-width: 769px) {
    font-size: 20px;
  }
`

const Select = styled.select`
  padding: 10px;
  border: none;
  outline: none;
  background: #f7f7f7;
  color: var(--color-primary);
  width: 100%;
  font-family: inherit;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`

const Option = styled.option`
  color: var(--color-primary)
`

const FullSectionFilter = styled.div`
  background: #fff;
  position: unset;
  top: 48px;
  transition: top .5s ease 0s;
  z-index: 20;
  max-width: 1250px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media screen and (min-width: 1024px) {
    padding-right: 15px;
    padding-left: 15px;
  }

  @media screen and (min-width: 768px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`

const FullSectionFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  border-color: #ccc !important;
  border-top: 1px solid;
  border-bottom: 1px solid;
  height: 52px;

  @media screen and (min-width: 1024px) {
    height: 24px !important;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`

const FullSectionFilterDiv = styled.div`
  flex: 1;

  @media screen and (min-width: 1024px) {
    flex: 0 0 auto;
    width: 185px;
  }
`

const FullSectionFilterButton = styled.button`
  appearance: none;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  transition: all .2s;
  user-select: none;
  white-space: nowrap;
  background: transparent;
  padding-left: 12px;
  padding-right: 12px;
  border: 0;
  position: relative;
  gap: 8px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  width: 100%;
  height: 100%;
  font-family: inherit;
`

const FullSectionFilterP = styled.p`
  font-family: inherit;
  font-weight: 400;
  text-align: left;
  transition: opacity .1s;
  font-size: 13px;
  line-height: 21px;
  letter-spacing: 0.2px;
`

const FullSectionFilterSpan = styled.span``

const DividerDiv = styled.div`
  width: 1px;
  height: auto;
  border-color: #ccc !important;
  border-right: 1px solid;
`

const TwoSections = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1250px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 5rem;
`

const FilterDiv = styled.div`
  width: 170px;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  align-items: stretch;

  @media (min-width: 1024px) {
    display: flex;
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`

const ProductsDiv = styled.div`
  flex: 1;
`

const FilterDivInnerOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
  justify-content: flex-start;
  position: relative;
  top: 0px;
`

const EmptyDiv = styled.div`

`

const FilterDivInnerTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  position: relative;
  gap: 0px;
  opacity: 1;
  pointer-events: initial;

  @media screen and (min-width: 1024px) {
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    gap: 0px;
  }
`

const ShopByColorDiv = styled.div`
  border-bottom: 0;
  padding-left: 16px;
  padding-right: 16px;
  border-color: var(--line-divider);

  @media screen and (min-width: 1024px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const ShopByColorButton = styled.button`
  appearance: none;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  transition: all .2s;
  user-select: none;
  white-space: nowrap;
  background: transparent;
  padding-right: 0px;
  padding-left: 0px;
  border: 0;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: inherit;

  @media screen and (min-width: 1024px) {
    height: 44px;
  }

  @media screen and (min-width: 768px) {
    height: 72px;
  }
`

const ShopByColorP = styled.p`
  font-family: inherit;
  font-weight: 400;
  text-align: left;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 21px;
`

const ShopByColorDiv1 = styled.div`
  overflow: hidden;
  max-height: 170px;
  margin-right: 1px;
  transition: max-height 300ms ease-out 0s;
`

const ShopByColorDiv2 = styled.div`
  overflow-y: auto;
  margin-top: 0px;
  max-height: 170px;
`
const ShopByColorDiv3 = styled.div`
  opacity: 1;
  transition: opacity 200ms ease-out 0s;
`
const ShopByColorDiv4 = styled.div`
  padding-bottom: 0px;
`
const ShopByColorDiv5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 8px;
`

const ShopByColorLink = styled.a``

const ShopByColorLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;
`

const ShopByColorInput = styled.input`
  background-color: #fff;
  border: 1px solid;
  border-color: #ccc;
  border-radius: 0;
  color: var(--color-primary);
  display: grid;
  font: inherit;
  margin: 0;
  place-content: center;
  // appearance: none;
  height: 24px;
  width: 24px;
  min-height: 24px;
  min-width: 24px;
  cursor: pointer;
`

const ShopByColorSpanInner = styled.span`
  font-family: inherit;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: left;
  font-size: 12px;
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
    document.title = `${cat.charAt(0).toUpperCase() + cat.slice(1)} — Hashingmart`
  }, [cat])

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
      <FullSectionFilter>
        <FullSectionFilterWrapper>
          <FullSectionFilterDiv>
            <FullSectionFilterButton>
              <FullSectionFilterP>Sort By</FullSectionFilterP>
              <FullSectionFilterSpan><FontAwesomeIcon icon={faChevronDown} /></FullSectionFilterSpan>
            </FullSectionFilterButton>
            <div className="dropmenu">
              <input type="checkbox" />
              <div className="dropmenu-o">
                <Select onChange={(e) => setSort(e.target.value)}>
                  <Option value="newest">Newest</Option>
                  <Option value="asc">Price (High To Low)</Option>
                  <Option value="desc">Price (Low To High)</Option>
                </Select>
              </div>
            </div>
          </FullSectionFilterDiv>
          <DividerDiv></DividerDiv>
        </FullSectionFilterWrapper>
      </FullSectionFilter>
      <TwoSections>
        <FilterDiv>
          <FilterDivInnerOne>
            <EmptyDiv>
              <FilterDivInnerTwo>
                <ShopByColorDiv>
                  <ShopByColorButton>
                    <ShopByColorP>
                      Shop By Color
                    </ShopByColorP>
                    <FontAwesomeIcon icon={faChevronUp} />
                  </ShopByColorButton>
                  <ShopByColorDiv1>
                    <ShopByColorDiv2>
                      <ShopByColorDiv3>
                        <ShopByColorDiv4>
                          <ShopByColorDiv5>
                            <ShopByColorLink href="#">
                              <ShopByColorLabel>
                                <ShopByColorInput type="radio" aria-label="black" name="color" value="black" onChange={handleFilters}></ShopByColorInput>
                                <ShopByColorSpanInner>Black</ShopByColorSpanInner>
                              </ShopByColorLabel>
                            </ShopByColorLink>
                            <ShopByColorLink href="#">
                              <ShopByColorLabel>
                                <ShopByColorInput type="radio" aria-label="grey" name="color" value="grey" onChange={handleFilters}></ShopByColorInput>
                                <ShopByColorSpanInner>Grey</ShopByColorSpanInner>
                              </ShopByColorLabel>
                            </ShopByColorLink>
                            <ShopByColorLink href="#">
                              <ShopByColorLabel>
                                <ShopByColorInput type="radio" aria-label="navy" name="color" value="navy" onChange={handleFilters}></ShopByColorInput>
                                <ShopByColorSpanInner>Navy</ShopByColorSpanInner>
                              </ShopByColorLabel>
                            </ShopByColorLink>
                            <ShopByColorLink href="#">
                              <ShopByColorLabel>
                                <ShopByColorInput type="radio" aria-label="gray" name="color" value="gray" onChange={handleFilters}></ShopByColorInput>
                                <ShopByColorSpanInner>Gray</ShopByColorSpanInner>
                              </ShopByColorLabel>
                            </ShopByColorLink>
                            <ShopByColorLink href="#">
                              <ShopByColorLabel>
                                <ShopByColorInput type="radio" aria-label="darkolivegreen" name="color" value="darkolivegreen" onChange={handleFilters}></ShopByColorInput>
                                <ShopByColorSpanInner>Darkolivegreen</ShopByColorSpanInner>
                              </ShopByColorLabel>
                            </ShopByColorLink>
                          </ShopByColorDiv5>
                        </ShopByColorDiv4>
                      </ShopByColorDiv3>
                    </ShopByColorDiv2>
                  </ShopByColorDiv1>
                </ShopByColorDiv>

                <ShopByColorDiv>
                  <ShopByColorButton>
                    <ShopByColorP>
                      Shop By Size
                    </ShopByColorP>
                    <FontAwesomeIcon icon={faChevronUp} />
                  </ShopByColorButton>
                  <ShopByColorDiv1>
                    <ShopByColorDiv2>
                      <ShopByColorDiv3>
                        <ShopByColorDiv4>
                          <ShopByColorDiv5>
                            <ShopByColorLink href="#">
                              <ShopByColorLabel>
                                <ShopByColorInput type="radio" aria-label="XS" name="size" value="XS" onChange={handleFilters}></ShopByColorInput>
                                <ShopByColorSpanInner>XS</ShopByColorSpanInner>
                              </ShopByColorLabel>
                            </ShopByColorLink>
                            <ShopByColorLink href="#">
                              <ShopByColorLabel>
                                <ShopByColorInput type="radio" aria-label="S" name="size" value="S" onChange={handleFilters}></ShopByColorInput>
                                <ShopByColorSpanInner>S</ShopByColorSpanInner>
                              </ShopByColorLabel>
                            </ShopByColorLink>
                            <ShopByColorLink href="#">
                              <ShopByColorLabel>
                                <ShopByColorInput type="radio" aria-label="M" name="size" value="M" onChange={handleFilters}></ShopByColorInput>
                                <ShopByColorSpanInner>M</ShopByColorSpanInner>
                              </ShopByColorLabel>
                            </ShopByColorLink>
                            <ShopByColorLink href="#">
                              <ShopByColorLabel>
                                <ShopByColorInput type="radio" aria-label="L" name="size" value="L" onChange={handleFilters}></ShopByColorInput>
                                <ShopByColorSpanInner>L</ShopByColorSpanInner>
                              </ShopByColorLabel>
                            </ShopByColorLink>
                            <ShopByColorLink href="#">
                              <ShopByColorLabel>
                                <ShopByColorInput type="radio" aria-label="XL" name="size" value="XL" onChange={handleFilters}></ShopByColorInput>
                                <ShopByColorSpanInner>XL</ShopByColorSpanInner>
                              </ShopByColorLabel>
                            </ShopByColorLink>
                          </ShopByColorDiv5>
                        </ShopByColorDiv4>
                      </ShopByColorDiv3>
                    </ShopByColorDiv2>
                  </ShopByColorDiv1>
                </ShopByColorDiv>
              </FilterDivInnerTwo>
            </EmptyDiv>
          </FilterDivInnerOne>
        </FilterDiv>
        <ProductsDiv>
          <Products cat={cat} filters={filters} sort={sort} />
        </ProductsDiv>
      </TwoSections>
      <PPEmailMarketing />
      {/* <Prefooter /> */}
      <Footer />
    </Container>
  )
}

export default ProductList