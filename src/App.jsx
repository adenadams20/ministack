import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import QuestionForm from "./components/QuestionForm";
function App() {
  

  return (
   <div>
  
   <Routes>
   <Route path="/" element={ <Home/>} />
   < Route path="/questionfrom"element={ <QuestionForm /> } />
   </Routes>
   </div>
  )
}

export default App;
