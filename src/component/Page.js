import React from 'react'
import './Page.css'
const Page = ({name,value}) => {
    
      
      

  return (
    <>
    <div className='main-page'>
        <div className='page-icon'>
        {value}
        </div>
       
            <p className='page-name'>{name}</p>
        
    </div>
    </>
  )
}

export default Page