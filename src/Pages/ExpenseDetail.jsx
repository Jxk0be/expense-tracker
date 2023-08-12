import React from 'react'
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';

const ExpenseDetail = () => {
  let { ExpenseId } = useParams();

  return (
    <div className='w-full h-screen flex justify-center'>
      <Navbar />
      <div className='pt-[65px] max-w-[1500px] px-6 w-full'>
        { ExpenseId }
      </div>
    </div>
  )
}

export default ExpenseDetail