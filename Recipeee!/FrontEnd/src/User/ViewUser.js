import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams,Link} from 'react-router-dom'
import { HomeOutlined, UserOutlined, QuestionOutlined } from '@ant-design/icons';
import './viewuser.css'

const ViewUser = () => {
    const [user,setUser]=useState({
        username:"",
        email:"",
        age:"",
        pass:""
    })
    const {id}=useParams();

    useEffect(()=>{
      loadUser()
    },[])


    const loadUser=async ()=>{
      const result=await axios.get(`http://localhost:8080/viewuser/${id}`);
      setUser(result.data);
    };

  return (
    <div className='body1'>
  <main className="profile">
    <div className="profile-bg" />
    <section className="container1">
      <aside className="profile-image">
        <a className="camera" href="#">
          <i className="fas fa-camera" />
        </a>
      </aside>
      <section className="profile-info">
        {/* <h1 className="first-name">Angela</h1> */}
        <h1 className="second-name">{user.username}</h1>
        <h2>ABOUT</h2>
        <p>
          {user.email}
          <br/>
          {user.pass}
          <br/>
          {user.age}
          <br/>        
          <br/>        
        Welcome to Recipeee🍌, your personal health companion that empowers you to conquer your wellness goals and live your best life!
        </p>        
      </section>
    </section>
    <section className="statistics">
    <section class="statistics">
    <button class="icon arrow left"></button>
    <button class="icon arrow right"></button>
    <Link to='/admin/home'><p><strong><HomeOutlined /></strong> Home</p></Link>
    <Link to='/users'><p><strong><UserOutlined /></strong> Users</p></Link>
    <Link to='/about'><p><strong><QuestionOutlined /></strong> About</p></Link>
  </section>
    {/* <button><HomeTwoTone /> Home</button> */}
      </section>
  </main>
</div>

  )
}

export default ViewUser
