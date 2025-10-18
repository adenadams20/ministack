import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Email de réinitialisation envoyé avec succès !");
    } catch (err) {
      setError("❌ " + err.message);
    }
  };

  return (
    <div className="flex min-h-full  flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full  sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-black">
          Reset your password
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Enter your email address to receive a password reset link.
        </p>
      </div>

      <div className="mt-10 shadow-2xl p-3  sm:mx-auto sm:w-full sm:max-w-sm">
        {message && <p className="text-green-500 text-sm mb-3">{message}</p>}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleResetPassword} className="space-y-6">
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
              className="block w-full rounded-md border mt-1 px-3 py-1.5 text-black placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-500 px-3 py-2 text-white font-semibold hover:bg-indigo-400"
          >
            Send reset link
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          <Link to="/" className="font-semibold text-indigo-400 hover:text-indigo-300">
            ← Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
