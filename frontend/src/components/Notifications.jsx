const notifications = [
  "📚 New AI course available",
  "📝 Quiz starts at 2 PM",
  "🏆 You earned 100 XP",
  "📅 Assignment due tomorrow",
];

export default function Notifications() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-5">
        🔔 Notifications
      </h2>

      <div className="space-y-3">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-4"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}