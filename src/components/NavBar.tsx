import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <Logo>
        <p>Gidlify</p>
      </Logo>
      <NavButtons>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Experience">Work Experience</a>
        <a href="#Skills">Skills</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Contact">Contact</a>
      </NavButtons>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  width: 100%;
  height: 80px;
  justify-content: space-between;
  display: flex;
  background-color: #170550;
  position: fixed;
  z-index: 20;
`;

const Logo = styled.div`
  padding: 15px 100px;
  font-family: "Freestyle script", sans-serif;
  font-size: 40px;
  color: #fd562a;
`;

const NavButtons = styled.div`
  text-decoration: none;
  gap: 30px;
  padding: 20px 50px;
  display: flex;
  margin-right: 50px;

  a {
    text-decoration: none;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: large;
    color: white;

    &:hover {
      color: #fd562a;
    }
  }
`;
