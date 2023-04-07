import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
const Wrapper = styled.div`
 padding: 20px;
 width: 40%;
  background-color: #fff;

  `
const Form = styled.form`
 display: flex;
 flex-wrap: wrap;
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
const Agreement = styled.span`
 font-size: 15px;
 margin: 20px 0;
 font-weight: 300;
 `
const Button = styled.button`
 width: 130px;
 border: none;
 padding: 15px 20px;
 background-color: teal;
 color: aliceblue;
 `



const Regester = () => {

  let [loading, setLoading] = useState(false)
  let [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  })

  let navigate = useNavigate();

  let goToLogin = (e) => {
    e.preventDefault();
    let path = '/Login'
    navigate(path)
  }

  let [errorList, seterrorList] = useState([])

  let SubmitFormData = async (e) => {
    e.preventDefault();
    /*  let validateResule = validatejoi();
    seterrorList(validateResule.error.details)  
     */
    let { data } = await axios.post("http://localhost:3000/api/v1/auth/signUp", user);
    if (data.message == 'success') {
      goToLogin();
    } else {
      alert(data.message)

    }
    setLoading(true)
  }

  let getinputvalue = (e) => {
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value;
    setUser(myUser)
  }

  /* 
    let validatejoi = () => {
      let schema = Joi.object({
  
        name: Joi.string().alphanum().min(5).max(30).required(),
        age: Joi.number().min(10).max(70).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.number().required(),
      });
      return schema.validate(user, { abortEarly: false })
  
  
    }  */
  return (
    <Container>
      <Wrapper>
        <Title>REGESTER IN KIWI'</Title>
        <Form onSubmit={SubmitFormData} >
          <Input type="FirstName" name='FirstName' onChange={getinputvalue} placeholder="FirstName" />
          <Input type="LastName" name='LastName' onChange={getinputvalue} placeholder="LastName" />
          <Input type="userName" name='userName' onChange={getinputvalue} placeholder="userName" />
          <Input type="userName" name='userName' onChange={getinputvalue} placeholder="c" />
          <Input type="Password" name='Password' onChange={getinputvalue} placeholder="Password" />
           <Agreement>
            Lorem ipsum dor sit amet consectetur adipisicing elit. Omnis quos porro aperiam eos? Debitis, ratione.
          </Agreement>
        <Button>SIGN UP</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Regester