import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'

export default function Home() {
  return (
    <div>
    <header className="header">
  <div className="info-header">
    <div className="text-center">
      <p >Welcome to Tourpulse</p>
      <h1 className="text-white">Travel &amp; Tour Booking<br /> WordPress Theme</h1>
      <span>take care of taking</span>
      <div className="content-public rounded-pill py-2 mt-3 bg-main-color m-auto">
        <Link to="/Contact/create" className='text-decoration-none'>create account</Link>
      </div>
    </div>
  </div>
  
</header>
<footer>
<Footer />
</footer>
    </div>
  )
}
