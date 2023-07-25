import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { addElipsis } from "../../utils/common-utils";

const BlogCard = (props) => {
  const { title, description, userName, picture, categories, date } = props;

  const url = picture ? picture : "/assets/addBlogImg.jpeg";
  return (
    <Container>
      <Image src={url} alt="Blog image Not found" />
      <SubContainer>
        <Category>{categories}</Category>
        <Title>{title}</Title>
        <Description>{addElipsis(description, 90)}</Description>
        <Author>{userName}</Author>
        <Typography>{new Date(date).toDateString()}</Typography>
      </SubContainer>
    </Container>
  );
};

export default BlogCard;

const Container = styled(Box)`
  margin-top: 65px;
  height: 350px;
`;

const SubContainer = styled(Box)`
  padding: 10px;
`;
const Image = styled("img")({
  width: "100%",
  height: "200px",
  borderRadius: "20px",
  objectFit: "cover",
});

const Title = styled(Typography)`
  font-weight: "bold";
  text-transform: capitalize;
`;
const Description = styled(Typography)`
  color: gray;
  font-size: 12px;
`;
const Author = styled(Typography)`
  margin-top: 12px;
`;
const Category = styled(Typography)`
  background: var(--primary-color);
  padding: 6px;
  color: white;
  border-radius: 41px;
  font-size: 10px;
  width: 51px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;
