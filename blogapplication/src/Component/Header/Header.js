import * as React from "react";
import { AppBar, Typography, Toolbar, styled } from "@mui/material";
import logo from "../../assets/blog.jpg";
import { Link } from "react-router-dom";

const Component = styled(AppBar)`
  background: #fdfdfd;
  color: black;
  justify-content: space-around;
  position: sticky;
`;

const SubContainer = styled(Toolbar)`
  justify-content: space-around;
`;

const Links = styled(Toolbar)`
  gap: 12px;
  & a {
    color: black;
    text-decoration: none;
    position: relative; /* Added */
  }

  & a::before {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--primary-color);
    transform: scaleX(0); /* Initial scale of 0 */
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  & a:hover::before {
    transform: scaleX(1); /* Scale to full width on hover */
  }
`;

const Button = styled(Typography)`
  background: var(--primary-color);
  padding: 10px;
  color: white;
  border-radius: 41px;
  font-size: 12px;
  width: 51px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;


//* logout Handle 

const logOutHandle = ()=>{
  localStorage.clear()
}
const Header = () => {
  return (
    <Component>
      <SubContainer>
        <Toolbar>
          <Link to="/">  
          <img src={logo} alt="logo" height={"40px"} /> </Link>
        </Toolbar>
        <Links>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </Links>
        <Toolbar>
          <Button onClick={logOutHandle}>Logout</Button>
        </Toolbar>
      </SubContainer>
    </Component>
  );
};

export default Header;
