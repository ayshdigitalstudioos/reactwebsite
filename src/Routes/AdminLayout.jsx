import React from "react";
import Footer from "../Pages/Components/Footer";
import Navbar from "../Pages/Components/Navbar";
import AdminRouter from "./AdminRouter";

const AdminLayout = () => {
  return (
    <div>
      <Navbar />
      <AdminRouter />
      <Footer/>
    </div>
  );
};

export default AdminLayout;
