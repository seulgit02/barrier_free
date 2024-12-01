import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import RegisterAccount from "./pages/RegisterAccount.js";
import FacilityManagement from "./pages/FacilityManagement.js";
import ServiceManagement from "./pages/ServiceManagement.js";
import SearchFacility from "./pages/SearchFacility.js";
import SupportCenterSearch from "./pages/SupportCenterSearch.js";
import SupportCenterDetail from "./pages/SupportCenterDetail.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterAccount />} />
        <Route path="/facilitymanagement" element={<FacilityManagement />} />
        <Route path="/servicemanagement" element={<ServiceManagement />} />
        <Route path="/searchfacility" element={<SearchFacility />} />
        <Route path="/searchsupportcenter" element={<SupportCenterSearch />} />
        <Route path="/supportcenter/:id" element={<SupportCenterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
