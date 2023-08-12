import React from 'react'
import { Link } from "react-router-dom";

const Expenses = () => {
  return (
    <div>
      Expenses
      <h1><Link to={'1'}>1</Link></h1>
      <h1><Link to={'2'}>2</Link></h1>
      <h1><Link to={'3'}>3</Link></h1>
    </div>
  )
}

export default Expenses