'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // ---- I DID A BASIC VALIDATION HERE ----
    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    // ---- NO API CALL HERE – ALWAYS SUCCESS ----
    console.log("Fake login →", { email, password, staySignedIn });

    await new Promise((res) => setTimeout(res, 300));

    // ---- REDIRECT TO DASHBOARD ----
    router.push("/dashboard"); 

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg">
        {/* ←←←  IMPORTANT: onSubmit */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white text-gray-800 rounded-lg shadow-xl p-12 space-y-4"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Sign in to your account
          </h2>

          {error && (
            <p className="text-red-600 text-center text-sm -mt-4">{error}</p>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="johndoe@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
              <Link href="/" className="float-right text-sm hover:underline">
                Forgot your password?
              </Link>
            </label>
            <input
              id="password"
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-700 tracking-widest focus:outline-none focus:border-gray-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={staySignedIn}
              onChange={(e) => setStaySignedIn(e.target.checked)}
              className="h-4 w-4 border-2 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm">Stay signed in for a week</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-medium py-3 rounded-md transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gray-900 text-white"
            }`}
          >
            {loading ? "Signing in…" : "Continue"}
          </button>

          <p className="text-center text-sm text-gray-600">
            <Link href="/" className="hover:underline">
              Validate your new account
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}