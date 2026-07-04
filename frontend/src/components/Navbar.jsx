import { Bell, Search, Moon, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex justify-between items-center mb-8">
      <div className="flex items-center gap-4">
        <Search className="text-gray-500" />
        <input
          type="text"
          placeholder="Search courses..."
          className="outline-none w-80"
        />
      </div>

      <div className="flex items-center gap-6">
        <Moon className="cursor-pointer text-gray-600" />
        <Bell className="cursor-pointer text-gray-600" />
        <UserCircle size={36} className="text-indigo-600" />
      </div>
    </div>
  );
}