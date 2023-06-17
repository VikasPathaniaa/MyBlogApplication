import React, { useEffect, useState } from "react";
import Login from "./Component/Account/Login";
import DataProvider from "./Context/DataProvider";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Component/Header/Header";
import CreatePost from "./Pages/CreatePost/CreatePost";

const PrivateRoute = () => {

  const isAuthenticated = localStorage.getItem("accessToken");
  if (isAuthenticated) {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
};
const App = () => {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/createpost" element={<CreatePost />} />
            </Route>
          </Routes>
        </BrowserRouter>

        {/* <Login/> */}
      </DataProvider>
    </>
  );
};

export default App;
