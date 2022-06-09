import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  /*
  const [tela, setTela] = useState()
   state = {
    telaAtual: "cadastro"

    function TrocarDeTela = () {
      setTela({tela:})
    }

  }

  trocarDeTela = () => {
    this.setState({
      telaAtual: this.state.telaAtual === "cadastro" ? "lista" : "cadastro"
    })
  }
  */

  const [profileList, setProfileList] = useState({})
  const [match, setMatch] = useState(null)

  useEffect(() => {
    RequestProfile()
  }, [match])

  function RequestProfile() {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:maicon/person")
      .then(response => {
        setProfileList(response.data.profile)
        console.log(response.data)
      })
      .catch(error => {
        console.log('Erro', error.response.data)
      })
  }

  function ChooseProfile(value) {
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:maicon/choose-person", {
      id: profileList.id,
      choice: value
    })
      .then((response) => {
        setMatch(response.data.profile)
      })
  }

  return (
    <div className="App">
      <h1>AstroMatch</h1>

      <img src={profileList.photo} alt="Profile Img"/> <br />
      <br />
      {profileList.name} <br />
      {profileList.age} <br />
      {profileList.bio} <br />
      <br />

      <button button onClick={() => ChooseProfile(false)}>❌</button>
      <button button onClick={() => ChooseProfile(true)}>❤️</button>
      <button>Matches</button>

    </div>
  );
}

export default App;
