import { React, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import { Link } from "react-router-dom";
import { db } from '../firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';

const Expenses = () => {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'expenses'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let expensesArray = []
      querySnapshot.forEach((doc) => {
        expensesArray.push({...doc.data(), id: doc.id})
      })

      expensesArray.sort(function(a, b) { return b.date - a.date })
      setExpenses(expensesArray)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className='w-full h-screen flex justify-center'>
      <Navbar />
      <div className='pt-[65px] max-w-[1500px] px-6 w-full flex flex-col items-center text-xl font-semibold'>
        <h1 className='text-3xl underline'>Expenses</h1>
        {expenses.map((exp, index) => (
          <h1 key={index}><Link to={exp.id}>{exp.title}</Link></h1>
        ))}
      </div>
    </div>
  )
}

export default Expenses