import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFeatching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email:email.current.value, password:password.current.value }, dispatch);
    console.log(user);
  };
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">ChatterApp</h3>
            <span className="loginDesc">
              connect with other planets with my chatter app.
            </span>
          </div>
          <div className="loginRight">
            <form onSubmit={handleClick} className="inputBox">
              <input
                placeholder="Email"
                type="text"
                className="loginInput"
                ref={email}
                required
              />
              <input
                placeholder="Password"
                type="password"
                className="loginInput"
                required
                minLength={6}
                ref={password}
              />
              <button className="loginButton">Login</button>
              <span className="loginForget">Forgot Password?</span>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
