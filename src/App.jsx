import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Home1 from './Home1'
import Musicas from './Musicas'
import About1 from './About1'
import Contact from './Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/musicas" element={<Musicas />} />
            <Route path="/about" element={<About1 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-dark text-white text-center py-4 mt-5">
          <div className="container">
            <p className="mb-2">
              <strong>Gestão Musical</strong> - Sua biblioteca digital de músicas organizada
            </p>
            <p className="mb-0 small">
              Explore artistas, descubra histórias e acesse letras de forma prática e intuitiva
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App