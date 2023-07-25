import styled from "@emotion/styled";
import { Box, Typography, TextareaAutosize, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { API } from "../../Service/api";
import ComponentList from "./ComponentList";


const initialState = {
  name: localStorage.getItem("name"),
  postid: "",
  comments: "",
  date: "",
};
const Comment = ({ post }) => {
  const [userComment, setUserComment] = useState(initialState);
  const [listofComments, setListOfComments] = useState([]);
  const [toggle , setToggle] = useState(false)
  const [message , setMessage] = useState("")

  const handleChange = (e) => {
    const { value } = e.target;
    setUserComment({
      ...userComment,
      name: localStorage.getItem("name"),
      postid: post._id,
      comments: value,
      date: new Date(),
    });
  };

  useEffect(() => {
    const getComment = async () => {
      let response = await API.getCommentsData(post?._id);
      if (response.isSuccess) {
        setListOfComments(response?.data);
      }
    };
    getComment();
  }, [post , toggle]);

  const postCommentHandle = async () => {
    let response = await API.postComment(userComment);
    console.log("response" , response)
    if (response.isSuccess) {
      setMessage(response?.data?.msg)
      setUserComment(initialState);
      setToggle(!toggle)
    }
  };
  return (
    <Box>
      <Container>
        <Image src={"/assets/userAvtar.png"} />
        <StyledTextArea
          maxRows={5}
          placeholder="what's on your mind"
          style={{ height: "80px" }}
          name="comments"
          onChange={handleChange}
          value={userComment?.comments}
        />
        <StyledButton onClick={postCommentHandle}> Post </StyledButton>
      </Container>
      <Box>
        <ComponentList listOfData={listofComments} />
      </Box>
    </Box>
  );
};

export default Comment;

const Container = styled(Box)`
  display: flex;
  margin-top: 50px;
`;

const StyledTextArea = styled(TextareaAutosize)`
  height: 100px;
  width: 100%;
  margin: 0px 2px;
`;
const Image = styled("img")({
  width: "45px",
  height: "45px",
  borderRadius: "53px",
});


const StyledButton = styled(Button)`
  height: 40px;
  background: var(--secondary-color);
  padding: 10px;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  width: max-content;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;
