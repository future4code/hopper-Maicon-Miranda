import React from 'react';
import "./styles.css";
import CardVideo from "./Components/CardVideo";
import ItemNav from "./Components/ItemNav";
import styled from "styled-components";

const Footer = styled.section`
  height: 10%;
  background-color: purple;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  h4 {
    color: white;
  }
`;

const MenuVertical = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`;

function App() {
  return (
    <div className="App">
      
      <div className="tela-inteira">
        <header>
          <h1>Lab Tube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <MenuVertical>
            <ul>
              <ItemNav titulo="Inicio" />
              <ItemNav titulo="Em alta " />
              <hr />
              <ItemNav titulo="Inscrições" />
              <ItemNav titulo="Originais " />
              <ItemNav titulo="Biblioteca" />
              <ItemNav titulo="Histórico" />
            </ul>
          </MenuVertical>

          <section className="painel-de-videos">
            <CardVideo numeroImagem="1" />
            <CardVideo numeroImagem="2" />
            <CardVideo numeroImagem="3" />
            <CardVideo numeroImagem="4" />
            <CardVideo numeroImagem="5" />
            <CardVideo numeroImagem="6" />
            <CardVideo numeroImagem="7" />
            <CardVideo numeroImagem="8" />
          </section>
        </main>

        <Footer>
          <h4>Oi! Eu moro no footer!</h4>
        </Footer>
      </div>
    </div>
  );
}

export default App;
