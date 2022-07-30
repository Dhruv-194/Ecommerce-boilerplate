import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import "./Login.css"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const url = 'http://localhost:5000/login';

 const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
   
      const resp = await axios.post(url,{email: email, password: password});
      if (resp.status == 200){
        toast.success("Login Successful");
        setTimeout(function(){
          window.location.href = 'http://localhost:3000/products';
       }, 5000);
      }
      
     
      console.log(resp.data);
      
    }catch(err){
      console.log(err.resp);
    }
  };
  return (
    <div class="login-page">
    <div class="form" onSubmit={handleSubmit}>
   
      <form class="login-form" >
        <input type="email" 
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email address"/>
        <input type="password" 
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"/>
        <button>login</button>
        <p class="message">Not registered? <a href="/register">Create an account</a></p>
      </form>
    </div>
  </div>
    
    // <div className='login'>
  
    //     <form className='login__form'>
    //         <h1>Login Here</h1>
          
    //         <input  type='email' placeholder='Email'></input>
    //         <input  type='password' placeholder='Password'></input>
    //     </form>

    // </div>
   
  );
}
export default Login