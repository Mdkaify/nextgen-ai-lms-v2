import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import CourseCard from "../components/CourseCard";
import Leaderboard from "../components/Leaderboard";

export default function StudentDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Navbar */}
        <Navbar />

        {/* Welcome */}
        <div className="mt-6">
          <h1 className="text-4xl font-bold">
            Welcome, Kaif 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Continue your AI learning journey.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <StatCard
            title="XP Points"
            value="2450"
            color="bg-indigo-100"
          />

          <StatCard
            title="Level"
            value="12"
            color="bg-green-100"
          />

          <StatCard
            title="Courses"
            value="8"
            color="bg-yellow-100"
          />

          <StatCard
            title="Badges"
            value="15"
            color="bg-pink-100"
          />

        </div>

        {/* Continue Learning */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-10">

          <h2 className="text-2xl font-bold mb-6">
            Continue Learning
          </h2>

          <div className="space-y-6">

            <div>
              <div className="flex justify-between mb-2">
                <span>Data Structures</span>
                <span>80%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-indigo-600 h-3 rounded-full w-[80%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>AI Fundamentals</span>
                <span>60%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full w-[60%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>React Development</span>
                <span>90%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-pink-500 h-3 rounded-full w-[90%]"></div>
              </div>
            </div>

          </div>

        </div>

        {/* My Courses */}
        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-6">
            My Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <CourseCard
              title="Artificial Intelligence"
              instructor="Dr. Sharma"
              progress={80}
              color="bg-indigo-600"
            />

            <CourseCard
              title="React Development"
              instructor="Mr. Kaif"
              progress={65}
              color="bg-green-500"
            />

            <CourseCard
              title="Java Programming"
              instructor="Prof. Ali"
              progress={92}
              color="bg-pink-500"
            />

          </div>

        </div>

        {/* AI Recommendations */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-10">

          <h2 className="text-2xl font-bold mb-4">
            🤖 AI Recommendations
          </h2>

          <div className="space-y-4">

            <div className="p-4 bg-indigo-50 rounded-xl border-l-4 border-indigo-600">
              📘 Complete <b>Machine Learning Basics</b> to unlock Advanced AI.
            </div>

            <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-600">
              📝 Attempt today's quiz to earn <b>100 XP</b>.
            </div>

            <div className="p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
              🔥 Maintain your <b>7-day learning streak</b> to unlock a badge.
            </div>

          </div>

        </div>

        {/* Leaderboard + Daily Streak */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <Leaderboard />

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-bold">
              🔥 Daily Streak
            </h2>

            <div className="text-center mt-10">

              <h1 className="text-7xl">🔥</h1>

              <h2 className="text-5xl font-bold mt-4">
                7 Days
              </h2>

              <p className="text-gray-500 mt-3">
                Learn every day and earn bonus XP.
              </p>

              <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition">
                Claim Reward
              </button>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}