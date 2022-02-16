import React from 'react';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Form = () => {
  return (
    <>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        {' '}
        <a href="">Produtos</a>
      </li>
    </>
  );
};

export default Form;
