import React from 'react'
import './App.css'
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import Home from './Pages/Home'
import Appointment from './Pages/Appointment'
import Aboutus from './Pages/Aboutus'
import Register from './Pages/Register'
import Login from './Pages/Login'

function App() {

  return (
    <Router>
      <Routes>
        <Route  path='/'  element = {<Home/>}/>
        <Route  path='/appointment'  element = {<Appointment/>}/>
        <Route  path='/about'  element = {<Aboutus/>}/>
        <Route  path='/register'  element = {<Register/>}/>
        <Route  path='/login'  element = {<Login/>}/>
       
      </Routes>
    </Router>

  )
}

export default App