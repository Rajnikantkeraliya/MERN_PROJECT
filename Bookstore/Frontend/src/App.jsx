import React from 'react'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cource from './Components/Cource/Cource'
import Courses from './Courses/Courses'
import Signup from './Components/Signup/Signup'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cource' element={<Courses />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
