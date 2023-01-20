import styled from "styled-components";

import whats from "./images/whatsapp.jpg";
import insta from "./images/instagram.jpg";

export const ContactFormContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: #965bf4;
  padding: 20px 0 40px;
  row-gap: 40px;

  h3 {
    font-size: 25px;
    text-align: center;
    padding: 10px 10px 20px;
    color: white;
    font-family: "Inter";
  }
`;
export const SocialMidia = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2%;
  width: 90%;
  max-width: 540px;
  margin-bottom: 10px;

  a {
    width: 49%;
    padding: 28px 0;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: 0.4s;
    font-size: 20px;
  }

  a:nth-child(1) {
    background: linear-gradient(rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0.5)),
      url(${whats});
    background-position-x: 50%;
    background-position-y: center;
    background-size: 180%;

    &:hover {
      background-size: 250%;
    }
  }
  a:nth-child(2) {
    background: linear-gradient(rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0.5)),
      url(${insta});
    background-position-x: 20%;
    background-position-y: center;
    background-size: 110%;

    &:hover {
      background-size: 180%;
    }
  }
`;

export const FormDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: 10px 10px 30px;
  max-width: 540px;
  form {
    padding: 10px 0;
    width: 95%;
    display: flex;
    row-gap: 10px;
    flex-direction: column;
    label {
      display: flex;
      flex-direction: column;

      span {
        font-size: 20px;
      }
      input {
        padding: 0 10px;
        height: 30px;
        border-radius: 15px;
        border: 1px solid gray;
      }

      textarea {
        padding: 10px;
        border-radius: 15px;
        border: 1px solid gray;
      }
    }
    button {
      cursor: pointer;
      width: 120px;
      height: 35px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      background-color: #ffa41b;
      border: 1px solid gray;
    }
  }
`;

export const OpenOrCloseForm = styled.div`
  display: flex;
  width: 90%;
  max-width: 540px;
  margin-bottom: 10px;
  background-color: white;
  padding: 10px 0;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding-bottom: 10px;

  * {
    margin: 0 10px;
  }

  i {
    transform: ${(props) => (props.open ? "rotateX(0deg)" : "rotateX(180deg)")};
  }
`;

export const Loading = styled.span`
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 10px;
  height: 10px;
  border: 2px solid black;
  border-top: 2px solid transparent;
  border-radius: 50px;
  animation: loading 1s linear infinite;
`;

export const ResponseEmail = styled.div`
  position: fixed;
  top: 0;

  left: 0;
  z-index: 2;
  background-color: rgba(10, 10, 10, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: white;
    padding-bottom: 10px;

    display: flex;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    width: 90%;
    img {
      width: 60%;
    }

    h3 {
      color: black;
    }
  }
`;

export const ButtonOk = styled.button`
  background-color: black;
  color: white;
  padding: 20px 40px;
  border: none;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;
