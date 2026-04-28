import { useState } from "react";
import { Link } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      className="w-full max-w-lg rounded-2xl p-10"
      style={{
        background: "rgba(30, 20, 60, 0.7)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
      }}
    >
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl font-bold mb-2">Welcome Back</h2>
        <p className="text-gray-400 text-base">Sign in to your account</p>
      </div>

      {/* GitHub Button */}
      <button
        className="w-full flex items-center justify-center gap-3 rounded-xl py-4 mb-3 font-semibold text-gray-900 text-base transition-opacity hover:opacity-90 active:opacity-80"
        style={{ background: "#ffffff" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        Continue with GitHub
      </button>

      {/* Google Button */}
      <button
        className="w-full flex items-center justify-center gap-3 rounded-xl py-4 mb-6 font-semibold text-white text-base transition-opacity hover:opacity-90 active:opacity-80"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        Continue with Google
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="flex-1 h-px"
          style={{ background: "rgba(255,255,255,0.1)" }}
        />
        <span className="text-gray-500 text-xs">or</span>
        <div
          className="flex-1 h-px"
          style={{ background: "rgba(255,255,255,0.1)" }}
        />
      </div>

      {/* Email Field */}
      <div className="mb-5">
        <label className="block text-white text-base font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-500 outline-none transition-all focus:ring-1"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            caretColor: "#f472b6",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(244,114,182,0.5)";
            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(244,114,182,0.1)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Password Field */}
      <div className="mb-2">
        <label className="block text-white text-base font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-500 outline-none transition-all"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            caretColor: "#f472b6",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(244,114,182,0.5)";
            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(244,114,182,0.1)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end mb-7">
        <Link
          to="/forgot-password"
          className="text-base font-medium transition-opacity hover:opacity-80 hover:underline"
          style={{ color: "#f472b6" }}
        >
          Forgot password?
        </Link>
      </div>

      {/* Sign In Button */}
      <button
        className="w-full flex items-center justify-center gap-2 rounded-xl py-4 font-semibold text-white text-base mb-6 transition-opacity hover:opacity-90 active:opacity-80"
        style={{
          background: "linear-gradient(90deg, #ec4899 0%, #a855f7 100%)",
          boxShadow: "0 4px 20px rgba(236,72,153,0.35)",
        }}
      >
        Sign In
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      {/* Sign Up Link */}
      <p className="text-center text-base text-gray-400">
        Don't have an account?{" "}
        <a
          href="/signup"
          className="font-semibold transition-opacity hover:opacity-80 hover:underline"
          style={{ color: "#f472b6" }}
        >
          Sign up
        </a>
      </p>
    </div>
  );
}
