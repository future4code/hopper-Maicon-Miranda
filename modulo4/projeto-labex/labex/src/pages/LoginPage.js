import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

    return (
      <div>
        <h1>Login</h1>
        <button onClick={() => navigate("/")}>Voltar</button>
        <button onClick={() => navigate("/admin/trips/list")}>Entrar</button>
      </div>
    );
  };
  
  export default LoginPage;
  