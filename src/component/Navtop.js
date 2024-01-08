import React from 'react'
import './Navtop.css'
import AboutComp from './AboutComp.js'
import AllPages from './AllPages'
const Navtop = () => {
  return (
    <>
    <div className='navtop'>
        <AboutComp/>
        <AllPages/>
    </div>
    </>
  )
}

export default Navtop