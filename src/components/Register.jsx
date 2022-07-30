import React from 'react'
import "./Register.css"
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const url = 'http://localhost:5000/register';

 const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
   
      const resp = await axios.post(url,{firstname:firstname, lastname:lastname, email: email, password: password});
      if (resp.status == 201){
        toast.success("Register Successful");
        setTimeout(function(){
          window.location.href = 'http://localhost:3000/login';
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
      <form class="register-form">
        <input type="text" 
        id='firstname'
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        placeholder="firstname"/>
        <input type="text" 
        id='lastname'
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        placeholder="lastname"/>
        <input type="password"
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"/>
        <input type="text"
         id='email'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
          placeholder="email address"/>
        <button>create</button>
        <p class="message">Already registered? <a href="/login">LogIn</a></p>
      </form>
     
    </div>
  </div>
   
  );
}
export default Register