import StepCard from "./StepCard";

function HowItWorks() {
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
  How It Works
</h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get started in just four simple steps and begin tracking your coding journey.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <StepCard
            number="1"
            title="Create an Account"
            description="Sign up and create your DevPulse profile in less than a minute."
          />

          <StepCard
            number="2"
            title="Install Extension"
            description="Install the DevPulse VS Code extension and connect it to your account."
          />

          <StepCard
            number="3"
            title="Start Coding"
            description="Continue coding as usual while DevPulse securely tracks your activity."
          />

          <StepCard
            number="4"
            title="View Insights"
            description="Open your dashboard to explore analytics, streaks, and AI-powered recommendations."
          />

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;