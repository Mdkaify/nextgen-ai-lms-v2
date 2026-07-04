export default function CourseCard({
  title,
  instructor,
  progress,
  color,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
      <div
        className={`h-2 rounded-full ${color}`}
      ></div>

      <h2 className="text-xl font-bold mt-4">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        {instructor}
      </p>

      <div className="mt-5">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="bg-gray-200 rounded-full h-2 mt-2">
          <div
            className={`${color} h-2 rounded-full`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}