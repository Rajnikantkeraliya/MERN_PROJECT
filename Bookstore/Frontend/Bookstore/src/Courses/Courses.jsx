import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Cource from '../Components/Cource/Cource'
import Footer from '../Footer/Footer'


function Courses() {

    return (
        <div>
            <Navbar />
            <div className='min-h-screen'><Cource /></div>
            <Footer />
        </div>
    )
}

export default Courses
