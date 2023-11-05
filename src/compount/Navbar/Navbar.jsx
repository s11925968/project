import React, { useState } from 'react'
import './Navbar.css'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function Navbar() {
  function setSweet(){
    Swal.fire({
      title: 'Tourpulse is a company based in Palestine that specializes in providing travel and tourism services. Established with the aim of creating memorable and seamless travel experiences, Tourpulse is committed to offering exceptional services to both local and international travelers.    ',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  return (
    <nav className="navbar navbar-expand-lg position-fixed w-100 z-2 top-0">
      <div className="container">
        <a href="index.html">
          <img src="../../../public/images/icononly.png" alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                Tourism Company
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                Trips
              </a>
            </li>
            <li className="nav-item " id="about">
              <a className="nav-link " href="#">
                {
                  <button onClick={setSweet} className='btn btn-link text-decoration-none text-white d-flex justify-content-center align-items-center'>about</button>
                }
              </a>
            </li>
            <li className="nav-item dropdown ps-1 pe-2">
              <a className="bg-transparent text-white text-decoration-none">Sing in</a>
              <div className="dropdown-content">
                <div className="row">
                  <div className="col-md-6 base-sing pt-3">
                    <h6 className="ps-2">
                      Sing In <span>User</span>
                    </h6>
                    <hr className="w-100 text-white" />
                    <a href="/users/sing-in.html">Sing in</a>
                    <a href="/users/sing-up.html">Sing Up</a>
                  </div>
                  <div className="col-md-6 base-sing pt-3">
                    <h6>
                      Sing In <span>Company</span>
                    </h6>
                    <hr className="w-100 text-white" />
                    <a href="company/sing-in.html">Sing in</a>
                    <a href="/company/sing-up.html">Sing up</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown-click d-none">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sing In Company
              </a>
              <ul className="dropdown-menu w-25 text-center">
                <li>
                  <a className="dropdown-item" href="#">
                    Sing in
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sing Up
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown-click d-none ">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sing In User
              </a>
              <ul className="dropdown-menu w-25 text-center">
                <li>
                  <a className="dropdown-item " href="#">
                    Sing in
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sing Up
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
