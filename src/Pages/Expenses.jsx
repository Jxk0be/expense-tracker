import { React, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import { Link } from "react-router-dom";
import { db } from '../firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { Icon } from '@iconify/react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'expenses'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let expensesArray = []
      querySnapshot.forEach((doc) => {
        expensesArray.push({...doc.data(), id: doc.id})
      })

      expensesArray.sort(function(a, b) { return b.date - a.date })
      setExpenses(expensesArray)
      setLoading(!loading)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className='w-full h-screen flex justify-center'>
      <Navbar />
      <div className='pt-[65px] max-w-[1500px] px-6 w-full flex flex-col items-center text-xl font-semibold'>
        <h1 className='text-3xl underline'>Expenses</h1>
        {loading ? 
          <Icon icon="line-md:loading-loop" className='text-[50px] mt-5' /> : 
          expenses.map(exp => (
            <div key={exp.id} className='w-full flex justify-center items-center m-3'>
              <Link to={exp.id} className='w-1/3 flex justify-center bg-blue-200 p-3 rounded-md'>
                <div className='flex justify-between items-center w-full'>
                  <h1>{exp.title}</h1>
                  <h1>${exp.amount}</h1>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Expenses