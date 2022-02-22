import React from 'react'
import './Footer.sass'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
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
