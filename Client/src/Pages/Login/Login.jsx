import { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  useEffect(() => {
    Getuserlogin();
  }, []);

  const Getuserlogin = async () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Set the token in Axios default headers
      axios.defaults.headers.common['Authorization'] = storedToken;
      // Optionally, you can make an initial request to validate the token
      // and get the user details if needed.
      // Example:
      const response = await axios.get('http://localhost:3000/auth/login');
      if (response) {
        window.location.href = '/user'
      }
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });
      if (response) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = token
        window.location.href = '/user'
      }
    } catch (error) {
      // Handle errors
      console.error('Login error:', error);
    }
  }

  return (
    <>
      <div className="login-container">
        <h1 className="login-text">Login</h1>
        <form className="details-cnt" onSubmit={handleLogin}>
          <div className="email-cnt">
            <label htmlFor="email" className="email">
              Email:
            </label>
            <input type="email" placeholder="Enter Your Email" id="email" className="input" onChange={e => setemail(e.target.value)} />
          </div>
          <div className="password-cnt">
            <label htmlFor="password" className="password">
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              id="password"
              className="input"
              onChange={e => setpassword(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="sub-btn">Login</button>
          </div>
        </form>
        <div className="">
          <p className="text-pera">
            Do not have An Account{" "}
            <Link className="link" to="/reg">
              Register
            </Link>{" "}
            Here
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
