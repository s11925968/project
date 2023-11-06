import React from 'react'
import './CreatUser.css'
import { Link } from 'react-router-dom';
export default function CreateUser() {
  return (
    <>
      <div className="singup d-flex  vh-80">
        <div className="container signup-form">
          <h2>Sign-Up</h2>
          <form id="signup-form" encType="multipart/form-data">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
            <span id="passwordError" className="error" />
            <button type="submit" className="w-100">
              Sign Up
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
