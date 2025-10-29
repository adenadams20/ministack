import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/forgotPassword";
import UserProfile from "../pages/UserProfile";
import QuestionForm from "../components/QuestionForm";
import { QuestionProvider } from "../context/QuestionContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import AnswerCard from "../components/AnswerCard";
import { useLocation } from "react-router-dom";

export default function AppRoutes() {
  const location = useLocation();

  const hideLayout = ["/", "/register", "/forgot-password"].includes(location.pathname);

  
  return (
    <QuestionProvider>
      {/* Navbar toujours visible */}
     {!hideLayout && <Navbar />}
      {!hideLayout && <Sidebar />}

      <Routes>
        {/* Routes d’authentification */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Routes principales */}
        <Route path="/Home" element={<Home />} />
        
        <Route path="/questionform" element={<QuestionForm />} />
        <Route path="/answercard" element={<AnswerCard />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>

      {/* Footer toujours visible */}
      {!hideLayout && <Footer />}
    </QuestionProvider>
  );
}
