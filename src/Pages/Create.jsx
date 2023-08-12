import React from 'react'
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const Create = () => {
  
  return (
  <div className='w-full h-screen flex justify-center'>
    <Navbar />
    <div className='pt-[65px] max-w-[1500px] px-6 w-full'>
      <h1>Home page</h1>
      <Link to="/expenses">Expenses List</Link>
    </div>
  </div>
  )
}

export default Create