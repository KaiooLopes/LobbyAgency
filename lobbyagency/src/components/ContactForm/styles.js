import styled from "styled-components";

export const ContactFormContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: #5bc0f8;
  padding: 20px 0 40px;

  h3 {
    font-size: 25px;
    text-align: center;
    font-weight: normal;
    padding: 10px 10px 20px;
  }

  form {
    max-width: 500px;
    display: flex;
    row-gap: 10px;
    flex-direction: column;
    width: 80%;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 10px 10px 30px;
    background-color: white;
    label {
      display: flex;
      flex-direction: column;

      span {
        font-size: 20px;
      }
      input {
        padding: 0 10px;
        height: 30px;
        border-radius: 15px;
        border: 1px solid gray;
      }

      textarea {
        padding: 10px;
        border-radius: 15px;
        border: 1px solid gray;
      }
    }
  }
`;

export const SubmitAndSocial = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    cursor: pointer;
    width: 120px;
    height: 35px;
    border-radius: 20px;
    color: black;
    background-color: #ffc93c;
    border: 1px solid gray;
  }
  div {
    display: flex;
    justify-content: center;
    column-gap: 10px;
    margin-right: 20px;
    position: relative;
  }
`;

export const Icon = styled.a`
  color: ${(props) => props.color};
  font-size: 34px;
  text-decoration: none;
  i {
    font-weight: bold;
  }
  cursor: pointer;
`;

export const Popup = styled.span`
  position: absolute;
  top: -30px;
  width: 150px;
  padding: 5px;
  border-radius: 20px;
  right: -25px;
  background-color: #86e5ff;
  color: black;
`;
