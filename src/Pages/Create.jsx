import React from 'react'
import { useState } from 'react';
import Navbar from '../Components/Navbar';

const Create = () => {
  const [checked, setChecked] = useState(false)

  return (
  <div className='w-full h-screen flex justify-center'>
    <Navbar />
    <div className='pt-[65px] max-w-[1500px] px-6 w-full flex flex-col items-center text-3xl font-semibold'>
      <h1>Add an Expense</h1>
      <div>
        <h1>Title</h1>
        <input type='text' className='bg-red-50 mb-5'/>

        <h1>Amount</h1>
        <input type='number' className='bg-red-50 mb-5'/>

        <h1>Category</h1>
        <input type='text' className='bg-red-50 mb-5'/>

        <h1>Notes</h1>
        <input type='checkbox' onChange={() => setChecked(!checked)} className={`bg-red-50 ${checked ? '' : 'mb-5'}`}/>
        {checked ?
          <div className='mb-5'>
            <textarea />
          </div> : 
          ''
        }
        <h1><button className='bg-red-50 mb-5'>Add Expense</button></h1>
        {/*
          Expense Title (input field)
          Expense Amount (Input field, but have a dropdown to enter yen vs USD)
          Expense Category (Create your own, maybe looks at backend to see all categories in a dropdown menu and shows them)
          Expense Optional Notes (Checkbox, if checked text box appears)
          Add button (button)
        */}
      </div>
    </div>
  </div>
  )
}

export default Create