import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog38.jpg'

const PostDetail = () => {
  return (
     <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn primary '>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn danger '>Delete</Link>
          </div>
          </div>
          <h1>This is the post title</h1>
          <div className="post-detail__thumbnail">
            <img src={Thumbnail} alt="" />
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Illo ratione id fuga, commodi in numquam nostrum! Nulla 
            debitis totam rem quaerat alias omnis nobis. Natus tempora
             assumenda dolorum quisquam amet obcaecati officiis, 
            a atque alias similique possimus numquam voluptate?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea blanditiis dolor porro illum explicabo accusantium, harum distinctio voluptas repellat! In libero debitis veritatis deleniti tenetur quidem enim dolore neque?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi minima, illo reiciendis doloremque, recusandae quo amet nam, ipsam sapiente animi debitis rem nisi eos quibusdam porro ut natus delectus consequuntur saepe eum quae hic inventore. Aspernatur alias, placeat quis suscipit eos, maiores harum similique incidunt possimus laborum culpa officia magnam aliquid eveniet voluptas esse? Ratione minima, dolorum repudiandae dolorem illum alias officiis veniam hic ipsa aliquam sed debitis doloribus labore, quam voluptatibus consectetur possimus ex animi quasi? Voluptatum iure quae optio error officiis sapiente rem. Qui, impedit tenetur labore, commodi quisquam cupiditate id vero quaerat pariatur, animi laboriosam modi!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat libero nesciunt mollitia non inventore officiis molestias earum commodi a illum quod deserunt facere aspernatur quae quisquam minus, voluptas iste? Quos, dignissimos? Aperiam eligendi illo eius ratione est magnam, sunt sapiente deserunt nemo quasi earum in ipsum. Nihil quas eligendi consequuntur fuga nobis facere similique! Maxime rerum doloribus excepturi inventore saepe culpa a. Veniam rerum iure voluptate praesentium dignissimos. Sequi eligendi deleniti autem dolore, magni neque nobis nisi animi deserunt et.
            </p>
      </div>
     </section>
  )
}

export default PostDetail