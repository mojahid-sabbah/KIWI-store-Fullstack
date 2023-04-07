import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

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
const Success = () => {

  return (
    <Container>
 

    <Button>success</Button>
    <Link className="" to="/pay">payment</Link>
</Container>
  )
}

export default Success