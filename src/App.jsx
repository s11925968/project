import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './compount/Navbar/Navbar.jsx'
import Home from './compount/Home/Home.jsx'
import Page from './compount/pageNotFound/Page.jsx'
import Create from './compount/auth/Create/Create.jsx'
import CreateUser from './compount/auth/CreateUser/create/CreateUser.jsx'
import CreateCompany from './compount/auth/CreateCompany/create/CreateCompany.jsx'
import LogoCompany from './compount/auth/CreateCompany/login/Login.jsx'
import LogoUser from './compount/auth/CreateUser/login/LogoUser.jsx'
export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<Page />}/>
      <Route path="/Contact/create" element={<Create />}/>
      <Route path="/Contact/create/createuser" element={<CreateUser />}/>
      <Route path="/Contact/create/createcompany" element={<CreateCompany />}/>
      <Route path="/Contact/create/createcompany/login" element={<LogoCompany />}/>
      <Route path="/Contact/create/logo" element={<LogoUser />}/>
    </Routes>
    </>
  )
}
