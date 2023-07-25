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
import UpdateBlog from "./Pages/UpdateBlog/UpdateBlog";
import Footer from "./Component/Footer/Footer";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import {Provider} from "react-redux";
import {store} from "./Store/store"
import BlogPage from "./Pages/BlogPage/BlogPage";

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("accessToken");
  if (isAuthenticated) {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
};
const App = () => {
  return (
    <>
    <Provider store={store}>
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
            <Route path="/details/:id" element={<PrivateRoute />}>
              <Route path="/details/:id" element={<DetailsView />} />
            </Route>
            <Route path="/update-blog/:id" element={<PrivateRoute />}>
              <Route path="/update-blog/:id" element={<UpdateBlog />} />
            </Route>
            <Route path="/about" element={<PrivateRoute />}>
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="/contact" element={<PrivateRoute />}>
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="/blogpage" element={<PrivateRoute />}>
              <Route path="/blogpage" element={<BlogPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        {/* <Login/> */}
      </DataProvider>
      </Provider>
    </>
  );
};

export default App;
