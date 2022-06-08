import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./App.css"

function App() {

  const [profileList, setProfileList] = useState({})

  useEffect(() => {
    RequestProfile()
  }, [])

  function RequestProfile () {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
      .then(response => {
        setProfileList(response.data.profile)
        console.log(response.data)
      })
      .catch(error => {
        console.log('Erro', error.response.data)
      })
  }

  


  return (
    <div className="App">

      <img src={profileList.photo}/><br/>
      {profileList.name}<br/>
      {profileList.age}<br/>
      {profileList.bio}<br/>


      <button>❤️</button>
      <button>❌ </button>
    </div>
  )
}

export default App