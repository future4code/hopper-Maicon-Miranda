import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../Hooks/UseProtectPage";

const CreateTripPage = () => {
  useProtectedPage();

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
  