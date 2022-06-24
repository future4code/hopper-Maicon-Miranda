import { useProtectedPage } from "../Hooks/UseProtectPage";
import axios from "axios";
import React, { useEffect } from "react";


const TripDetailsPage = () => {
  useProtectedPage();

  useEffect(() => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/:id";
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    };

    axios
      .get(URL, headers)
      .then((res) => {
        console.log(res.data.trip);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, []);

    return (
      <div>
        <h1>Datails</h1>
      </div>
    );
  };
  
  export default TripDetailsPage;
  
  