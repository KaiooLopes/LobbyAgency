import styled from "styled-components";

export const PlataformAdsContainer = styled.div`
  background-color: #eeeeee;
  padding: 70px 20px;
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
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -60px;

  @media (max-width: 353px) {
    top: -80px;
  }

  @media (min-width: 595px) {
    top: -35px;
  }

  @media (min-width: 720px) {
    top: -40px;
  }
  a {
    padding: 5px;
    text-decoration: none;
    background-color: #965bf4;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    text-align: center;
    color: white;
    cursor: pointer;
    transition: 0.4s;
    animation: pulseAnimation infinite linear alternate 2s;

    @keyframes pulseAnimation {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.05);
      }
    }

    &:hover {
      background-color: #6c2cd4;
    }

    @media (min-width: 720px) {
      padding: 20px 30px;
    }
  }
`;
