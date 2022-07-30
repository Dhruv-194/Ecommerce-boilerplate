import React from 'react'
import "./Login.css"

 const Login = () => {
  return (
    
    <div className='login'>
  
        <form className='login__form'>
            <h1>Login Here</h1>
          
            <input  type='email' placeholder='Email'></input>
            <input  type='password' placeholder='Password'></input>
        </form>

    </div>
   
  );
}
export default Login