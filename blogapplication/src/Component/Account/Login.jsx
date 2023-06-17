import React, { useState, useContext } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import logo from "../../Img/blog.jpg";
import Inputfield from "../Inputfield";
import { API } from "../../Service/api";
import { DataContext } from "../../Context/DataProvider";
import { useNavigate } from "react-router-dom";
const Container = styled(Box)`
  width: 400px;
  margin: auto;
  text-align: center;
  box-shadow: 4px 4px 21px 5px #cac2c2;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px;
`;

const Loginbtn = styled(Button)`
    background-color:#FB641B ;
    width: 200px;
    margin: auto;
    margin-top: 1rem;
    color:white;
    &:hover {
    color:blue ;
    border:none;
    outline:none:
    }
    `;
const SignupButton = styled(Button)`
  width: 20rem;
  margin: "auto";
  margin-top: 1rem;
  transform: scale(0.9);
  background-color: white;
  border: navajowhite;
  color: gray;
  box-shadow: 1px 2px 2px 1px #bfa5a5;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: red;
  marign-top: 5px;
`;

const Image = styled("img")({
  transform: "scale(0.5)",
});


//* Component Start from here 
const Login = () => {
  const [toggle, setloginToggle] = useState(true);
  const [signupFields, setSignupFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginFields, setLoginFields] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [error, seterror] = useState("");

  //* useContext use
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  // function for back to  login screen
  const loginHandel = () => {
    setloginToggle(!toggle);
  };

  // function for Signup input onchange handel

  const handleSignupChange = (e, field) => {
    const { value } = e.target;
    setSignupFields((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  
  //* function for signup data  submition\
  const submitHandel = async () => {
    let response = await API.userSignup(signupFields);
    if (response.isSuccess) {
      setSignupFields({
        name: "",
        email: "",
        password: "",
      });
      setloginToggle(true);
      seterror("");
    } else {
      seterror("something is wrong please try again later");
    }
  };

  // function for login input Change Value

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // function for login Handel

  const loginUser = async () => {
    let response = await API.userLogin(loginFields);
    if (response.isSuccess) {
      localStorage.setItem("accessToken", `Bearer${response.data.accessToken}`);
      localStorage.setItem(
        "refreshToken",
        `Bearer${response.data.accessToken}`
      );
      setAccount({ email: response.data.email, name: response.data.name });
      navigate("/");
    } else {
      seterror("something is wrong please try again later");
    }
    console.log(response);
  };

  return (
    <Container>
      <Image src={logo} alt="logo is not found"></Image>

      {toggle ? (
        <Box>
          <Inputfield
            changeHandel={handleLoginChange}
            placeholder="enter your email"
            name="userEmail"
            value={loginFields.email}
          />

          <Inputfield
            changeHandel={handleLoginChange}
            placeholder="enter your Password"
            name="userPassword"
            value={loginFields.password}
          />

          {error && <Error>{error}</Error>}
          <Loginbtn onClick={loginUser}> Login </Loginbtn>
          <Typography> or </Typography>
          <SignupButton onClick={loginHandel}>
            Don't have an account Sign up
          </SignupButton>
        </Box>
      ) : (
        <Box>
          <Inputfield
            placeholder="enter your name"
            name="name"
            value={signupFields.name}
            changeHandel={(e) => handleSignupChange(e, "name")}
          />

          <Inputfield
            placeholder="enter your email"
            name="email"
            value={signupFields.email}
            changeHandel={(e) => handleSignupChange(e, "email")}
          />

          <Inputfield
            placeholder="enter your Password"
            name="password"
            value={signupFields.password}
            changeHandel={(e) => handleSignupChange(e, "password")}
          />

          {error && <Error>{error}</Error>}
          <SignupButton onClick={submitHandel}> Sign in </SignupButton>
          <Typography> or </Typography>
          <Loginbtn onClick={loginHandel}>
            Already have an account Sign In
          </Loginbtn>
        </Box>
      )}
    </Container>
  );
};

export default Login;
