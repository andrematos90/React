import React, { useState } from 'react';
import './App.css';

function App() {
  const [categoria, setCategoria] = useState('');

  const carros = [
    { categoria: 'Esporte', preco: '38000', modelo: 'Civic' },
    { categoria: 'Compacto', preco: '21000', modelo: 'Twingo' },
    { categoria: 'Passeio', preco: '34000', modelo: 'Fox' },
    { categoria: 'Utilitario', preco: '72000', modelo: 'Saveiro' },
    { categoria: 'Clássico', preco: '20000', modelo: 'Fusca' },
    { categoria: 'Passeio', preco: '42000', modelo: 'Malibu' },
    { categoria: 'Passeio', preco: '24000', modelo: 'Gol' },
    { categoria: 'Passeio', preco: '21000', modelo: 'Clio' }
  ];

  const Linhas = (cat) => {
    const li = [];

    carros.forEach((carro, index) => {
      if (carro.categoria.toUpperCase() === cat.toUpperCase() || cat.toUpperCase() === '') {
        li.push(
          <tr key={index}>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        );
      }
    });

    return li;
  };

  const TabelaCarros = (cat) => {
    return (
      <table border="1" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {Linhas(cat)}
        </tbody>
      </table>
    );
  };

  const PesquisaCategoria = (cat, scat) => {
    return (
      <div>
        <label>Digite uma categoria</label>
        <input type="text" value={cat} onChange={(e) => scat(e.target.value)} />
      </div>
    );
  };

  return (
    <>
      {PesquisaCategoria(categoria, setCategoria)}
      <br />
      {TabelaCarros(categoria)}
    </>
  );
}

export default App;
