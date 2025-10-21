import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/forgotPassword";
import UserProfile from "../pages/UserProfile";
import QuestionForm from "../components/QuestionForm";
import { QuestionProvider } from "../context/QuestionContext";

export default function AppRoutes() {
  return (
    // ✅ Le provider englobe toutes les routes (pas à l’intérieur)
    <QuestionProvider>
      <Routes>
        {/* ✅ Page de connexion par défaut */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ✅ Autres pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/QuestionForm" element={<QuestionForm />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        
      </Routes>
    </QuestionProvider>
  );
}
