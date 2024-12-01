import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import RegisterAccount from "./pages/RegisterAccount.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
