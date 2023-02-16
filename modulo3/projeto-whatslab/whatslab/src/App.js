import React from "react";
import './App.css';
import './index.css'

export class App extends React.Component {

  state = {
    chat: [
      {
        usuario: '',
        mensagem: ''
      },
      {
        usuarioEnviar: '',
        mensagemEnviar: '',
      }
    ]
  }

  onChangeUsuario = (e) => {
    this.setState({ usuarioEnviar: e.target.value })
  }

  onChangeMensagem = (e) => {
    this.setState({ mensagemEnviar: e.target.value })
  }

  enviarMensagem = () => {
    const mensagem = {
      usuario: this.state.usuarioEnviar,
      mensagem: this.state.mensagemEnviar
    }

    const mensagens = [mensagem, ...this.state.chat]

    this.setState({
      chat: mensagens,
      usuarioEnviar: '',
      mensagemEnviar: ''
    })
  }




  render() {

    const listaDeComponentes = this.state.chat.map((chat) => {
      return (
        <p><strong>{chat.usuario}</strong> {chat.mensagem}</p>
      )
    })

    return (
      <div className="container">
        <div className="box">
          <div className="box2">
            <p>{listaDeComponentes}</p>
          </div>
          <div className="box3">
            <input
              placeholder="Usuário"
              className="inputUsuario"
              value={this.state.usuarioEnviar}
              onChange={this.onChangeUsuario}
            />
            <input
              placeholder="    Mensagem"
              className="inputMensagem"
              value={this.state.mensagemEnviar}
              onChange={this.onChangeMensagem}

            />
            <button
              className="enviar"
              type="submit"
              onClick={this.enviarMensagem}
            >
              <div className="circle">
                <i class="zmdi zmdi-mail-send">
                  <span class="material-symbols-outlined">

                  </span>
                </i>
              </div>

            </button>
          </div>
        </div>
      </div>
    )

  }
}

export default App;

