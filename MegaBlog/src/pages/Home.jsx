import React, {useState, useEffect} from 'react'
import Service from '../appwrite/conf'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        Service.getPosts().then((post)=>{
            if(post){
                setPosts(post.document)
            }
        })
    },[])

    if(posts.length === 0){
        return (
            <div className='w-full py-8 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='w-full p-2'>
                            <h1 className='text-2xl
                            font-bold hover: text-gray-500'>
                                Login to read the post
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div  className='flex flex-wrap'>
                    {
                        posts.map((post)=>(
                            <div className=' p-2 w-1/2' key={post.$id}>
                                <PostCard {...post}/>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Home
