import { useRef, useState } from 'react'


function App() {

  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [password, setPass] = useState("");

  const nameRef = useRef("")
  const ageRef = useRef("")
  const passRef = useRef("")

  function handleSubmit(e){
    e.preventDefault();

    console.log(nameRef.current.value)
  }

  console.log("render")

  return (
    <>
    <form onSubmit={handleSubmit} >
      {/* <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
      </div>
      <div>
        <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}} ></input>
      </div>
      <div>
        <input type="password" value={password} onChange={(e)=>{setPass(e.target.value)}} ></input>
      </div> */}

      <div>
        <input type="text" ref={nameRef}  ></input>
      </div>
      <div>
        <input type="number" ref={ageRef} min={10} max={35} ></input>
      </div>
      <div>
        <input type="password" ref={passRef}></input>
      </div>
      <button >Submit</button>
    </form>
    </>
  )
}

export default App;
