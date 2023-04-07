import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobileL } from "../responsive"

const Container = styled.div`
border: 1px solid green;

width: 30%;
   margin: 20px 3px;
    height: 80%;
   overflow: hidden;
 border-radius:15px;
 box-shadow: 7px 7px 15px 1px gray;
     display: flex;
    justify-content: center;
   align-items: center;
   position: relative;
  // background-color: #ebebeb;
  background:linear-gradient(
  rgba(255,255,255,0.5),
  rgba(255,255,255,0.5)
  ), url("https://images.unsplash.com/photo-1629196613836-0a7e2541990a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1134&q=80")   ;
  transition: transform 0.3s ease-in-out;
 
  &:hover{

      transform: scale(0.9);
   }
  
  
  ${mobileL({ width: "100%" })}

`
const Image = styled.img`
   width: 80%;
   height: 80%;
   box-shadow: 4px 4px 15px 1px gray;
 
    object-fit: cover;
`
const Info = styled.div`
 width: 100%;
display: flex;
 justify-content: space-between;
 align-items: center;
     
`
const Title = styled.h1`
color: teal;
font-size: 25px;
//margin-bottom:20px;
background-color: #f0f0f041;
   
`
const Button = styled.button`
   border: none;
   padding: 10px;
   background-color: #f0f3f6b9;
   color: #05a991;
   letter-spacing: 2px;
   margin-bottom: 10px;
   cursor: pointer;
   font-weight: 600;
   transition: transform 0.3s ease ;
 
 &:hover{
font-weight: 800;
     transform: scale(1.1);
  }
`
const Wrapper = styled.div`
    padding: 0 15px;
    height: 90%;
    width: 100%;
     display: flex;
    flex-direction: column;
     justify-content: center;
   align-items: center;
`
const Imgcontainer = styled.div`
      display: flex;
      justify-content: center;
   align-items: center;
    height: 100%;
  width: 100%;
   overflow: hidden;
 `

const CategoryItem = ({ item }) => {
   return (
      <Container>

         <Wrapper>
            <Imgcontainer>
               <Image src={item.img} />
            </Imgcontainer>
            <Info>
               <Title>{item.Title}</Title>
               <Link to={`/ProductList/${item.cat}`} >
                  <Button>SHOP NOW</Button>
               </Link>
            </Info>
         </Wrapper>

      </Container>
   )
}

export default CategoryItem