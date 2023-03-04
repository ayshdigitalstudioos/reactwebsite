import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import CareersPage from "../Pages/CareersPage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import SelectProject from "../Pages/SelectProject";
import ServicePage from "../Pages/ServicePage";
import TeamsPage from "../Pages/TeamsPage";
import WorkPage from "../Pages/WorkPage";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/selectproject" element={<SelectProject />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/ourteams" element={<TeamsPage />} />
      <Route path="/ourworks" element={<WorkPage />} />
    </Routes>
  );
};

export default AdminRouter;
