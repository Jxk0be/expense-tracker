import React from 'react'
import { useParams, Link } from 'react-router-dom';

const ExpenseDetail = () => {
  let { ExpenseId } = useParams();

  return (
    <div>
    <h1><Link to="/expenses">Full Expenses List</Link></h1>
    { ExpenseId }
    </div>
  )
}

export default ExpenseDetail