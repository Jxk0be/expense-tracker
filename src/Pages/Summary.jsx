import React from 'react'
import Navbar from '../Components/Navbar'

const Summary = () => {
  return (
    <div className='w-full h-screen flex justify-center'>
      <Navbar />
      <div className='pt-[65px] max-w-[1500px] px-6 w-full'>
        Summary Page
      </div>
    </div>
  )
}

export default Summary