import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

export default function StudentDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">

        {/* Navbar */}
        <Navbar />

        {/* Welcome */}
        <h1 className="text-4xl font-bold mt-6">
          Welcome, Kaif 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Continue your AI learning journey.
        </p>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

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
        <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">
            Continue Learning
          </h2>

          <div className="space-y-5">

            <div>
              <div className="flex justify-between">
                <span>Data Structures</span>
                <span>80%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div className="bg-indigo-600 h-3 rounded-full w-[80%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>AI Fundamentals</span>
                <span>60%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div className="bg-green-500 h-3 rounded-full w-[60%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>React Development</span>
                <span>90%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div className="bg-pink-500 h-3 rounded-full w-[90%]"></div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}