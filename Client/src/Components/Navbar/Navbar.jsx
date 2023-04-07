import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import React from 'react'
import styled from 'styled-components'
import { mobileL } from '../../responsive';
import { Link } from 'react-router-dom';
const Container = styled.div`
  height: 60px;
  color: white;
  background-color: teal;
  width: 100%;
 

 ${mobileL({ heigth: "50px" })}
`
const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 align-items: center;
 text-align: center;

 justify-content: space-between;
 ${mobileL({ padding: "10px 0px" })}
`
const Left = styled.div`
display: flex ;
align-items: center;
flex: 1;
`
const Center = styled.div`
flex: 1;

`
const Right = styled.div`
flex: 1;
display: flex;
    justify-content: flex-end;
    ${mobileL({ justifyContent: "center", marginRight: "10px" })}

`

const MenuItem = styled.button`
    font-size:14px;
    cursor: pointer;
    margin-left: 10px;
    background-color: teal;
    padding: 5px;
    border: none;
    color: #fff;
    ${mobileL({ fontSize: "12px", marginLeft: "10px" })}
    
`
const Logo = styled.h1`
 font-weight: bold;
 ${mobileL({ fontSize: "20px" })}
 `
const SearchContainer = styled.div`
    border-radius: 15px;
    display: flex ;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobileL({ marginLeft: " 5px" })}

`
const Input = styled.input`
    border-radius: 15px;
    height: 23px;
    border: none;
    ${mobileL({ width: "50px" })}
`
const Navbar = ({ loginData, logout }) => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo />
          <SearchContainer>
            <Input placeholder='  search' />
            <Search />
          </SearchContainer>
        </Left>
        {/* //////////////////// */}
        <Center>
          <Link to="/">
            <Logo >
              KIWI'
            </Logo>
          </Link>


        </Center>
        {/* //////////////////// */}

        <Right>
          {!loginData ?
            <>
              <Link to='/Regester'>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </> :   <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Welcome <span className='span-name'> {loginData.name}</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={logout}>Logout</Link>
                  </li>


                </>
          }


          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </MenuItem>
          </Link>

        </Right>
        {/* //////////////////// */}
      </Wrapper>
    </Container>
  )
}

export default Navbar