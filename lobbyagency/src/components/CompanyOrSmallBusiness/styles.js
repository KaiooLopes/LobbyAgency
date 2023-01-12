import styled from "styled-components";

export const CompanyOrSmallBusinessContainer = styled.div`
  background-color: #ffc93c;
  display: flex;
  flex-direction: column;
`;

export const OptionCompany = styled.div`
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding: 15px 0;
  display: flex;

  p:nth-of-type(1) {
    color: ${(props) => (!props.option ? "#0081C9" : "#5D5D5D")};
    text-align: right;
  }
  p:nth-of-type(2) {
    color: ${(props) => (props.option ? "#0081C9" : "#5D5D5D")};
  }
  p {
    width: 50%;
    font-size: 18px;
    font-weight: bold;
    transition: 0.4s;
  }
`;

export const SelectContainer = styled.div`
  width: 60px;
  min-width: 20px;
  height: 35px;
  border-radius: 50px;
  background-color: #0081c9;
  display: flex;
  align-items: center;
  padding: 0 7px;
  cursor: pointer;

  div {
    width: 50%;
    height: 70%;
    background-color: #86e5ff;
    transition: 0.4s;
    transform: ${(props) =>
      props.option ? "translateX(100%)" : "translateX(0)"};
    border-radius: 100px;
  }
`;

export const OptionResume = styled.div`
  color: white;
  font-size: 20px;
  min-height: 300px;
  padding-bottom: 10px;
  line-height: 1.5em;
  width: 90%;
  margin: 0 auto;

  P {
    color: white;
    background-color: #0081c9;
    padding: 20px;
    border-radius: 20px;
  }

  @media (min-width: 720px) {
    max-width: 800px;
    min-height: 160px;
  }
`;
