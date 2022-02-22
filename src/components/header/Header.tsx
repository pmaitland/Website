import React from 'react'
import './Header.sass'

const Header = () => {
  return (
    <div className="header">
      <img src="face.jpg" className="logo" alt="face" />
      <div className="title">
        <div className="text">peter@maitland:~$</div>
        <div className="text flash">|</div>
      </div>
    </div>
  )
}

export default Header
