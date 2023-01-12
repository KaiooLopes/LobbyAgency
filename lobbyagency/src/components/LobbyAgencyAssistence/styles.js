import styled from "styled-components";

export const LobbyAgencyAssistenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffc93c;
  padding: 20px 0;
  h1 {
    font-weight: normal;
    color: #0081c9;
    text-transform: uppercase;
    font-size: 25px;
    text-decoration: underline;
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
  justify-content: center;
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
