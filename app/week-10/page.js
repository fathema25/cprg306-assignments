"use client";

import { useState } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState(""); // State to hold login errors

  const handleLogin = async () => {
    try {
      setError("");
      await gitHubSignIn();
    } catch (error) {

      setError("Failed to log in with GitHub. Please try again.");
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="p-10 flex flex-col items-start gap-4">
      <h1 className="text-4xl font-bold">Shopping List App</h1>

      {error && <p className="text-red-500 font-bold">{error}</p>}

      {user ? (
        <div className="flex flex-col gap-2">
          <p className="text-lg">
            Welcome, {user.displayName} ({user.email})
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
            <Link
              href="/week-10/shopping-list"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Go to Shopping List
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={handleLogin}
            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded flex items-center gap-2"
          >
            Login with GitHub
          </button>
        </div>
      )}
    </main>
  );
}