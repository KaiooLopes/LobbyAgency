import styled from "styled-components";

export const PlataformAdsContainer = styled.div`
  background-color: #0081c9;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 3em;
  align-items: center;

  h1 {
    color: white;
    text-shadow: 1px 1px 6px black;
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
    color: white;
    text-align: center;
    font-size: 28px;
  }

  @media (min-width: 720px) {
    width: 50%;
    max-width: 280px;
  }
`;
