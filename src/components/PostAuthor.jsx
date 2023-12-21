import React from 'react'
import { Link } from 'react-router-dom'
import Avatar1 from '../images/webimg.jpeg'

const PostAuthor = () => {
  return (
    <Link to= {'/posts/users/sdfsdf'} className='post__author'>
        <div className="post__author-avatar">
            <img src={Avatar1} alt="" />
        </div>
        <div className="post__author-details">
            <h5>By: Edwin Biwott</h5>
            <small>31 minutes ago</small>
        </div>
    </Link>
  )
}

export default PostAuthor
