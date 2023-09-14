import React from 'react'
import './about.css'
import Nav from '../layout/Nav'
import {YoutubeFilled,InstagramFilled, LinkedinFilled,TwitterSquareFilled , FacebookFilled } from "@ant-design/icons" 

const About = () => {


   
  return (
    <>
        <Nav/>  
    <div className='body3'>
      <div className="about-section">
  <div className="inner-container">
    <h1>About</h1>
    <p className="text">
    Prepare to elevate your dining experience with Recipeee!, the app that combines the art of cooking with the convenience of technology, helping you create unforgettable meals right from your own kitchen.
    </p>
    <div className="skills">
      <span>Web Design React js</span>
      <span>Springboot REST API</span>
      <span>MySQL</span>
    </div>
    <div className='social-icons'>
        <br/>
        <br/>
    <a href='https://www.youtube.com/'><YoutubeFilled className='icons' style={{color:"red"}}/></a>
    <a href='https://www.instagram.com/'><InstagramFilled className='icons' style={{color:"purple"}}/></a>
    <a href='https://www.facebook.com/'><FacebookFilled className='icons' style={{color:"darkblue"}}/></a>
    <a href='https://www.linkedin.com/'><LinkedinFilled className='icons' style={{color:"#3f4ab0"}}/></a>
    <a href='https://www.twitter.com/'><TwitterSquareFilled className='icons' style={{color:"#0280e8"}}/></a>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default About
