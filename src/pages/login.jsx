import React, { useState } from "react";
import { auth } from "../services/firebaseConfig.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const userCredential = isSignup
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 border p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        {isSignup ? "Créer un compte" : "Connexion"}
      </h2>
      <form onSubmit={handleAuth} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          {isSignup ? "S’inscrire" : "Se connecter"}
        </button>
      </form>
      <p className="mt-3 text-center text-sm">
        {isSignup ? "Déjà un compte ?" : "Pas de compte ?"}{" "}
        <button onClick={() => setIsSignup(!isSignup)} className="text-blue-600 underline">
          {isSignup ? "Se connecter" : "Créer un compte"}
        </button>
      </p>
    </div>
  );
};

export default Login;
