import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiBarChart2,
  FiFolder,
  FiTarget,
  FiZap,
  FiCpu,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
    { name: "Analytics", icon: <FiBarChart2 />, path: "/analytics" },
    { name: "Projects", icon: <FiFolder />, path: "/projects" },
    { name: "Goals", icon: <FiTarget />, path: "/goals" },
    { name: "Streaks", icon: <FiZap />, path: "/streaks" },
    { name: "AI Insights", icon: <FiCpu />, path: "/ai-insights" },
    { name: "Settings", icon: <FiSettings />, path: "/settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-[#0B1120] border-r border-slate-800 flex flex-col justify-between p-5">

      <div>
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white mb-10">
          <span className="text-violet-500">&lt;/&gt;</span> DevPulse
        </h1>

        {/* Menu */}
        <div className="space-y-2">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-violet-700 text-white"
                    : "text-gray-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Logout */}
      <button className="flex items-center gap-3 text-gray-400 hover:text-white transition">
        <FiLogOut className="text-xl" />
        <span>Log out</span>
      </button>

    </aside>
  );
}