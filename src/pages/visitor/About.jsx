import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AboutUs from '../../components/guest/About'
import AboutHeader from '../../components/header/guest/AboutHeader'
import { toggleMenuClose } from '../../redux/model/nav'

const About = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(toggleMenuClose())
  },[])
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