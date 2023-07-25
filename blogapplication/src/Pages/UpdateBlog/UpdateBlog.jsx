import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  FormControl,
  InputBase,
  styled,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import { AddCircle as Add } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider";
import { API } from "../../Service/api";

const UpdateBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    userName: "",
    picture: "",
    categories: "",
    createdDate: new Date(),
  });
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const { account } = useContext(DataContext);
  const { id } = useParams();
  const url = blogData?.picture ? blogData?.picture : "/assets/addBlogImg.jpeg";

  useEffect(() => {
    let getData = async () => {
      let response = await API.getBlogById(id);
      if (response.isSuccess) {
        setBlogData(response?.data);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getFile = async () => {
      if (file) {
        const data = new FormData();
        data.append("fileName", file.name);
        data.append("file", file);
        let response = await API.uploadFile(data);
        blogData.picture = await response.data;
      }
    };
    getFile();
  }, [file]);

  //* below function for handle input fileds
  const handleData = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const fileHandle = (e) => {
    setFile(e.target.files[0]);
  };

  const updateBlogHandle = async () => {
    const response = await API.updateBlogById(blogData);
    if (response.isSuccess) {
      navigate(`/details/${id}`);
    }
  };
  return (
    <Box>
      <SubContainer>
        <Image src={url} alt="Banner" />
        <StyledForm>
          <label htmlFor="inputFile">
            <Add fontSize="large" color="action" />
          </label>
          <input
            type="file"
            id="inputFile"
            style={{ display: "none" }}
            name="blogImage"
            onChange={fileHandle}
          />
          <StyledInput
            placeholder="Tittle"
            name="title"
            onChange={handleData}
            value={blogData?.title}
          />
          <StyledButton onClick={updateBlogHandle}> Update Blog </StyledButton>
        </StyledForm>
        <TextArea
          value={blogData?.description}
          placeholder="Tell your story "
          row={5}
          name="description"
          onChange={handleData}
        />
      </SubContainer>
    </Box>
  );
};

export default UpdateBlog;

const Image = styled("img")({
  width: "100%",
  height: "500px",
  objectFit: "fill",
});
const SubContainer = styled(Box)`
  width: 90%;
  margin: auto;
`;

const StyledButton = styled(Typography)`
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

const StyledForm = styled(FormControl)`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;
const StyledInput = styled(InputBase)`
  padding: 5px;
  flex: 1;
  margin: auto 30px;
`;

const TextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 20px;
  border: none;
  font-size: 13px;
  &:focus-visible {
    outline: none;
  }
`;
