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

      <Box>
          <InsideBox>
          
          </InsideBox>

          <InsideBox>
            
          </InsideBox>

          <InsideBox>
          
          </InsideBox>

        </Box>


        <Box>
          <InsideBox>
          
          </InsideBox>

          <InsideBox>
            
          </InsideBox>

          <InsideBox>
          
          </InsideBox>

        </Box>

      
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

const Box = styled.div`
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

`

const InsideBox = styled.div`
background-color: white;
width: 275px;
height: 200px;
position: relative;
overflow: hidden;
border-radius: 20px;
justify-content: center;
text-align: center;
padding: 10px;

span{
  color: #31065a;
  font-size: 1.5rem;
  font-weight: bold;
}

.text{
  padding-top: 20px;
  font-size: 1.2rem;
  line-height: 20px;
  color: #31065a;
}

img{
  width: 100px;
}
`