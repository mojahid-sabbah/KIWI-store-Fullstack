import { Add, Remove } from '@mui/icons-material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar/Navbar'
import { mobileL } from '../responsive'
import StripeCheckout from 'react-stripe-checkout';
import { Link } from 'react-router-dom'

const KEY = process.env.REACT_APP_STRIPE
const Container = styled.div`
 width: 100vw;
 `
const Wrapper = styled.div`
padding: 20px; `
const Title = styled.h1`
font-weight:300;
text-align: center;
 
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
${mobileL({ flexDirection: "column" })}

`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};
${mobileL({ margin: "10px 0" })}

 `
const TopTexts = styled.div`
  
  
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;

  `
const Buttom = styled.div`
 display: flex;
 justify-content: space-between;
${mobileL({ flexDirection: "column" })}

 `
const Info = styled.div`
 flex: 3;
 `
const Product = styled.div`
 display: flex;
 margin-top: 10px;
 box-shadow: 4px 4px 15px 1px gray;
border-radius: 15px;
 justify-content: space-between;
 background-color: #fff;
 ${mobileL({ flexDirection: "column" })}

  `
const ProductDetails = styled.div`
   flex: 2;
   padding:20px;
   display: flex;
${mobileL({ flexDirection: "column" })}

   `
const Imgcontainer = styled.div`
   width: 320px;
   height: 320px;
   border: 1px solid gray;
overflow: auto;
   `
const Image = styled.img`
   width: 300px;

`
const Details = styled.div`
    padding: 20px;
    display: flex; 
    flex-direction:column;
    justify-content: space-around;
     `
const ProductName = styled.span`
     
`
const ProductId = styled.span`
     
`
const ProductColor = styled.div`
     width: 20px;
     height: 20px;
     border: 1px solid ${props => props.color === "white" ? "black" : "#fff"};
     border-radius: 50%;
     background-color: ${props => props.color};
     cursor: pointer;
     `
const ProductSize = styled.span`
     
     `
const PriceDetails = styled.span`
     flex: 1;
     display: flex; 
     flex-direction: column;
   align-items: center;
    justify-content: center;
`
const ProAmountContainer = styled.div`
     display: flex;
     background-color: #91bedb;
     padding: 0 10px;
     align-items: center;
     margin-bottom: 10px;
`
const ProductAmount = styled.div`
     font-size: 24px;
     margin: 5px;
`
const ProductPrice = styled.div`
     font-size: 30px;
     font-weight: 600;
     color: green;

 `

const Hr = styled.hr`
margin: 7px 0;
       background-color: aliceblue;
`
const Summary = styled.div`
      flex: 1;
      border: 0.5px solid lightgray;
      background-color: #f8fcff;
      border-radius: 10px;
      padding: 20px;
      height: 50vh;
      
`
const SummaryTitle = styled.h1`
     font-weight: 200;
     ${mobileL({ fontSize: "30px" })}

`
const SummaryItem = styled.div`
      margin: 30px 0;
      display: flex;
      justify-content: space-between;
      font-weight: ${props => props.type === "total" && "700"};
      font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
     
`
const SummaryItemPrice = styled.span`
      
`
const Button = styled.button`
     width: 100%;
     padding: 10px;
     background-color :green ;
     border: none;
     font-size: 20px;
     font-weight: 500;
     color: #fff;
`
const Cart = () => {

    const cart = useSelector(state => state.cart)
    const [finalquantity, setQuantity] = useState(0)
    const [stripeToken, setStripeToken] = useState(null)
    const handelQuantity = (type) => {
        if (type === 'dec') {
            finalquantity > 0 && setQuantity(finalquantity - 1)
            //   {quantity>0 &&} <->  this same this if cluase >>>> if(quantity <= 0 ){ setQuantity(0)}
        } else {
            setQuantity(finalquantity + 1)

        }
    }
    const onToken = (token) => {
        setStripeToken(token)
    }
    return (
        <Container>
            {/*  <Navbar /> */}
            <Announcement />

            <Wrapper>
                <Title>MY SWEET CART</Title>
                <Top>
                    <Link to="/">
                        <TopButton>Continue Shopping</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Buttom>
                    <Info>
                        <Hr />
                        {cart.products.map((product) => (

                            <Product>
                                <ProductDetails>
                                    <Imgcontainer>
                                        <Image src={product.img} />
                                    </Imgcontainer>
                                    <Details>
                                        <ProductName><b>Product : </b>{product.title}</ProductName>
                                        <ProductId><b>ID : </b>{product._id}</ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>Size : </b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProAmountContainer>
                                        {/*     <Add onClick={() => handelQuantity("inc")} />  */}
                                        <ProductAmount> quantity : {product.quantity}</ProductAmount>
                                        {/*      <Remove onClick={() => handelQuantity("dec")}/> */}
                                    </ProAmountContainer>
                                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                </PriceDetails>
                                <Hr />
                            </Product>
                        ))
                        }



                    </Info>
                    <Summary>
                        <SummaryTitle>ORDERS SUMMERY :</SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>SubTotal </SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated shipping </SummaryItemText>
                            <SummaryItemPrice>$5.9</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping discount </SummaryItemText>
                            <SummaryItemPrice>$-5.5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total </SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name='KIWI STORE'
                            image='https://images.unsplash.com/photo-1644325819872-8368f5387bb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80'
                            billingAddress
                            shippingAddress
                            description={`your total is $ ${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >

                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Buttom>
            </Wrapper>
            <Footer />

        </Container>
    )
}

export default Cart