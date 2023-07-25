import { Box, styled } from "@mui/material";
import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Contact = () => {
  return (
    <Container>
      <img
        src="/assets/contact.jpg"
        alt="contact image not found "
        width={"100%"}
        height={500}
      />
      <Box>
        <h2>Contact</h2>
        <p>
          Thank you for your interest in my blog application! If you have any
          questions, suggestions, or feedback, I would love to hear from you.
        </p>
        <p>
          Please feel free to reach out to me using the contact information
          below:
        </p>
        <ul>
          <li>Email: <EmailIcon fontSize="small"  color="disabled"/> abhirajput94781@gmail.com</li>
          <li>Phone: <ContactPhoneIcon fontSize="small" color="disabled"/> +91 9465244090</li>
          <li>Address:<LocationOnIcon fontSize="small" color="disabled"/> Chandigarh India</li>
        </ul>
        <p>
          I value your input and am committed to providing the best user
          experience possible. Whether you have a technical issue, a feature
          request, or just want to say hello, I'll be happy to assist you.
        </p>
        <p>
          Don't hesitate to get in touch with me. I'll do my best to respond to
          your inquiries as soon as possible.
        </p>
        <p>Thank you for using my blog application!</p>
      </Box>

      <SubContainer>
        <MainContainer>
          <Box>
            <img src="/assets/contactFormBackground.avif" height={"398px"} />
          </Box>
          <FormContainer>
            <form>
              <h2> Contact Us </h2>
              <InputField type="text" placeholder="Name" />
              <InputField type="text" placeholder="Email" />
              <TextArea type="text" rows={5} placeholder="what you wanna say" />
              <Button>Submit </Button>
            </form>
          </FormContainer>
        </MainContainer>
      </SubContainer>
    </Container>
  );
};

export default Contact;

const Container = styled(Box)`
  width: 90%;
  margin: auto;
`;

const SubContainer = styled(Box)`
  background-image: url("/assets/formbackground.webp");
  height: 500px;
`;

const FormContainer = styled(Box)`
  background: #e5e5e5;
  height: 62%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  padding: 45px;
`;
const MainContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const InputField = styled("input")({
  display: "block",
  marginTop: "12px",
  borderRadius: "5px",
  padding: "8px",
  outline: "none",
  border: "none",
});
const TextArea = styled("textarea")({
  display: "block",
  marginTop: "12px",
  borderRadius: "5px",
  padding: "8px",
  outline: "none",
  border: "none",
});
const Button = styled("button")({
  display: "flex",
  margin: "auto",
  marginTop: "12px",
  borderRadius: "5px",
  border: "none",
  border: "none",
  padding: "7px",
  background: "white",
  cursor:"pointer"
});
