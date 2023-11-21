import styled from 'styled-components';

const Portfolio = () => {
  return (
    <Background id="Portfolio">
        <HeadText>
        <p>
          <b>
            My <span>Portfolio</span>
          </b>
        </p>
      </HeadText>
    </Background>
  )
}

export default Portfolio


const Background = styled.div`
  width: 100%;
  height: 800px;
  background-color: #170550;
`;

const HeadText = styled.div`
  padding-top: 60px;
  border-bottom: #fd562a solid;
  width: 300px;
  text-align: center;
  margin: auto;
  padding-bottom: 10px;

  p {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: white;
    font-size: 40px;

    span {
      color: #fd562a;
    }
  }
`;