import React from 'react'
import Nav from './common/nav'
import Foot from './common/foot'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Register from './components/register'
import Login from './components/login'
import Logout from './components/logout';
import Notfound from './common/error'
import Dashboard from './Admin/Dashboard'
import Admin from './Admin/Login'
import SpeedDialMenu from './assets/speeddial';

const main = () => {
  return (
    <div>
        <Nav/>
        <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
            <SpeedDialMenu/>
        <Foot/>
    </div>
  )
}

export default main