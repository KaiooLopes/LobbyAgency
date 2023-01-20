import styled from "styled-components";
import bg from "./images/background.jpg";

export const QuestionsContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  padding: 40px 0 80px;
`;
export const Question = styled.div`
  text-align: ${(props) => props.align};
  width: 90%;
  display: flex;
  justify-content: ${(props) => props.align};

  p {
    color: ${(props) => (props.align === "left" ? "black" : "white")};
    box-shadow: 1px 1px 5px #474747;
    width: ${(props) => (props.align === "left" ? "80%" : "90%")};
    padding: 10px 5px;
    text-align: center;
    background-color: ${(props) =>
      props.align === "left" ? "#eeeeee" : "#965BF4"};
    border-radius: 20px;
    line-height: 2em;
    font-size: 17px;
  }

  @media (min-width: 1024px) {
    width: 70%;
    p {
      border-radius: 50px;
      width: ${(props) => (props.align === "left" ? "40%" : "70%")};
      line-height: 2em;
      font-size: 20px;
      padding: ${(props) => (props.align === "left" ? "" : "20px 30px")};
    }
  }
`;
