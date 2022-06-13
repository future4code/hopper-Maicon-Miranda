import './App.css';
import React,{useState} from 'react';
import TelaMatches from './components/TelaMatches';
import TelaProfiles from './components/TelaProfiles';


function App() {

  const[changeScreen, setChangeScreen] = useState("profiles")

  function mudarTela(){
    setChangeScreen(changeScreen === "profiles" ? "matches" : "profiles") 
 }

  return (

    <div className="App">
      {changeScreen === "profiles"? 
      <TelaProfiles switch={mudarTela}/>: 
      <TelaMatches switch={mudarTela}/>  }
    </div>
  );
}

export default App;