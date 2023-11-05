import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './compount/Navbar/Navbar.jsx'
import Home from './compount/Home/Home.jsx'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </>
  )
}
