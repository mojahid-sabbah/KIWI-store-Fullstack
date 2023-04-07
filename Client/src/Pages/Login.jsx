import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import { login } from '../Redux/apiCalls.js'
import { mobileL } from '../responsive'
 import styled from 'styled-components'

const Container = styled.div`
 width: 100vw;
 height: 100vh;
  background:linear-gradient(
  rgba(255,255,255,0.5),
  rgba(255,255,255,0.5)
  ), url("https://images.unsplash.com/photo-1481127950397-88e4c4f4b83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1570&q=80") center ;
 display: flex;
 justify-content: center;
 align-items: center;

 `
const Wrapper = styled.div`
 padding: 20px;
 width: 40%;
  background-color: #fff;
  ${mobileL({ width: "80%" })}

  `
const Form = styled.form`
 display: flex;
flex-direction: column;
  margin-bottom: 13px;
  `
const Title = styled.h1`
 font-size: 24px;
 font-weight: 300;

 `
const Input = styled.input`
 flex: 1;
 min-width: 30%;
 margin: 20px 10px 0 0;
padding: 10px;
 `

const Button = styled.button`
 width: 130px;
 border: none;
 padding: 15px 20px;
 background-color: teal;
 color: aliceblue;
 cursor: pointer;
 &:disabled{
  color:green;
  cursor:not-allowed;
 }
 `
const Link = styled.h1`
  font-size: 15px;
  margin-top: 10px;
  font-weight: 200;
 `
const Error = styled.h3`
font-size: 15px;
margin-top: 10px;
font-weight: 200;
color:red;
`

const LinkSpan = styled.a`
 font-size: 15px;
 margin-top: 10px;
 color: blue;
 font-weight: 200;
 text-decoration: underline;
`

const Login = ( ) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorList, setErrorList] = useState("");
  let myToken = "";
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  let navigate = useNavigate();
  let goToHome = (e) => {
    let path = '/Home'
    navigate(path)
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = { email, password };
    try {
       const dispatchlogin = await login(dispatch, { email, password })

       if(true){
       
         console.log(  localStorage.getItem("token"))
  //myToken = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
  //await dispatch(login(user));
//  localStorage.setItem("token", myToken); // set the token in local storage
  goToHome();
}else{
  console.log({"error" :""})
}

    } catch (error) {
      setErrorList(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login IN KIWI'</Title>
        <Form onSubmit={handleSubmit} >
          <Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email" />
          <Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Password" />
 
             <Button disabled={isFetching}>Login</Button>
           {errorList ? <div className='alert alert-danger '>
            {errorList}
          </div> : ''
          }
          {error && <Error>Something is error !@_@</Error>}
        </Form>
        <Link>Do not you remember the <LinkSpan>Password</LinkSpan> ?</Link>
        <Link>Create a <LinkSpan>New Acount .</LinkSpan> </Link>
      </Wrapper>
    </Container>
  )
}

export default Login
