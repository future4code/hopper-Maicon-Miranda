import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './TelaProfiles.css';
import astromatch from "../assets/img/astromatch.png"
import matches from "../assets/img/matches.png"



function TelaProfiles(props) {


    const [profileList, setProfileList] = useState({})
    const [match, setMatch] = useState(null)

    useEffect(() => {
        RequestProfile()
    }, [])

    function RequestProfile() {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maicon-miranda/person")
            .then(response => {
                setProfileList(response.data.profile)
                console.log(response.data)
            })
            .catch(error => {
                console.log('Erro', error.response.data)
            })
    }

    function ChooseProfile(id) {
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maicon-miranda/choose-person", {
            id:id,
            choice: true
        })
            .then((response) => {
                setMatch(response.data.profile)
            
            })
    }

    function DarMatch(id){
        RequestProfile()
        ChooseProfile(id)
      }


    

    return (
        <div className="telaProfiles">
            <header>
                <img className="astromatchImg" src={astromatch} alt="img"/>
                <button className="matchesButton" onClick={props.switch}><img className="matchesImg" src={matches} alt="img"/></button>
            </header>

            <div className="cardProfiles">
                
                <img className="imgTelaProfiles" src={profileList.photo} alt="Profile Img" />
                
                <div className="profileText">
                   <h2>{profileList.name}, {profileList.age}</h2>
                   <h3>{profileList.bio} </h3>
                </div>
            </div>
            <div className="telaProfileButtons">
                <button className="xButton" onClick={() => RequestProfile()}>❌</button>
                <button className="coracaoButton" onClick={() => DarMatch(profileList.id)}>❤️</button>
            </div>
        </div>
    );
}

export default TelaProfiles;