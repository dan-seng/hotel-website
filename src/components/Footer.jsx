import { Facebook, Instagram, Github, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#home" },
    { label: "Rooms", href: "#rooms" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://m.facbook.com/dan16son", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/_dan_el", label: "Instagram" },
    { icon: Github, href: "https://github.com/dan-seng", label: "Github" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/danielgidey/", label: "LinkedIn" },
  ];

  return (
    <footer className="pt-14 pb-6">
      <div className="container mx-auto px-4">
        
        
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          
          
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="logo" className="w-14 h-14 rounded-lg" />
              <h3 className="text-xl font-semibold">LuxuryHotel</h3>
            </div>
            <p className="text-sm leading-relaxed">
              A peaceful escape with elegant rooms, fine dining, and warm hospitality — where comfort meets luxury.
            </p>
          </div>

          
          <div>
            <h4 className="font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className="font-medium mb-3">Connect with the Developer</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="p-2 bg-gray-800 text-white rounded-full hover:bg-amber-500 hover:text-black transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 text-xs flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500">
          <p>© {currentYear} Luxury Hotel. All rights reserved.</p>
          <p className="text-center">
            Built with passion by{" "}
            <a
              href="https://github.com/dan-seng"
              className="text-amber-500 hover:text-amber-600 transition-colors"
            >
              Daniel Gidey
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
