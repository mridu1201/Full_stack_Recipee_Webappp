import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './edituser.css'

export default function EditUser() {
    let navigate = useNavigate();

    const {id}=useParams();
  
    const [user, setUser] = useState({
        username:"",
        email:"",
        age:"",
        pass:""
      
    });
  
    const { username,email,age,pass } = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    useEffect(()=>{
        loadUser();
    },[])

    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/update/${id}`, user);
      navigate("/users");
    };

    const loadUser =async()=>{
        const result =await axios.get(`http://localhost:8080/viewuser/${id}`);
        setUser(result.data);
    }
  
    return (
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
    <div className="login-page">
  <div className="formm">
    
    <form className="login-form" onSubmit={(e) => onSubmit(e)}>
      <input type="text" placeholder="username" name="username" value={username} onChange={(e) => onInputChange(e)} />
      <input type="email" placeholder="email" name="email" value={email} onChange={(e) => onInputChange(e)}/>
      <input type="text" placeholder="password" name="pass" value={pass} onChange={(e) => onInputChange(e)}/>
      <input type="text" placeholder="age" name="age" value={age} onChange={(e) => onInputChange(e)}/>
      <button>submit</button>
      <p className="message">
         Back <Link to='/users'>Click here</Link>
      </p>
    </form>
  </div>
</div>

  
  
    );
  }
  