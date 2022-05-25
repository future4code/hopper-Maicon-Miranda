import React from "react";
import axios from "axios";


class AddPlaylist extends React.Component {

  state = {
    playlist: [],
    inputPlaylist: ''
  }

  componentDidMount() {
    this.pegarPlaylist()
  }

  onChangeInput = (event) => {
    this.setState({ inputPlaylist: event.target.value })
  }

  onClickVisualisarPlaylist =() => {

  }

  pegarPlaylist = () => {

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: "maicon-miranda-hopper" 
      }
    })
      .then((response) => { 
        this.setState({ playlist: response.data.result.list })
      })
      .catch((error) => { 
        console.log('Erro', error.response.data)
      })
  }

  criarPlaylist = () => {

    const body = {
      name: this.state.inputPlaylist
    }


    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        Authorization: "maicon-miranda-hopper"
      }
    })
      .then(() => {
        alert("Playlist criada com sucesso!")
        this.setState({ inputPlaylist: '' }) 
        this.pegarPlaylist() 

      })
      .catch((err) => {
        alert("Playlist já existe!")
        console.log(err.response.data)
      })
  }

  render() {

    const list = this.state.playlist.map((cadaPlaylist) => {
      return <h3>{cadaPlaylist.name}</h3>
    })

    return (

      <div>
        <input
          value={this.state.inputPlaylist}
          onChange={this.onChangeInput}
        />
        <button onClick={this.criarPlaylist}>Criar Playlist</button>
        <button>Visualizar as minhas playlists</button>
        <div>
          {list}
        </div>
      </div>

    )
  }
}


export default AddPlaylist 




