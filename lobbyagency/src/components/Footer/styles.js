import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #0081c9;
  display: flex;
  justify-content: center;
  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    padding: 10px;

    p {
      text-align: center;
      font-size: 14px;
      color: white;
    }
  }
`;
