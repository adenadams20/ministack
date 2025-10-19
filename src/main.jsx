import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { QuestionProvider } from "./context/QuestionContext.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <QuestionProvider>
   
    <App />
   
  </QuestionProvider>
   </BrowserRouter>
  </StrictMode>,
)
