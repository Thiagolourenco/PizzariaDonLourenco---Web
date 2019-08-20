import React from "react";

import { Container, Header, Content, Conteudo, Pedidos, Footer } from "./style";
import logo from "../../assets/img/logo.svg";
import pizza from "../../assets/img/2.png";
import coca from "../../assets/img/coca.png";
import sacola from "../../assets/img/sacola.png";

const Main = () => (
  <Container>
    <Header>
      <div>
        <img src={logo} alt="Logo" />
        <h1>Pizzaria Don Lourenço</h1>
      </div>
      <div className="userr">
        <div className="user">
          <h1>Thiago Lourenço</h1>
          <p>Sair do App</p>
        </div>
        <div className="sacola">
          <img src={sacola} alt="Sacola" />
        </div>
      </div>
    </Header>
    <Content>
      <h1>Últimos Pedidos</h1>
      <Conteudo>
        <p className="title">Pedido #3 - Thiago Lourenço</p>
        <p className="tempo">há 2 segundos</p>
        <p className="valor">R$ 42,00</p>
        <Pedidos>
          <div>
            <img src={pizza} alt="Pizza Calabresa" />
            <div>
              <p className="tipo">Pizza Calabresa</p>
              <p className="tamanho">Tamanho: Média</p>
            </div>
          </div>
          <div>
            <img src={coca} alt="Pizza Calabresa" className="coca" />
            <div>
              <p className="tipo">Coca Cola</p>
              <p className="tamanho">Lata: 300Ml</p>
            </div>
          </div>
        </Pedidos>
        <Footer>
          <strong>Observações: </strong> Favor remover o tomate da pizza{" "}
        </Footer>
      </Conteudo>
      <Conteudo>
        <p className="title">Pedido #3 - Thiago Lourenço</p>
        <p className="tempo">há 2 segundos</p>
        <p className="valor">R$ 42,00</p>
        <Pedidos>
          <div>
            <img src={pizza} alt="Pizza Calabresa" />
            <div>
              <p className="tipo">Pizza Calabresa</p>
              <p className="tamanho">Tamanho: Média</p>
            </div>
          </div>
          <div>
            <img src={coca} alt="Pizza Calabresa" className="coca" />
            <div>
              <p className="tipo">Coca Cola</p>
              <p className="tamanho">Lata: 300Ml</p>
            </div>
          </div>
        </Pedidos>
        <Footer>
          <strong>Observações: </strong> Favor remover o tomate da pizza{" "}
        </Footer>
      </Conteudo>
    </Content>
  </Container>
);

export default Main;
