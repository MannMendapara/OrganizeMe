import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {

  const navigate = useNavigate();

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      console.error("Please fill in all required fields.");
      return;
    }

    try {
      await axios.post('http://localhost:3000/reg', {
        name,
        email,
        password,
      }).then((response) => {
        const { token } = response.data;
        // Store the token in localStorage or sessionStorage
        localStorage.setItem('token', token);
        navigate('/auth/login');
      }).catch(e => {
        console.error(e);
      })
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="login-container">
      <h1 className='login-text'>Register</h1>
      <form className='details-cnt' onSubmit={handleRegistration}>
        <div className='email-cnt'>
          <label htmlFor='name' className='email' >Name:</label>
          <input type='text' placeholder='Enter Your Name' id='name' onChange={e => setname(e.target.value)} />
        </div>
        <div className='email-cnt'>
          <label htmlFor='email' className='email' >Email:</label>
          <input type='email' placeholder='Enter Your Email' id='email' onChange={e => setemail(e.target.value)} />
        </div>
        <div className='password-cnt'>
          <label htmlFor='password' className='password'>Password:</label>
          <input type='password' placeholder='Enter Your Password' id='password' onChange={e => setpassword(e.target.value)} />
        </div>
        <div className='btn-container'>
          <button type='submit' className='sub-btn'>Register</button>
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