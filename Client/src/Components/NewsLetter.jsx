 import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobileL, mobileM, mobileS } from "../responsive.js"

const Container = styled.div`
width: 100%;
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
 ${mobileS({      })};
  ${mobileL({ position: "relative",   top:"275vh"   })};
  ${mobileM({      })};

`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Desc = styled.p`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobileL({ textAlign: "center"})}

`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
`
const Input = styled.input`
border: none;
flex: 8;
`
const Button = styled.button`
flex: 1;
background-color: teal;
border: none;
color: #fff;
${mobileL({ width: "100%"})}

`
const NewsLetter = () => {
  return (
    <Container>
       <Title>News Letter</Title>
       <Desc> Get timely updates from your favorite products .</Desc>
      
       <InputContainer>
             <Input placeholder='   Your Email pls'/>
            <Button><Send/></Button>
       </InputContainer>

    </Container>
  )
}

export default NewsLetter