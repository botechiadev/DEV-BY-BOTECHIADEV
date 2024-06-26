import styled from 'styled-components';

export const ContainerContact = styled.form`
  display: flex;
  flex-flow: column wrap;
  width: 80%;
  margin: 60px auto;
  background-color: #5bd1fb;
  border-radius: 22px;
  min-height: 600px;
  padding-top: -60px;

  fieldset {
    border: none;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 90%;
    margin: 30px auto;
    padding: 20px;
  }

  legend {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    color: #333333;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  input,
  textarea {
    height: 40px;
    width: 100%;
    background: #f9f9f9;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); /* Ajuste na sombra */
    text-align: center;
    margin: 20px auto;
    border: none;
    border-radius: 10px;
    padding: 0.5rem;

    &:focus {
      outline: none;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.4); /* Ajuste na sombra para foco */
    }
  }

  textarea {
    height: 140px;
    resize: vertical;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const ErrorText = styled.p`
  color: #ff0000;
  margin-top: -10px;
  margin-bottom: 10px;
`;
