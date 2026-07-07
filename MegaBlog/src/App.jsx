import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { Footer, Header } from "./components/index.js";
import {login, logout} from './store/authSlice.js'



function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout({}))
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
    <div className="min-h-sc flex flex-wrap bg-gray-200 content-between">
      <div className="w-full block">
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null;


}

export default App
