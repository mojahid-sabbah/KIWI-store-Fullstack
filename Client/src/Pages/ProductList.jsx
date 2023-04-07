import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from "styled-components"
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
//import Navbar from '../Components/Navbar/Navbar'
import NewsLetter from '../Components/NewsLetter'
import Products_group from '../Components/Products_group'
import { mobileL } from '../responsive'

const Container = styled.div`
 
 `
const Title = styled.h1`
 margin: 20px;
 `
const FilterContainer = styled.div`
 display: flex;
 justify-content: space-between;
 `
const Filter = styled.div`
 margin: 20px;
 ${mobileL({ width: "0 20px", display: "flex", flexDirection: "column" })}

 `
const FilterText = styled.span`
font-size:20px;
font-weight: 600;
margin-right: 20px;
`
const Select = styled.select`
 margin-right: 20px;
 padding: 10px;
 ${mobileL({ marginTop: "10px" })}

 `
const Option = styled.option`
 margin: 20px;
 `
const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split("/")[2]
    console.log(cat)
    const [filter, setFilters] = useState({})
    const [sort, setSorts] = useState("newest")

    const handileFilters = (e) => {
        const value = e.target.value;
        setFilters({ ...filter, [e.target.name]: value })   // note this line
    }
    //console.log(filter)
    return (

        <Container>

{/*             <Navbar />
 */}            <Title>Product List Page</Title>
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Product:
                    </FilterText>
                    <Select name="color" onChange={handileFilters}>
                        <Option disabled  >color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handileFilters}>
                        <Option disabled>Size</Option>
                        <Option>xs</Option>
                        <Option>s</Option>
                        <Option>m</Option>
                        <Option>l</Option>
                        <Option>xl</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products :
                    </FilterText>
                    <Select onChange={(e) => setSorts(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price(asc)</Option>
                        <Option value="desc">Price(Desc)</Option>

                    </Select>
                </Filter>


            </FilterContainer>
         
            <Products_group cat={cat} filter={filter} sort={sort} />
           
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList