import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className='footer__categories'>
        <li><Link to="/posts/categories/agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/agriculture">Agriculture</Link></li>
      </ul>
      <div className="footer__copyright">
        <p>All Rights Reserved &copy; Copyright Edwin Eisenhower</p>
      </div>
    </footer>
  )
}

export default Footer