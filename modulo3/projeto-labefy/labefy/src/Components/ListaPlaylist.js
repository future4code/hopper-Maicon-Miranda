import React from "react";
import axios from "axios";

class ListaPlaylist extends React.Component {

    state = {
        playlist: [],
    }

    componentDidMount() {
        this.pegarPlaylist()
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

    deletarPlaylis = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url, {
            headers: {
                Authorization: "maicon-miranda-hopper"
            }
        }).then(() => {
            alert("Playlist apagada com sucesso.")
            this.pegarPlaylist()
        }).catch(() => {
            alert("Tente novamente mais tarde")
        })
    }


    render() {

        const list = this.state.playlist.map((cadaPlaylist) => {
            return <h3>{cadaPlaylist.name}</h3>
          })

        return (
            <div>
                <h1>tela lista</h1>
                <button onClick={this.props.pageTwo}>Adicionar uma playlist</button>
                {list}
                
            </div>
        )
    }
}

export default ListaPlaylist;
