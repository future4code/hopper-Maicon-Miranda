import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../Hooks/UseProtectPage";

const AdminHomePage = () => {
  useProtectedPage();
  
  const navigate = useNavigate();

    return (
      <div>
        <h1>Painel Administrativo</h1>
        <button onClick={() => navigate("/")}>Voltar</button>
        <button onClick={() => navigate("/admin/trips/create")}>Criar Viagem</button>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
    );
  };
  
  export default AdminHomePage;
  

  