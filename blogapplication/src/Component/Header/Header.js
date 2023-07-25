import * as React from "react";
import { AppBar, Typography, Toolbar, styled } from "@mui/material";
import logo from "../../assets/blog.jpg";
import { Link, useNavigate, NavLink } from "react-router-dom";

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
    position: relative;
  }

  & a::before {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--primary-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  & a:hover::before {
    transform: scaleX(1);
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

const Header = () => {
  const navigate = useNavigate();
  const logOutHandle = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Component>
      <SubContainer>
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="logo" height={"40px"} />{" "}
          </Link>
        </Toolbar>
        <Links>
          <NavLink
            className={(navStyle) => (navStyle.isActive ? "linksActive" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(navStyle) => (navStyle.isActive ? "linksActive" : "")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={(navStyle) => (navStyle.isActive ? "linksActive" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={(navStyle) => (navStyle.isActive ? "linksActive" : "")}
            to="/blogpage"
          >
            Blog
          </NavLink>
        </Links>
        <Toolbar>
          <Button onClick={logOutHandle}>Logout</Button>
        </Toolbar>
      </SubContainer>
    </Component>
  );
};

export default Header;
