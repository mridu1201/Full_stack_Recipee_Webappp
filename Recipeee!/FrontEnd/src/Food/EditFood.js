import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons"; 

export default function EditFood() {
    let navigate = useNavigate();

    const {foodID}=useParams();
  
    const [user, setUser] = useState({
      name:"",
      calories:"",
      ingridients:"",
      receipe:"",
      foodURL:""
    });
  
    const { name, calories, ingridients, receipe, foodURL } = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    useEffect(()=>{
        loadUser();
    },[])

    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/upfood/${foodID}`, user);
      navigate("/admin/home");
    };

    const loadUser =async()=>{
        const result =await axios.get(`http://localhost:8080/getfood/${foodID}`);
        setUser(result.data);
    }
  
    return (
    //   
    <>
    <main className="body2">
  <Link to='/admin/home'><ArrowLeftOutlined className="back-icon"/></Link>
  <form className="food-form" onSubmit={(e) => onSubmit(e)}>
    <h1>🍌</h1> <br />
    <input
      type="text"
      placeholder="Food Name"
      name="name"
      value={name}
      onChange={(e) => onInputChange(e)}
    />
    <input
      type="text"
      placeholder="Calories"
      name="calories"
      value={calories}
      onChange={(e) => onInputChange(e)}
    />
    <br />
    <input
      type="text"
      placeholder="Ingridients"
      name="ingridients"
      value={ingridients}
      onChange={(e) => onInputChange(e)}
    />
    <br />
    <input
      type="text"
      placeholder="Receipe"
      name="receipe"
      value={receipe}
      onChange={(e) => onInputChange(e)}
    />
    <input
      type="text"
      placeholder="Paste the image URL"
      name="foodURL"
      value={foodURL}
      onChange={(e) => onInputChange(e)}
    />
    <input type="submit" defaultValue="Submit" id="submit" />
  </form>
</main>

    </>
   

  
  
    );
  }
  