import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./Register";
import Profile from "./Profile";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
