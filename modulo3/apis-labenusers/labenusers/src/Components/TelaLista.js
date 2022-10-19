import React from "react";
import axios from "axios";


export default class TelaLista extends React.Component {

  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegarUsuarios()
  }

  pegarUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, {
      headers: {
        Authorization: "maicon-miranda-hopper"
      }
    }).then((response) => {
      this.setState({ usuarios: response.data })
    }).catch((error) => {
      console.log(error.response)
    })


  }

  deletarUsuario = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "maicon-miranda-hopper"
      }
    }).then(() => {
      alert("Usuário apagado com sucesso.")
      this.pegarUsuarios()
    }).catch(() => {
      alert("Tente novamente mais tarde")
    })


  }


  render() {

    return (
      <div>
        <button onClick={this.props.filhoDois}>trocar de tela</button>
        <h1>LISTA</h1>
        {
          this.state.usuarios.map((usuario) => {
            return (
              <ul>
                <li>{usuario.name}</li>
                <button className="botao" onClick={() => this.deletarUsuario(usuario.id)}>deletar</button>
              </ul>
            )
          })
        }
      </div>
    )
  }
}