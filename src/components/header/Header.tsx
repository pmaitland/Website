import React from 'react'
import face from '../../face.jpg'
import './Header.css'

const Header = () => {
  return (
    <div className="header blue-shadow">
      <img src={face} className="logo" alt="face" />
      <div className="title">
        <div className="text">peter@maitland:~$</div>
        <div className="text flash">|</div>
      </div>
    </div>
  )
}

export default Header
