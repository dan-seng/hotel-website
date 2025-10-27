import logo from "../assets/logo.png";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "./ui/button"; 
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="logo" className="w-12 h-10 rounded-full" />
          <h1 className="text-2xl font-semibold">Luxury Hotel</h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="text-lg hover:bg-transparent">Home</Button>
          <Button variant="ghost" className="text-lg hover:bg-transparent">About</Button>
          <Button variant="ghost" className="text-lg hover:bg-transparent">Rooms</Button>
          <Button variant="ghost" className="text-lg hover:bg-transparent">Gallery</Button>
          <Button variant="ghost" className="text-lg hover:bg-transparent">Reviews</Button>
          <Button variant="ghost" className="text-lg hover:bg-transparent">Contact</Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={isDarkMode ? "text-gray-700" : "text-  black hover:bg-black/20"}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button className="bg-orange-500 text-white hover:bg-orange-600">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden p-4 space-y-2"
        >
          <Button variant="ghost" className="text-lg block w-full text-white hover:bg-transparent">Home</Button>
          <Button variant="ghost" className="text-lg block w-full text-white hover:bg-transparent">About</Button>
          <Button variant="ghost" className="text-lg block w-full text-white hover:bg-transparent">Rooms</Button>
          <Button variant="ghost" className="text-lg block w-full text-white hover:bg-transparent">Gallery</Button>
          <Button variant="ghost" className="text-lg block w-full text-white hover:bg-transparent">Reviews</Button>
          <Button variant="ghost" className="text-lg block w-full text-white hover:bg-transparent">Contact</Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={isDarkMode ? "text-gray-700" : "text-white hover:bg-black/20"}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button className="bg-orange-500 text-white hover:bg-orange-600 w-full">
            Book Now
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
