import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./Pages/Create";
import Expenses from "./Pages/Expenses";
import ExpenseDetail from "./Pages/ExpenseDetail";
import Navbar from "./Components/Navbar";
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
  }
]);

function App() {

  return (
    <>
      <RouterProvider  router={router} ></RouterProvider>
    </>
  )
}

export default App
