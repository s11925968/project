import React from 'react'
import './login.css'
export default function LogoUser() {
  return (
    <>
      <div className="singin">
        <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Sign In</button>
        </form>
        </div>
      </div>
    </>
  );
}
