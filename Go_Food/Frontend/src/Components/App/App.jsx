import Home from '../../Screen/HomePage/Home'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from '../../Screen/Login Page/Loginpage';
import Signup from '../../Screen/SignUpPage/Signup';
// import "../../../node_modules/bootstrap-dark-5/dist/css/bootstrap-blackbox.min.css"
// import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
// import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Loginpage />} />
          <Route exact path='/createuser' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
