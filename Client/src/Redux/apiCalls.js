
import axios from 'axios'
import {loginFailure , loginStart , loginSuccess} from './userRedux.js'


export const login = async(dispatch , user)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:3000/api/v1/auth/signin' ,user);
      let currentToken = res.data.token
      localStorage.setItem("token", currentToken); // set the token in local storage

        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}