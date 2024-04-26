import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Body from '../../Components/Body part/Body'


export default function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                {/* <Carousel /> */}
            </div>
            <div>
                <Body />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}
