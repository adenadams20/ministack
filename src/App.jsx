import React, { useState } from "react";
import Login from "./pages/login";
import CadQuestionFirebase from "./components/QuestionCard";
import QuestionListeFirebase from "./components/QuestonList";
import SearchBar from "./components/SearchBar";

function App() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <p className="mb-4 text-gray-700">Connecté en tant que <b>{user.email}</b></p>
          <CadQuestionFirebase />
          <SearchBar search={search} setSearch={setSearch} />
          <QuestionListeFirebase search={search} />
        </>
      )}
    </div>
  );
}

export default App;
