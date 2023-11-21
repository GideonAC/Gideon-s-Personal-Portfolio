import styled from "styled-components";

const SecondBlock = () => {
  return (
    <Background id="About">
      <HeadText>
        <p>
          <b>
            About <span>Me</span>
          </b>
        </p>
      </HeadText>

      <Box>
        <Profile>
          <img src="src/images/profile-pic.jpeg" alt="" />
        </Profile>

        <Text>
          <p>
            I am a dedicated and versatile Node.JS Full Stack Software
            Developer, <br />
            passionate about crafting robust and scalable web applications,{" "}
            <br />
            driven by a deep understanding of both front-end and back-end
            technologies. <br />
            My career has been marked by successful project deliveries, <br />
            collaborating with cross- functional teams, <br />
            and a commitment to continuous learning to keep up <br />
            with the ever- evolving tech landscape.
          </p>
        </Text>
      </Box>
    </Background>
  );
};

export default SecondBlock;

const Background = styled.div`
  width: 100%;
  height: 800px;
  background-color: #170550;
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
  padding-top: 90px;
  display: flex;
  justify-content: space-around;
`;

const Profile = styled.div`
  width: 360px;
  height: 410px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

const Text = styled.div`
  p {
    color: white;
    line-height: 30px;
    font-size: 23px;
    text-align: justify;
    font-family: "Times New Roman", Times, serif;
  }
`;
