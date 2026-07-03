import {createBrowserRouter, RouterProvider,} from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Github, { githubInfo } from "./Components/Github";
import Navbar from "./Components/Navbar";



const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path: '/about',
    element: <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path: '/contact',
    element: <div>
      <Navbar/>
      <Contact email={"xxxx@gmail.log"} mob={"34343xxxxxx"} />
    </div>
  },
  {
    path: '/github',
  
    element: <div>
      <Navbar/>
      <Github/>
    </div>
  }
])

function App() {
  return ( 
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
