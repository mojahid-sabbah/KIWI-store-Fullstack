import { Route, Router, Routes, Navigate, useNavigate, } from 'react-router-dom';
import './App.css';
import { Navbar, Cart ,Home ,Pay ,Success ,Login ,ProductList , ProductsPage   ,FirstNavbar , } from './index.route.js';
import Regester from './Pages/Regester.jsx'
//import {Regester} from './index.route.js';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useSelector } from "react-redux";

 
function App() {

  const user = useSelector((state) => state.user.login);
  // alert( )
  const Navigate = useNavigate();
  let [loginData, setloginData] = useState(null)

  let setUserData = () => {
    let token = localStorage.getItem('token')
    let decoded = jwtDecode(token)
    setloginData(decoded)
  }
  let logout = () => {
    console.log("hello darly")
    localStorage.removeItem('token')
    setloginData(null)
    /*   goToLogin(); */
    Navigate('/Login')
  }


  // let user = true;


  useEffect(() => {
    if (localStorage.getItem('token')) {
       setUserData();
    }
  }, [])

  return (
    <>

     
         
{/*       <Navbar loginData={loginData} logout={logout} /> */}     
  <FirstNavbar /> 
      <Routes> 
        <Route path='/' element={<Home />}></Route>
          <Route path='ProductList/:cat' element={<ProductList />}></Route>
        <Route path='ProductsPage/:id' element={<ProductsPage />}></Route> 
        <Route path='Cart' element={<Cart />}></Route>
        <Route path="/login">
          {user ? <Navigate to="/" /> :<Route path='/login' element={<Login/>}  ></Route>
}
          </Route>
        <Route path="/register">
          {user ? <Navigate to="/" /> : <Route path='/register' element={<Regester/>}  ></Route>} 
        </Route>
        <Route path='pay' element={<Pay />}></Route>
        <Route path='Success' element={<Success />}></Route>

      </Routes>
           
    </>


  );
}

export default App;
