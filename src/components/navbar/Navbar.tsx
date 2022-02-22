import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="content">
      <div className="navbar pink-shadow">
        <Link to="/">Home</Link>
        <div>|</div>
        <Link to="/gameJams">Game Jams</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar
