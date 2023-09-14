import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Forgot() {
    let navigate = useNavigate();

    const {id}=useParams();
  
    const gotoHomePage=()=>{
        navigate("/")
      }

    const [pw, setPw] = useState({
      pass:"",
      email:""
    });
  
    const {pass,email} = pw;
  
    const onInputChange = (e) => {
      setPw({ ...pw, [e.target.name]: e.target.value });
    };
  
    // useEffect(()=>{
    //     loadUser();
    // },[])

    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/update/${id}`, pw);
      navigate("/");
    };

    const loadUser =async()=>{
        const result =await axios.get(`http://localhost:8080/viewuser/${id}`);
        setPw(result.data);
    }
  
    return (
        <div>
      <div className="form">
        <h2>Set Password</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <input 
          type="email" 
          placeholder="Email" 
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}/>
          <input 
          type="password" 
          placeholder="Password" 
          name="pass"
          value={pass}
          onChange={(e) => onInputChange(e)}/>
          <button onClick={()=>gotoHomePage()}>Save Password</button>
        </form>
        <p className="message">Not registered? <Link to='/signup'><a>Create an account</a></Link></p>
        <p className="message">Already have an account? <Link to='/login'><a>Login</a></Link></p>
      </div>
    </div>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    //         <h2 className="text-center m-4">Change this Dish</h2>
  
    //         <form onSubmit={(e) => onSubmit(e)}>
    //           <div className="mb-3">
    //             <label name="Name" className="form-label">
    //               Food item
    //             </label>
    //             <input
    //               type={"text"}
    //               className="form-control"
    //               placeholder="Food name"
    //               name="name"
    //               value={name}
    //               onChange={(e) => onInputChange(e)}
    //             />
    //           </div>
    //           <div className="mb-3">
    //             <label name="Name" className="form-label">
    //               Calories
    //             </label>
    //             <input
    //               type={"text"}
    //               className="form-control"
    //               placeholder="Calories in KCal"
    //               name="calories"
    //               value={calories}
    //               onChange={(e) => onInputChange(e)}
    //             />
    //           </div>
    //           <div className="mb-3">
    //             <label name="Name" className="form-label">
    //               Ingridients
    //             </label>
    //             <input
    //               type={"text"}
    //               className="form-control"
    //               placeholder="Enter your Ingridients"
    //               name="ingridients"
    //               value={ingridients}
    //               onChange={(e) => onInputChange(e)}
    //             />
    //           </div>
    //           <div className="mb-3">
    //             <label name="Name" className="form-label">
    //               Recipe
    //             </label>
    //             <input
    //               type={"text"}
    //               className="form-control"
    //               placeholder="Your recipe"
    //               name="receipe"
    //               value={receipe}
    //               onChange={(e) => onInputChange(e)}
    //             />
    //           </div>
              
              
    //           <button type="submit" className="btn btn-outline-primary">
    //             Make Changes
    //           </button>
    //           <Link className="btn btn-outline-danger mx-2" to="/">
    //             Cancel
    //           </Link>
    //         </form>
    //       </div>
    //     </div>
    // </div>
  
  
    );
  }
  