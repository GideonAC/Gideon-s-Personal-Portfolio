import styled from "styled-components";

const Icons = [
  {
    id: 1,
    imageUrl: <img src="src/images/html.png" alt="html" />,
    name: "HTML",
  },
  {
    id: 2,
    imageUrl: <img src="src/images/css.png" alt="css" />,
    name: "CSS",
  },
  {
    id: 3,
    imageUrl: <img src="src/images/icon-javscript.svg" alt="javascript" />,
    name: "JavaScript",
  },
  {
    id: 4,
    imageUrl: <img src="src/images/icon-typescript.svg" alt="typescript" />,
    name: "TypeScript",
  },
  {
    id: 5,
    imageUrl: <img src="src/images/icon-react.svg" alt="react" />,
    name: "React",
  },
  {
    id: 6,
    imageUrl: <img src="src/images/icon-nodejs.svg" alt="node" />,
    name: "Node.Js",
  },
  {
    id: 7,
    imageUrl: <img src="src/images/icon-express.svg" alt="express" />,
    name: "Express",
  },
  {
    id: 8,
    imageUrl: <img src="src/images/icon-nextjs.svg" alt="nextjs" />,
    name: "Next.Js",
  },
  {
    id: 9,
    imageUrl: <img src="src/images/icon-nextjs.svg" alt="nextjs" />,
    name: "Next.Js",
  },
  {
    id: 10,
    imageUrl: <img src="src/images/icon-nextjs.svg" alt="nextjs" />,
    name: "Next.Js",
  },
  {
    id: 11,
    imageUrl: <img src="src/images/icon-nextjs.svg" alt="nextjs" />,
    name: "Next.Js",
  },
  {
    id: 12,
    imageUrl: <img src="src/images/icon-nextjs.svg" alt="nextjs" />,
    name: "Next.Js",
  },
  {
    id: 13,
    imageUrl: <img src="src/images/icon-nextjs.svg" alt="nextjs" />,
    name: "Next.Js",
  },
  {
    id: 14,
    imageUrl: <img src="src/images/icon-nextjs.svg" alt="nextjs" />,
    name: "Next.Js",
  },
  {
    id: 15,
    imageUrl: <img src="src/images/icon-nextjs.svg" alt="nextjs" />,
    name: "Next.Js",
  },
  {
    id: 16,
    imageUrl: <img src="src/images/icon-nextjs.svg" alt="nextjs" />,
    name: "Next.Js",
  },
];

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
          {Icons.map((icon) => (
            <Container key={icon.id}>
              <Icon>{icon.imageUrl}</Icon>
              <p>{icon.name}</p>
            </Container>
          ))}

          {/* <Container>
          )
          <Container>
          <Icon>
            <img src="src/images/html.png" alt="Html" />
          </Icon>
          <p>HTML</p>
          </Container>

          {/* <Container>
          <Icon>
            <img src="src/images/css.png" alt="css" />
          </Icon>
          <p>CSS</p>
          </Container>

          <Container>
          <Icon>
            <img src="src/images/icon-javscript.svg" alt="javascript" />
          </Icon>
          <p>JavaScript</p>
          </Container>

          <Container>
          <Icon>
            <img src="src/images/icon-typescript.svg" alt="typescript" />
          </Icon>
          <p>TypeScript</p>
          </Container>

          <Container>
          <Icon>
            <img src="src/images/icon-react.svg" alt="react" />
          </Icon>
          <p>React</p>
          </Container>

          <Container>
          <Icon>
            <img src="src/images/icon-nodejs.svg" alt="nodejs" />
          </Icon>
          <p>Node.Js</p>
          </Container>

          <Container>
          <Icon>
            <img src="src/images/icon-express.svg" alt="express" />
          </Icon>
          <p>Express</p>
          </Container> */}
        </DivOne>

        <DivOne>
          {/* <Container>
          <Icon>
            <img src="src/images/icon-express.svg" alt="express" />
          </Icon>
          <p>Express</p>
          </Container>

          <Container>
          <Icon>
            <img src="src/images/icon-express.svg" alt="express" />
          </Icon>
          <p>Express</p>
          </Container>

          <Container>
          <Icon>
            <img src="src/images/icon-express.svg" alt="express" />
          </Icon>
          <p>Express</p>
          </Container>

          <Container>
          <Icon>
            <img src="src/images/icon-express.svg" alt="express" />
          </Icon>
          <p>Express</p>
          </Container>

          <Container>
          <Icon>
            <img src="src/images/icon-express.svg" alt="express" />
          </Icon>
          <p>Express</p>
          </Container>

          <Container>
          <Icon>
            <img src="src/images/icon-express.svg" alt="express" />
          </Icon>
          <p>Express</p>
          </Container>

          <Container>
          <Icon>
            <img src="src/images/icon-express.svg" alt="express" />
          </Icon>
          <p>Express</p>
          </Container> */}
        </DivOne>
      </MotherDiv>
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

const MotherDiv = styled.div`
  background-color: white;
  width: 80%;
  height: 550px;
  padding: 10px;
  margin-top: 70px;
  margin-left: 150px;
  border-radius: 10px;
  justify-content: center;
  align-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const DivOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

const Icon = styled.div`
  height: 100px;
  width: 100px;
  position: relative;
  margin-top: 20px;
  padding-left: 17px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    position: absolute;
  }
`;

const Container = styled.div`
  height: 150px;
  width: 150px;
  gap: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  p {
    font-size: 20px;
    font-weight: bold;
    color: #31065a;
    margin-top: 10px;
  }
`;
