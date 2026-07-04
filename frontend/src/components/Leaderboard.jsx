const students = [
  { rank: 1, name: "Kaif", xp: 2450 },
  { rank: 2, name: "Ayesha", xp: 2300 },
  { rank: 3, name: "Ali", xp: 2150 },
  { rank: 4, name: "Sara", xp: 1980 },
];

export default function Leaderboard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-5">🏆 Leaderboard</h2>

      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.rank}
            className="flex justify-between items-center bg-gray-50 rounded-xl p-4 hover:bg-indigo-50 transition"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">
                #{student.rank}
              </span>

              <div>
                <h3 className="font-semibold">
                  {student.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Student
                </p>
              </div>
            </div>

            <span className="font-bold text-indigo-600">
              {student.xp} XP
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}