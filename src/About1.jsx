import React from 'react'

const About1 = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1>Sobre o Gestão Musical</h1>
          <p className="lead">
            O <strong>Gestão Musical</strong> é um sistema web moderno desenvolvido para organizar 
            e exibir informações sobre músicas de forma prática e intuitiva.
          </p>
          
          <div className="mt-4">
            <h5>🎯 Objetivo</h5>
            <p>
              Permitir que usuários explorem diferentes artistas, títulos, letras e informações 
              adicionais sobre cada música em uma interface agradável e organizada.
            </p>
          </div>

          <div className="mt-4">
            <h5>🛠 Tecnologias</h5>
            <ul>
              <li><strong>React</strong> - Interface moderna e componentizada</li>
              <li><strong>Bootstrap</strong> - Design responsivo e profissional</li>
              <li><strong>React Router</strong> - Navegação fluida entre páginas</li>
              <li><strong>React Icons</strong> - Ícones para melhor experiência visual</li>
            </ul>
          </div>

          <div className="mt-4">
            <h5>🌟 Funcionalidades</h5>
            <ul>
              <li>Catálogo organizado de músicas</li>
              <li>Letras expansíveis para fácil leitura</li>
              <li>Informações detalhadas sobre artistas</li>
              <li>Design adaptável para todos os dispositivos</li>
              <li>Navegação intuitiva e rápida</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About1