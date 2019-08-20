import styled from "styled-components";
import fundo from "../../assets/img/fundo.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${fundo});
  height: 100%;
  flex-direction: column;

  img {
    height: 72px;
    width: 72px;
    margin-bottom: 20px;
  }
`;

export const Formulario = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;

  input {
    justify-content: stretch;
    height: 44px;
    margin-top: 10px;
    border: 0;
    border-radius: 8px;
    background-color: #fff;
    padding: 20px;
  }

  button {
    border: 0;
    border-radius: 8px;
    margin-top: 20px;
    height: 45px;
    background: #eb4d4b;
    font-size: 15px;
    color: #fff;
    font-weight: bold;
  }
`;
