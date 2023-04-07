import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
//import Navbar from '../Components/Navbar/Navbar'
import NewsLetter from '../Components/NewsLetter'
import { mobileL } from '../responsive'
import axios from "axios"
import { addProduct } from '../Redux/cartRedux.js'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
 
const Container = styled.div`

 
 `
const Wrapper = styled.div`
 padding: 50px;
 display: flex;
 ${mobileL({ padding: "10px", flexDirection: "column" })}

  `
const ImgContiner = styled.div`
flex:1; `
const Image = styled.img`
 width: 100%;
 height: 90vh;
 object-fit: cover;
 ${mobileL({ heigth: "40vh" })}

 `
const InfoContainer = styled.div`
 flex: 1;
 margin-left: 15px;
 ${mobileL({ padding: "10px" })}

 `
const Title = styled.h1`
 font-weight: 200;
 `
const Desc = styled.p`
 margin: 20px 5px;
 `
const Price = styled.span`
 font-weight: 200;
 font-size: 40px;
 text-decoration: underline;
 color: green;

 `
const FilterContainer = styled.div`
width: 50%;
margin: 30px 40px;
 display: flex;
 justify-content: space-between;
 ${mobileL({ flexDirection: "column", width: "100%" })}

`
const Filter = styled.div`
display: flex;
align-items: center;
${mobileL({ margin: "10px 0" })}

`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0 5px;
cursor: pointer;
 
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOP = styled.option`
`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobileL({ width: "100%" })}

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px teal solid;
background-color: #fff;
cursor: pointer;
border-radius: 15px;
font-weight: 500;
&:hover{
    background-color: #73acac66;
}
`

const ProductsPage = () => {   // product
    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/product/getProduct/${id}`)
                setProduct(res.data);
            } catch (error) {
                console.log(error)

            }
        }
        getProducts()
    }, [id])

    const handelQuantity = (type) => {
        if (type === 'dec') {
            quantity > 0 && setQuantity(quantity - 1)
            //   {quantity>0 &&} <->  this same this if cluase >>>> if(quantity <= 0 ){ setQuantity(0)}
        } else {
            setQuantity(quantity + 1)

        }
    }

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity , color , size}))
    };
    
    return (
        <Container>
{/*             <Navbar />
 */}            <Announcement />
            <Wrapper>
                <ImgContiner>
                    <Image src={product.img} />
                </ImgContiner>
                <InfoContainer>
                    <Title>{product.title} </Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>

                        {product && product.color && (
                            <Filter>
                                <FilterTitle>Color:</FilterTitle>
                                {product.color?.map((c) => (
                                    <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                                ))}
                            </Filter>
                        )}


                        {product && product.size && (
                            <Filter>
                                <FilterTitle>Size:</FilterTitle>
                                <FilterSize onChange={(e) => { setSize(e.target.value) }}>
                                    {product.size?.map((s) => (
                                        <FilterSizeOP key={s}>{s}</FilterSizeOP>
                                    ))}
                                </FilterSize>
                            </Filter>
                        )}


                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handelQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handelQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductsPage