import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TelaMatches.css'
import astromatch from "../assets/img/astromatch.png"
import voltar from "../assets/img/voltar.png"


function TelaMatches(props) {

    const [mostrarMatch, setMostrarMatch] = useState([])

    useEffect(() => {
        GetMatches()
    }, [])

    function GetMatches() {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maicon-miranda/matches")
            .then(response => {
                setMostrarMatch(response.data.matches)
                console.log(response.data.matches)
            })
            .catch(error => {
                console.log('Erro', error.response.matches)
            })
    }

    return (
        <div className='telaMatches'>
            <header>
                <img className="astromatchImg" src={astromatch} alt="img" />
                <button className="voltarButton" onClick={props.switch}><img className="voltarImg" src={voltar} alt="img" /></button>
            </header>
            <div className='matchProfiles'>

                {mostrarMatch.map((match, id) => {
                    return (
                        <div class="profilesMached" key={id}>
                            <img className="imgTelaMatches" src={match.photo} alt="img"></img>
                            <h3>{match.name}</h3>
                        </div>

                    )
                })}

            </div>
        </div>
    )
}

export default TelaMatches


