import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maicon-miranda-hopper/login";

    const body = {
      email: email,
      password: password
    };

    axios
      .post(URL, body)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        console.log(err.response.data);
        alert("Usuário não cadastrado")
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => navigate("/")}>Voltar</button>
      
      <input placeholder="email" 
        type="email" 
        value={email} 
        onChange={onChangeEmail}
      />

      <input placeholder="senha" 
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={onSubmitLogin}>Enviar</button>
    </div>
  );
};

export default LoginPage;
