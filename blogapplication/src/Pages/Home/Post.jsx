import React, { useEffect, useState } from "react";
import { API } from "../../Service/api";
import BlogCard from "../../Component/BlogCard/BlogCard";
import { Grid } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

const Post = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllBlogs({ category: category || "" });
      if (response.isSuccess) {
        setBlogs(response.data);
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog, index) => {
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
  );
};

export default Post;
