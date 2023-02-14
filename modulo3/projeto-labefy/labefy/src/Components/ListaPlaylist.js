import React from "react";
import axios from "axios";

class ListaPlaylist extends React.Component {

    state = {
        playlist: [],
        //tracks: [],
    }

    componentDidMount() {
        this.pegarPlaylist()
        //this.pegarTracks()
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

    

    deletarPlaylist = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url, {
            headers: {
                Authorization: "maicon-miranda-hopper"
            }
        }).then(() => {
            alert("Playlist excluída com sucesso.")
            this.pegarPlaylist()
        }).catch(() => {
            alert("Tente novamente mais tarde")
            console.log("erro")
        })
    }


    render() {

        //const list = this.state.playlist.map((cadaPlaylist) => {
        //    return <h3>{cadaPlaylist.name}</h3>
        //})
        

        return (
            <div>
                <button onClick={this.props.pageTwo}>Cadastrar playlist</button>
                <h2>Lista de Playlists</h2>
                {
                    this.state.playlist.map((list) => {
                        return (
                            <ul>
                                <li>{list.name}</li>
                                <button onClick={() => this.deletarPlaylist(list.id)}>excluir</button>
                                <button >Detalhes da Playlist</button>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}

export default ListaPlaylist;

