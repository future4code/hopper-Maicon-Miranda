import React from "react"
import TelaCadastro from "./Components/TelaCadastro"
import TelaLista from "./Components/TelaLista"
import './App.css';

class App extends React.Component {

  state = {
    telaAtual: "cadastro"
  }

  trocarDeTela = () => {
    this.setState({
      telaAtual: this.state.telaAtual === "cadastro" ? "lista" : "cadastro"
    })
  }

  render() {
    return (
      <div>
        {
          this.state.telaAtual === "cadastro"
            ? <TelaCadastro filhoUm={this.trocarDeTela} />
            : <TelaLista filhoDois={this.trocarDeTela} />
        }
      </div>
    )
  }

}

export default App;
