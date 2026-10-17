import { Code2 } from "lucide-react";
import{Link} from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0B1120]/80 backdrop-blur-lg border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Code2 className="text-violet-500" size={30} />
          <h1 className="text-2xl font-bold text-white">
            Dev<span className="text-violet-500">Pulse</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          <Link to="/features" className="hover:text-violet-400 transition">
            Features
          </Link>

          <Link to="how-it-works" className="hover:text-violet-400 transition">
            How it Works
          </Link>

          <Link to="/pricing" className="hover:text-violet-400 transition">
            Pricing
          </Link>

          <Link to="/docs" className="hover:text-violet-400 transition">
            Docs
          </Link>

          <Link to="/blog" className="hover:text-violet-400 transition">
            Blog
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/login"
          className="text-gray-300 hover:text-white transition">
            Log In
          </Link>

          <Link to ="/get-started"
          className="
          bg-[linear-gradient(to_right,#7c3aed,#d946ef)]
           px-5
           py-2
          rounded-xl
           text-white
            shadow-lg
            shadow-violet-500/30
            transition-all
            duration-300
  ">
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;