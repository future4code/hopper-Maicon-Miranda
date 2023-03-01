import React from "react";
import './App.css';
import './index.css'
import sendImage from './assets/sendImage.png'

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
      if (chat.usuario === "eu" || chat.usuario === "Eu" || chat.usuario === "EU") {
        return (
          <div className="balao-container-eu">
            <p className="balao-mensagem-eu">{chat.mensagem}</p>
          </div>
        )} else if (chat.usuario) {
          return (
            <div className="balao-container-outro">
              <p className="balao-mensagem-outro"><strong>{chat.usuario}: </strong> {chat.mensagem}</p>
            </div>
          )
        }
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
              type="text"
              value={this.state.usuarioEnviar}
              onChange={this.onChangeUsuario}
            />
            <input
              placeholder="Mensagem"
              className="inputMensagem"
              type="text"
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
                    <img src={sendImage} width='33'/>
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

