import { Link } from "react-router-dom";



function Signup() {
    
//29112025 So far, Just the front page design has been completed. 
//The actual signup functionality is yet to be implemented.
//DO NOT FORGET TO CONNECT WITH BACKEND LATER.

  return (
    <div className="Signup">
        <div className='IDPW-container'>
            <div className='loginTitle'>Enter Name</div>
            <input type="text" placeholder="Name" />

            <div className='loginTitle'>Enter Email</div>
            <input type="text" placeholder="Email" />
            <button className="signupButton">Available Check</button>

            <div className='loginTitle'>Enter ID</div>
            <input type="text" placeholder="ID" />

            <div className="loginTitle">Enter Password</div>
            <input type="password" placeholder="Password" />

            <div className="loginTitle">Confirm Password</div>
            <input type="password" placeholder="Password" />


            <div className="SignupButtonContainer">
                <Link className='signupLink' to="/login">
            <button className="signupButton">Sign Up</button>
            </Link>
            </div>
        </div>
    </div>
  );
}

export default Signup;

