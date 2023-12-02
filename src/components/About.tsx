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

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

const HeadText = styled.div`
  padding-top: 60px;
  border-bottom: #fd562a solid;
  width: 250px;
  text-align: center;
  margin: auto;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 50%;
    margin: auto;
    padding-top: 30px;
  }

  p {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: white;
    font-size: 40px;

    span {
      color: #fd562a;
    }

    @media screen and (max-width: 768px) {
      font-size: 26px;
    }
  }
`;

const Box = styled.div`
  padding-top: 90px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 25px;
  }
`;

const Profile = styled.div`
  width: 360px;
  height: 410px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    margin-top: -10px;
    width: 80%;
    height: 70%;
    margin: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const Text = styled.div`
  p {
    color: white;
    line-height: 30px;
    font-size: 23px;
    text-align: justify;
    font-family: "Times New Roman", Times, serif;

    @media screen and (max-width: 768px) {
      text-align: center;
      margin-top: 40px;
      font-size: 20px;
      line-height: 25px;
    }

    @media screen and (max-width: 600px) {
      font-size: 15px;
      line-height: 20px;
    }
  }
`;
