import React from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
