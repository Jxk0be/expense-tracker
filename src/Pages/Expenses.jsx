import React from 'react'
import Navbar from '../Components/Navbar';
import { Link } from "react-router-dom";

const Expenses = () => {
  return (
    <div className='w-full h-screen flex justify-center'>
      <Navbar />
      <div className='pt-[65px] max-w-[1500px] px-6 w-full'>
        <h1><Link to="/">Home</Link></h1>
        -------- Expense LIST --------
        <h1><Link to={'1'}>Expense 1</Link></h1>
        <h1><Link to={'2'}>Expense 2</Link></h1>
        <h1><Link to={'3'}>Expense 3</Link></h1>
      </div>
    </div>
  )
}

export default Expenses