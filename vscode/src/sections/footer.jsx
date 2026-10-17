import { Code2 } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div className="flex items-center gap-2">

          <Code2 className="text-violet-500" size={28} />

          <h2 className="text-2xl font-bold text-white">
            Dev<span className="text-violet-500">Pulse</span>
          </h2>

        </div>

        <div className="flex gap-8 text-gray-400 mt-6 md:mt-0">

          <a href="#" className="hover:text-white">
            Features
          </a>

          <a href="#" className="hover:text-white">
            Pricing
          </a>

          <a href="#" className="hover:text-white">
            Docs
          </a>

          <a href="#" className="hover:text-white">
            Contact
          </a>

        </div>

      </div>

      <p className="text-center text-gray-500 mt-8">
        © 2026 DevPulse. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;