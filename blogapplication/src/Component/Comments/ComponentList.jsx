import React from "react";
import { Box, Typography, TextareaAutosize, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";

const ComponentList = ({ listOfData }) => {
  const userName = localStorage.getItem("name");

  return (
    <>
      {listOfData.map((_item, index) => {
        return (
          <CommentBox key={index}>
            <SubContainer>
              <Name> {_item?.name}</Name>
              <Typography> {new Date(_item?.date).toDateString()}</Typography>
              {userName == _item?.name && <Delete color="error" />}
            </SubContainer>
            <Box>
              <Typography>{_item?.comments}</Typography>
            </Box>
          </CommentBox>
        );
      }).reverse()
      }
    </>
  );
};

export default ComponentList;

const SubContainer = styled(Box)`
  display: flex;
  margin-top: 12px;
`;

const CommentBox = styled(Box)`
  background-color: #80808085;
  padding: 6px;
  border-radius: 10px;
  margin: 12px 0px;
`;

const Delete = styled(DeleteIcon)`
  margin-left: auto;
`;

const Name = styled(Typography)`
    text-transform:capitalize;
    font-weight: 600;
    margin-right: 12px;
`;
