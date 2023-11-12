import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div>
    <footer className="footers py-4" id="hire-me">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-4">
        <p className="m-0 p-0 text-start">©2018 Ecologytheme. All Rights Reserved.</p>
      </div>
      <div className="images col-md-4 text-center">
        <img src="../../../public/images/icononly.png" alt="logo in footer" />
      </div>
      <div className="col-md-4">
        <p className="m-0 p-0 text-end text-center">Made By <br/><span className="text-info">Sameh Issa , Gazal Masri <br/>Moatsem Ayash</span></p>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
