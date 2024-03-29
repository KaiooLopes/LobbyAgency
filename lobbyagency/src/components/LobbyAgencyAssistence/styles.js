import styled from "styled-components";

export const LobbyAgencyAssistenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  padding: 60px 0 20px;
  position: relative;
  h1 {
    color: black;
    font-family: "Inter";
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  @media (min-width: 1024px) {
    row-gap: 40px;
    padding: 40px 0;

    h1 {
      font-size: 40px;
    }
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  row-gap: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: bottom;
  align-items: center;

  text-align: center;

  img {
    width: 60%;
    max-width: 200px;
  }

  p {
    font-size: 25px;
  }

  @media (min-width: 1024px) {
    width: 20%;
    img {
      width: 200px;
    }
    margin: 0 10px;
  }
`;

export const Button = styled.div`
  left: 0;
  right: 0;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -30px;
  font-family: "Inter";

  span {
    background-color: red;
    padding: 10px;
    border-radius: 10px;
    background-color: #42bb51;
    transition: transform 0.2s;
    transform: translateY(-7px);

    &:hover {
      transform: translateY(-10px);
    }
  }

  a {
    transform: translateY(7px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
    background-color: #32923d;
    border: none;
    border-radius: 10px;
    font-size: 25px;
    color: white;
  }
  @media (min-width: 720px) {
    top: -40px;

    span {
      padding: 20px;
    }
  }
`;
