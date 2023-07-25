import React from "react";
import { styled } from "@mui/material";
import {ClimbingBoxLoader} from "react-spinners"

const Index = () => {
  return (
    <Loader>
      <ClimbingBoxLoader color="#36d7b7" />
    </Loader>
  );
};

export default Index;

const Loader = styled("Typography")`
  margin: auto;
  display: flex;
  justify-content: center;
`;
