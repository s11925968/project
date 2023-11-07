import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
export default function LogoUser() {
  let [user,setUser]=useState({
    email:'',
    password:'',
  });
  const changeUser =(e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value});
    console.log(user);
  }
  const sendData=async(e)=>{
    e.preventDefault();
    const {data}=await axios.post('',user);
  }
  return (
    <>
      <div className="singin">
        <div className='arrea'>
        <h2>Login</h2>
        <form onSubmit={sendData}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={changeUser} required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"onChange={changeUser} required />
          <div className='d-flex justify-content-center align-items-center pt-2'>
          <button type="submit ">Sign In</button>
          </div>
        </form>
        </div>
      </div>
    </>
  );
}
