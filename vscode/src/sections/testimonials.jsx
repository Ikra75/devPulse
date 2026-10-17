import TestimonialCard from "./TestimonialCard";

function Testimonials() {
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
  Loved by Developers
</h2>

          <p className="text-gray-400 mt-4">
            See what developers are saying about DevPulse.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          <TestimonialCard
            name="Alex"
            role="Frontend Developer"
            review="DevPulse completely changed how I track my coding habits."
          />

          <TestimonialCard
            name="Sarah"
            role="Software Engineer"
            review="The analytics dashboard is beautiful and helps me stay consistent."
          />

          <TestimonialCard
            name="John"
            role="Full Stack Developer"
            review="The VS Code integration is seamless and incredibly useful."
          />

        </div>

      </div>

    </section>
  );
}

export default Testimonials;