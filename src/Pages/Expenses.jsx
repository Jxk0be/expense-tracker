import React from 'react'
import { Link } from "react-router-dom";

const Expenses = () => {
  return (
    <div>
      <h1><Link to="/">Home</Link></h1>
      -------- Expense LIST --------
      <h1><Link to={'1'}>Expense 1</Link></h1>
      <h1><Link to={'2'}>Expense 2</Link></h1>
      <h1><Link to={'3'}>Expense 3</Link></h1>
    </div>
  )
}

export default Expenses