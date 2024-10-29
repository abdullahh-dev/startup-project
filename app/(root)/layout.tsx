import React from "react";
import Navbar from "../components/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default RootLayout;
