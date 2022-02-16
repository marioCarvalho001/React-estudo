import React from 'react';
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  const margin = '1rem';

  async function handClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }
  return (
    <>
      <button style={{ margin }} onClick={handClick}>
        notebook
      </button>
      <button style={{ margin }} onClick={handClick}>
        smartphone
      </button>
      <button style={{ margin }} onClick={handClick}>
        tablet
      </button>
      {carregando && <p> Carregando ....</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;

const [contar, setContar] = React.useState(0);
console.log('Executado fora');
React.useEffect(() => {
  console.log('executado');
}, []);
React.useEffect(() => {
  document.title = 'total' + contar;
}, [contar]);
return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
