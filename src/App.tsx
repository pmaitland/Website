import React from 'react'
import face from './face.jpg'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="header">
        <img src={face} className="header-logo" alt="face" />
        <div className="header-title">
          <div className="text">peter@maitland:~$</div>
          <div className="text flash">|</div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default App
