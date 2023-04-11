import React from 'react'
import AboutUs from '../../components/guest/About'
import AboutHeader from '../../components/header/guest/AboutHeader'

const About = () => {
  return (
    <div>
        <AboutHeader />
        <div className="container">
            <div className="content-container">
                <AboutUs />
            </div>
        </div>
        
    </div>
  )
}

export default About