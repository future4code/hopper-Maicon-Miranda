import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const TripCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  margin-right: 30%;
  margin-left: 30%;
  margin-bottom: 1%;
`

const TripsListTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`
const TripListButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
`


const ListTripsPage = () => {

  const [mostrarTrips, setMostrarTrips] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    GetTrips()
  }, [])


  function GetTrips() {

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/maicon-miranda-hopper/trips")
      .then(response => {
        setMostrarTrips(response.data.trips)
        console.log(response.data.trips)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  return (
    <div>
      <TripsListTitle>Lista de Viagens</TripsListTitle>
      <TripListButton>
        <button onClick={() => navigate("/")}>Voltar</button>
        <button onClick={() => navigate("/trips/application")}>Inscrever-se</button>
      </TripListButton>
      
      {mostrarTrips.map((trip) => {
        return (
          <TripCard>
            <h3>Nome: {trip.name}</h3>
            <h4>Planeta: {trip.planet}</h4>
            <h4>Descrição: {trip.description}</h4>
            <h4>Duração: {trip.durationInDays} dias</h4>
            <h4>Data: {trip.date}</h4>
          </TripCard>
        )
      })}
    </div>
  );
};

export default ListTripsPage;
