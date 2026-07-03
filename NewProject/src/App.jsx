import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Param from "./Components/Param";
import { Children } from "react";
import Courses from "./Components/Courses";
import Test from './Components/Test'
import Report from "./Components/Report";
import NotFound from './Components/NotFound'
const router = createBrowserRouter([
  {
    path:"/",
    element: <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:"/about",
    element:<div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path:"/dashboard",
    element: <div>
      <Navbar/>
      <Dashboard/>
    </div>,
    children:[
    {
      path:"course",
      element: <Courses/>
    },
    {
      path:"test",
      element:<Test/>
    },
    {
      path:"report",
      element:<Report/>
    }
    ]
  },
  {
    path:"/student/:id",
    element:<div>
      <Navbar/>
      <Param/>
    </div>
  },
  {
    path:'*',
    element:<NotFound/>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
