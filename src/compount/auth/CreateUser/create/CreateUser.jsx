import React, { useState } from 'react'
import './CreatUser.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { validationUserData } from '../../Create/ValidationData.js';
import { toast } from 'react-toastify';

export default function CreateUser() {
  const navigite=useNavigate();
  let [user,setUser]=useState({
    userName:'',
    email:'',
    password:'',
    age:'',
  });
  let [error,setError]=useState({
    userName:'',
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
      const {data}=await axios.post('https://gazaaaal.vercel.app/auth/signup',user);
      if(data.message=='success hahahaha'){
        toast.success('done!');
        navigite('/');
      }
      console.log(data);
    }
  }
  return (
    <div>
      <div className="user-sing d-flex ">
        <div className="container signup-form">
          <h2>Sign-Up</h2>
          <form onSubmit={sendData}>
            <label htmlFor="userName">userName:</label>
            <input type="text" id="userName" name="userName" onChange={changeUser} />
            {error.userName && <p className="text-danger">{error.userName}</p>}

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
          <p className='text-danger'>You have an account yet?</p>
            <Link to="/Contact/create/logo">sing in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
