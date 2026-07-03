import { useCallback, useState, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0987654321"

    if (charAllowed) str += "!@#$%^&*()_{}[]~"

    for (let i = 1; i <length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copytobrowserclipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])

  // passwordGenerator()

  return (
    <>
      {/* <h1 className='text-[40px] text-white text-center'>Password Generator</h1> */}

      <div className='w-[600px] h-[200px] mx-auto shadow-md rounded-xl my-8 text-orange-500 bg-gray-700 '>
        <h1 className='text-[30px] text-white text-center'>Password Generator</h1>
        <div className='shadow
        rounded-2xl  overflow-hidden '>

          <div className='flex  flex-row'>
            <input
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            className='text-blue-900 ml-2 outline-none w-[500px] py-3 rounded-s-lg bg-gray-200 px-2'
            ref={passwordRef}
          />
          <button
          onClick={copytobrowserclipboard}
          className='w-20 text-[25px] bold cursor-pointer rounded-r-lg bg-blue-700 text-white'
          
          >Copy</button>
          </div>
          <div className='flex justify-evenly'>
            <input className='w-35 m-5 ' 
            type="range" 
              max={100}
              min={6}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
             
              <label >Length: {length}</label>
              <div>
                
              <label
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={(prev)=>!prev}
              >Number</label>
              <input type="checkbox" 
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=> !prev)
              }}
              />
              
              </div>
                
              
             
                <div>
                  <label 
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={(prev)=>!prev}
              >Character</label>
              <input type="checkbox" 
              id="characterInput"
              onChange={()=>{
                setCharAllowed((prev)=> !prev)
              }}
              />
                </div>
           
          </div>
          {/* <div className='flex flex-row justify-center align-center '>
            
            <div className='my-3 flex flex-row gap-20'>
            
                <label className='mx-2' htmlFor="number">Number</label>
                <input type="checkbox" name="" id="" />
              
             
                <label className='mx-2' htmlFor="number">Character</label>
                <input type="checkbox" name="" id="" />
             
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
