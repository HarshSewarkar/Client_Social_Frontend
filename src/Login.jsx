import "./Style/login.css";

const Login = () => {
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
            <div className="inputBox">
              <input placeholder="Email" type="text" className="loginInput" />
              <input placeholder="Password" type="text" className="loginInput" />
              <button className="loginButton">Login</button>
              <span className="loginForget">Forgot Password?</span>
              <button className="loginRegisterButton">Create a New Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
