import styled from "styled-components";

export const QuestionsContainer = styled.div`
  background-color: #86e5ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  padding: 40px 0;
`;
export const Question = styled.div`
  text-align: ${(props) => props.align};
  width: 90%;
  display: flex;
  justify-content: ${(props) => props.align};

  p {
    color: ${(props) => (props.align === "left" ? "#0081C9" : "white")};
    box-shadow: 1px 1px 5px #474747;
    width: ${(props) => (props.align === "left" ? "80%" : "90%")};
    padding: 10px 5px;
    text-align: center;
    background-color: ${(props) =>
      props.align === "left" ? "white" : "#0081C9"};
    border-radius: 20px;
    line-height: 1.5em;
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
