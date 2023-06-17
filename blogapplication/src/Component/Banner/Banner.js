import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Banner = () => {
  const Image = styled(Box)`
    background-image: url("/assets/Banner.jpeg");
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: white;
  `;

  const Blog = styled(Typography)`
    font-weight: 600;
    
  `;

  return (
    <Image>
      <Box>
        <Blog variant="h4">BLOG</Blog>
        <Typography variant="h6">Write Your Thoughts...</Typography>
      </Box>
    </Image>
  );
};

export default Banner;
