import { useState } from "react";
import logo from "../assets/Logo.webp";
import { Link, useLocation } from "react-router-dom";

import { QuickLink, quickLinks } from "../data/navigationsLinks";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const location = useLocation();
  const isOnServicesPage = location.pathname === "/usluge";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const renderNavItem = ({ label, section, to }: QuickLink) => {
    if (to) {
      return (
        <Link
          key={label}
          to={to}
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-hover-pink transition font-bold tracking-[1px]"
        >
          {label}
        </Link>
      );
    }
    return (
      <button
        key={label}
        onClick={() => section && scrollToSection(section)}
        className="hover:text-hover-pink transition font-bold tracking-[1px]"
      >
        {label}
      </button>
    );
  };

  return (
    <header className="top-0 left-0 w-full z-50 bg-white border-b border-gray-400 shadow-sm">
      <div
        className={`flex flex-wrap items-center justify-between gap-6 px-4 custom:px-10 ${
          isMenuOpen ? "gap-3" : "gap-6"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src={logo} alt="logo" className="w-36 md:w-44" />
        </Link>

        {/* Desktop Navigation */}
        {!isOnServicesPage && (
          <div className="hidden custom:flex items-center justify-between flex-1 border-l border-gray-400 pl-4">
            <ul className="flex gap-6 lg:gap-12 justify-center items-center w-full">
              {quickLinks
                .filter((q) => q.label !== "Kontakt")
                .map((link) => (
                  <li key={link.label}>{renderNavItem(link)}</li>
                ))}
            </ul>
          </div>
        )}

        {/* CTA Button (Desktop only) */}
        {!isOnServicesPage && (
          <div className="hidden custom:block">
            <button
              className="px-5 py-2 rounded-xl transition bg-hover-pink hover:bg-hover-dark-pink text-white cursor-pointer w-[135px]"
              onClick={() => scrollToSection("contact")}
            >
              Kontakt
            </button>
          </div>
        )}

        {/* Mobile Menu */}
        {!isOnServicesPage && (
          <>
            {/* Mobile Menu Button */}
            <div className={`${isMenuOpen ? "ml-2" : "ml-auto"} custom:hidden`}>
              <button
                onClick={toggleMenu}
                className="text-gray-800 focus:outline-none"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {isMenuOpen && (
              <div className="w-full custom:hidden pb-6">
                <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.label}>{renderNavItem(link)}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
