import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="bg-[#0B1120] min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className="bg-violet-500/10 text-violet-400 px-4 py-2 rounded-full text-sm">
            🚀 Track Your Coding Journey
          </span>

         <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6 leading-tight">
  Code Smarter.
  <br />
  <span
    className="
      bg-linear-to-r
      from-violet-400
      via-fuchsia-500
      to-cyan-400
      bg-clip-text
      text-transparent
    "
  >
    Track Everything.
  </span>
</h1>

          <p className="text-gray-400 text-lg mt-6 max-w-xl">
            Monitor your coding activity directly from VS Code.
            Analyze productivity, build streaks, and improve your
            programming habits with beautiful analytics.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-linear-to-r
    from-violet-600
    to-fuchsia-600
    hover:from-violet-500
    hover:to-fuchsia-500
    text-white
    px-6
    py-3
    rounded-xl
    flex
    items-center
    gap-2
    shadow-lg
    shadow-violet-500/30
    transition-all
    duration-300
    hover:scale-105">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className=" px-6
  py-3
  rounded-xl
  text-white
  border
  border-white/20
  bg-white/5
  backdrop-blur-md
  hover:bg-white/10
  hover:border-violet-500
  hover:text-violet-300
  transition-all
  duration-300
  shadow-lg
  hover:shadow-violet-500/20
  hover:scale-105">
              Watch Demo
            </button>
          </div>

          <div className="flex gap-10 mt-10">
            <div>
              <h2 className="text-3xl font-bold text-white">50K+</h2>
              <p className="text-gray-400">Developers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">2M+</h2>
              <p className="text-gray-400">Hours Tracked</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">99%</h2>
              <p className="text-gray-400">Accuracy</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl">

          <div className="flex justify-between mb-6">
            <h3 className="text-white text-xl font-semibold">
              Dashboard Preview
            </h3>

            <span className="text-green-400">
              ● Live
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-slate-800 rounded-xl p-5">
              <p className="text-gray-400">Today's Coding</p>
              <h2 className="text-3xl font-bold text-white mt-2">
                4h 20m
              </h2>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <p className="text-gray-400">Current Streak</p>
              <h2 className="text-3xl font-bold text-violet-400 mt-2">
                🔥 18 Days
              </h2>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <p className="text-gray-400">Focus Score</p>
              <h2 className="text-3xl font-bold text-green-400 mt-2">
                92%
              </h2>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <p className="text-gray-400">Files Edited</p>
              <h2 className="text-3xl font-bold text-blue-400 mt-2">
                248
              </h2>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;