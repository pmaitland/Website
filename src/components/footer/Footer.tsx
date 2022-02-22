import React from 'react'
import './Footer.css'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer blue-shadow">
      <a
        href="https://github.com/pmaitland"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="social" />
      </a>
    </div>
  )
}

export default Footer
