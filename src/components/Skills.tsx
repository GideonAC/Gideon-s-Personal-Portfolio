import styled from "styled-components";



// const Icons = [
//   {
//     id: 1,
//     techIcon: ,
//     name: "HTML"
//   },
//   {
//     id: 2,
//     techIcon:  ,
//     name: "CSS"
//   },
//   {
//     id: 3,
//     techIcon: ,
//     name: "JavaScript"
//   },
//   {
//     id: 4,
//     techIcon: "Gideon Arinzechukwu",
//     name: "published a new art titled Father and Son"
//   },
//   {
//     id: 5,
//     techIcon: "Gideon Arinzechukwu",
//     name: "published a new art titled Father and Son"
//   },
//   {
//     id: 6,
//     techIcon: "Gideon Arinzechukwu",
//     name: "published a new art titled Father and Son"
//   },
//   {
//     id: 7,
//     techIcon: "Gideon Arinzechukwu",
//     name: "published a new art titled Father and Son"
//   },
//   {
//     id: 8,
//     techIcon: "Gideon Arinzechukwu",
//     name: "published a new art titled Father and Son"
//   },
// ];


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

      <MotherDiv>
        <DivOne>
          <Container>
          <Icon>
            <img src="src/images/html.png" alt="Html" />
          </Icon>
          <p>HTML</p>
          </Container>

        </DivOne>



        <DivOne>

        </DivOne>
      </MotherDiv>
      
      
      
{/*       
      <Box>
        <InsideBox>
          <Container>
            <Icon>

            </Icon>
            <p></p>
          </Container>


        </InsideBox>
      </Box> */}

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
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const InsideBox = styled.div`
  background-color: white;
  width: 80%;
  height: 550px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  justify-content: center;
  text-align: center;
  padding: 10px;

  span {
    color: #31065a;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .text {
    padding-top: 20px;
    font-size: 1.2rem;
    line-height: 20px;
    color: #31065a;
  }

  img {
    width: 100px;
  }
`;

const MotherDiv = styled.div`
  background-color: white;
  width: 80%;
  height: 550px;
  padding: 10px;
  margin-top: 70px ;
  margin-left: 150px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
`

const DivOne = styled.div`
  

`

const Icon = styled.div`
color: pink;
height: 64px;
width: 64px;
position: relative;
/* z-index: 10; */
`

const Container = styled.div`
height: 150px;
width: 150px;
background-color: black;
gap: 15px;
`