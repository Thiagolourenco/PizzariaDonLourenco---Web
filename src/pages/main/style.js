import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  height: 100px;
  width: 100%;
  padding: 15px;
  background-color: #0b2031;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 120px;

    h1 {
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 0;
      text-align: left;
      margin-left: 10px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
  .userr {
    margin-right: 100px;

    .user {
      color: #fff;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      /* border-right: 1px solid #ccc; */

      h1 {
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 0;
        text-align: left;
        font-family: Arial, Helvetica, sans-serif;
      }

      p {
        font-size: 14px;
        opacity: 0.6;
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 70px;
        margin-top: 3px;
      }
    }

    .sacola {
      width: 30px;
      height: 30px;
      background-color: #c0392b;
      justify-content: center;
      display: flex;
      align-items: center;
      border-radius: 15px;
      margin-left: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 20px;

  h1 {
    font-size: 18px;
    color: #333333;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: left;
    margin-right: 370px;
  }
`;

export const Conteudo = styled.div`
  border-radius: 8px;
  box-shadow: 5px 5px 5px 5px #ccc;
  width: 50%;
  margin-top: 10px;
  padding: 20px;

  .title {
    font-size: 18px;
    font-family: Helvetica;
    color: #0b2031;
    letter-spacing: 0;
    text-align: left;
  }

  .tempo {
    font-size: 11px;
    font-family: Helvetica;
    color: #706e7b;
    letter-spacing: 0;
    margin-top: 5px;
    line-height: 14px;
    text-align: left;
  }

  .valor {
    font-size: 16px;
    font-family: Helvetica;
    color: #0b2031;
    font-weight: bold;
    text-align: left;
    margin-top: 5px;
    letter-spacing: 0;
  }
`;

export const Pedidos = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  border-top: 1px solid #ecf0f1;
  padding: 15px;

  > div {
    display: flex;
    flex-direction: row;
    border: 1px solid #ecf0f1;
    padding: 20px;
    border-radius: 8px;

    img {
      width: 61px;
      height: 60px;
    }

    .coca {
      width: 32px;
      height: 60px;
    }
    > div {
      margin-left: 10px;
      margin-top: 5px;

      .tipo {
        font-size: 13px;
        font-family: Helvetica;
        color: #0b2031;
        letter-spacing: 0;
        text-align: left;
      }

      .tamanho {
        font-size: 11px;
        font-family: Helvetica;
        color: #706e7b;
        letter-spacing: 0;
        line-height: 10.77px;
        text-align: left;
        margin-top: 5px;
      }
    }
  }
`;

export const Footer = styled.p`
  border-top: 1px solid #ecf0f1;
  padding: 15px;
  font-size: 14px;
  font-family: Helvetica;
  color: #706e7b;
  letter-spacing: 0;
  margin-top: 10px;
  text-align: left;
`;
