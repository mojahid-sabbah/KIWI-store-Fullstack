import styled from "styled-components"
import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from "react-router-dom"
import { mobileL, mobileM, mobileS } from "../responsive.js"

const Info = styled.div`
    width: 100%;

    height: 100%;
    position:absolute ;
    top:0;
    background-color:rgba(0,0,0,0.4 );
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all .5s ease;
 cursor: pointer;
 `
const Container = styled.div`
 margin: 20px 0;
      width: 70%;
     height: 350px;
     flex-wrap: wrap;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ecf3f5;
    box-shadow: 2px 4px 15px gray;
    border-radius:  5%;
    position: relative;
   &:hover ${Info}{
    opacity: 1;
  }
`

/* const Circle = styled.div`
   height: 200px;
   width: 200px;
   border-radius:  50%;
   background-color: #fff;
   position: absolute;

` */
const Image = styled.img`
   height: 100%;
   width: 100%;
   object-fit: cover;
      z-index: 2;
`
/* const Divison = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
 `
const Title = styled.div`
 margin-top: 10px;
 padding : 10px;
 background-color: #006c6c85;
 border-radius: 20px;

` */
const Icon = styled.div`
   width: 40px;
   height: 40px;
   border-radius:50%  ;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #1cababb2;
   margin: 10px;
   color: #fff;
transition: all .5s ease;
   &:hover{
    background-color: #005252;
    transform: scale(1.1);
   }
`
const Title = styled.h1`
font-size: 30px;
 color :#005252 ;
 text-shadow: #00808087 15px 10px 2px;
  `
  const Header = styled.div`
  margin: 10px 0;
   display: flex;
  flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 30%;
   height: 100%;
   ${mobileS({     width: "100%" })};
  ${mobileL({    width: "100%" , top:"1900px"  })};
  ${mobileM({    width: "100%"  })};
  `
const Product = ({ item }) => {
  return (
    <>
      <Header>

        <Container>
          {/* <Circle/> */}
          <Image src={item.img} />
          <Info>
            <Icon>   <ShoppingCartOutlined />    </Icon>

            <Icon>  <Link to={`/ProductsPage/${item._id}`}> <Search color="white" />  </Link>      </Icon>

            <Icon>     <FavoriteBorderOutlined />    </Icon>
          </Info>
        </Container>
        <Title>{item.title}</Title>
      </Header>
    </>
  )
}

export default Product