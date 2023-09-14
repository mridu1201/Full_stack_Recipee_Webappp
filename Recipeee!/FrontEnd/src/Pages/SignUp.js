import React, { useState } from 'react'
import './SignUp.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Sick } from '@mui/icons-material';

function SignUp()
{
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [age,setAge]=useState("");


const SignUp = () => {
  axios.post("http://localhost:8080/user",{
    username:username,
    email:email,
    pass:pass,
    age:age
})
.then((res)=>{
  console.log(res);
});
navigate("/home");
}
const navigate=useNavigate();

const gotoLogin=()=>{
  navigate("/login");
  gotoUserdetails()
}
const gotoHomePage=()=>{
  navigate("/home")
}
const gotoUserdetails=()=>{
  navigate("/profile")
}
    

  return (
    <div>
      <div>
         <div>
          <div className="form">
            <h2>Sign Up</h2>
            <form onSubmit={SignUp}>
              <input type="text"
               name='username'
               placeholder="Username"
               onChange={(e)=>setUsername(e.target.value)}
               />

              <input type="email" 
              name='email' 
              placeholder="Email" 
              onChange={(e)=>setEmail(e.target.value)}/>
              <input 
              type="password" 
              name='pass' 
              placeholder="Password" 
              onChange={(e)=>setPass(e.target.value)}/>
              <input 
              type="text" 
              name='age'
              placeholder='Age'
              onChange={(e)=>setAge(e.target.value)}/>
              <button onClick={()=>{SignUp();gotoHomePage()}} className='btnn'>Sign Up</button>
            </form>
            <p className="message">Already have an Account?<Link to='/login'> <a>Log in</a></Link></p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp

