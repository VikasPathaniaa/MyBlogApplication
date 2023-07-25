import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../Redux/Slices/BlogsSlice";
import { styled, Box, Grid, Typography } from "@mui/material";
import BlogCard from "../../Component/BlogCard/BlogCard";
import { Link } from "react-router-dom";
import CardList from "../../Component/Card/CardList";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.blogsSlice);

  useEffect(() => {
    dispatch(getBlogs(""));
  }, []);
  console.log("********************", data);
  console.log("---------------------", isError);
  return (
    <Container>
      <img
        src={"/assets/blogPageBanner.jpg"}
        alt="image Not Found"
        height={400}
        width={"100%"}
      />
      <BannerTittle>
        <h1>Unlock the Power of Knowledge</h1>
        <Typography> Welcome to Our Blog</Typography>
        <Typography>
          A Gateway to Expanding Your Mind and Empowering Your Journey
          Empowering Your Journey to Learn, Evolve, and Motivate Others
        </Typography>
       <Link to={"/createpost?category="} ><Button>Create Blog</Button> </Link> 
      </BannerTittle>
      <SubContainer>
        <CardList data={data}/>
        {/* {data.map((blog) => {
          return (
            <Link to={`/details/${blog._id}`}>
              <BlogCard
                title={blog.title}
                description={blog.description}
                userName={blog.userName}
                picture={blog.picture}
                categories={blog.categories}
                date={blog.createdDate}
              />
            </Link>
          );
        })} */}
      </SubContainer>
    </Container>
  );
};

export default BlogPage;

const Container = styled(Box)`
  width: 80%;
  margin: auto;
`;

const SubContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BannerTittle = styled(Box)`
  width: 32%;
  position: absolute;
  top: 170px;
  right: 172px;
`;

const Button = styled(Box)`
  color: white;
  width: 96px;
  padding: 4px;
  text-align: center;
  margin: auto;
  border: 2px solid #1cefff;
  margin-top: 12px;
`;
