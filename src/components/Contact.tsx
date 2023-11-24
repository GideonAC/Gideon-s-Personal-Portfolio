import styled from "styled-components";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const SixthBlock = () => {
  return (
    <Background id="Contact">
      <HeadText>
        <p>
          <b>
            Contact <span></span>
          </b>
        </p>
      </HeadText>


      <Box>
        <Icons>
          <p>
            {<FaPhone />} <span>+234-7061904384</span>{" "}
          </p>
          <p>
            {<IoMail />} <span>arinzechukwugideon@gmail.com</span>{" "}
          </p>
          <p>
            {<FaLocationArrow />} <span>Lagos State, Nigeria</span>{" "}
          </p>
        </Icons>

        <StyledForm
          action="mailto:arinzechukwugideon@gmail.com"
          method="POST"
          encType="text/plain"
          name="Form-Submission"
        >
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            minLength={5}
            maxLength={30}
            required
          />

          <input type="email" name="user_email" placeholder="Email" required />

          <span>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
            />

            <input type="text" name="subject" placeholder="Subject" required />
          </span>

          <textarea
            rows={3}
            name="message"
            placeholder="Your Message"
            maxLength={1000}
            required
          />

          <input type="submit" value="Send" className="send" />
        </StyledForm>
      </Box>
    </Background>
  );
};

export default SixthBlock;

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
  padding-top: 150px;
  display: flex;
  justify-content: space-around;
`;

const Icons = styled.div`
  display: grid;
  color: white;
  gap: 50px;
  font-size: 35px;

  span {
    padding-left: 30px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 657px;
  line-height: 40px;

  .send {
    width: 150px;
    margin: auto;
    cursor: pointer;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    input {
      width: 50%;
      gap: 20px;
      /* color: #43366A; */
    }
    /* justify-content: space-around; */
  }

  input {
    line-height: 20px;
    padding: 10px;
    border-radius: 30px;
    line-height: 25px;
    font-size: 15px;
    /* background-color: #43366A; */
  }

  textarea {
    line-height: 20px;
    padding: 10px;
    border-radius: 30px;
    line-height: 25px;
    font-size: 15px;
  }

  p {
    color: white;
    line-height: 30px;
    font-size: 23px;
    font-family: sans-serif;
  }
`;
