import logo from "../assets/logo.png";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "./ui/button"; 
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
      setIsDarkMode((prev) => !prev);
    };
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
    <div className="container mx-auto px-4 py-4 text-white">
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
        <img
          src={logo}
          alt="logo"
          className="w-12 h-10 rounded-full"
        />
        <p className="text-2xl ">Luxury Hotel</p>
        </motion.div>

      <div className="hidden md:flex items-center space-x-5">
        <Button variant="ghost" className="text-lg">Home</Button>
        <Button variant="ghost" className="text-lg">About</Button>
        <Button variant="ghost" className="text-lg">Rooms</Button>
        <Button variant="ghost" className="text-lg">Gallery</Button>
        <Button variant="ghost" className="text-lg">Reviews</Button>
        <Button variant="ghost" className="text-lg">Contact</Button>
        <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={
                isDarkMode
                  ? "text-gray-700 dark:text-gray-600"
                  : "text-black hover:bg-black/20"
              }
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

      </div>
      <div>
        <Button className="bg-orange-500 text-white hover:bg-orange-600">
          Book Now
        </Button>
      </div>
    </div>
    </div>
    </motion.nav>
  );
}
