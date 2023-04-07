import styled from "styled-components"
import { Categories_data } from '../data'
import CategoryItem from './CategoryItem'
import { mobileL, mobileM, mobileS } from "../responsive.js"

const Container = styled.div`
  display: flex;
  padding: 15px;
  height: 80vh;
  flex-wrap: wrap; 
  ;
  align-items: center;
  justify-content: space-between;
  z-index: 99; 
  ${mobileS({    flexDirection: "column",flexWrap: "wrap", width: "100%" })};
  ${mobileL({ position: "sticky", display: "block" ,  width: "100%" })};
  ${mobileM({    display: "block" ,flexWrap: "wrap", width: "100%"  })};
` 

const Hr = styled.hr`
margin: 7px 0;
       background-color: #ec1818;
`
const Categories = () => {
  return (
    <>
      <Container>

        {Categories_data.map(item => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
      {/*  <Hr/> */}
    </>
  )
}

export default Categories