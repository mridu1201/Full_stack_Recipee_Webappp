import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Nav from "../layout/Nav";
import './home.css'
import { EditTwoTone, DeleteTwoTone, EyeTwoTone } from "@ant-design/icons";

export default function Users() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/viewusers");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/delete/${id}`);
    loadUsers();
  };

  return (
    <div className="bodyyy">
        <Nav/>
        <br/>
        <Link to='/signup'><button className="signup-btn">SignUp</button></Link>
    <div className="container">
      <div className="py-4">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td><h6>{user.username}</h6></td>
                <td><h6>{user.email}</h6></td>
                <td><h6>{user.age}</h6></td>
                <td><h6>{user.pass}</h6></td>
                <td>
                  <Link to={`/viewuser/${user.id}`}>
                  <EyeTwoTone twoToneColor="#52c41a" style={{padding:20}}/>
                  </Link>
                  <Link to={`/edituser/${user.id}`}>
                    <EditTwoTone twoToneColor="purple" style={{padding:20}}/>
                  </Link>
                  
                  <Link onClick={() => deleteUser(user.id)}>
                    <DeleteTwoTone twoToneColor="#eb2f96" style={{padding:20}}/>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}