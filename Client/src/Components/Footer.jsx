import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobileL, mobileM, mobileS } from "../responsive.js"

const Container = styled.div`
 display: flex;
align-items: center;
justify-content: center;
 ${mobileS({      })};
  ${mobileL({flexDirection:"column", position: "relative",   top:"275vh"   })};
  ${mobileM({      })};

`
const Left = styled.div`
 flex: 1;
 padding: 20px;
`
const Logo = styled.h1`
 
`
const Desc = styled.p`
 margin: 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
 justify-content: center;
`
const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 margin-right: 10px;
 border-radius: 50%;
 color: #fff;
 background-color: #${props=>props.color};
 display: flex;
 align-items: center;
 justify-content: center;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
 
`
const Title = styled.h3`
  margin-bottom: 30px;

`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
    display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
 width: 50%;
 margin-bottom:10px ;
`


const Right = styled.div`
  flex: 1;
padding: 20px;
`

const ContactItem = styled.div`
 margin-bottom: 20px;
 display: flex;
 align-items: center;
`
 
const Footer = () => {
  return (
    <Container>
        <Left>
           <Logo>KIWI'</Logo> 
           <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit enim praesentium aut a provident hic itaque ipsam expedita quos odit. Sit, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur doloremque totam, necessitatibus maxime magni.</Desc>
           <SocialContainer>
            <SocialIcon color ="3B5999">
                <Facebook/>
            </SocialIcon>

            <SocialIcon color ="E4405F">
                <Instagram/>
            </SocialIcon>

            <SocialIcon color ="55ACEE">
                <Twitter/>
            </SocialIcon>

            <SocialIcon color ="E60023">
                <Pinterest/>
            </SocialIcon>
           </SocialContainer>
        </Left>
        <Center>
            <Title>UseFul Links</Title>
            <List>
                <ListItem>Home </ListItem>
                <ListItem>Cart </ListItem>
                <ListItem> Man Fashion</ListItem>
                <ListItem>Women Fashion </ListItem>
                <ListItem>Accessories </ListItem>
                <ListItem>My Account </ListItem>
                <ListItem>Order Tracking </ListItem>
                <ListItem>Wishlist </ListItem>
                <ListItem>Tecnologic </ListItem>
                <ListItem>Terms </ListItem>


            </List>
        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}} /> 622 ipsum dolor , south consectetur adipisicing </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> +1 234 56 78</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/> contact@KIWI.dev</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer