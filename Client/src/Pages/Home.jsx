import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar/Navbar'
import NewsLetter from '../Components/NewsLetter'
import Products_group from '../Components/Products_group'
import Slider from '../Components/Slider'
import styled from "styled-components"
import { mobileL, mobileM, mobileS } from "../responsive.js"


const Container = styled.div`
background-color:#fff;
display: flex;
flex-direction: column;
  align-items: center;
 justify-content: center;
 width: 100%;
 
 ${mobileS({    })};
  ${mobileL({   })};
  ${mobileM({      })};
`
const CategorySec = styled.div`
  height: 140vh;
 `
const ProdSection = styled.div`
display: flex;
   align-items: center;
 justify-content: center;
  `
const Home = () => {
  return (
    <>
      <Container>

        <Announcement />
        <Slider />
        
        <CategorySec>
          <Categories />
        </CategorySec>
        
        <ProdSection>
          <Products_group />
        </ProdSection>

        <NewsLetter />
        <Footer />
      </Container>
    </>
  )
}

export default Home