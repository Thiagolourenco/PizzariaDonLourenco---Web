import React from "react";

import { Container, Formulario } from "./style";
import logo from "../../assets/img/logo.svg";

const SignIn = () => (
  <Container>
    <img src={logo} alt="Logo" />
    <Formulario>
      <input type="email" placeholder="Seu e-mail" />

      <input type="password" placeholder="Seu e-mail" />
      <button>Entrar</button>
    </Formulario>
  </Container>
);

export default SignIn;
