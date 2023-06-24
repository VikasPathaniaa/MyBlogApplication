import React, { useEffect, useState } from 'react';
import { API } from '../../Service/api';

const Post = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllBlogs();
      if (response.isSuccess) {
        setBlogs(response.data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => {
          return <div key={blog.id}>{blog.title}</div>;
        })
      ) : (
        <div>No data yet</div>
      )}
    </>
  );
};

export default Post;
