import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import QuestionForm from "./components/QuestionForm";
import { QuestionProvider } from "./context/QuestionContext";
function App() {
  

  return (

      <QuestionProvider>

   <Routes>
   <Route path="/" element={ <Home/>} />
   < Route path="/questionfrom"element={ <QuestionForm /> } />
   </Routes>
  
     </QuestionProvider>

  )
}

export default App;
