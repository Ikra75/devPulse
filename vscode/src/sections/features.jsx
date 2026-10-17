import { Activity, Brain, Flame } from "lucide-react";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="bg-[#0B1120] py-24">
      <div className="max-w-7xl mx-auto px-6">

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
  Powerful Features
</h2>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          Everything you need to track your coding journey and improve your productivity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          <FeatureCard
            icon={<Activity size={28} />}
            title="Real-Time Tracking"
            description="Automatically monitor your coding activity directly from VS Code."
          />

          <FeatureCard
            icon={<Brain size={28} />}
            title="AI Insights"
            description="Receive personalized suggestions to improve your coding habits."
          />

          <FeatureCard
            icon={<Flame size={28} />}
            title="Coding Streaks"
            description="Build daily coding streaks and stay consistent with your goals."
          />

        </div>

      </div>
    </section>
  );
}

export default Features;