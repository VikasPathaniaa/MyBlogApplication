import React from "react";
import { Box, styled } from "@mui/material";

const About = () => {
  return (
    <Conatiner>
      <img
        src="/assets/aboutImage.jpg"
        alt="about Section Image"
        width={"100%"}
        height={500}
      />
       <h2>About</h2>
      <p>Welcome to my blog application! I provide a platform for users to write, update, and delete their own blogs, as well as read and comment on blogs written by others.</p>
      <p>My goal is to create a vibrant community of bloggers and readers, where ideas can be shared, discussions can take place, and knowledge can be exchanged.</p>
      <p>With my user-friendly interface, you can easily write and publish your own blogs. Express your thoughts, share your expertise, or narrate your experiences to engage with a wide audience.</p>
      <p>Explore the diverse range of blogs contributed by talented writers. Discover new perspectives, stay up-to-date with the latest trends, and deepen your knowledge in various subjects.</p>
      <p>Engagement is key in my blog application. I encourage readers to leave comments on blogs, fostering meaningful conversations and enabling authors to receive feedback and connect with their audience.</p>
      <p>Whether you're an aspiring writer, an avid reader, or someone looking to gain insights and learn from others, my blog application offers an inclusive and interactive platform for everyone.</p>
      <p>If you have any questions, suggestions, or feedback, please don't hesitate to reach out to me. I value your input and am continuously working to improve the user experience.</p>
      <p>Join me on this blogging journey and start sharing your thoughts today!</p>
  
    </Conatiner>
  );
};

export default About;

const Conatiner = styled(Box)`
width:90%;
margin:auto;



`;
