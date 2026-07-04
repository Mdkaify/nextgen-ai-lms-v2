import {
  LayoutDashboard,
  BookOpen,
  Brain,
  FileQuestion,
  Trophy,
  Calendar,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BookOpen, label: "My Courses" },
  { icon: Brain, label: "AI Tutor" },
  { icon: FileQuestion, label: "Quiz" },
  { icon: Trophy, label: "Leaderboard" },
  { icon: Calendar, label: "Calendar" },
  { icon: Bell, label: "Notifications" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-indigo-700 text-white flex flex-col">
      <div className="p-6 border-b border-indigo-500">
        <h1 className="text-3xl font-bold">🎓 NextGen LMS</h1>
        <p className="text-indigo-200 text-sm mt-2">
          AI Powered Learning
        </p>
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-600 transition mb-2"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-indigo-500">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}