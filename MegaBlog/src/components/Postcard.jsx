import React from 'react'
import appwriteService from '../appwrite/conf'
import {Link} from 'react-router-dom'

function Postcard({$id, title, featuredImage, }) {
    return (
        
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-400 rounded-xl p-4'>
                <div className='w-full flex justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
                    className='rounded-xl'/>
                    <h2 className='text-xl font-bold text-amber-800'>{title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Postcard
