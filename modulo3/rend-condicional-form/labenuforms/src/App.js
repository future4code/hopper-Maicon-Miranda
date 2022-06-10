import React from 'react';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';
//import './App.css';

//export default class App extends React.Component {}


export class App extends React.Component {
  state = {
    etapa: 1,
  };

  irParaProximaEtapa = () => {
    this.setState({ etapa: 1 })
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: 2 })
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: 3 })
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: 4 })
  }

  render(){

    let renderizaEtapa

    renderizaEtapa = () => {

      switch (this.state.etapa) {
        case 1:
          return <Etapa1/>;
        case 2:
          return <Etapa2/>;
        case 3:
          return <Etapa3/>;
        case 4:
          return <Final/>;
      }

    }
    
    return (
      <>
       {this.renderizaEtapa()}
       <button>Próxima etapa</button>
      </>
    );
  }
}

export default App;
