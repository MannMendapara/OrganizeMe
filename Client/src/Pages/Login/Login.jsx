import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <h1 className="login-text">Login</h1>

        <form className="details-cnt">
          <div className="email-cnt">
            <label htmlFor="email" className="email">
              Email:
            </label>
            <input type="email" placeholder="Enter Your Email" id="email" />
          </div>

          <div className="password-cnt">
            <label htmlFor="password" className="password">
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              id="password"
            />
          </div>

          <div className="btn-container">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="">
          <p className="text-pera">
            Don't Have An Acoount{" "}
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
