import React from "react";
import Home from "../container/home";
import Login from "../components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moviedetail from "../components/movieDetail";
import PrivateRoute from "../routes/private";

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<PrivateRoute><Home /></PrivateRoute>}></Route>
          <Route path="/MovieDetail/:id" element={<PrivateRoute><Moviedetail /></PrivateRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
