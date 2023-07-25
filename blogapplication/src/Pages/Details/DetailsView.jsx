import React, { useEffect, useState, useContext } from "react";
import { API } from "../../Service/api";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";
import Comments from "../../Component/Comments/Comment";

const DetailsView = () => {
  const [data, setData] = useState({});

  let { id } = useParams();
  const navigate = useNavigate();

  const authorName = localStorage.getItem("name");

  const url = data?.picture ? data?.picture : "/assets/lake.jpg";

  useEffect(() => {
    let fetchData = async () => {
      let response = await API.getBlogById(id);
      if (response.isSuccess) {
        setData(response?.data);
      }
    };
    fetchData();
  }, []);

  const deleteHandle = async () => {
    let response = await API.deleteBlog(data?._id);
    if (response?.isSuccess) {
      navigate("/");
    }
  };

  return (
    <Box>
      <Container>
        <Image src={url} alt="Image not found" />
        <Icon>
          {authorName == data?.userName && (
            <>
              <Link to={`/update-blog/${id}`}>
                <EditIcon color="primary" />
              </Link>

              <DeleteIcon color="error" onClick={deleteHandle} />
            </>
          )}
        </Icon>
        <Heading>{data?.title} </Heading>
        <Author>
          <Typography style={{ display: "flex" }}>
            Author:
            <Box container="Span" style={{ fontWeight: 600 }}>
              {data?.userName}
            </Box>
          </Typography>
          <Typography>{new Date(data?.createdDate).toDateString()} </Typography>
        </Author>
        <Typography>{data?.description}</Typography>
        <Comments post={data} />
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

  & > a > svg {
    border-radius: 26px;
    padding: 8px;
    box-shadow: 0px 2px 2px 2px gray;
    transform: scale(0.8);
    cursor: pointer;
    transition: transform 2s;
  }
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
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`;
