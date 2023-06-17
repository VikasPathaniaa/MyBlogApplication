import React from "react";
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  styled,
  Typography,
} from "@mui/material";

import { data } from "./data";
import { Link, useSearchParams } from "react-router-dom";


const Button = styled(Typography)`
background: var(--secondary-color);
padding: 10px;
color: white;
border-radius: 12px;
font-size: 12px;
width: max-content;
text-align: center;
font-weight: 600;
cursor: pointer;
margin: auto;
& a {
  color: white;
}
`;
const TableContainer = styled(Table)`
border: 2px solid gray;
margin-top: 5px;
`;

const StyledLink = styled(Link)`
color: black;
`;



const Category = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");



  return (
    <Box>
      <StyledLink to={`/createpost?category=${category}`}>
        {" "}
        <Button> Create a Blog </Button>{" "}
      </StyledLink>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>
              <StyledLink to="/"> All Categories </StyledLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <TableRow>
                  <TableCell>
                    <StyledLink to={`?category=${item.category}`}>
                      {item.category}
                    </StyledLink>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            );
          })}
        </TableBody>
      </TableContainer>
    </Box>
  );
};

export default Category;
