
import { Code2, BarChart3, Target, ExternalLink } from "lucide-react";

const sections = [
  {
    icon: Code2,
    title: "Getting Started",
    description:
      "Set up DevPulse and explore the tools designed to help you understand your coding habits.",
    steps: [
      "Open the DevPulse dashboard.",
      "Connect your GitHub profile if the feature is configured.",
      "Explore your activity and productivity overview.",
    ],
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description:
      "Use GitHub-related insights to understand your development consistency.",
    steps: [
      "Open the GitHub section in your dashboard.",
      "Connect or configure your GitHub account.",
      "Review your contribution activity when available.",
    ],
  },
  {
    icon: BarChart3,
    title: "Activity Analytics",
    description:
      "Review your coding activity and use the available analytics to monitor progress.",
    steps: [
      "Open the analytics dashboard.",
      "Choose an available time period.",
      "Review your activity trends and reports.",
    ],
  },
  {
    icon: Target,
    title: "Goals and Achievements",
    description:
      "Use goals to stay consistent and track your progress over time.",
    steps: [
      "Choose a realistic productivity goal.",
      "Check your progress regularly.",
      "Adjust your goal as your routine changes.",
    ],
  },
];

export default function Docs() {
  return (
    <main className="min-h-screen bg-[#070B18] px-5 pb-20 pt-32 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-purple-400">
            Documentation
          </p>

          <h1 className="text-4xl font-bold sm:text-6xl">
            Learn how to use DevPulse
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Find the basics for getting started, exploring analytics, and
            building a more consistent development routine.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <article
                key={section.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-purple-500/15 p-3 text-purple-400">
                    <Icon size={25} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-purple-400">
                      GUIDE {String(index + 1).padStart(2, "0")}
                    </p>

                    <h2 className="mt-1 text-2xl font-bold">
                      {section.title}
                    </h2>

                    <p className="mt-3 leading-7 text-gray-400">
                      {section.description}
                    </p>

                    <ol className="mt-5 space-y-3">
                      {section.steps.map((step, stepIndex) => (
                        <li
                          key={step}
                          className="flex gap-3 text-sm text-gray-300"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">
                            {stepIndex + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
          <h2 className="text-xl font-bold">Need help?</h2>
          <p className="mt-2 text-gray-400">
            If a feature is not available in your current build, check the
            project configuration or visit the project repository.
          </p>

          <a
            href="https://github.com/Ikra75/devPulse"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-purple-400 hover:text-purple-300"
          >
           <ExternalLink size={18} />
            View GitHub Repository
          </a>
        </div>
      </section>
    </main>
  );
}
