import {
  Clock3,
  Flame,
  Target,
  FolderOpen
} from "lucide-react";

import StatCard from "./statcard";

function DashboardPreview() {
  return (
    <section className="bg-[#0B1120] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

         <h2
  className="
    text-5xl
    font-bold
    text-center
    bg-linear-to-r
    from-white
    via-violet-300
    to-fuchsia-400
    bg-clip-text
    text-transparent
  "
>
  Dashboard Preview
</h2>

          <p className="text-gray-400 mt-4">
            Monitor your coding journey in real time.
          </p>

        </div>
        

        <div className="animate-floating bg-white/5 backdrop-blur-xl rounded-3xl p-8 mt-16">

          {/* Header */}

          <div className="flex justify-between items-center mb-8">

            <h3 className="text-white text-2xl font-semibold">
              Overview
            </h3>

            <span className="text-green-400">
              ● Live
            </span>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <StatCard
              title="Today's Coding"
              value="4h 20m"
              color="text-white"
            />

            <StatCard
              title="Current Streak"
              value="🔥 18 Days"
              color="text-orange-400"
            />

            <StatCard
              title="Focus Score"
              value="92%"
              color="text-green-400"
            />

            <StatCard
              title="Files Edited"
              value="248"
              color="text-sky-400"
            />

          </div>

          {/* Heatmap */}

          <div className="mt-12">

            <h4 className="text-white mb-4">
              Activity Heatmap
            </h4>

            <div className="grid grid-cols-14 gap-2">

              {Array.from({ length: 84 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-4 w-4 rounded ${
                    Math.random() > 0.5
                      ? "bg-violet-500"
                      : "bg-slate-700"
                  }`}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;