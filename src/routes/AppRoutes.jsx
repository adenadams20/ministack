import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/forgotPassword";

export default function AppRoutes() {
  return (
    <Routes>
      

     
       

      {/* ✅ Page de connexion par défaut */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
       {/* ✅ Autres pages */}
      <Route path="/Home" element={<Home />} />
      
      
           
    </Routes>
  );
}
