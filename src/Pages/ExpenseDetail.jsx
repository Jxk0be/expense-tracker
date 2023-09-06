import { React, useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { Link } from  'react-router-dom';
import { Icon } from '@iconify/react';

const ExpenseDetail = () => {
  let { ExpenseId } = useParams();
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'expenses'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let expensesArray = []
      querySnapshot.forEach((doc) => {
        expensesArray.push({...doc.data(), id: doc.id})
      })
      setExpenses(expensesArray)
      setLoading(!loading)
    })
    return () => unsubscribe()
  }, [])
  
  return (
    <div className='w-full h-screen flex justify-center'>
      <Navbar />
      <div className='pt-[65px] max-w-[1500px] px-6 w-full'>
        <Link to="/expenses"><h1 className='bg-blue-500 p-3 mt-1 rounded-xl w-[300px] text-white font-semibold text-[20px]'>Back to Expenses</h1></Link>
        {loading ? <Icon icon="line-md:loading-loop" className='text-[50px] mt-5' /> :
          expenses.filter((exp) => exp.id === ExpenseId).map(exp => (
            <div key={exp.id}>
              <h1>{exp.title}</h1>
              <h1>${parseFloat(exp.amount).toFixed(2)}</h1>
              <p>{exp.notes}</p>
              <p>{exp.type}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ExpenseDetail