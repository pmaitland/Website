import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <img src="/face.jpg" className="logo" alt="face" />
      <div className="path">
        <div>peter@maitland:~$</div>
        <div className="flash">|</div>
      </div>
    </div>
  )
}

export default Header
