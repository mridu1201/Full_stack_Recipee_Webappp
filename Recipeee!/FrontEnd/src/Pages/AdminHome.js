
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';
// import { PlusOutlined, AppleFilled, SearchOutlined } from '@ant-design/icons';
// import { FloatButton } from 'antd';
// import './home.css';
// import Nav from "../layout/Nav";
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

// const Home = () => {
//   const { foodID } = useParams();
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [keyword, setKeyword] = useState('');

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   useEffect(() => {
//     const filtered = users.filter(user =>
//       user.name.toLowerCase().includes(keyword.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   }, [users, keyword]);

//   const loadUsers = async () => {
//     const result = await axios.get('http://localhost:8080/gfood');
//     setUsers(result.data);
//   };

  // const deleteUser = async (foodID) => {
  //   await axios.delete(`http://localhost:8080/delfood/${foodID}`);
  //   loadUsers();
  // };

//   return (
//     <div className="bodyy">
//       <Nav/>

//       <div className="main-div-home">
//         <div className="wrapper">
//               {/* <input
//                 type="text"
//                 value={keyword}
//                 className='search'
//                 onChange={e => setKeyword(e.target.value)}
//                 placeholder="Search users..."
//               /> */}
//               <div class="search-box">
//                   <input 
//                   class="search-input" 
//                   value={keyword}
//                   type="text" 
//                   onChange={e => setKeyword(e.target.value)}
//                   placeholder="Search Food..."/>
//                   <button class="search-btn"><SearchOutlined /></button>
//               </div>
//           <div className="container3">
//             <div className="inner-wrapper">

//               {filteredUsers.length > 0 ? (
//                 filteredUsers.map(user => (
//                   <div key={user.foodID} className="card3">
//                     <div className="inner-card3">
//                       <div className="img-wrapper">
//                         <img src={user.foodURL} alt="" />
//                       </div>
//                       <div className="content2">
//                         <h1>{user.name}</h1>
//                         <h5>{user.calories}</h5>
//                         <strong>
//                           <p>{user.ingridients}</p>
//                         </strong>
//                         <p>{user.receipe}</p>
//                       </div>
//                       <div className="btn-wrapper">
//                       <Link className='btn btn mx' to={`/viewfood/${user.foodID}`}><VisibilityOutlinedIcon style={{ color: "purple" }}/></Link>
//   <Link  className='btn btn-outline mx-2' to={`/editfood/${user.foodID}`}><ModeEditOutlineOutlinedIcon style={{ color: "blue" }}/></Link>
//   <button className='btn btn mx-2' color='red'
//             onClick={()=>deleteUser(user.foodID)}
//             ><DeleteOutlineIcon style={{ color: "red" }}/></button>
//                       </div>
//                     </div>
//                     <div className="light-box">
//                       <div className="box-wrapper">
//                         <div className="box1">
//                           <span className="close-btn">&times;</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="no-results"><strong>Oops! No matching food found.</strong></div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <FloatButton.Group shape="circle" style={{ right: 24 }}>
//         <Link to="/addfood">
//           <FloatButton icon={<PlusOutlined />} className="flt-btn" />
//         </Link>
//         <Link to="/cart">
//           <FloatButton icon={<AppleFilled />} className="flt-btn" />
//         </Link>
//         <FloatButton.BackTop icon={<SearchOutlined />} visibilityHeight={0} className="flt-btn" />
//       </FloatButton.Group>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';
// import { PlusOutlined, AppleFilled, SearchOutlined } from '@ant-design/icons';
// import { FloatButton } from 'antd';
// import './home.css';
// import AdminNav from '../layout/AdminNav';


// const Home = () => {
//   const { foodID } = useParams();
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [keyword, setKeyword] = useState('');

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   useEffect(() => {
//     const filtered = users.filter(user =>
//       user.name.toLowerCase().includes(keyword.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   }, [users, keyword]);

//   const loadUsers = async () => {
//     const result = await axios.get('http://localhost:8080/gfood');
//     setUsers(result.data);
//   };


//   return (
//     <div className="bodyy">
//       <AdminNav />

//       <div className="main-div-home">
//         <div className="wrapper">
//               {/* <input
//                 type="text"
//                 value={keyword}
//                 className='search'
//                 onChange={e => setKeyword(e.target.value)}
//                 placeholder="Search users..."
//               /> */}
//               <div class="search-box">
//                   <input 
//                   class="search-input" 
//                   value={keyword}
//                   type="text" 
//                   onChange={e => setKeyword(e.target.value)}
//                   placeholder="Search Food..."/>
//                   <button class="search-btn"><SearchOutlined /></button>
//               </div>
//           <div className="container3">
//             <div className="inner-wrapper">

//               {filteredUsers.length > 0 ? (
//                 filteredUsers.map(user => (
//                   <div key={user.foodID} className="card3">
//                     <div className="inner-card3">
//                       <div className="img-wrapper">
//                         <img src={user.foodURL} alt="" />
//                       </div>
//                       <div className="content2">
//                         <h1>{user.name}</h1>
//                         <h5>{user.calories}</h5>
//                         <strong>
//                           <p>{user.ingridients}</p>
//                         </strong>
//                         <p>{user.receipe}</p>
//                       </div>
//                       <div className="btn-wrapper">
//                       <div class="contentt">
    
//     </div>
//                       </div>
//                     </div>
//                     <div className="light-box">
//                       <div className="box-wrapper">
//                         <div className="box1">
//                           <span className="close-btn">&times;</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="no-results">No matching users found.</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <FloatButton.Group shape="circle" style={{ right: 24 }}>
//         {/* <Link to="/addfood">
//           <FloatButton icon={<PlusOutlined />} className="flt-btn" />
//         </Link> */}
//         <Link to="/cart">
//           <FloatButton icon={<AppleFilled />} className="flt-btn" />
//         </Link>
//         <FloatButton.BackTop icon={<SearchOutlined />} visibilityHeight={0} className="flt-btn" />
//       </FloatButton.Group>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { PlusOutlined, AppleFilled, SearchOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import './home.css';
import Nav from '../layout/Nav';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const AdminHome = () => {
  const { foodID } = useParams();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset current page when the keyword changes
  }, [users, keyword]);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/gfood');
    setUsers(result.data);
  };
  const deleteUser = async (foodID) => {
    await axios.delete(`http://localhost:8080/delfood/${foodID}`);
    loadUsers();
  };

  // Calculate pagination indexes
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bodyy">
      <Nav />

      <div className="main-div-home">
        <div className="wrapper">
          <div class="search-box">
            <input
              class="search-input"
              value={keyword}
              type="text"
              onChange={e => setKeyword(e.target.value)}
              placeholder="Search Food..."
            />
            <button class="search-btn">
              <SearchOutlined />
            </button>
          </div>
          <div className="container3">
            <div className="inner-wrapper">
              {currentUsers.length > 0 ? (
                currentUsers.map(user => (
                  <div key={user.foodID} className="card3">
                    <div className="inner-card3">
                      <div className="img-wrapper">
                        <img src={user.foodURL} alt="" />
                      </div>
                      <div className="content2">
                        <h1>{user.name}</h1>
                        <h5>{user.calories}</h5>
                        <strong>
                          <p>{user.ingridients}</p>
                        </strong>
                        <p>{user.receipe}</p>
                      </div>
                      <div className="btn-wrapper">
                        <div class="contentt">
                        <Link className='btn btn mx' to={`/viewfood/${user.foodID}`}><VisibilityOutlinedIcon style={{ color: "purple" }}/></Link>
   <Link  className='btn btn-outline mx-2' to={`/editfood/${user.foodID}`}><ModeEditOutlineOutlinedIcon style={{ color: "blue" }}/></Link>
   <button className='btn btn mx-2' color='red'
             onClick={()=>deleteUser(user.foodID)}
         ><DeleteOutlineIcon style={{ color: "red" }}/></button>
                        </div>
                      </div>
                    </div>
                    <div className="light-box">
                      <div className="box-wrapper">
                        <div className="box1">
                          <span className="close-btn">&times;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">No matching users found.</div>
              )}
            </div>
          </div>
          <div className="pagination">
            {filteredUsers.length > itemsPerPage && (
              <ul>
                {Array.from(Array(Math.ceil(filteredUsers.length / itemsPerPage)).keys()).map(
                  pageNumber => (
                    <li
                      key={pageNumber}
                      className={`page-item ${pageNumber + 1 === currentPage ? 'active' : ''}`}
                      onClick={() => paginate(pageNumber + 1)}
                    >
                      <a className="page-link">{pageNumber + 1}</a>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <Link to="/addfood">
          <FloatButton icon={<PlusOutlined />} className="flt-btn" />
        </Link>
        <Link to="/cart">
          <FloatButton icon={<AppleFilled />} className="flt-btn" />
        </Link>
        <FloatButton.BackTop icon={<SearchOutlined />} visibilityHeight={0} className="flt-btn" />
      </FloatButton.Group>
    </div>
  );
};

export default AdminHome;



