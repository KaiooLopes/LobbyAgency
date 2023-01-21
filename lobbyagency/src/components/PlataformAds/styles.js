import styled from "styled-components";

export const PlataformAdsContainer = styled.div`
  background-color: #eeeeee;
  padding: 90px 20px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 3em;
  position: relative;
  align-items: center;

  h1 {
    color: black;
    font-family: "Inter";
    font-weight: normal;
  }

  @media (min-width: 720px) {
    h1 {
      width: 80%;
      margin: 0 auto;
      text-align: center;
    }
  }
`;
export const Plataforms = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  padding: 50px 0 0 0;
  max-width: 400px;

  @media (min-width: 720px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: none;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    max-width: none;
  }
`;
export const Plataform = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  img {
    width: 60%;
  }

  p {
    color: black;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }

  @media (min-width: 720px) {
    width: 50%;
    max-width: 280px;
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
  top: -70px;
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
    font-size: 20px;
    transform: translateY(7px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
    background-color: #32923d;
    border: none;
    border-radius: 10px;
    color: white;
  }

  @media (min-width: 550px) {
    top: -40px;
  }
  @media (min-width: 720px) {
    top: -40px;

    span {
      padding: 20px;
    }

    a {
      font-size: 25px;
    }
  }
`;
