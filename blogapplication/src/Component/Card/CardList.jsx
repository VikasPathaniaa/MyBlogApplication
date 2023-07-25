import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { addElipsis } from "../../utils/common-utils";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)`
  width: 320px;
  height: 450px;
  background: #fff;
  border-radius: 20px;
  border: 5px solid #fff;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 12px;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledCardHeader = styled(CardHeader)`
  height: 200px;
  width: 100%;
  border-radius: 100% 0% 100% 0% / 0% 50% 50% 100%;
  display: grid;
  place-items: center;

  .MuiSvgIcon-root {
    color: #fff;
    font-size: 72px;
  }
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

const StyledTypographyTitle = styled(Typography)`
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 2px;
`;

const StyledTypographyText = styled(Typography)`
  text-align: center;
  font-size: 12px;
  margin-bottom: 2px;
`;

const StyledButton = styled(Button)`
  border: none;
  border-radius: 100px;
  padding: 5px 30px;
  color: black;
  margin-bottom: 2px;
  text-transform: uppercase;
`;

const CardList = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
       <Link to={`/details/${item._id}`}> 
        <StyledCard key={index}>
          <img
            src={item?.picture}
            className={`fab`}
            alt="image not found"
            height={200}
            width={"100%"}
          />
          <StyledCardContent>
            <StyledButton className={`btn`}>{item.categories}</StyledButton>
            <StyledTypographyTitle >
              {item.title}
            </StyledTypographyTitle>
            <StyledTypographyTitle >
              {item.userName}
            </StyledTypographyTitle>

            <StyledTypographyTitle >
              {new Date(item.createdDate).toDateString()}
            </StyledTypographyTitle>
            <StyledTypographyText variant="body1">
              {addElipsis(item.description, 20)}
            </StyledTypographyText>
          </StyledCardContent>
        </StyledCard>
        </Link>
      ))}
    </>
  );
};

export default CardList;
