// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};
const App = () => {
  const dados = mario;
  const situacao = dados.ativa ? 'Ativo' : 'Inativo';
  const Gastos = dados.compras
    .map((item) => Number(item.preco.replace('R$', '')))
    .reduce((a, b) => a + b);
  console.log(dados.ativa);

  const color = { color: 'red' };
  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p style={{ color: dados.ativa ? 'green' : 'red' }}>
        Situação: {situacao}
      </p>
      <p>Total Gasto: {dados.cliente}</p>
      {Gastos > 10000 && 'Você está Gastando de muito'}
    </>
  );
};

<div>
  {livros
    .filter(({ ano }) => ano >= 1998)
    .map(({ nome, ano }) => (
      <li key={nome}>
        {nome}, {ano}
      </li>
    ))}
</div>;

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  return (
    <div>
      {produtos
        .filter(({ preco }) => Number(preco.replace('R$', '') > 1500))
        .map(({ id, nome, preco, cores }) => (
          <div key={id}>
            <h1>{nome}</h1>
            <p>preço: {preco}</p>
            {cores.map((c, i) => (
              <ul>
                <li style={{ background: c }}>{c}</li>
              </ul>
            ))}
          </div>
        ))}
    </div>
  );
};

const App = () => {
  function handClick(event) {
    console.log(event);
  }

  <button
    onClick={(event) => {
      alert(event);
    }}
  >
    Click
  </button>;
};

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

<div>
  <Titulo texto="" cor="blue">
    {' '}
    meu titulo 1<p>teste</p>
  </Titulo>
  <Titulo texto="" cor="green">
    meu titulo 2
  </Titulo>
  <Titulo texto="" cor="red">
    meu titulo 3
  </Titulo>
</div>;

<>
  <Input id="email" label="Email"></Input>
  <Input id="password" label="passaword" required></Input>
  <Button></Button>
</>;

import React from 'react';
import Header from './Header';
import Home from './Home';
import Produto from './Produto';

const App = () => {
  let Conteudo = '';
  const { pathname } = window.location;
  if (pathname === '/') {
    Conteudo = Home;
  } else {
    Conteudo = Produto;
  }

  return (
    <>
      <Header />
      <Conteudo />
    </>
  );
};

export default App;

const [ativo, setAtivo] = React.useState(false);
const [dados, setDados] = React.useState({ nome: 'mario', idade: 21 });

function handClick() {
  setAtivo(!ativo);
  setDados({ ...dados, faculdade: 'possio faculdade' });
}

return (
  <>
    <p>{dados.nome}</p>
    <p>{dados.idade}</p>
    <p>{dados.faculdade}</p>
    <button onClick={handClick}>{ativo ? 'ativo' : 'inativo'}</button>
    <div></div>
  </>
);

import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = React.useState(false);
  let [item, setItem] = React.useState('teste');

  function handClick() {
    setItem('outro');
  }

  return (
    <>
      <p>{item}</p>
      <button onClick={handClick}>Clicar</button>
      <div>{modal ? 'Modal aberto' : 'Modal Fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  );
};

export default App;

