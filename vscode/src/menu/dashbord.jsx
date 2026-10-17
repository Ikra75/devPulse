import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="flex bg-[#070B18] min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 text-white">
  <h1 className="text-3xl font-bold">Dashboard</h1>

  <p className="text-gray-400 mt-1 mb-8">
    Welcome back, Iqra! 👋
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    <div className="bg-[#111827] rounded-2xl p-6">
      <p className="text-gray-400">Total Hours</p>
      <h2 className="text-3xl font-bold mt-2">120h 45m</h2>
    </div>

    <div className="bg-[#111827] rounded-2xl p-6">
      <p className="text-gray-400">Current Streak</p>
      <h2 className="text-3xl font-bold mt-2">15 Days 🔥</h2>
    </div>

    <div className="bg-[#111827] rounded-2xl p-6">
      <p className="text-gray-400">Focus Score</p>
      <h2 className="text-3xl font-bold mt-2">89%</h2>
    </div>

    <div className="bg-[#111827] rounded-2xl p-6">
      <p className="text-gray-400">Files Edited</p>
      <h2 className="text-3xl font-bold mt-2">248</h2>
    </div>
  </div>
</main>
    </div>
  );
}