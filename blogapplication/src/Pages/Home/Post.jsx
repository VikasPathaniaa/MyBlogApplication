import React, { useEffect, useState } from "react";
import { API } from "../../Service/api";
import BlogCard from "../../Component/BlogCard/BlogCard";
import { Grid } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { getBlogs } from "../../Redux/Slices/BlogsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Component/Loader/Index";
import { styled } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Post = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const { data, isLoading, totalPages, isError } = useSelector(
    (state) => state.blogsSlice
  );

  useEffect(() => {
    dispatch(getBlogs({ category: category || "", page: currentPage }));
  }, [currentPage]);
  useEffect(() => {
    setCurrentPage(1);
    dispatch(getBlogs({ category: category || "", page: currentPage }));
  }, [category]);

  const pageHandle = (event) => {
    setCurrentPage(event.currentTarget.textContent);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data && data.length > 0 ? (
            data.map((blog, index) => {
              return (
                <Grid item lg={3} md={3} sm={3} xs={12} key={index}>
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
                </Grid>
              );
            })
          ) : (
            <div>No data Available to display</div>
          )}
        </>
      )}
      <ButtonContainer>
  <Stack spacing={2}>
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={pageHandle}
      color="primary"
      style={{
        "& .Mui-selected": {
          backgroundColor: "primary",
          color: "primary",
        },
      }}
    />
  </Stack>
</ButtonContainer>
   
    </>
  );
};

export default Post;

const ButtonContainer = styled("div")({
  display: "flex",
  margin: "auto",
  width: "100%",
  justifyContent: "center",
});
