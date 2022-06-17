import { useNavigate } from "react-router-dom";

const ListTripsPage = () => {

  const navigate = useNavigate();

    return (
      <div>
        <h1>Lista de Viagens</h1>
        <button onClick={() => navigate("/")}>Voltar</button>
        <button onClick={() => navigate("/trips/application")}>Inscrever-se</button>
      </div>
    );
  };
  
  export default ListTripsPage;
  