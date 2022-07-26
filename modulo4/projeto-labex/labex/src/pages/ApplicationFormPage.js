import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  margin-right: 30%;
  margin-left: 30%;
  margin-bottom: 1%;

`

const FormPageButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
`

const ApplicationFormPage = () => {
  
  const navigate = useNavigate();

    return (
      <FormPage>
        <h1>Inscreva-se para uma viagem</h1>


        <FormPageButtons>
          <button onClick={() => navigate("/trips/list")}>Voltar</button>
          <button>Enviar</button>
        </FormPageButtons>
      </FormPage>
    );
  };
  
  export default ApplicationFormPage;
  