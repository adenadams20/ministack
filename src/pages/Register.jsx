import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithGoogle, signInWithGithub } from "../services/authService";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("❌ Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("✅ Compte créé avec succès !");
      navigate("/home");
    } catch (err) {
      setError("❌ " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithGithub();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight ">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full bg-blue-950 p-2 shadow-xl/30 py-4 sm:max-w-sm">
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {message && <p className="text-green-500 text-sm mb-2">{message}</p>}

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium  ">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full border-2 rounded-md  px-3 py-1.5 bg-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium ">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full border-2 rounded-md bg- px-3 py-1.5  placeholder:text-gray-500 mt-2 bg-white"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium  ">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="block w-full border-2 rounded-md 0 px-3 py-1.5 bg-white  placeholder:text-gray-500 mt-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md px-3 py-2  font-semibold "
          >
            Créer un compte
          </button>
        </form>

        

        <p className="mt-6 text-center text-sm ">
          Already have an account?{" "}
          <Link to="/" className="font-semibold  hover:text-indigo-300">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
