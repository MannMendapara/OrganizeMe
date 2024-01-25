import React from 'react'
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="login-container">
    <h1 className='login-text'>Register</h1>
  
    <form className='details-cnt'>
    <div className='email-cnt'>
        <label htmlFor='name' className='email' >Name:</label>
        <input type='text' placeholder='Enter Your Name' id='name' />
      </div>
      <div className='email-cnt'>
        <label htmlFor='email' className='email' >Email:</label>
        <input type='email' placeholder='Enter Your Email' id='email' />
      </div>

      <div className='password-cnt'>
        <label htmlFor='password' className='password'>Password:</label>
        <input type='password' placeholder='Enter Your Password' id='password' />
      </div>

      <div className='btn-container'>
        <button type='submit'>Register</button>
      </div>
    </form>
    <div className="">
          <p className="text-pera">
            Already Have  An Acoount{" "}
            <Link className="link" to="/login">
              Login
            </Link>{" "}
            Here
          </p>
        </div>
  </div>
  )
}

export default Register