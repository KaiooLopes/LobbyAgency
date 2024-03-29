import styled from "styled-components";
import bg from "./images/background.jpg";

export const IntroductionContainer = styled.div`
  width: 100%;
  background-color: #0081c9;
  display: flex;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
  background: radial-gradient(
      circle,
      rgba(95, 32, 172, 0.5) 0%,
      rgba(78, 37, 128, 0.5) 0%,
      rgba(84, 35, 144, 0.5) 37%,
      rgba(40, 18, 66, 0.5) 100%
    ),
    url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 300px;

  @media (min-width: 1024px) {
    min-height: 500px;
  }
`;

export const Article = styled.div`
  ${(props) =>
    props.showArticle === true
      ? "transform: translateX(-100%);"
      : "transform: translateX(0);"}
  transition: transform 1s;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 90%;
    height: 90%;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
  }
  h3 {
    line-height: 1.5em;
    color: white;
    font-weight: normal;
    padding: 20px 0 40px 0;
  }

  @media (min-width: 1024px) {
    div {
      width: 80%;
    }
    h3 {
      font-size: 30px;
      margin: 0 10%;
      line-height: 1.8em;
      padding: 10px 0 20px;
    }
  }
`;

export const Arrow = styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 5px;
  left: ${(props) => `${props.left}`};
  right: ${(props) => `${props.right}`};
  color: #ffa41b;
  font-size: 30px;
  background-color: transparent;
  border: none;

  @media (min-width: 1024px) {
    font-size: 50px;
    transition: 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
