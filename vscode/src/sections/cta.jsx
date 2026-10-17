function CTA() {
  return (
    <section className="bg-[#0B1120] py-24">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-violet-600 rounded-3xl p-14 text-center">

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
  Start Tracking Your Coding Today
</h2>

          <p className="text-violet-100 mt-6 text-lg">
            Join thousands of developers improving their productivity with DevPulse.
          </p>

          <button className=" mt-10
  bg-linear-to-r
  from-violet-600
  to-fuchsia-600
  hover:from-violet-500
  hover:to-fuchsia-500
  text-white
  px-8
  py-4
  rounded-xl
  font-semibold
  shadow-lg
  shadow-violet-500/30
  hover:shadow-violet-500/50
  hover:scale-105
  transition-all
  duration-300">
            Get Started Free
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;