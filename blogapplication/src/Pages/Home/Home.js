import React from "react";
import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Category/Category";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container mt={5} >
        <Grid item   lg={2} sm={4} xs={12} >
        <Category />
        </Grid>
        <Grid container item lg={10} sm={8}   xs={12}>
          post
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
