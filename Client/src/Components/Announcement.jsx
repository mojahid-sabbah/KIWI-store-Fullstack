import styled from "styled-components"

 
 const Container = styled.div`
 height: 30px;
 background-color: #2e5757;
 color: #fff;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 14px;
 font-weight: 500;
 width: 100%;
 `
const Announcement = () => {
  return (
    <Container>
        Super Deal ! Free Shipping on Orders Over $50 
    </Container>
  )
}

export default Announcement