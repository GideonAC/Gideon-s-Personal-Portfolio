import styled from "styled-components";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";

const FirstBlock = () => {
  const handleFacebook = () => {
    const facebookProfileUrl = "https://www.facebook.com/arinzechukwu.gideon";
    window.open(facebookProfileUrl, "_blank");
  };

  const handleLinkedIn = () => {
    const linkedInProfileUrl = "https://www.linkedin.com/in/gideon-arinzechukwu-1171aa204/";
    window.open(linkedInProfileUrl, "_blank");
  };

  const handleGitHub = () => {
    const gitHubProfileUrl = "https://github.com/GideonAC";
    window.open(gitHubProfileUrl, "_blank");
  };

  const handleTwitter = () => {
    const twitterProfileUrl = "https://x.com/Arinzechukwugi1?t=DBnFN1gNc0vwhlZkpqOKbA&s=09";
    window.open(twitterProfileUrl, "_blank");
  };

  const handleIG = () => {
    const iGProfileUrl = "https://instagram.com/gideon_arinzechukwu?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr";
    window.open(iGProfileUrl, "_blank");
  };


  return (
    <Background1 id="Home">
      <MainDiv>
        <TextBox>
          <h1 className="hello">Hello, I'm</h1>
          <h1 className="fName">Gideon</h1>
          <h1 className="lName">Arinzechukwu</h1>
          <h1 className="dev">a Software Developer</h1>
          <Icons>
            <button>
              {" "}
              <a href="#Contact">Contact</a>
            </button>

            <div className="socialIcons">
              <BsLinkedin onClick = {handleLinkedIn}/>
              <BsGithub onClick = {handleGitHub} />
              <BsFacebook
                onClick={handleFacebook}
              />
              <RiTwitterXFill onClick = {handleTwitter} />
              <FaSquareInstagram onClick = {handleIG} />
            </div>
          </Icons>
        </TextBox>
        <ImageDiv>
          <Image src="src/images/Banner Image.svg" alt="" />
        </ImageDiv>
      </MainDiv>
    </Background1>
  );
};

export default FirstBlock;

const Background1 = styled.div`
  width: 100%;
  height: 776px;
  background-color: #31065a;
`;

const MainDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
`;

export const TextBox = styled.div`
  padding-top: 50px;
  line-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .hello {
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    color: white;
  }

  .fName {
    font-family: "Dangrek", sans-serif;
    font-size: 90px;
    color: white;
  }

  .lName {
    font-family: "Dangrek", sans-serif;
    font-size: 90px;
    color: #fd562a;
  }

  .dev {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
  }

  .socialIcons {
    padding-top: 10px;
    display: flex;
    gap: 20px;
    /* justify-content: space-around; */
  }
`;

export const ImageDiv = styled.div`
  width: 350px;
  height: 460px;
`;

const Image = styled.img`
  width: 577px;
  height: 683px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
  color: white;
  font-size: x-large;
  padding-top: 20px;
  margin-top: 50px;

  :hover {
    cursor: pointer;
  }

  button {
    padding: 10px 20px;
    background-color: #fd562a;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 20px;
    color: white;
    border-radius: 30px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
