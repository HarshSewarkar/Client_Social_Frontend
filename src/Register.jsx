import "./Style/Register.css";

const register = () => {
  return (
    <>
      <div className="register">
        <div className="registerWrapper">
          <div className="registerLeft">
            <h3 className="registerLogo">ChatterApp</h3>
            <span className="registerDesc">
              connect with other planets with my chatter app.
            </span>
          </div>
          <div className="registerRight">
            <div className="inputBox">
              <input placeholder="Username" type="text" className="registerInput" />
              <input placeholder="Email" type="text" className="registerInput" />
              <input placeholder="Password" type="text" className="registerInput" />
              <input placeholder="Password Again" type="text" className="registerInput" />
              <button className="registerButton">Sing Up</button>
              <button className="registerRegisterButton">Login to Your Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
