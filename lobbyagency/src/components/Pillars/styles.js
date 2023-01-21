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

  div:nth-child(5) {
    --border-size: 3px;
    --border-angle: 0turn;

    background-image: conic-gradient(
        from var(--border-angle),
        #6c2cd4,
        #6c2cd4 50%,
        #6c2cd4
      ),
      conic-gradient(
        from var(--border-angle),
        transparent 20%,
        #34109b,
        #34109b
      );
    background-size: calc(98% - (var(--border-size) * 2))
        calc(98% - (var(--border-size) * 2)),
      cover;
    background-position: center center;
    background-repeat: no-repeat;

    animation: bg-spin 3s linear infinite;
    @keyframes bg-spin {
      to {
        --border-angle: 1turn;
      }
    }

    @property --border-angle {
      syntax: "<angle>";
      inherits: true;
      initial-value: 0turn;
    }
  }
`;

export const Pillar = styled.div`
  background-color: #6c2cd4;
  text-align: center;
  color: white;
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
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes animationIconRight {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${(props) =>
    props.showDiv
      ? `animation:${props.nameAnimation} 2s linear 2s infinite alternate-reverse;`
      : ""};

  @media (min-width: 1024px) {
    transform: rotate(0);
    margin: auto 0;
  }
`;
