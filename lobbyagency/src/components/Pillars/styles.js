import styled from "styled-components";

export const PillarsContainer = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 40px;

  h1 {
    font-family: "Inter";
    letter-spacing: 1px;
  }
`;

export const BodyPillars = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 95%;

  @media (min-width: 1024px) {
    flex-direction: row;
    column-gap: 10px;
    align-items: stretch;
    justify-content: center;
  }
`;

export const Pillar = styled.div`
  background-color: #6c2cd4;
  text-align: center;
  color: white;
  border-radius: 20px;
  max-width: 500px;
  padding: 20px;
  h3 {
    letter-spacing: 0.2em;
    font-weight: normal;
    font-size: 24px;
    font-family: "Inter";
  }

  p {
    font-size: 18px;
    line-height: 1.8em;
  }

  transition: 0.8s ${(props) => `${props.delay}s`};
  opacity: ${(props) => (props.showDiv ? "1" : "0")};
`;

export const IconArrow = styled.i`
  font-size: 60px;
  transform: rotate(90deg);
  transition: opacity 0.8s ${(props) => `${props.delay}s`};
  opacity: ${(props) => (props.showDiv ? "1" : "0")};

  @keyframes animationIconLeft {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  @keyframes animationIconRight {
    0% {
      opacity: 1;
    }

    80% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  ${(props) => (props.showDiv ? `animation: 2s linear 2s infinite;` : "")};
  animation-name: ${(props) => props.nameAnimation};

  @media (min-width: 1024px) {
    transform: rotate(0);
    margin: auto 0;
  }
`;
