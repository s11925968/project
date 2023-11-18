import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState(""); // State to manage navbar background color

  useEffect(()=> {
    window.addEventListener("scroll", handleScroll); // Adding scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Removing scroll event listener on component unmount
    };
  },[]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Change background color if the user has scrolled, for example, 100 pixels
    if (scrollPosition > 100) {
      setNavbarBackground("white");
    } else {
      setNavbarBackground(""); // Revert back to default background color
    }
  };

  function setSweet() {
    Swal.fire({
      title:
        "Tourpulse is a company based in Palestine that specializes in providing travel and tourism services. Established with the aim of creating memorable and seamless travel experiences, Tourpulse is committed to offering exceptional services to both local and international travelers.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }

  return (
    <nav
      className={`navbar navbar-expand-lg w-100 z-2 top-0 position-fixed `}
      style={{ backgroundColor: navbarBackground }} // Set dynamic background color based on state
    >
      <div className="container">
        <Link to="/">
          <img src="/images/icononly.png" alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler bg-primary bg-gradient"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
            <li className="nav-item">
              <Link
                className="nav-link active text-info"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-info" aria-current="page" href="#">
                Tourism Company
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-info" aria-current="page" href="#">
                Trips
              </a>
            </li>
            <li className="nav-item  text-info"></li>
            <li className="nav-item " id="about">
              {
                <button
                  onClick={setSweet}
                  className="btn nav-link text-warning btn-link text-decoration-none"
                >
                  about
                </button>
              }
            </li>
            <li className="nav-item dropdown me-2 mb-4">
              <a
                className="down dropdown-toggle text-info text-decoration-none"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="nav-link  text-info"aria-current="page"to="/Contact/create/logo" >
                    Login user
                  </Link>
                </li>
                <li>
                  <Link className="nav-link  text-info"aria-current="page"to="/Contact/create/createcompany/login" >
                    Login company
                  </Link>
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
