import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Globals/Header/Header";
import Footer from "./components/Globals/Footer/Footer";
import Home from "./components/HomePage/HomePage";
import './App.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
