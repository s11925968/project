import React, { useState } from 'react'
import './CreatUser.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function CreateUser() {
  let [user,setUser]=useState({
    name:'',
    email:'',
    password:'',
    age:'',
  });
  const changeUser=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value});
    console.log(user);
  };
  const sendData=async (e)=>{
    e.preventDefault();
    const {data}=await axios.post('http://localhost:2000/auth/singup',user);
    console.log(data);
  }
  return (
    <>
      <div className="singup d-flex  vh-80">
        <div className="container signup-form">
          <h2>Sign-Up</h2>
          <form id="signup-form" onSubmit={sendData} encType="multipart/form-data">
            <label htmlFor="firstName">Name:</label>
            <input type="text" id="Name" name="name" onChange={changeUser} required />
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age"onChange={changeUser} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"onChange={changeUser} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"onChange={changeUser} required />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword"/>
            <span id="passwordError" className="error" />
            <button type="submit" className="btn btn-primary w-100">
                Submit
            </button>
          </form>
          <div>
            <Link to="/Contact/create/logo">sing in</Link>
          </div>
        </div>
      </div>
    </>
  );
}
