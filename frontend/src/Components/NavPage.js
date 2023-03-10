import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/home"
import About from "./Pages/About/about"
import Contact from "./Pages/Contact/contact"
import Login from "./Pages/Login/login"
import Dashboard from "./Pages/dashboard/dashboard"

export default function NavPage() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
            <Route path='/Service' element={<Login/>}></Route>
            <Route path='/Dashboard' element={<Dashboard/>}></Route>
        </Routes>
    </div>
  )
}
