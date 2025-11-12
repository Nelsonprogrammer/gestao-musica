import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🎵 Gestão Musical
        </Link>
        
        <div className="navbar-nav ms-auto">
          <Link 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
            to="/"
          >
            Home
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/musicas' ? 'active' : ''}`} 
            to="/musicas"
          >
            Músicas
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
            to="/about"
          >
            Sobre
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
            to="/contact"
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation