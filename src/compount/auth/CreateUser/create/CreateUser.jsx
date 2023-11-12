import React, { useState } from 'react'
import './CreatUser.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { validationUserData } from '../../Create/ValidationData.js';
import { toast } from 'react-toastify';
export default function CreateUser() {
  let [user,setUser]=useState({
    name:'',
    email:'',
    password:'',
    age:'',
  });
  let [error,setError]=useState({
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
    if(Object.keys(validationUserData(user)).length>0){
      setError(validationUserData(user));
    }else{
      const {data}=await axios.post('https://crud-users-gold.vercel.app/users/',user);
      if(data.message=='success'){
        toast.success('done!');
       //navigite('/users/index');
      }
    }
  }
  return (
    <div>
      <div className="singup d-flex">
        <div className="container signup-form">
          <h2>Sign-Up</h2>
          <form onSubmit={sendData}>
            <label htmlFor="firstName">Name:</label>
            <input type="text" id="Name" name="name" onChange={changeUser} />
            {error.name && <p className="text-danger">{error.name}</p>}

            <label htmlFor="age">Age:</label>

            <input type="number" id="age" name="age"onChange={changeUser} />
            {error.age && <p className="text-danger">{error.age}</p>}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"onChange={changeUser} />
            {error.email && <p className="text-danger">{error.email}</p>}

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"onChange={changeUser}/>
            {error.password && <p className="text-danger">{error.password}</p>}

            <label htmlFor="confirmPassword">confirmPassword:</label>
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
    </div>
  );
}
