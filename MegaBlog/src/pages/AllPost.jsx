import React, {useState, useEffect} from 'react'
import Service from '../appwrite/conf'
import { PostCard, Container } from '../components'

function AllPost() {
    const [post, setPost] = useState([])

    useEffect(()=>{
        Service.getPosts([]).then((post)=>{
            if(post){
                setPost(post.document)
            }
        })
    },[])
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {post.map((post)=>(
                        <div key={post.$id} className='py-2 w-1/2'>
                            <PostCard post={post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost
