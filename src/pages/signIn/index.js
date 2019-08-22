import React, { Component } from "react";

import { Container, Formulario } from "./style";
import logo from "../../assets/img/logo.svg";

class SignIn extends Component {
  handleSubmit = () => {
    const { history } = this.props;

    history.push("/main");
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Logo" />
        <Formulario onSubmit={this.handleSubmit}>
          <input type="email" placeholder="Seu e-mail" />

          <input type="password" placeholder="Seu e-mail" />
          <button>Entrar</button>
        </Formulario>
      </Container>
    );
  }
}

export default SignIn;
