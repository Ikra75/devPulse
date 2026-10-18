
import { ArrowUpRight, Code2, Target } from "lucide-react";

const articles = [
  {
    category: "Productivity",
    title: "How to Build a Consistent Coding Habit",
    description:
      "Learn how small daily coding sessions can help you build consistency without burning out.",
    readTime: "5 min read",
    icon: Target,
  },
  {
    category: "Developer Tools",
    title: "Why Developers Should Track Their Progress",
    description:
      "Understand how activity insights can help you identify patterns and improve your workflow.",
    readTime: "4 min read",
    icon: Code2,
  },
  {
    category: "GitHub",
    title: "Making Your GitHub Profile More Meaningful",
    description:
      "Explore practical ways to organize your projects and showcase your development journey.",
    readTime: "6 min read",
    icon: Github,
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#070B18] px-5 pb-20 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-purple-400">
            DevPulse Blog
          </p>

          <h1 className="text-4xl font-bold sm:text-6xl">
            Ideas for better developers
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Thoughts, guides, and practical tips for coding productivity,
            developer tools, and career growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const Icon = article.icon;

            return (
              <article
                key={article.title}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                  <Icon size={24} />
                </div>

                <p className="text-sm font-semibold text-purple-400">
                  {article.category}
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-snug">
                  {article.title}
                </h2>

                <p className="mt-4 flex-1 leading-7 text-gray-400">
                  {article.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-gray-500">
                    {article.readTime}
                  </span>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400">
                    Article preview
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          These are preview cards. Individual article pages are not implemented yet.
        </p>
      </section>
    </main>
  );
}
