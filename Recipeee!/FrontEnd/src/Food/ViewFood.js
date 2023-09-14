import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams,Link} from 'react-router-dom'
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './ViewFood.css';
import Nav from '../layout/Nav';

const ViewFood = () => {

    const [user,setUser]=useState({
        name:"",
        calories:"",
        ingridients:"",
        receipe:"",
        url:""
    })
    const {foodID}=useParams();

    useEffect(()=>{
      loadUser()
    },[])


    const loadUser=async ()=>{
      const result=await axios.get(`http://localhost:8080/getfood/${foodID}`);
      setUser(result.data);
    };

  return (
    <>
    <Nav/>
  
  <div className="profile-wrapper">
    <div className="profile-picture">
      <img id="profile-picture" src={user.foodURL} alt='' />
    </div>
    <div className="profile-details">
      <div>
        <ul>
          <li className="foodd">
            <h3>Food Number : {user.foodID} </h3>
            <br/>
            <br/>
            <br/>
          </li>
          <li className="foodd">
            <h1>{user.name}</h1>
          </li>
          <li className="foodd">
          <h3><b>Calories : </b> {user.calories}</h3>
          </li>
          <li className="foodd">
          <h5><b>Ingridients:</b> {user.ingridients}</h5>
          </li>
          <li className="foodd">
          <h6><b>Recipe:</b> {user.receipe}</h6>
          <br/>
          </li>
        </ul>
    <div>
    <Link className="home-back-btn" to='/admin/home'><HomeIcon style={{color:'white'}}/></Link>
    </div>
      </div>
    </div>
  </div>
</>

    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    //       <h2 className="text-center m-4">Dish Recipe</h2>

    //       <div className="card">
    //         <div className="card-header">
    //           Details of Food id : {user.foodID}
    //           <ul className="list-group list-group-flush">
    //             <li className="list-group-item">
    //               <b>Food:</b> {user.name}
    //             </li>
    //             <li className="list-group-item">
    //               <b>Calories:</b> {user.calories}
    //             </li>
    //             <li className="list-group-item">
    //               <b>Ingridients:</b> {user.ingridients}
    //             </li>
    //             <li className="list-group-item">
    //               <b>Recipe:</b> {user.receipe}
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <Link className="btn btn-info my-2" to={"/"}>
    //         <ArrowBackIcon style={{color:'white'}}/><HomeIcon style={{color:'white'}}/>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ViewFood
