import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./Pages/Create";
import Expenses from "./Pages/Expenses";
import Summary from "./Pages/Summary";
import ExpenseDetail from "./Pages/ExpenseDetail";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Create />,
  },
  {
    path: "expenses",
    element: <Expenses />,
  },
  {
    path: "expenses/:ExpenseId",
    element: <ExpenseDetail />
  },
  {
    path: "summary",
    element: <Summary />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
