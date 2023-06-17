import React from "react";
import {
  Box,
  Button,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  styled,
  Typography,
} from "@mui/material";

import { data } from "./data";
import { Link } from "react-router-dom";
const Category = () => {
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
      color:white
    }
  `;
  const TableContainer = styled(Table)`
    border: 2px solid gray;
    margin-top: 5px;
  `;

  return (
    <Box>
      
      <Link to="/createpost"> <Button>  Create a Blog   </Button> </Link>
     
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>All Categories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <TableRow>
                  <TableCell>{item.category}</TableCell>
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
