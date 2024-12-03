import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
type IProp = {
  children?: React.ReactNode;
};
const Layout = ({ children }: IProp) => {
  return (
    <>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
