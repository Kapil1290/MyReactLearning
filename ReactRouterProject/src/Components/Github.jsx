import React, { useEffect , useState} from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Github() {
  // const data = useLoaderData()
  const [data, setData] = useState([])

  useEffect( () => {
    const data =  fetch('https://api.github.com/users/kapil1290')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  
  }, [])
  

  return (
    <div className='bg-amber-100 h-500 scroll-auto'>
      {/* <div className='  h-20 py-4 text-3xl pl-5 rounded-md' >
      
     </div> */}

      <div className=' flex flex-row'>
        
        <img className='ml-30 m-20 w-80 h-80 rounded-4xl' src={data.avatar_url} alt="" />
        <div className='m-20'>
          <p className='font-bold text-red-700 text-4xl font-serif '>{data.name}</p>
          <p className='text-green-800'>{data.followers} followers</p>
          <p className='text-green-800'>{data.bio}</p>
          <p className='text-green-800'>Handle: {data.login}</p>
        </div>
      </div>
    </div>
  )
}

export const githubInfo = async () =>{
  const response = await fetch('https://api/github.com/users/kapil1290')
  return response.json()
} 

