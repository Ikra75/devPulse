
export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Get started with your productivity journey.",
      features: [
        "Basic activity tracking",
        "Daily productivity overview",
        "GitHub profile connection",
        "Basic dashboard",
      ],
      button: "Get Started",
    },
    {
      name: "Pro",
      price: "$9",
      description: "For developers who want deeper insights.",
      features: [
        "Everything in Free",
        "Advanced analytics",
        "Detailed productivity reports",
        "Achievement tracking",
      ],
      button: "Coming Soon",
      popular: true,
    },
    {
      name: "Team",
      price: "Custom",
      description: "For teams focused on better productivity.",
      features: [
        "Team productivity insights",
        "Shared progress overview",
        "Team analytics",
        "Priority support",
      ],
      button: "Coming Soon",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070B18] px-5 pb-20 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-purple-400">
            Simple Pricing
          </p>

          <h1 className="text-4xl font-bold sm:text-6xl">
            Plans for every developer
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Build better habits, understand your coding activity, and make
            every development session count.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 ${
                plan.popular
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.popular && (
                <span className="mb-4 inline-block rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300">
                  Most Popular
                </span>
              )}

              <h2 className="text-2xl font-bold">{plan.name}</h2>

              <p className="mt-3 min-h-12 text-sm text-gray-400">
                {plan.description}
              </p>

              <div className="my-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price.startsWith("$") && (
                  <span className="text-gray-400"> / month</span>
                )}
              </div>

              <button
                type="button"
                disabled={plan.button === "Coming Soon"}
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3 font-semibold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {plan.button}
              </button>

              <ul className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <span className="text-purple-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Pricing is a demo. Paid plans and payments are not active yet.
        </p>
      </section>
    </main>
  );
}
