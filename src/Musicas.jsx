import React from 'react';

const musicas = [
  {
    titulo: "Livin' on a Prayer",
    autor: "Bon Jovi",
    descricao: "Uma música clássica de rock dos anos 80 que fala sobre superação e esperança.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/9/9f/Bon_Jovi_Livin_on_a_Prayer.jpg",
    letra: `Tommy works on the docks, union's been on strike...`
  },
  {
    titulo: "It Cuts Like a Knife",
    autor: "Bryan Adams",
    descricao: "Bryan Adams lança esta música após momentos difíceis, refletindo emoções e relacionamentos.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/7/7f/Bryan_Adams_-_It_Cuts_Like_a_Knife.jpg",
    letra: `Looks like it's going to rain today...`
  }
];

export default function Musicas() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Lista de Músicas</h1>
      <div className="row">
        {musicas.map((musica, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img 
                src={musica.imagem} 
                className="card-img-top" 
                alt={musica.titulo}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{musica.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{musica.autor}</h6>
                <p className="card-text flex-grow-1">{musica.descricao}</p>
                <details>
                  <summary className="btn btn-outline-primary btn-sm">
                    Ver Letra
                  </summary>
                  <div className="mt-2 p-3 bg-light rounded">
                    <pre className="mb-0" style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                      {musica.letra}
                    </pre>
                  </div>
                </details>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}