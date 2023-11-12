import React from 'react'
import { Link } from 'react-router-dom';

export default function Create() {
  return (
  <div className="d-flex justify-content-center align-items-center vh-100">
  <div className='text-center'>
    <h1>Welcome to our website</h1>
    <p>Please select:</p>
    <Link to="/Contact/create/createuser" className='d-block text-decoration-none btn btn-danger'>Users</Link>
    <Link to="/Contact/create/createcompany" className='text-decoration-none btn btn-danger mt-4 w-100'>Company</Link>
  </div>
  </div>
  );
}
