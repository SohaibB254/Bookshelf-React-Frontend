import React from "react";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router";
import AdminDbNav from "./AdminDbNav";
import ManageBooks from "./pages/ManageBooks";
import Footer from "../../components/Footer";

const AdminPanel = () => {
  return (
    <>
      <div className="flex">
        <AdminDbNav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<ManageBooks />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default AdminPanel;
