import { Link } from "react-router-dom";

function Login() {
    

  return (
    <div className="Login">
        <div className='IDPW-container'>
            <div className='loginTitle'>Login</div>
            <input type="text" placeholder="ID" />
            <div className="loginTitle">PassWord</div>
            <input type="password" placeholder="Password" />
            <div className="SignupTitle">
                <Link className='signupLink' to="/signup">Click here to Join!</Link>
                <br></br>
                <Link className='forgotLink' to="/forgot">Forgot Password?</Link>
            </div>
            <div className="loginButtonContainer">
                <Link className='loginLink' to="/">
            <button className="loginButton">Login</button>
            </Link>
            </div>
        </div>
    </div>
  );
}

export default Login;
