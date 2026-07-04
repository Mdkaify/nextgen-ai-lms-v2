const badges = [
  {
    title: "Fast Learner",
    icon: "🚀",
  },
  {
    title: "7 Day Streak",
    icon: "🔥",
  },
  {
    title: "Quiz Master",
    icon: "🏆",
  },
  {
    title: "AI Explorer",
    icon: "🤖",
  },
];

export default function AchievementCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        🏅 Achievements
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-indigo-50 rounded-xl p-5 text-center hover:scale-105 transition"
          >
            <h1 className="text-4xl">{badge.icon}</h1>

            <p className="font-semibold mt-3">
              {badge.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}