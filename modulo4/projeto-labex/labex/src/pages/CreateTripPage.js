import { useNavigate } from "react-router-dom";

const CreateTripPage = () => {

  const navigate = useNavigate();

    return (
      <div>
        <h1>Criar Viagem</h1>
        <button onClick={() => navigate("/admin/trips/list")}>Voltar</button>
        <button>Criar</button>
      </div>
    );
  };
  
  export default CreateTripPage;
  