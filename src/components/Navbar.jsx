import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence, animate } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar({ isDarkMode, toggleTheme, onBookNowClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;

    animate(start, end, {
      type: "spring",
      stiffness: 60,
      damping: 15,
      mass: 0.3,
      onUpdate: (value) => window.scrollTo(0, value),
    });

    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <img className="h-15 w-auto rounded-lg" src={logo} alt="Logo" />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {["home", "about", "rooms", "gallery", "testimonials", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleSmoothScroll(e, `#${item}`)}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-400 px-3 py-2 text-lg font-medium capitalize"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              onClick={onBookNowClick}
              className="bg-orange-200 hover:bg-orange-300 text-black rounded-full px-6 py-2"
            >
              Book Now
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["home", "about", "rooms", "gallery", "testimonials", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleSmoothScroll(e, `#${item}`)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md capitalize"
                >
                  {item}
                </a>
              ))}

              <div className="pt-4 pb-2 flex items-center justify-between px-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    toggleTheme();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => {
                    onBookNowClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-center bg-primary-600 hover:bg-primary-700 text-white"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
