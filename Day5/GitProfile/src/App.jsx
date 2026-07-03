import { useEffect, useState } from "react";

function App(){

  const[user, setUser] = useState([]);
  const[count, setCount] = useState(30);

  useEffect(()=>{
    async function profiles() {
    
    const response = fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await (await response).json();
    setUser(data);
    console.log("Hello");
  }

  profiles();
  },[count]);

  function handleChange(e){
    setName(e.target.value.toUpperCase());
  }

  return(
    <>
    <h1>GitHub Profiles</h1>
    <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}></input>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap: "wrap", gap:"10px"}}>{
      
      user.map(user=>(
        <img style={{borderRadius:"10px"}} src={user.avatar_url} height={"100px"} width={"100px"}  />
      ))
       
    }</div>
    </>
  )
}

export default App;