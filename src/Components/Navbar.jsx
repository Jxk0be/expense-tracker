import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <div className='w-screen h-[65px] text-white flex justify-center font-bold customBG items-center fixed z-30'>
        <div className='max-w-[1500px] flex justify-between items-center w-full px-6'>
          <Link to="/"><h1 className='whitespace-nowrap'>Expense Tracker&trade;</h1></Link>
          
          {/* This is the desktop view */}
          <div className='md:flex justify-between items-center w-[300px] font-semibold hidden'>
            <Link to="/"><h1>Add Expense</h1></Link>
            <Link to="/expenses"><h1>Expenses</h1></Link>
            <Link to="/summary"><h1>Summary</h1></Link>
          </div>

          {/* This is the mobile menu */}
          <div className='md:hidden flex'>
            <Icon onClick={() => setMobile(!mobile)} className={`text-4xl cursor-pointer duration-300 ${mobile ? 'rotate-[-90deg]' : ''}`} icon="ic:round-menu" />
          </div>
        </div>
      </div>

      {mobile ? 
        <div className='w-full h-screen z-20 customBG absolute flex justify-center items-center text-white md:hidden flex-col text-4xl font-semibold'>
          <Link to="/"><h1 className='my-4' onClick={() => setMobile(!mobile)}>Create</h1></Link>
          <Link to="/expenses"><h1 className='my-4' onClick={() => setMobile(!mobile)}>My Expenses</h1></Link>
          <Link to="/summary"><h1 className='my-4' onClick={() => setMobile(!mobile)}>Summary</h1></Link>
        </div> : ''
      }
    </>
  )
}

export default Navbar