import { useNavigate } from "react-router-dom";

const ApplicationFormPage = () => {
  
  const navigate = useNavigate();

    return (
      <div>
        <h1>Inscreva-se para uma viagem</h1>
        <button onClick={() => navigate("/trips/list")}>Voltar</button>
        <button>Enviar</button>
      </div>
    );
  };
  
  export default ApplicationFormPage;
  