import React from "react";
import Home from "../container/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moviedetail from "../components/movieDetail";

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/MovieDetail/:id" element={<Moviedetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
