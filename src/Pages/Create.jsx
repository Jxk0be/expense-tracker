import React from 'react'
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Create = () => {
  const [checked, setChecked] = useState(false)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [notes, setNotes] = useState('')
  const [creationDate, setCreationDate] = useState(null)

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);

    const myDate = new Date().getTime();
    setCreationDate(myDate)
  }

  const handleAmount = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  }

  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  }

  const handleNotes = (e) => {
    e.preventDefault();
    setNotes(e.target.value);
  }

  const handleFormObject = () => {
    if (title === "" || amount < 0) {
      alert("Please enter a valid expense")
      return
    }
    
    asyncCreate()
  }

  const asyncCreate = async () => {
    await addDoc(collection(db, 'expenses'), {
      "title": title,
      "amount": amount,
      "category": category,
      "notes": notes,
      "date": creationDate
    })
    setTitle("");
    setAmount(0);
    setCategory("");
    setNotes("");
  }

  return (
  <div className='w-full h-screen flex justify-center'>
    <Navbar />
    <div className='pt-[65px] max-w-[1500px] px-6 w-full flex flex-col items-center text-3xl font-semibold'>
      <h1 className='underline'>Add an Expense</h1>
      <div>
        <h1>Title</h1>
        <input type='text' className='bg-red-50 mb-5' value={title} onChange={(e) => handleTitle(e)} />

        <h1>Amount</h1>
        <input type='number' className='bg-red-50 mb-5' value={amount} onChange={(e) => handleAmount(e)} />
        
        <h1>Category</h1>
        <input type='text' className='bg-red-50 mb-5' value={category} onChange={(e) => handleCategory(e)} />
        
        <h1>Notes</h1>
        <input type='checkbox' onChange={() => setChecked(!checked)} className={`bg-red-50 ${checked ? '' : 'mb-5'}`} />
        {checked ?
          <div className='mb-5'>
            <textarea value={notes} onChange={(e) => handleNotes(e)} />
          </div> : 
          ''
        }
        <h1><button className='bg-red-50 mb-5' onClick={() => handleFormObject()}>Add Expense</button></h1>
      </div>
    </div>
  </div>
  )
}

export default Create