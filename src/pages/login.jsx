import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, signInWithGoogle, signInWithGithub } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      setError("");
      navigate("/home");
    } catch (err) {
      setError(err.message);
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

  // 👇 Nouveau bouton invité
  const handleGuestLogin = () => {
    navigate("/home");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 bg-gray-200 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-black">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-xl/30 p-3 bg-white">
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full rounded-md border px-3 py-1.5 text-black placeholder:text-black"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <Link to="/forgot-password" className="text-sm font-semibold text-black hover:text-indigo-300">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full rounded-md text-black border px-3 py-1.5 mt-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-500 px-3 py-2 text-white font-semibold hover:bg-indigo-400"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={handleGoogleLogin}
            className="w-full rounded-md bg-black px-3 py-2 text-white font-semibold hover:bg-white hover:text-black"
          >
            Sign in with Google
          </button>

          <button
            onClick={handleGithubLogin}
            className="w-full rounded-md bg-gray-800 px-3 py-2 text-white font-semibold hover:bg-gray-700"
          >
            Sign in with GitHub
          </button>

          {/* 👇 Bouton invité ajouté ici */}
          <button
            onClick={handleGuestLogin}
            className="w-full rounded-md bg-green-500 px-3 py-2 text-white font-semibold hover:bg-green-400"
          >
            Se connecter en tant qu’invité
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-indigo-400 hover:text-indigo-300">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
