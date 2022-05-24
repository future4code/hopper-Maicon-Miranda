import React from "react";
import axios from "axios"; 

export default class TelaCadastro extends React.Component {

  state = {
    nome: "",
    email: ""
  }

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  cadastrarUsuario = () => {
    
    const body = {
      "name": this.state.nome,
      "email": this.state.email
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "maicon-miranda-hopper"
      }
    }).then(() => {
      alert("Usuário cadastrado com sucesso.")
    }).catch((err) => {
      alert("Erro ao cadastrar usuário.")
    }).finally(() => {
      this.setState({ nome: "", email: "" })
    })

  }

  render() {

    console.log(this.state)
    return (
      <div>
        <button onClick={this.props.filhoUm}>trocar de tela</button>
        <h1>CADASTRO</h1>

        <input placeholder="nome" value={this.state.nome} onChange={this.onChangeNome} />
        <input placeholder="email" value={this.state.email} onChange={this.onChangeEmail} />

        <button onClick={this.cadastrarUsuario}>cadastrar</button>
      </div>
    )
  }
}