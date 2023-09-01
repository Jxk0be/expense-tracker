import { React, useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';

const ExpenseDetail = () => {
  let { ExpenseId } = useParams();
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'expenses'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let expensesArray = []
      querySnapshot.forEach((doc) => {
        expensesArray.push({...doc.data(), id: doc.id})
      })
      setExpenses(expensesArray)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className='w-full h-screen flex justify-center'>
      <Navbar />
      <div className='pt-[65px] max-w-[1500px] px-6 w-full'>
        {expenses.filter((exp) => exp.id === ExpenseId).map(exp => (
          <div key={exp.id}>
            <h1>{exp.title}</h1>
            <h1>${exp.amount}</h1>
            <p>{exp.notes}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpenseDetail