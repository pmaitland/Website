import React from 'react'
import './App.css'

import GameJams from './components/gameJams/GameJams'
import Header from './components/header/Header'

function App() {
  return (
    <div className="app">
      <Header />
      <GameJams />
    </div>
  )
}

export default App
