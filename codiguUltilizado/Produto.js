import React from 'react';
import Titulo from './Titulo';
import Produtos from './Produtos';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produto = () => {
  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <Produtos key={produto.nome} {...produto} />
      ))}
    </section>
  );
};

export default Produto;
