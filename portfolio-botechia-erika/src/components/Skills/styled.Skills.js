import styled from 'styled-components';

export const ContainerSkills = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 80%;
  margin: 60px auto;
  background-color: #5bd1fb;
  border-radius: 22px;
  min-height: 600px;
  margin-top: 80px;
  padding-top: 60px;

  h2 {
    text-align: center;
    margin: 30px auto;
    font-size: 2rem;
    color: #333333;
  }

  .stackBox {
    display: inline-block;
    margin: 30px auto;
    border-radius: 12px;
    border: 1px solid #d9d9d9;
    background: #fff;
    box-shadow: 0px 4px 20px rgba(9, 9, 12, 0.1);
    width: 110px;
    height: 110px;
    flex-shrink: 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 9.5px 5.5px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 6px 25px rgba(9, 9, 12, 0.15);
    }
  }

  .stackBox img {
    margin: auto;
    width: 100px;
    height: 80px;
  }

  .dFlex {
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
    gap: 20px;
  }
`;
