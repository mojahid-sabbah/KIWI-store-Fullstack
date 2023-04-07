import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components'


const KEY = "pk_live_51JAf0NDS8tsWOIlaIezXIh4wZGCWXqgMdvQrJQQsKRLquJILbX6nTQT7oHWriGMtXXgQNPYBSgh8NvRZZS8HXjLP00X3P1wryV"

const Container = styled.div`
 width: 100vw;
 height: 100vh;
 background:linear-gradient(
  rgba(255,255,255,0.5),
  rgba(255,255,255,0.5)
  ), url("https://images.unsplash.com/photo-1471017851983-fc49d89c57c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1570&q=80") center ;
 display: flex;
 justify-content: center;
 align-items: center;
 `
const Button = styled.button`
width: 130px;
border: none;
padding: 15px 20px;
background-color: teal;
color: aliceblue;
`
const Pay = () => {
    const [stripeToken , setstripeToken] = useState(null)

    const ontoken = (token) => {
        setstripeToken(token)
    }
    useEffect(()=>{
const makeRequest = async()=>{
    try {
      const res = await  axios.post("http://localhost:3000/api/v1/checkout/Payment" ,{
        tokenId:stripeToken.id,
        amount:2000,
      })
      console.log(res.data)
    } catch (error) {
        
    }
}
stripeToken && makeRequest();
    } , [stripeToken])
    return (
        <Container>
            <StripeCheckout name="KIWISHOP"
                billingAddress
                shippingAddress
                description='your total is 20$'
                amount={2000}
                token={ontoken}
                stripeKey={KEY}
            >

                <Button>payment</Button>
            </StripeCheckout>
            <Link className="" to="/Success">success</Link>

        </Container>
    )
}

export default Pay