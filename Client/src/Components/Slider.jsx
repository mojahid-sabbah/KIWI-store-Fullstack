import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import { SliderItems } from "../data"
import { mobileL ,tabletM } from "../responsive"

const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  position: relative;
  background-color: #fee4e4;
  overflow: hidden;
  ${mobileL({display: "none"})}
  ${tabletM({display: "none"})}
 
  `
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color:#efefef;
  display: flex;
align-items:center ;
justify-content: center;
border-radius: 50%;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity:  .5;
z-index: 2;
 `
const Wrapper = styled.div`
 height: 90vh;
 display: flex;
 transition: all 1.5s ease ;
 transform:translateX(${props=>props.slideIndex * -100}vw) ;
 `
const Slide = styled.div`
 width: 100vw;
 height: 100vh;
 display:flex;
 align-items: center;
 background-color: #${props =>props.bg};
 `
const Imgcontainer = styled.div`
 height: 100%;
 flex: 1;
 `
const Image = styled.img`
 height: 90%;
 `

const InfoContainer = styled.div`
padding: 50px;
 flex: 1;
 
 `

const Title = styled.h1`
font-size:70px;`
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Slider = () => {
  const [slideIndex , setslideIndex] = useState(0)
  const handileClick =(direction)=>{/* لتحريك السلايدات */
  const numberOfSlide =4;
if(direction ==="left"){
  setslideIndex(slideIndex >0 ?slideIndex -1: numberOfSlide)
}else{
  setslideIndex(slideIndex <numberOfSlide ?slideIndex +1 : 0)

}

}
  return (
    <Container>
      {/* --------------------------------- */}
      <Arrow direction="left" onClick={()=>handileClick("left")}>
        <KeyboardDoubleArrowLeft />
      </Arrow>
      <Wrapper slideIndex ={slideIndex}> {/* هنا مررنا السلايد اندكس عشان نعمل معادلة لتحريك السلايدات */}
       {SliderItems.map(item=>(

         <Slide bg={item.bg} key={item.id} >
          
           <Imgcontainer>
             <Image src={item.img} />
           </Imgcontainer>
          
           <InfoContainer>
             <Title>{item.Title}</Title>
             <Desc>{item.desc}</Desc>
             <Button>SHOP NOW</Button>
           </InfoContainer>
        
         </Slide>

       ))}
      


      </Wrapper>
      {/* --------------------------------- */}
      <Arrow direction="right" onClick={()=>handileClick("right")}>
        <KeyboardDoubleArrowRight />
      </Arrow>
    </Container>
  )
}

export default Slider