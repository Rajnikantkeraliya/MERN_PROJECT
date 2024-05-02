import Home from '../../Screen/HomePage/Home'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from '../../Screen/Login Page/Loginpage';
import Signup from '../../Screen/SignUpPage/Signup';
import { Cartprovider } from '../Contextreducer';


function App() {
  return (

    <Cartprovider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Loginpage />} />
            <Route exact path='/createuser' element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </Cartprovider>
  )
}

export default App
