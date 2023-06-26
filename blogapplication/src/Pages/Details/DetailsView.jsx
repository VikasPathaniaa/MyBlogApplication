import React, { useEffect, useState, useContext } from "react";
import { API } from "../../Service/api";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataContext } from "../../Context/DataProvider";
import styled from "@emotion/styled";

const DetailsView = () => {
  const [data, setData] = useState();
  let { id } = useParams();
  const { account } = useContext(DataContext);
  
  const url = data?.picture ? data?.picture : "/assets/lake.jpg";
  console.log(data);
  useEffect(() => {
    let fetchData = async () => {
      let response = await API.getBlogById(id);
      if (response.isSuccess) {
        setData(response?.data);
      }
    };
    fetchData();
  }, []);
  return (
    <Box>
      <Container>
        <Image src={url} alt="Image not found" />
        <Icon>
          {account?.name == data?.userName && (
            <>
              <EditIcon color="primary" /> <DeleteIcon color="error" />
            </>
          )}
        </Icon>
        <Heading>{data?.title} </Heading>
        <Author>
          <Typography style={{display:"flex"}}>
            Author:
            <Box container="Span" style={{ fontWeight: 600 }}>
              {data?.userName}
            </Box>
          </Typography>
          <Typography>
            {new Date(data?.createdDate).toDateString()}{" "}
          </Typography>
        </Author>
        <Typography>{data?.description}</Typography>
      </Container>
    </Box>
  );
};

export default DetailsView;

const Container = styled(Box)`
  width: 80%;
  margin: auto;
`;

const Image = styled("img")({
  width: "100%",
  height: "500px",
});

const Icon = styled(Typography)`
  display: flex;
  float: right;

  & > svg {
    border-radius: 26px;
    padding: 8px;
    box-shadow: 0px 2px 2px 2px gray;
    transform: scale(0.8);
    cursor: pointer;
    transition: transform 2s;
  }

  &:hover > svg {
    transform: scale(0.9);
  }
`;
const Heading = styled(Typography)`
  font-weight:bold;
  text-align: center;
  text-transform: capitalize;
  color:"black
  `;
const Author = styled(Box)`
display:flex;
justify-content:space-between;
margin-top:18px


`