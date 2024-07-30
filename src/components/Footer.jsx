
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className='footer__categories'>
        <li><Link to="/posts/categories/agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/education">Education</Link></li>
        <li><Link to="/posts/categories/tourism">Tourism</Link></li>
        <li><Link to="/posts/categories/artificial">Artificial Intelligence</Link></li>
        <li><Link to="/posts/categories/transport">Transport</Link></li>
        <li><Link to="/posts/categories/arts">Arts</Link></li>
        <li><Link to="/posts/categories/arts">Technology</Link></li>
      </ul>
      <div className="footer__copyright">
        <p>All Rights Reserved &copy; Copyright Edwin Eisenhower</p>
      </div>
    </footer>
  )
}

export default Footer
