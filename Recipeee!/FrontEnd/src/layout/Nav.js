import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const Nav = () => {
  return (
    // <div className='topnav'>
    //     <img src="https://res.cloudinary.com/dqpyrzzw7/image/upload/v1677414063/Recipeee___2_-removebg-preview_owjntg.png" className='logo'></img>
    //     <br></br>
    //     <Link to='/addfood'><button className='add-btn'><AddIcon style={{color:'maroon'}}/>Add item</button></Link>
    //     <Link to='/signup'><button>SignUp</button></Link>
    //     <Link to='/login'><button>Login</button></Link>
    // </div>
    
   <div>
    <nav className="navbar">
          <div className="navbar-containerr containerr" margin>
            <input type="checkbox" name id />
            <div className="hamburger-lines">
              <span className="line line1" />
              <span className="line line2" />
              <span className="line line3" />
            </div>
            <ul className="menu-items">
              <li><a><Link to='/admin/home'>Home</Link></a></li>
              <li><a><Link to='/users'>Users</Link></a></li>
              <li><Link to='/about'><a>About</a></Link></li>
              <li><Link to='/'><button className='nav-btn'>Logout</button></Link></li>
            </ul>
            <h1 className="logo">🍌Recipeee!</h1>
          </div>
        </nav>
   </div>
    
  );
}

export default Nav
