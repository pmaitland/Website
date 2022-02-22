import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Footer from './components/footer/Footer'
import GameJams from './components/gameJams/GameJams'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="app">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="gameJams" element={<GameJams />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
