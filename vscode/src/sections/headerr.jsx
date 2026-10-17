import { Menu , X} from "lucide-react";

import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

const NavLink = ({ title, onClick }) => (
  <LinkScroll
    to={title.toLowerCase()}
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
    onClick={onClick}
    className="inline-block cursor-pointer whitespace-nowrap font-bold uppercase text-white transition-colors duration-300 hover:text-cyan-400"
  >
    {title}
  </LinkScroll>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full py-6">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-8 max-lg:px-5">

        {/* Logo - Left Side */}
        <LinkScroll
          to="hero"
          smooth={true}
          duration={500}
          className="z-50 shrink-0 cursor-pointer"
          onClick={closeMenu}
        >
          <img
            src="/images/dp.webp"
            width={200}
            height={90}
            alt="DevPulse logo"
            className="h-auto w-48 object-contain"
          />
        </LinkScroll>

        {/* Navigation Links */}
        <div
          className={clsx(
            "flex-1",
            "max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:z-50",
            "max-lg:h-screen max-lg:w-full max-lg:bg-blue-950",
            "max-lg:transition-all max-lg:duration-300",
            isOpen
              ? "max-lg:visible max-lg:opacity-100"
              : "max-lg:invisible max-lg:opacity-0"
          )}
        >
          <nav className="flex h-full items-center justify-end">
            <ul className="flex items-center justify-end gap-10 pr-10 max-lg:flex-col max-lg:justify-center max-lg:gap-8 max-lg:pr-0">

              <li>
                <NavLink title="Features" onClick={closeMenu} />
              </li>

              <li>
                <NavLink title="Pricing" onClick={closeMenu} />
              </li>

              <li>
                <NavLink title="How it Works" onClick={closeMenu} />
              </li>

              <li>
                <NavLink title="Docs" onClick={closeMenu} />
              </li>

            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className= "z-50 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white/30 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
  <X size={28} color="white" />
) : (
  <Menu size={28} color="white" />
)}
        </button>

      </div>
    </header>
  );
};

export default Header;






















