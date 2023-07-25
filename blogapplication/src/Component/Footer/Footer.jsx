import React from "react";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Typography>
        {" "}
        <img src="/assets/blog.jpg" alt="footer logo" width={70} />
      </Typography>
      <SubContainer>
        <Link to="/">
          <Typography>Home</Typography>{" "}
        </Link>
        <Link to="/about">
          <Typography>About</Typography>{" "}
        </Link>
        <Link to="/contact">
          <Typography>Contact</Typography>{" "}
        </Link>
      </SubContainer>
      <SocialLinks>
        <LinkedInIcon />
        <InstagramIcon />
        <TwitterIcon />
        <GitHubIcon />
      </SocialLinks>
      <Copyright> &#169; Vikas Singh , All rights reserved </Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled(Box)`
  width: 80%;
  margin: 26px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

const SubContainer = styled(Box)`
  display: flex;
  list-style: none;
  gap: 40px;
  height: 34px;
  height: 34px;
`;

const SocialLinks = styled(Box)`
  display: flex;
  gap: 20px;
  height: 34px;
  & svg {
    cursor: pointer;
  }
`;

const Copyright = styled(Typography)`
  margin-top: 12px;
  color: gray;
`;
