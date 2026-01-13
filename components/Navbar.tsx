import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass py-3 border-b border-brand-blue/10 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center cursor-pointer group space-x-3"
          >
            <Logo className="w-10 h-10" />
            <span className="text-xl font-bold tracking-tight text-zinc-900 flex items-center">
              Williams
              <span className="brand-text-gradient ml-1 font-extrabold">
                Web Co
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors hover:text-brand-blue ${
                    isActive ? "text-brand-blue" : "text-zinc-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="px-6 py-2.5 brand-gradient text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-brand-blue/25 transition-all active:scale-95"
            >
              Start Your Project
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-600 hover:text-brand-blue transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block w-full text-left px-4 py-2 text-lg font-bold rounded-lg ${
                  isActive
                    ? "text-brand-blue bg-zinc-50"
                    : "text-zinc-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="w-full px-6 py-4 brand-gradient text-white font-bold rounded-xl hover:opacity-90 transition-all text-center block"
          >
            Get Your Website
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;