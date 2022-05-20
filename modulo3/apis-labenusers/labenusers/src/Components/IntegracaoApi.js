import React from "react";
import axios from "axios";



class IntegracaoApi extends React.Component {

    state = {
        users: [],
        inputNomeUsuario: "",
        inputEmailUsuario: ""
    }

    componentDidMount() {
        this.pegarUsuario()
    }

    onChangeInputNome = (event) => {
        this.setState({inputNomeUsuario: event.target.value})
    }

    onChangeInputEmail = (event) => {
        this.setState({inputEmailUsuario: event.target.value})
    }

    

    pegarUsuario = () => {

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                    Authorization: "maicon-miranda-hopper"
                }
            })
            .then((response) => {
                //alert("Usuário criado com sucesso!"),
                console.log('sucesso')
                this.setState({ users: response.data})
            })
            .catch((error) => {
                //alert("Erro ao criar o usuário", error.response.data),
                console.log('erro', error.response.data)
            })

    }

    criarUsuario = () => {

        const body = {
            name: this.state.inputNomeUsuario,
            email: this.state.inputEmailUsuario
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
            {
                headers: {
                    Authorization: "maicon-miranda-hopper"
                }
            })
            .then(() => {
                alert(`Usuário ${this.state.inputNomeUsuario} criado com sucesso!`)
                console.log('sucesso')
                this.setState({ inputNomeUsuario: "", inputEmailUsuario: ""})
                this.pegarUsuario()
            })
            .catch((error) => {
                alert("Erro ao criar o usuário");
                console.log('erro');
            })

    }

    render() {

        const list = this.state.users.map((cadaUsuario) => {
            return <h3>{cadaUsuario.name}</h3>
        }) 

        return (
            <div>
                <p></p>
                <button>Trocar de tela</button>
                <p>
                    <input placeholder='Nome'
                        value={this.state.inputNomeUsuario}
                        onChange={this.onChangeInputNome}
                    
                    />
                    <input placeholder='E-mail' 
                        value={this.state.inputEmailUsuario}
                        onChange={this.onChangeInputEmail}
                    />
                    <button onClick={this.criarUsuario}>Criar usuário</button>
                </p>
                <div>
                    {list}
                </div>

            </div>
        )
    }

}

export default IntegracaoApi;