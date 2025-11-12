import React from 'react'
import { Link } from 'react-router-dom'

const Home1 = () => {
  return (
    <div className="container mt-4">
      <div className="jumbotron bg-dark text-white p-5 rounded text-center">
        <h1 className="display-4">🎵 Gestão Musical</h1>
        <p className="lead mt-3">
          <strong>Sua biblioteca digital de músicas organizada</strong>
        </p>
        <p className="mb-4">
          Explore artistas, descubra histórias e acesse letras de forma prática e intuitiva
        </p>
        <Link className="btn btn-primary btn-lg mt-3" to="/musicas">
          Explorar Catálogo
        </Link>
      </div>
    </div>
  )
}

export default Home1