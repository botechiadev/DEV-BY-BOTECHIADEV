import styled from 'styled-components';

export const GalleryContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-top: 130px;
  margin-bottom: 120px;

h2#projects{
  color: #5BD1FF;
  font-size: 2rem;
  margin-bottom: 50px;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  text-align: center;
  justify-content: center;
}

  article {
    border-radius: 22px;
    padding: 1rem;
    border-radius: 78px;
border: 11px solid #5BD1FF;
background:  #5BD1FF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 30px auto;
    width: 45%;
    min-width: 350px;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    transition: box-shadow 0.3s, transform 0.3s;

    &:hover {
      box-shadow: 0 10px 20px rgba(33, 33, 33, 0.2);
      transform: translateY(-10px);
    }

    img {
      width: 100%;
      height: 62%;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }

    div {
      padding: 1rem;
      color: #fff;
      text-align: center;

      h2 {
        margin: 5px auto;
        font-size: 2rem;
        text-shadow: 2px 2px 0 gray;
      }

      p {
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }
  }

.flex{
   display: flex;
   justify-content: space-around;
   align-items: center;
}

article  .flex a{
   display: flex;
padding: 8px 24px;
align-items: flex-start;
gap: 10px;
text-decoration: none;
background: gainsboro;
border-radius: 999px;
  }

  .flex a svg{
    width: 24px;
    height: 25px;
    color: black;
    border-radius: 22px;
  }
`;
