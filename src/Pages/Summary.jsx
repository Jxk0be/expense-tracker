import { db } from '../firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { Icon } from '@iconify/react';
import {useState, useEffect, React} from 'react';
import Navbar from '../Components/Navbar'

const Summary = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [runSum, setRunSum] = useState(0);

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

  useEffect(() => {
    let rSum = 0;
    for (let i = 0; i < expenses.length; ++i) {
      rSum += (parseFloat(expenses[i].amount));
    }
    setRunSum(rSum);
  }, [expenses]);

  return (
    <div className='w-full h-screen flex justify-center'>
      <Navbar />
      <div className='pt-[65px] max-w-[1500px] px-6 w-full flex flex-col items-center text-xl font-semibold'>
        <h1 className='text-3xl underline'>Summary</h1>
        {loading ? 
          <Icon icon="line-md:loading-loop" className='text-[50px] mt-5' /> : 
          <div className='w-full flex justify-center items-center m-3'>
            <h1>${runSum}</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default Summary