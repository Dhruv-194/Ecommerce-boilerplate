import React from 'react'
import "./Login.css"

 const Register = () => {
  return (
    
    <div className='login'>
  
        <form className='login__form'>
            <h1>Register here</h1>
          
            <input  type='email' placeholder='Email'></input>
            <input  type='name' placeholder='Firstname'></input>
            <input  type='name' placeholder='Lastname'></input>
            <input  type='password' placeholder='Password'></input>
        </form>

    </div>
   
  );
}
export default Register