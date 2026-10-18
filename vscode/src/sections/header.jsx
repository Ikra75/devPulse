
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Features", to: "/#features" },
    { name: "How it Works", to: "/#how-it-works" },
    { name: "Pricing", to: "/pricing" },
    { name: "Docs", to: "/docs" },
    { name: "Blog", to: "/blog" },
  ];

  const handleNavClick = (to) => {
    closeMenu();

    if (to.startsWith("/#")) {
      const sectionId = to.split("#")[1];

      if (location.pathname === "/") {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-[#0B1120]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <Code2 className="text-violet-500" size={30} />
          <span className="text-2xl font-bold text-white">
            Dev<span className="text-violet-500">Pulse</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to.startsWith("/#") ? "/" : item.to}
              onClick={() => handleNavClick(item.to)}
              className="whitespace-nowrap text-sm text-gray-300 transition hover:text-violet-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/login"
            className="text-gray-300 transition hover:text-white"
          >
            Log In
          </Link>

          <Link
            to="/get-started"
            className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2 text-white shadow-lg shadow-violet-500/30 transition hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex size-10 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-slate-800 bg-[#0B1120] px-6 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to.startsWith("/#") ? "/" : item.to}
                onClick={() => handleNavClick(item.to)}
                className="text-gray-300 transition hover:text-violet-400"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-wrap items-center gap-4 border-t border-slate-800 pt-4">
              <Link
                to="/login"
                onClick={closeMenu}
                className="text-gray-300 hover:text-white"
              >
                Log In
              </Link>

              <Link
                to="/get-started"
                onClick={closeMenu}
                className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2 text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
