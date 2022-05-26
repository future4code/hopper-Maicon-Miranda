import React from 'react';
import './App.css';
import AddPlaylist from './Components/AddPlaylist'
import ListaPlaylist from './Components/ListaPlaylist';

class App extends React.Component {

  state = {
    telaAtual: 'adicionar'
  }

  trocarDeTela = () => {
    this.setState({
      telaAtual: this.state.telaAtual === 'adicionar' ? 'lista' : 'adicionar'
    })
  }


  render() {
    return (    
      <div div className = "App">
       {
          this.state.telaAtual === 'adicionar'
            ? <AddPlaylist pageOne={this.trocarDeTela} />
            : <ListaPlaylist pageTwo={this.trocarDeTela} />
        }
      </div>
    );
  }

}

export default App;
