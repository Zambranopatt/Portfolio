import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
