import { React, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import { Link } from "react-router-dom";
import { db } from '../firebase';
import { query, collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
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
  
  const deleteExpense = async (id) => {
    console.log("here")
    await deleteDoc(doc(db, 'expenses', id))
  }
  return (
    <div className='w-full h-screen flex justify-center'>
      <Navbar />
      <div className='pt-[65px] max-w-[1500px] px-6 w-full flex flex-col items-center text-xl font-semibold'>
        <h1 className='text-3xl underline'>Expenses</h1>
        {loading ? 
          <Icon icon="line-md:loading-loop" className='text-[50px] mt-5' /> :
          !expenses.length ? <h1 className='text-3xl mt-5'>Sorry, <Link className="underline" to="/">add an expense</Link></h1> :
          expenses.map(exp => (
            <div key={exp.id} className='w-full flex justify-center items-center m-3'>
              <div className='w-1/3 flex justify-center items-center bg-blue-200 min-w-[250px] p-3 rounded-md'>
                <Link to={exp.id} className='w-full h-full flex justify-center'>
                  <div className='flex justify-between items-center w-full h-full'>
                    <h1>{exp.title}</h1>
                    <h1>${exp.amount}</h1>
                  </div>
                </Link>
                <Icon onClick={() => deleteExpense(exp.id)} className='hover:scale-105 hover:rotate-6 duration-150 text-white cursor-pointer relative right-0 pl-2 text-[30px] z-20' icon="ph:trash-fill" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Expenses