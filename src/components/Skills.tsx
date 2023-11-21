import styled from "styled-components";

const FifthBlock = () => {
  return (
    <Background id="Skills">
      <HeadText>
        <p>
          <b>
            My <span>Skills</span>
          </b>
        </p>
      </HeadText>

      <Box>
        <BoxDiv>
        <span>
          <p>HTML</p>
        </span>
        <Line>
          <Percentage></Percentage>
        </Line>
        <span>
          <p>90%</p>
        </span>
        </BoxDiv>

        <BoxDiv>
        <span>
          <p>HTML</p>
        </span>
        <Line>
          <Percentage></Percentage>
        </Line>
        <span>
          <p>90%</p>
        </span>
        </BoxDiv>

        <BoxDiv>
        <span>
          <p>HTML</p>
        </span>
        <Line>
          <Percentage></Percentage>
        </Line>
        <span>
          <p>90%</p>
        </span>
        </BoxDiv>

        <BoxDiv>
        <span>
          <p>HTML</p>
        </span>
        <Line>
          <Percentage></Percentage>
        </Line>
        <span>
          <p>90%</p>
        </span>
        </BoxDiv>

        <BoxDiv>
        <span>
          <p>HTML</p>
        </span>
        <Line>
          <Percentage></Percentage>
        </Line>
        <span>
          <p>90%</p>
        </span>
        </BoxDiv>

        <BoxDiv>
        <span>
          <p>HTML</p>
        </span>
        <Line>
          <Percentage></Percentage>
        </Line>
        <span>
          <p>90%</p>
        </span>
        </BoxDiv>
      </Box>
      
      

      
    </Background>
  );
};

export default FifthBlock;

const Background = styled.div`
  width: 100%;
  height: 840px;
  background-color: #31065a;
`;

const HeadText = styled.div`
  padding-top: 60px;
  border-bottom: #fd562a solid;
  width: 250px;
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
  padding-top: 130px;
  

  span {
    color: white;
    font-size: 1.5rem;
  }
`;

const Line = styled.div`
  background-color: white;
  width: 60rem;
  height: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Percentage = styled.div`
  background-color: #fd562a;
  width: 90%;
  height: 70%;
  border-radius: 8px;
  border-bottom: none;
`;

const BoxDiv = styled.div`
   display: flex;
   justify-content: center;
   gap: 5rem;
  line-height: 60px;
  align-items: center;

`
