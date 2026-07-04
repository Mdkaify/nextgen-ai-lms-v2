import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "Mon", score: 60 },
  { week: "Tue", score: 68 },
  { week: "Wed", score: 75 },
  { week: "Thu", score: 82 },
  { week: "Fri", score: 88 },
  { week: "Sat", score: 92 },
  { week: "Sun", score: 95 },
];

export default function ProgressChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        📈 Weekly Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="week" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#4F46E5"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}