import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config'


const PostCard = ({
    $id,
    title,
    featuredImage
}) => {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className='w-ful bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuredImage)} alt={title} />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
