import Fotter from '@/components/fotter/Fotter'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>


      {/* Fotter is start from here */}

      <Fotter />


      {/* Fotter is end here */}
    </div>
  )
}

export default layout