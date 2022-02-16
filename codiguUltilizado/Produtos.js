import React from 'react';

const Produtos = ({ nome, propriedades }) => {
  return (
    <div>
      <p>{nome}</p>
      <ul>
        {propriedades.map((edade) => (
          <li>{edade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
