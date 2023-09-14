import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import Forgot from './Forgot';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  // let navigate=useNavigate();

//   import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import { useStates } from "../States";

// function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const { setUser } = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  const notify = () => toast.error("Incorrect email or password",{position:toast.POSITION.TOP_CENTER,theme:'colored'});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:8080/login/${email}/${pass}`
      )
      .then((response) => {
        let err = response.data;
        console.log(response.data);
        if (err === "Login Successfull") {
          setError("");
          navigate("/home");
        } else {
          // setError("Incorrect email or password");
          <ToastContainer/>
        }
        
        if (email==="727821tucs131@skct.edu.in" && err === "Login Successfull") {
          navigate("/admin/home")
        } else {
          // <ToastContainer/>
          
        }
      });
    console.log("Email:", email);
    console.log("Password:", pass);
  };

//   return (
//     <div>
//       <h2>{error}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
          // <input
          //   type="email"
          //   value={email}
          //   onChange={handleEmailChange}
          //   required
          // />
//         </div>
//         <div>
//           <label>Password:</label>
          // <input
          //   type="password"
          //   value={password}
          //   onChange={handlePasswordChange}
          //   required
          // />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

  // const gotoHomePage=()=>{
  //   navigate("/")
  // }

  return (
    <div>
      <h2>{error}</h2>
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="email"
            value={email}
            placeholder='Email'
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder='Password'
            value={pass}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className='btnn' onClick={notify}>Log in</button>
          <ToastContainer transition={Zoom}/>
        </form>
        <p className="message">Not registered? <Link to='/signup'><a>Create an account</a></Link></p>
        {/* <p className="message">Forgot your password? <Link to='/forgotpw/:id'><a>Click here to reset it</a></Link></p> */}
      </div>
    </div>

  )
}

export default Login
