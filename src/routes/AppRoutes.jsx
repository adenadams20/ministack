import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/forgotPassword";
import UserProfile from "../pages/UserProfile";

export default function AppRoutes() {
  return (
    <Routes>
      

     
       

      {/* ✅ Page de connexion par défaut */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/user-profile" element={<UserProfile />} />
       {/* ✅ Autres pages */}
      <Route path="/Home" element={<Home />} />
            

           
    </Routes>
  );
}
