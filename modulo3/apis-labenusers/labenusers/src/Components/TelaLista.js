import React from "react"
import axios from "axios"

export default class TelaLista extends React.Component {

  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegarUsuarios()
  }

  pegarUsuarios = async () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    // axios.get(url, {
    //   headers: {
    //     Authorization: "luan-melo-hopper"
    //   }
    // }).then((res) => {
    //   this.setState({ usuarios: res.data })
    // }).catch((err) => {
    //   console.log(err.response)
    // })

    try {

      const response = await axios.get(url, {
        headers: {
          Authorization: "maicon-miranda-hopper"
        }
      })
      this.setState({ usuarios: response.data })

    } catch (error) {
      console.log(error.response)
    }

  }

  deletarUsuario = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    // axios.delete(url, {
    //   headers: {
    //     Authorization: "luan-melo-hopper"
    //   }
    // }).then(() => {
    //   alert("Usuário apagado com sucesso.")
    //   this.pegarUsuarios()
    // }).catch(() => {
    //   alert("Tente novamente mais tarde")
    // })

    try {
      await axios.delete(url, {
        headers: {
          Authorization: "maicon-miranda-hopper"
        }
      })

      alert("Usuário apagado com sucesso.")
      this.pegarUsuarios()
    } catch (error) {
      console.log(error.response)
    }

  }


  render() {

    return (
      <div>
        <button onClick={this.props.filhoDois}>trocar de tela</button>
        <h2>Tela Lista</h2>
        {
          this.state.usuarios.map((usuario) => {
            return (
              <ul>
                <li>{usuario.name}</li>
                <button onClick={() => this.deletarUsuario(usuario.id)}>deletar</button>
              </ul>
            )
          })
        }
      </div>
    )
  }
}