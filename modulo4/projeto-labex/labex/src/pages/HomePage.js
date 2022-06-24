import { useNavigate } from "react-router-dom";


const HomePage = () => {

  const navigate = useNavigate();

    return (
      <div>
        <h1>Home</h1>
        <button onClick={() => navigate("/trips/list")}>Ver viagens</button>
        <button onClick={() => navigate("/login")}>Área de Administrador</button>
      </div>
    );
  };
  
  export default HomePage;
  