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
import DetailsView from "./Pages/Details/DetailsView";
import PageNotFound from "./Component/PageNotFound/PageNotFound";

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
            </Route>
            <Route path="/createpost" element={<PrivateRoute />}>
              <Route path="/createpost" element={<CreatePost />} />
            </Route>
            <Route path="/details/:id" element={<PrivateRoute />}>
              <Route path="/details/:id" element={<DetailsView />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        {/* <Login/> */}
      </DataProvider>
    </>
  );
};

export default App;
