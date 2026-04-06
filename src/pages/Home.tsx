import React from "react";
import Login from "../components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "../components/Signup";

const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center px-6 py-10"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, #6b21a8 0%, #4c1d95 20%, #2d1b69 40%, #1a0f3c 60%, #0f0a1e 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)",
          transform: "translateY(40%)",
        }}
      />

      {/* Main layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Panel */}
        <div className="flex-1 text-white max-w-xl">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-base"
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)",
              }}
            >
              <span style={{ fontSize: "18px" }}>&lt;/&gt;</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">DevTinder</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-3 tracking-tight">
            Swipe Right on
          </h1>
          <h1
            className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
            style={{
              background: "linear-gradient(90deg, #f472b6 0%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Amazing Developers
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-sm">
            Connect, collaborate, and build something incredible together
          </p>

          {/* Stats */}
          <div className="flex gap-10 mb-10">
            <div>
              <p
                className="text-4xl font-extrabold"
                style={{
                  background: "linear-gradient(90deg, #f472b6, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                15K+
              </p>
              <p className="text-gray-400 text-sm mt-1">Active Developers</p>
            </div>
            <div>
              <p
                className="text-4xl font-extrabold"
                style={{
                  background: "linear-gradient(90deg, #c084fc, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                8K+
              </p>
              <p className="text-gray-400 text-sm mt-1">Success Stories</p>
            </div>
            <div>
              <p
                className="text-4xl font-extrabold"
                style={{
                  background: "linear-gradient(90deg, #818cf8, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                50+
              </p>
              <p className="text-gray-400 text-sm mt-1">Tech Stacks</p>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-300 text-base">
              <span
                className="font-mono font-bold"
                style={{ color: "#f472b6", fontSize: "16px" }}
              >
                &gt;_
              </span>
              Match based on tech stack and interests
            </li>
            <li className="flex items-center gap-3 text-gray-300 text-base">
              {/* GitHub icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f472b6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub profile integration
            </li>
            <li className="flex items-center gap-3 text-gray-300 text-base">
              {/* Heart icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f472b6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Find collaborators or mentors
            </li>
          </ul>
        </div>

        {/* Right Panel — Login Card */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
