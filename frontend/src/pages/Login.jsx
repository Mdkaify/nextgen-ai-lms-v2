import { GraduationCap } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="bg-indigo-600 text-white p-10 flex flex-col justify-center">
          <GraduationCap size={60} />
          <h1 className="text-4xl font-bold mt-6">
            NextGen LMS
          </h1>

          <p className="mt-4 text-indigo-100">
            AI Powered Learning Platform with
            Gamification & Personalized Learning.
          </p>

          <div className="mt-10">
            <div className="bg-white/20 rounded-xl p-4 mb-4">
              🎯 AI Personalized Learning
            </div>

            <div className="bg-white/20 rounded-xl p-4 mb-4">
              🏆 XP • Badges • Leaderboard
            </div>

            <div className="bg-white/20 rounded-xl p-4">
              🤖 AI Tutor 24×7
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 flex items-center">
          <div className="w-full">

            <h2 className="text-3xl font-bold text-gray-800">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue your learning journey.
            </p>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full mt-8 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mt-4 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-xl font-semibold transition"
            >
              Login
            </button>

            <p className="text-center mt-6 text-gray-500">
              Don't have an account?
              <span className="text-indigo-600 cursor-pointer ml-1">
                Register
              </span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}