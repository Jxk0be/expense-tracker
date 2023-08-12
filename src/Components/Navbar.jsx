import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <div className='w-screen h-[65px] bg-black text-white flex justify-center font-bold customBG items-center fixed'>
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
          <Icon className="text-4xl cursor-pointer" icon="ic:round-menu" />
        </div>
      </div>
    </div>
  )
}

export default Navbar